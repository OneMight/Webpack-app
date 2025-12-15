export interface Product {
  id?: number;
  title: string;
  price: number;
  images: Array<string> | null;
}
export interface ProductCard {
  thing: Product;
  setError?: (error: string | null) => void;
}

export interface IInput {
  name: string;
  placeholder: string;
  type: string;
  func?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
