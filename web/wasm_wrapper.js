let wasmModule = null;

export async function initWasm(importObject = {}) {
    if (typeof WebAssembly.instantiateStreaming === 'function') {
        const { instance } = await WebAssembly.instantiateStreaming(
            fetch('build/my_wasm_module.wasm'),
            importObject
        );
        wasmModule = instance.exports;
    } else {
        const response = await fetch('path/to/your/module.wasm');
        const bytes = await response.arrayBuffer();
        const { instance } = await WebAssembly.instantiate(bytes, importObject);
        wasmModule = instance.exports;
    }
    return wasmModule;
}

export function add(a, b) {
    if (!wasmModule) {
        throw new Error('WASM module not initialized');
    }
    return wasmModule._add(a, b);
}

export function runMain() {
    if (!wasmModule) {
        throw new Error('WASM module not initialized');
    }
    return wasmModule._main();
}