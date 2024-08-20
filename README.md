# CMake WebAssembly

**一个wasm Hello World，可运行在浏览器和非浏览器环境中。**

# 构建

安装 Emscripten，[文档](https://emscripten.org/docs/getting_started/downloads.html)

```bash
git clone https://github.com/emscripten-core/emsdk.git
cd emsdk
git pull
./emsdk install latest
./emsdk activate latest
source ./emsdk_env.sh
```
```bash
emcmake cmake -G Ninja -B build -DCMAKE_EXPORT_COMPILE_COMMANDS=ON -DCMAKE_BUILD_TYPE='Debug' 
```

# 运行

现在，让我们尝试用不同的运行时来运行这个新的 WebAssembly 模块：

**Wasmtime:**
```bash
wasmtime run build/my_wasm_module.wasm
```

**Wasmer:**
```bash
wasmer run build/my_wasm_module.wasm
```

**WasmEdge:**
```bash
wasmedge build/my_wasm_module.wasm
```

**WAMR (WebAssembly Micro Runtime):**
```bash
iwasm build/my_wasm_module.wasm
```

目前浏览器环境还有些问题，wasi并不能在浏览器上运行。
