import { exit } from "process";
import { isChar } from "../utils";

export default function lexer(input: string){
   const tokens: Array<object> = [];
   let index: number = 0;


   

   for(index; input.length > index; index++){
      let char: string = input[index];
      
   }
   if(index == input.length){
      tokens.push({
         kind: 'EOF',
         value: 'EOF'
      })
   }

      

   return tokens;
}