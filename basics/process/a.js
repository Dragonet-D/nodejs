let a;
let b;
process.stdout.write("情输入a:");
process.stdin.resume();
process.stdin.on("data", (chunk) => {
    if (!a) {
        a = Number(chunk);
        process.stdout.write(`a的值是${a}`);
        process.stdout.write("请输入b的值:");
    } else {
        b = Number(chunk);
        process.stdout.write(a+b);
    }
});