import compiler from "./compiler/compiler";

const input: string = "(add 2 (sub 4 3)) "

const out = compiler(input);

console.log(JSON.stringify(out, null, 2));