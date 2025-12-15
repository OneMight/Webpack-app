import "./input.css";
import { IInput } from "../../../types/intefaces";
interface BaseInput extends IInput {
  styles: object;
  requared?: boolean;
  value?: string;
}
export default function Input({
  name,
  placeholder,
  styles,
  type,
  requared,
  func,
  value,
}: BaseInput) {
  return (
    <input
      style={styles}
      type={type}
      name={name}
      value={value}
      onChange={func}
      required={requared}
      placeholder={placeholder}
      className="input"
    />
  );
}
