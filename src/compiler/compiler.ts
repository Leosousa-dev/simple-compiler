import lexer from "./lexer";

export default function compiler(code: string){
   // lexical analysis
   const tokens = lexer(code);


   return tokens
}





