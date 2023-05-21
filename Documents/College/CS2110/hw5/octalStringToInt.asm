;;=============================================================
;; CS 2110 - Spring 2023
;; Homework 5 - octalStringToInt
;;=============================================================
;; Name: Uma Anand
;;=============================================================

;;  Pseudocode (see PDF for explanation)
;;  Pseudocode values are based on the labels' default values.
;;
;;  String octalString = "2110";
;;  int length = 4;
;;  int value = 0;
;;  int i = 0;
;;  while (i < length) {
;;      int leftShifts = 3;
;;      while (leftShifts > 0) {
;;          value += value;
;;          leftShifts--;
;;      }
;;      int digit = octalString[i] - 48;
;;      value += digit;
;;      i++;
;;  }
;;  mem[mem[RESULTADDR]] = value;

.orig x3000
    ;; YOUR CODE HERE
    ; R0 = LENGTH
    LD R0, LENGTH
    ; VALUE: R1 = 0
    AND R1, R1, 0
    ; I: R2 = 0
    AND R2, R2, 0

    STARTOUTER
    ; R3 = I - LENGTH
    AND R3, R3, 0
    ADD R3, R3, R0
    NOT R3, R3
    ADD R3, R3, R2
    ADD R3, R3, 1
    BRzp ENDOUTER

    ; R3 = 3 = LEFTSHIFTS
    AND R3, R3, 0
    ADD R3, R3, 3

    STARTINNER
    BRnz ENDINNER
    ADD R1, R1, R1
    ADD R3, R3, -1
    BRnzp STARTINNER
    ENDINNER

    ;;?? 
    ; R4 = OCTALSTRING[i] - 48 = digit
    LD R4, OCTALSTRING
    ADD R4, R4, R2
    LDR R4, R4, 0
    ADD R4, R4, -12
    ADD R4, R4, -12
    ADD R4, R4, -12
    ADD R4, R4, -12

    ADD R1, R1, R4
    ADD R2, R2, 1

    BRnzp STARTOUTER

    ENDOUTER

    STI R1, RESULTADDR

    HALT
    
;; Do not change these values! 
;; Notice we wrote some values in hex this time. Maybe those values should be treated as addresses?
ASCII           .fill -48
OCTALSTRING     .fill x5000
LENGTH          .fill 4
RESULTADDR      .fill x4000
.end

.orig x5000                    ;;  Don't change the .orig statement
    .stringz "2110"            ;;  You can change this string for debugging!
.end
