import "./input.css";
import { BaseInput } from "../../../interfaces/input";
export default function Input({
  name,
  placeholder,
  styles,
  type,
  requared,
  onChange,
  value,
}: BaseInput) {
  return (
    <input
      style={styles}
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      required={requared}
      placeholder={placeholder}
      className="input"
    />
  );
}
