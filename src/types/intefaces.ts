export interface ButtonInterface{
    backgroundcolor?: string,
    borderColor?:string,
    Color?:string
    padding:string,
    borderradius: string,
    fontSize: string,
    width: string,
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
