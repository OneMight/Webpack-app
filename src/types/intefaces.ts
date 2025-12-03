export interface ButtonInterface{
    backgroundcolor?: string,
    borderColor?:string,
    padding:string,
    borderRadius: string,
    fontSize: string,
    width: string,
    color: any,
    children?: string,
    func?: ()=>void,
}
export interface Product{
    id?: number,
    title:string,
    price: number,
    images: Array<string> | null,
}
export interface ProductResponse{
    products: Product[]
    total: number
}
export interface IInput{
    name:string,
    placeholder: string,
    type: string,
   
}
export interface BaseInput extends IInput{
    styles: Object,
    requared?: boolean,
}
export interface formInput extends IInput{
    label: string,
    width?:string
    
}