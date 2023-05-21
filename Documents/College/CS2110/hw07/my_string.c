/**
 * @file my_string.c
 * @author Uma Anand
 * @collaborators N/A
 * @brief Your implementation of these famous 3 string.h library functions!
 *
 * NOTE: NO ARRAY NOTATION IS ALLOWED IN THIS FILE
 *
 * @date 2023-03-24
 */

#include <stddef.h>
#include "my_string.h"
/**
 * @brief Calculate the length of a string
 *
 * @param s a constant C string
 * @return size_t the number of characters in the passed in string
 */
size_t my_strlen(const char *s)
{
    int len = 0;
    while (*(s + len)) {
        len++;
    }  
    return len;
}

/**
 * @brief Compare two strings
 *
 * @param s1 First string to be compared
 * @param s2 Second string to be compared
 * @param n First (at most) n bytes to be compared
 * @return int "less than, equal to, or greater than zero if s1 (or the first n
 * bytes thereof) is found, respectively, to be less than, to match, or be
 * greater than s2"
 */
int my_strncmp(const char *s1, const char *s2, size_t n)
{
    unsigned int i;
    for (i = 0; i < n; i++) {
        char c1 = *(s1 + i);
        char c2 = *(s2 + i);
        if (c1 != c2) {
            return c1 - c2;
        } else if (!c1) {
            return 0;
        }
    }
    return 0;
}

/**
 * @brief Copy a string
 *
 * @param dest The destination buffer
 * @param src The source to copy from
 * @param n maximum number of bytes to copy
 * @return char* a pointer same as dest
 */
char *my_strncpy(char *dest, const char *src, size_t n)
{
    unsigned int i;
    unsigned int len = my_strlen(src);
    if (len < n) {
        for (i = 0; i < len; i++) {
            *(dest + i) = *(src + i);
        }
        for (i = i; i < n; i++) {
            *(dest + i) = '\0';
        }
    } else {
        for (i = 0; i < n; i++) {
            *(dest + i) = *(src + i);
        }
    }   
    return dest;
}

/**
 * @brief Concatenates two strings and stores the result
 * in the destination string
 *
 * @param dest The destination string
 * @param src The source string
 * @param n The maximum number of bytes from src to concatenate
 * @return char* a pointer same as dest
 */
char *my_strncat(char *dest, const char *src, size_t n)
{
    int len = my_strlen(dest);
    int flag = 0;
    for (unsigned int i = 0; i < n; i++) {
        if (*(src + i) == '\0') {
            flag = 1;
            *(dest + len + i) = '\0';
            break;
        }
        *(dest + len + i) = *(src + i);
    }
    if (!flag) {
        *(dest + len + n) = '\0';
    }
    return dest;
}

/**
 * @brief Copies the character c into the first n
 * bytes of memory starting at *str
 *
 * @param str The pointer to the block of memory to fill
 * @param c The character to fill in memory
 * @param n The number of bytes of memory to fill
 * @return char* a pointer same as str
 */
void *my_memset(void *str, int c, size_t n)
{
    char* pChar = (char *)str;
    for (unsigned int i = 0; i < n; i++) {
        *(pChar + i) = c;
    }
    return pChar;
}

/**
 * @brief Finds the first instance of c in str
 * and removes it from str in place
 *
 * @param str The pointer to the string
 * @param c The character we are looking to delete
 */
void remove_first_instance(char *str, char c){
    int found = 0;
    int i = 0;
    while((*(str + i)) != '\0') {
        if (*(str + i) == c) {
            found = 1;
            break;
        }
        i++;
    }
    if (found) {
        while (*(str + i) != '\0') {
            *(str + i) = *(str + i + 1);
            i++;
        }
    }
    return;
}

/**
 * @brief Finds the first instance of c in str
 * and replaces it with the contents of replaceStr
 *
 * @param str The pointer to the string
 * @param c The character we are looking to delete
 * @param replaceStr The pointer to the string we are replacing c with
 */
void replace_character_with_string(char *str, char c, char *replaceStr) {
    int len = my_strlen(str);
    int replaceLen = my_strlen(replaceStr);
    if (replaceLen == 0) {
        remove_first_instance(str, c);
        return;
    }
    for (int i = 0; i < len; i++) {
        if (*(str + i) == c) {
            if (replaceLen == 1) {
                *(str + i) = *replaceStr;
            } else {
                for (int j = len - 1; j >= i + 1; j--) {
                    *(str + j + replaceLen - 1) = *(str + j);
                }
                for (int k = 0; k < replaceLen; k++) {
                    *(str + i + k) = *(replaceStr + k);
                }
                *(str + len - 1 + replaceLen) = '\0';
            }
            return;
        }
    }
    return;
}

/**
 * @brief Remove the first character of str (ie. str[0]) IN ONE LINE OF CODE.
 * No loops allowed. Assume non-empty string
 * @param str A pointer to a pointer of the string
 */
void remove_first_character(char **str) {
    *str = *str + 1;
    return;
}