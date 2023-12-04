import { exit } from "process";
import { isChar } from "../utils";

export default function lexer(input: string){
   const tokens: Array<object> = [];
   let index: number = 0;

   for(index; input.length > index; index++){
      let char: string = input[index];

      if(char === "("){
        tokens.push({
         type: 'lf_parent',
         value: char
        })
      }
      else if(char === ")"){
         tokens.push({
            type: 'rt_parent',
            value: char
         })
      }
      else{
         console.log(`Unrecognized char: ${char}`)
         exit()
      }

   }


   return tokens;
}