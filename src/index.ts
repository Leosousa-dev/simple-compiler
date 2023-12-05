import compiler from "./compiler/compiler";

const input: string = "(sum (20,3))"

const out = compiler(input);

console.log(JSON.stringify(out, null, 2));