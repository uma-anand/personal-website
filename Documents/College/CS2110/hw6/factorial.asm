;;=============================================================
;;  CS 2110 - Spring 2023
;;  Homework 6 - Factorial
;;=============================================================
;;  Name: Uma Anand
;;============================================================

;;  In this file, you must implement the 'MULTIPLY' and 'FACTORIAL' subroutines.

;;  Little reminder from your friendly neighborhood 2110 TA staff: don't run
;;  this directly by pressing 'Run' in complx, since there is nothing put at
;;  address x3000. Instead, call the subroutine by doing the following steps:
;;      * 'Debug' -> 'Simulate Subroutine Call'
;;      * Call the subroutine at the 'MULTIPLY' or 'FACTORIAL' labels
;;      * Add the [a, b] or [n] params separated by a comma (,) 
;;        (e.g. 3, 5 for 'MULTIPLY' or 6 for 'FACTORIAL')
;;      * Proceed to run, step, add breakpoints, etc.
;;      * Remember R6 should point at the return value after a subroutine
;;        returns. So if you run the program and then go to 
;;        'View' -> 'Goto Address' -> 'R6 Value', you should find your result
;;        from the subroutine there (e.g. 3 * 5 = 15 or 6! = 720)

;;  If you would like to setup a replay string (trace an autograder error),
;;  go to 'Test' -> 'Setup Replay String' -> paste the string (everything
;;  between the apostrophes (')) excluding the initial " b' ". If you are 
;;  using the Docker container, you may need to use the clipboard (found
;;  on the left panel) first to transfer your local copied string over.

.orig x3000
    ;; You do not need to write anything here
    HALT

;;  MULTIPLY Pseudocode (see PDF for explanation and examples)   
;;  
;;  MULTIPLY(int a, int b) {
;;      int ret = 0;
;;      while (b > 0) {
;;          ret += a;
;;          b--;
;;      }
;;      return ret;
;;  }

MULTIPLY ;; Do not change this label! Treat this as like the name of the function in a function header
    ;; Code your implementation for the MULTIPLY subroutine here!
    ; BUILDUP
    ADD R6, R6, #-4     ;; Make space for RV, RA, old FP, LV1
    STR R7, R6, #2      ;; Save RA
    STR R5, R6, #1      ;; Save old FP
    ADD R5, R6, #0      ;; Assign new FP to location of LV1
    ADD R6, R6, #-5    ;; Make space for a total of 1 local variable
    STR R0, R6, #0      ;; Save R0
    STR R1, R6, #1      ;; Save R1
    STR R2, R6, #2      ;; Save R2
    STR R3, R6, #3      ;; Save R3
    STR R4, R6, #4      ;; Save R4

    ;; R0 = RET, R1 = A, R2 = B
    AND R0, R0, #0
    LDR R1, R5, #4
    LDR R2, R5, #5

    STARTWHILE1
    ADD R2, R2, #0
    BRnz ENDWHILE1
    ADD R0, R0, R1
    ADD R2, R2, #-1
    BRnzp STARTWHILE1

    ENDWHILE1

    STR R0, R5, 3

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

    ;; R6 now points at RV
    RET

;;  FACTORIAL Pseudocode (see PDF for explanation and examples)
;;
;;  FACTORIAL(int n) {
;;      int ret = 1;
;;      for (int x = 2; x <= n; x++) {
;;          ret = MULTIPLY(ret, x);
;;      }
;;      return ret;
;;  }

FACTORIAL ;; Do not change this label! Treat this as like the name of the function in a function header
    ;; Code your implementation for the FACTORIAL subroutine here!

    ; BUILDUP
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

    ;;R1 = ret, R2 = x, R3 = n
    AND R1, R1, 0
    ADD R1, R1, 1
    AND R2, R2, 0
    ADD R2, R2, 2
    LDR R3, R5, 4

    STARTWHILE2
    ; R4 = n - x = n + x' + 1
    AND R4, R4, 0
    ADD R4, R4, R2
    NOT R4, R4
    ADD R4, R4, 1
    ADD R4, R4, R3

    BRn ENDWHILE2

    ; PUSH X THEN RET
    ADD R6, R6, -1
    STR R2, R6, #0
    ADD R6, R6, -1
    STR R1, R6, 0

    JSR MULTIPLY

    ;; R6: return value -> store in ret
    LDR R1, R6, #0
    ADD R6, R6, #1

    ; POP a, b
    ADD R6, R6, #2 

    ADD R2, R2, 1
    BRnzp STARTWHILE2
    ENDWHILE2
    
    STR R1, R5, 3

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