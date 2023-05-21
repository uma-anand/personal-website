;;=============================================================
;; CS 2110 - Spring 2023
;; Homework 5 - modulus
;;=============================================================
;; Name: Uma Anand
;;=============================================================

;;  Pseudocode (see PDF for explanation)
;;  Pseudocode values are based on the labels' default values.
;;
;;  int x = 17;
;;  int mod = 5;
;;  while (x >= mod) {
;;      x -= mod;
;;  }
;;  mem[ANSWER] = x;

.orig x3000
    ;; YOUR CODE HERE
    ; X is R1, MOD is R2, ANSWER is R3
    ; int x = 17 = R1
    LD R1, X
    ; int mod = 5 = R2
    LD R2, MOD
    
    STARTLOOP
    ; R4 = 0
    AND R4, R4, 0;
    ; R4 = MOD'
    NOT	R4,	R2;
    ; R4 = MOD' + 1
    ADD R4, R4, 1;
    ; R4 = R1 + R4 = MOD' + 1 + X = X - MOD
    ADD R4, R4, R1;
    ; if (x - mod) < 0 : halt
    BRn ENDLOOP
    ; R1 = R4, ie. X = X - MOD
    AND R1, R1, 0
    ADD R1, R1, R4;
    
    BR STARTLOOP

    ENDLOOP

    ST R1, ANSWER;

    HALT

    ;; Feel free to change the below values for debugging. We will vary these values when testing your code.
    X      .fill 17
    MOD    .fill 5     
    ANSWER .blkw 1
.end