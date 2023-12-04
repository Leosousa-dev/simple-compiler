

export function isChar(char: string): boolean{
   const chars = /[a-z]/i;
   return chars.test(char)
}