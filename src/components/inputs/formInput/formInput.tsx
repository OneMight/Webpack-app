import { FormInput } from "../../../interfaces/input";
import Input from "../baseInput/input";
export default function FormInput({
  label,
  name,
  placeholder,
  type,
  width,
  onChange,
}: FormInput) {
  return (
    <label>
      {label}
      <Input
        name={name}
        placeholder={placeholder}
        type={type}
        requared
        onChange={onChange}
        styles={{
          width: width ?? "90%",
          backgroundColor: "#fff",
          border: "1px solid #DEDFE1",
          color: "#000",
          borderRadius: "30px",
        }}
      />
    </label>
  );
}
