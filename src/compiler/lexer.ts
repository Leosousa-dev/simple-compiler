import { isChar, isDigit, isEmpty } from "../utils";

export default function lexer(input: string) {
  const tokens: Array<object> = [];
  let index: number = 0;
  let operator: string = "";
  let digit: string = "";

  for (index; input.length > index; index++) {
    let char: string = input[index];

    if (!isEmpty(char)) {
      if (char === "(") {
        tokens.push({
          kind: "lf_parent",
          value: char
        });
      } else if (char === ")") {
        tokens.push({
            kind: "rt_parent",
            value: char
        });
      } else if (isChar(char)) {
        operator += char;
      } else if (isDigit(char)) {
         digit+= char;
      } else if (char === ",") {
        tokens.push({
            kind: 'list_sp',
            value: char
        })

        if (digit) {
         tokens.push({
           kind: "number",
           value: Number(digit)
         });
         digit = "";
       }
      } else {
        console.error(`Unrecognized character: ${char}`);
        break;
      }
    }
  }

  if (operator) {
    tokens.push({
      kind: "op",
      value: operator
    });
  }

  if (digit) {
    tokens.push({
      kind: "number",
      value: Number(digit)
    });
    digit = ""
  }

  if (index === input.length) {
    tokens.push({
      kind: "EOF",
      value: "EOF"
    });
  }

  return tokens;
}