import { init, Wasmer } from "@wasmer/sdk";

await init();

const pkg = await Wasmer.fromRegistry("python/python");
const instance = await pkg.entrypoint.run({
    args: ["-c", "print('Hello, World!')"],
});

const { code, stdout } = await instance.wait();
console.log(`Python exited with ${code}: ${stdout}`);