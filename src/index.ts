import compiler from "./compiler/compiler";

const input: string = "(sum(4,5))"

const out = compiler(input);

console.log(out)
console.log(JSON.stringify(out, null, 2));