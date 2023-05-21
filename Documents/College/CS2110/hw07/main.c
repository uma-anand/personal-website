/**
 * @file main.c
 * @author YOUR NAME HERE
 * @brief testing and debugging functions written in my_string.c, oh_queue.c
 * @date 2023-03-xx
 */

// You may add and remove includes as necessary to help facilitate your testing
#include <stdio.h>
#include "my_string.h"

/** main
 *
 * @brief used for testing and debugging functions written in my_string.c and hw7.c
 *
 * @param void
 * @return 0 on success
 */
int main(void)
{
    char *str = "hello";
    replace_character_with_string(str, 'l', 'yq');
    return 0;
}
