export enum tokenType {
   lf_parent = "lf_parent",
   rh_parent = "rh_parent",
   numeric = "numeric"
}

export type Token = {
   kind: tokenType,
   value: string | undefined
}