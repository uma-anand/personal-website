// DO NOT MODIFY THE INCLUDE(S) LIST
#include <stdio.h>
#include "oh_queue.h"

struct Queue oh_queue;

/** push
 * @brief Create a new student and push him
 * onto the OH queue
 * @param studentName pointer to the student's name
 * @param topicName topic the student has a question on
 * @param questionNumber hw question number student has a question on
 * @param pub_key public key used for calculating the hash for customID
 * @return FAILURE if the queue is already at max length, SUCCESS otherwise
 */
int push(const char *studentName, const enum subject topicName, const float questionNumber, struct public_key pub_key){
    if (oh_queue.stats.no_of_people_in_queue == MAX_QUEUE_LENGTH || studentName == NULL) {
        return FAILURE;
    }
    char truncStudentName[30];
    my_strncpy(truncStudentName, studentName, 30);
    truncStudentName[MAX_NAME_LENGTH - 1] = '\0';
    int queue_no = oh_queue.stats.no_of_people_in_queue + oh_queue.stats.no_of_people_visited;
    struct Topic newTopic = {topicName, questionNumber};
    struct StudentData newStudentData;
    my_strncpy(newStudentData.name, truncStudentName, 30);
    newStudentData.topic = newTopic;
    struct Student newStudent;
    hash(newStudent.customID, truncStudentName, pub_key);
    newStudent.queue_number = queue_no;
    newStudent.studentData = newStudentData;
    int curr_queue_no = oh_queue.stats.no_of_people_in_queue;
    oh_queue.students[curr_queue_no] = newStudent;
    oh_queue.stats.no_of_people_in_queue++;
    OfficeHoursStatus(&(oh_queue.stats));
    return SUCCESS;
}

/** pop
 * @brief Pop a student out the OH queue
 * @return FAILURE if the queue is already at empty, SUCCESS otherwise
 */
int pop(void) {
    int curr_cap = oh_queue.stats.no_of_people_in_queue;
    if (curr_cap == 0) {
        return FAILURE;
    }
    for (int i = 0; i < curr_cap; i++) {
        oh_queue.students[i] = oh_queue.students[i + 1];
    }
    oh_queue.stats.no_of_people_in_queue--;
    oh_queue.stats.no_of_people_visited++;
    OfficeHoursStatus(&(oh_queue.stats));
    return SUCCESS;
}

/** group_by_topic
 * @brief Push pointers to students, who match the given topic, to
 * the given array "grouped"
 * @param topic the topic the students need to match
 * @param grouped an array of pointers to students
 * @return the number of students matched
 */
int group_by_topic(struct Topic topic, struct Student *grouped[]) { 
    int num_grouped = 0;
    int num_students = oh_queue.stats.no_of_people_in_queue;
    for (int i = 0; i < num_students; i++) {
        struct Student curr_student = oh_queue.students[i];
        if (curr_student.studentData.topic.topicName == topic.topicName && curr_student.studentData.topic.questionNumber == topic.questionNumber) {
            grouped[num_grouped] = &oh_queue.students[i];
            num_grouped++;
        }
    }
    return num_grouped;
}

/** hash
 * @brief Creates a hash based on pub_key provided
 * @param ciphertext the pointer where you will store the hashed text
 * @param plaintext the originak text you need to hash
 * @param pub_key public key used for calculating the hash
 */
void hash(int *ciphertext, char *plaintext, struct public_key pub_key) {
    for (int i = 0; *(plaintext + i) != '\0'; i++) {
        int m = (int) (*(plaintext + i));
        int c = power_and_mod(m, pub_key.e, pub_key.n);
        *(ciphertext + i) = c;
    }
    return;
}

/** update_student
 * @brief Find the student with the given ID and update his topic
 * @param customID a pointer to the id of the student you are trying to find
 * @param newTopic the new topic that should be assigned to him
 * @return FAILURE if no student is matched, SUCCESS otherwise
 */
int update_student(struct Topic newTopic, int *customID) {
    int queue_length = oh_queue.stats.no_of_people_in_queue;
    for (int i = 0; i < queue_length; i++) {
        struct Student student = oh_queue.students[i];
        int name_len = my_strlen(student.studentData.name); 
        if (my_strncmp((char *)customID, (char *)student.customID, name_len) == 0) {
            oh_queue.students[i].studentData.topic = newTopic;
            return SUCCESS;
        }
    }
    return FAILURE;
}

/** remove_student_by_name
 * @brief Removes first instance of a student with the given name
 * @param name the name you are searching for
 * @return FAILURE if no student is matched, SUCCESS otherwise
 */
int remove_student_by_name(char *name){
    int queue_length = oh_queue.stats.no_of_people_in_queue;
    int flag = 0;
    for (int i = 0; i < queue_length; i++) {
        struct Student student = oh_queue.students[i];
        if (flag == 0) {
            int name_len = my_strlen(student.studentData.name); 
            if (my_strncmp(name, student.studentData.name, name_len) == 0) {
                flag = 1;
            }
        }
        if (flag == 1) {
            oh_queue.students[i] = oh_queue.students[i + 1];
        }
    }
    if (flag == 0) {
        return FAILURE;
    } else {
        oh_queue.stats.no_of_people_in_queue--;
        oh_queue.stats.no_of_people_visited++;
        OfficeHoursStatus(&(oh_queue.stats));
        return SUCCESS;
    }
}

/** remove_student_by_topic
 * @brief Remove all instances of students with the given topic
 * @param topic the topic you are trying to remove from the queue
 * @return FAILURE if no student is matched, SUCCESS otherwise
 */
int remove_student_by_topic(struct Topic topic) {
    int queue_length = oh_queue.stats.no_of_people_in_queue;
    int flag = 0;
    
    for (int i = 0; i < queue_length; i++) {
        struct Student curr_student = oh_queue.students[i]; 
        if (curr_student.studentData.topic.topicName == topic.topicName && curr_student.studentData.topic.questionNumber == topic.questionNumber) {
            flag++;
        } else {
            oh_queue.students[i - flag] = oh_queue.students[i];
        }
    }
    if (flag == 0) {
        return FAILURE;
    } else {
        oh_queue.stats.no_of_people_in_queue -= flag;
        oh_queue.stats.no_of_people_visited += flag;
        OfficeHoursStatus(&(oh_queue.stats));
        return SUCCESS;
    }
}

/** OfficeHoursStatus
 * @brief Updates the "currentStatus" field based on
 * whether or not all students in the queue have been helped
 * @param resultStats A pointer the OfficeHoursStats variable
 * you are to update
 */
void OfficeHoursStatus(struct OfficeHoursStats* resultStats ){
    if ((*resultStats).no_of_people_in_queue == 0) {
        resultStats->currentStatus = "Completed";
    } else {
        resultStats->currentStatus = "InProgress";
    }
}

/*
 * Calculates (b^e)%n without overflow
 */
int power_and_mod(int b, int e, int n) {
    long int currNum = 1;
    for (int i = 0; i < e; i++) {
        currNum *= b;
        if (currNum >= n) {
            currNum %= n;
        }
    }
    return (int) (currNum % n);
}
