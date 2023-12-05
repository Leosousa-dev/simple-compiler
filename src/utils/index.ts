

export function isChar(char: string): boolean{

   return (char >= 'a' &&  char <= 'z' || char >= 'A' && char <= 'Z')
}

export function isParent(char: string): boolean{
   return char === "(" || char === ")"
}


export function isDigit(char: string): boolean{

   return char >= '0' && char <= '9'
}
export function isEmpty(char: string): boolean{

   return char === "\n" || char === " " || char === "\t" || char === "\r"
}
