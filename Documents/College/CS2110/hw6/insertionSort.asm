;;=============================================================
;;  CS 2110 - Spring 2023
;;  Homework 6 - Insertion Sort
;;=============================================================
;;  Name: Uma Anand
;;============================================================

;;  In this file, you must implement the 'INSERTION_SORT' subroutine.

;;  Little reminder from your friendly neighborhood 2110 TA staff: don't run
;;  this directly by pressing 'Run' in complx, since there is nothing put at
;;  address x3000. Instead, call the subroutine by doing the following steps:
;;      * 'Debug' -> 'Simulate Subroutine Call'
;;      * Call the subroutine at the 'INSERTION_SORT' label
;;      * Add the [arr (addr), length] params separated by a comma (,) 
;;        (e.g. x4000, 5)
;;      * Proceed to run, step, add breakpoints, etc.
;;      * INSERTION_SORT is an in-place algorithm, so if you go to the address
;;        of the array by going to 'View' -> 'Goto Address' -> 'Address of
;;        the Array', you should see the array (at x4000) successfully 
;;        sorted after running the program (e.g [2,3,1,1,6] -> [1,1,2,3,6])

;;  If you would like to setup a replay string (trace an autograder error),
;;  go to 'Test' -> 'Setup Replay String' -> paste the string (everything
;;  between the apostrophes (')) excluding the initial " b' ". If you are 
;;  using the Docker container, you may need to use the clipboard (found
;;  on the left panel) first to transfer your local copied string over.

.orig x3000
    ;; You do not need to write anything here
    HALT

;;  INSERTION_SORT **RESURSIVE** Pseudocode (see PDF for explanation and examples)
;; 
;;  INSERTION_SORT(int[] arr (addr), int length) {
;;      if (length <= 1) {
;;        return;
;;      }
;;  
;;      INSERTION_SORT(arr, length - 1);
;;  
;;      int last_element = arr[length - 1];
;;      int n = length - 2;
;;  
;;      while (n >= 0 && arr[n] > last_element) {
;;          arr[n + 1] = arr[n];
;;          n--;
;;      }
;;  
;;      arr[n + 1] = last_element;
;;  }

INSERTION_SORT ;; Do not change this label! Treat this as like the name of the function in a function header
    ;; Code your implementation for the INSERTION_SORT subroutine here!
    ;; NOTE: Your implementation MUST be done recursively
    ;;BUILDUP
    ADD R6, R6, #-4     ;; Make space for RV, RA, old FP, LV1
    STR R7, R6, #2      ;; Save RA
    STR R5, R6, #1      ;; Save old FP
    ADD R5, R6, #0      ;; Assign new FP to location of LV1
    ADD R6, R6, #-5     ;; Make space for a total of 1 local variable
    STR R0, R6, #0      ;; Save R0
    STR R1, R6, #1      ;; Save R1
    STR R2, R6, #2      ;; Save R2
    STR R3, R6, #3      ;; Save R3
    STR R4, R6, #4      ;; Save R4

    ;; R0 = LENGTH, R1 = ADDR of ARR[0] = x4000 for example
    LDR R0, R5, 5
    LDR R1, R5, 4

    ;; R2 = LENGTH - 1
    ADD R2, R0, -1

    BRp ENDIF

    BRnzp ENDSORT

    ENDIF
    ;; PUSH LENGTH-1 THEN ADDR
    ADD R6, R6, -1
    STR R2, R6, 0
    ADD R6, R6, -1
    STR R1, R6, 0

    JSR INSERTION_SORT

    ;; POP RV, ARGS off stack
    ADD R6, R6, 3

    ;; R3 = last_element, R4 = n
    AND R4, R4, 0
    ADD R4, R1, R2
    LDR R3, R4, 0
    AND R4, R4, 0
    ADD R4, R2, -1

    STARTLOOP
    BRn ENDLOOP
    ;; NOW DO SECOND LOOP CONDITION (have R2, R0)
    AND R2, R2, 0
    ADD R2, R1, R4 ;R2 = addr[ARR[n]]
    LDR R2, R2, 0 ;R2 = ARR[N]
    ADD R0, R3, 0
    NOT R0, R0
    ADD R0, R0, 1 
    ADD R0, R0, R2 ;R0 = ARR[N] - LAST_ELEMENT
    BRnz ENDLOOP
    AND R0, R0, 0
    ADD R0, R1, R4
    ADD R0, R0, 1 ; R0 = addr(ARR[N+1])
    STR R2, R0, 0 ; ARR[N+1] = ARR[N]

    ADD R4, R4, -1

    BRnzp STARTLOOP
    ENDLOOP

    ;R4 = ADDR[ARR[N+1]]
    ADD R4, R4, 1
    ADD R4, R4, R1
    STR R3, R4, 0

    ENDSORT
    ;;TEARDOWN
    LDR R0, R6, #0      ;; Restore R0
    LDR R1, R6, #1      ;; Restore R1
    LDR R2, R6, #2      ;; Restore R2
    LDR R3, R6, #3      ;; Restore R3
    LDR R4, R6, #4      ;; Restore R4
    ADD R6, R5, #0      ;; Pop off all registers R0-R4, and LVs except the first LV
    LDR R5, R6, #1      ;; Restore old FP
    LDR R7, R6, #2      ;; Restore RA
    ADD R6, R6, #3      ;; Pop off LV1, old FP, RA 

    RET

;; Needed to Simulate Subroutine Call in Complx
STACK .fill xF000
.end

.orig x4000	;; Array : You can change these values for debugging!
    .fill 2
    .fill 3
    .fill 1
    .fill 1
    .fill 6
.end