import "./input.css";
import { BaseInput } from "../../../interfaces/intefaces";
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
