;;=============================================================
;; CS 2110 - Spring 2023
;; Homework 5 - buildMaxArray
;;=============================================================
;; Name: Uma Anand
;;=============================================================

;;  Pseudocode (see PDF for explanation)
;;  Pseudocode values are based on the labels' default values.
;;
;;	int A[] = {-2, 2, 1};
;;	int B[] = {1, 0, 3};
;;	int C[3];
;;	int length = 3;
;;
;;	int i = 0;
;;	while (i < length) {
;;		if (A[i] >= B[length - i - 1]) {
;;			C[i] = 1;
;;		}
;;		else {
;;			C[i] = 0;
;;		}
;;		i++;
;;	}

.orig x3000
	;; YOUR CODE HERE
	; int i = 0 => R0
	AND R0, R0, 0
	; R1: LENGTH
	LD R1, LENGTH

	STARTLOOP
	;R2 = R1 + R0' + 1 = R1 - R0 = LENGTH - i
	;R2 = 0
	AND R2, R2, 0
	; R2 = i
	ADD R2, R2, R0
	;R2 = i'
	NOT R2, R2
	;R2 = i' + length + 1 = length - i
	ADD R2, R2, R1
	ADD R2, R2, 1

	;move to end if i >= length; ie, if 0 >= length - i
	BRnz ENDLOOP

	; R4 = A[i]
	LD R3, A
	ADD R3, R3, R0
	LDR R4, R3, 0

	; R2 = length - i - 1
	ADD R2, R2, -1

	;R5 = B[length - i -1]
	LD R3, B
	ADD R3, R3, R2
	LDR R5, R3, 0

	;R5 = R5' + 1 = -R5
	NOT R5, R5
	ADD R5, R5, 1

	;R4 - R5 = A[i] - B[length - i -1]
	ADD R4, R4, R5
;;WORKS
	BRn ELSE

	IF
	AND R3, R3, 0
	ADD R3, R3, 1
	LD R4, C
	ADD R4, R4, R0
	STR R3, R4, 0
	BRnzp ENDELSE

	ELSE
	AND R3, R3, 0
	LD R4, C
	ADD R4, R4, R0
	STR R3, R4, 0

	ENDELSE
	ADD R0, R0, 1
	BRnzp STARTLOOP
	
	ENDLOOP

	HALT

;; Do not change these addresses! 
;; We populate A and B and reserve space for C at these specific addresses in the orig statements below.
A 		.fill x3200		
B 		.fill x3300		
C 		.fill x3400		
LENGTH 	.fill 3			;; Change this value if you decide to increase the size of the arrays below.
.end

;; Do not change any of the .orig lines!
;; If you decide to add more values for debugging, make sure to adjust LENGTH and .blkw 3 accordingly.
.orig x3200				;; Array A : Feel free to change or add values for debugging.
	.fill -2
	.fill 2
	.fill 1
.end

.orig x3300				;; Array B : Feel free change or add values for debugging.
	.fill 1
	.fill 0
	.fill 3
.end

.orig x3400
	.blkw 3				;; Array C: Make sure to increase block size if you've added more values to Arrays A and B!
.end