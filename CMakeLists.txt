cmake_minimum_required(VERSION 3.13)
project(MyWasmProject)

set(CMAKE_C_STANDARD 11)

add_executable(my_wasm_module src/main.c)

set_target_properties(my_wasm_module PROPERTIES
  LINK_FLAGS "-s WASM=1 -s EXPORTED_FUNCTIONS=['_add','_main','_init'] -s EXPORTED_RUNTIME_METHODS=['ccall','cwrap'] -s ENVIRONMENT='web,node' -s MODULARIZE=1 -s EXPORT_NAME='createMyModule' -s ALLOW_MEMORY_GROWTH=1"
)

set_target_properties(my_wasm_module PROPERTIES SUFFIX ".js")
# 生成JavaScript胶水代码（可选）
set_target_properties(my_wasm_module PROPERTIES SUFFIX ".js")