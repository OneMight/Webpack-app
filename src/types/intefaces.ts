import { FiltersArray } from "./types";

export interface ButtonInterface {
  backgroundcolor?: string;
  borderColor?: string;
  padding: string;
  borderradius: string;
  fontSize: string;
  width: string;
  textcolor: string;
  children?: string;
  disabled?: boolean;
  func?: () => void;
}
export interface Product {
  id?: number;
  title: string;
  price: number;
  images: Array<string> | null;
}
export interface ProductCard {
  thing: Product;
}

export interface ProductResponse {
  products: Product[];
  total: number;
}
export interface IInput {
  name: string;
  placeholder: string;
  type: string;
  func?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
export interface BaseInput extends IInput {
  styles: object;
  requared?: boolean;
  value?: string;
}
export interface formInput extends IInput {
  label: string;
  width?: string;
}

export interface IBaseUser {
  name: string;
  email: string;
  password: string;
}
export interface IRegisterApi {
  newUser: IBaseUser;
}
export interface IAlert {
  children: string;
}

export interface ISortingSection {
  name: string;
  filters: FiltersArray[];
  func: (name: string) => void;
  selectedFilter: string;
}
export interface IPaymentDiv {
  title: string;
  sum: number | string;
}
