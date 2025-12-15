export interface BaseInput extends Input {
  styles: object;
  requared?: boolean;
  value?: string;
}
export interface formInput extends Input {
  label: string;
  width?: string;
}

export interface Input {
  name: string;
  placeholder: string;
  type: string;
  func?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
