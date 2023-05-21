;;=============================================================
;; CS 2110 - Spring 2023
;; Homework 5 - palindrome
;;=============================================================
;; Name: Uma Anand
;;=============================================================

;;  NOTE: Let's decide to represent "true" as a 1 in memory and "false" as a 0 in memory.
;;
;;  Pseudocode (see PDF for explanation)
;;  Pseudocode values are based on the labels' default values.
;;
;;  String str = "aibohphobia";
;;  boolean isPalindrome = true
;;  int length = 0;
;;  while (str[length] != '\0') {
;;		length++;
;;	}
;; 	
;;	int left = 0
;;  int right = length - 1
;;  while(left < right) {
;;		if (str[left] != str[right]) {
;;			isPalindrome = false;
;;			break;
;;		}
;;		left++;
;;		right--;
;;	}
;;	mem[mem[ANSWERADDR]] = isPalindrome;

.orig x3000
	;; YOUR CODE HERE
	;R0 = ISPALINDROME
	AND R0, R0, 0
	ADD R0, R0, 1
	; R1 = LENGTH
	AND R1, R1, 0

	STARTLOOP1
	LD R2, STRING
	ADD R2, R2, R1
	LDR R2, R2, 0
	BRz ENDLOOP1
	ADD R1, R1, 1
	BRnzp STARTLOOP1
	ENDLOOP1

	;R2 = 0 = LEFT
	AND R2, R2, 0

	;R3 = LENGTH - 1 = RIGHT
	AND R3, R3, 0
	ADD R3, R3, R1
	ADD R3, R3, -1

	STARTLOOP2
	;R4 = RIGHT - LEFT
	AND R4, R4, 0
	ADD R4, R4, R2
	NOT R4, R4
	ADD R4, R4, 1
	ADD R4, R4, R3
	BRnz ENDLOOP2

	;R4 = STRING[left]
	LD	R4, STRING
	ADD R4, R4, R2
	LDR R4, R4, 0

	;R5 = STRING[right]
	LD R5, STRING
	ADD R5, R5, R3
	LDR R5, R5, 0

	; STRING[left] - STRING[right]
	NOT R5, R5
	ADD R5, R5, 1
	ADD R5, R5, R4
	BRz ENDIF

	AND R0, R0, 0
	BRnzp ENDLOOP2
	ENDIF

	ADD R2, R2, 1
	ADD R3, R3, -1
	BRnzp STARTLOOP2

	ENDLOOP2
	STI R0, ANSWERADDR

	HALT

;; Do not change these values!
STRING	.fill x4004
ANSWERADDR 	.fill x5005
.end

;; Do not change any of the .orig lines!
.orig x4004				   
	.stringz "aibohphobia" ;; Feel free to change this string for debugging.
.end

.orig x5005
	ANSWER  .blkw 1
.end