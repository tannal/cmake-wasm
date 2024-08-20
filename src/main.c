#include <emscripten.h>
#include <stdio.h>

EMSCRIPTEN_KEEPALIVE
int add(int a, int b) {
    return a + b;
}

EMSCRIPTEN_KEEPALIVE
int main() {
    printf("Hello, World!\n");
    printf("add(1, 2) = %d\n", add(1, 2));
    return 0;
}