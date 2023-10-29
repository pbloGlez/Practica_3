export type Disco = {
    nombre : string,
    autor : string,
    formato : FORMATOTYPES, 
    matriz : boolean,
    pais : string,
    arte: string,
    id: string
}
export enum FORMATOTYPES{
    CD = "CD",
    LP = "LP",
    Single = "Single",
    R2R = "Reel to Reel",
    MnD = "MiniDisc",
    VCD = "Video_CD"

}