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
  setError?: (error: string | null) => void;
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
  setError: (error: string | null) => void;
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
export interface IDimensionsProduct {
  width: number;
  height: number;
  depth: number;
}
export interface IReviewProduct {
  id: number;
  comment: string;
  date: string;
  reviewerName: string;
  reviewerEmail: string;
  rating: number;
}
export interface IDetailsProduct extends Product {
  description: string;
  rating: number;
  category: string;
  brand: string;
  weight: number;
  dimensions: IDimensionsProduct;
  shippingInformation: string;
  returnPolicy: string;
  reviews: IReviewProduct[];
}
export interface IControllPanel {
  count: number;
  minus: () => void;
  plus: () => void;
}
export interface IViewDetail {
  product: IDetailsProduct;
}
export interface IReview {
  review: IReviewProduct;
}
export interface IModalUI {
  open: boolean;
  setOpen: (value?: boolean) => void;
}
export interface IBurger {
  opened: boolean;
  setOpened: (value: boolean) => void;
  isLogged: boolean;
  setOpenModal: () => void;
}
