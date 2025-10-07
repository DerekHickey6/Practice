#include "Libraries.h"

int square(int input, int power)
{
    int total = 1;
    for(int i = 0; i < power; i++){
        total *= input;
    }
    return total;
}
