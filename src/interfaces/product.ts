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
export interface DetailsProduct extends Product {
  description: string;
  rating: number;
  category: string;
  brand: string;
  weight: number;
  dimensions: DimensionsProduct;
  shippingInformation: string;
  returnPolicy: string;
  reviews: ReviewProduct[];
}
export interface ViewDetail {
  product: DetailsProduct;
}
export interface DimensionsProduct {
  width: number;
  height: number;
  depth: number;
}

export interface ReviewProduct {
  id: number;
  comment: string;
  date: string;
  reviewerName: string;
  reviewerEmail: string;
  rating: number;
}

export interface Review {
  review: ReviewProduct;
}
