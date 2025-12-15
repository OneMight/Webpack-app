export interface BaseInput extends Input {
  styles: object;
  requared?: boolean;
  value?: string;
}
export interface FormInput extends Input {
  label: string;
  width?: string;
}

export interface Input {
  name: string;
  placeholder: string;
  type: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
