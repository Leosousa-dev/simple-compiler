import { exit } from "process";
import { isChar, isDigit, isEmpty, isParent } from "../utils";

export default function lexer(input: string) {
  const tokens: Array<object> = [];
  let current: number = 0;


  while (current < input.length) {
    let char = input[current];

    if (isParent(char)) {
      tokens.push({
        type: 'paren',
        value: '('
      });
      current++;
      continue;
    }
    if(isChar(char)){
      let value = '';
      while (isChar(char)) {
        value += char;
        char = input[++current];
      }
      tokens.push({
        type: 'name',
        value
      });
      continue;
    }
    if(isEmpty(char)){
      current++;
      continue;
    }
    if(isDigit(char)){
      let value = '';

      while (isDigit(char)) {
        value += char;
        char = input[++current];
      }
      tokens.push({
        type: 'number',
        value: value
      });
      continue;
    }

    throw new TypeError(`Unknown char: '${char}'`);
  }
  return tokens;
}