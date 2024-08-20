#include <emscripten.h>
#include <stdio.h>

EMSCRIPTEN_KEEPALIVE
int add(int a, int b) {
    return a + b;
}

EMSCRIPTEN_KEEPALIVE
int main() {
    printf("Result of 5 + 3 = %d\n", add(5, 3));
    return 0;
}

#ifdef __EMSCRIPTEN__
EMSCRIPTEN_KEEPALIVE
void init() {
    // 可以在这里进行一些初始化操作
}
#endif