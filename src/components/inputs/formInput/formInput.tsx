import { formInput } from "../../../interfaces/input";
import Input from "../baseInput/input";
export interface formInput extends IInput {
  label: string;
  width?: string;
}
export default function FormInput({
  label,
  name,
  placeholder,
  type,
  width,
  func,
}: formInput) {
  return (
    <label>
      {label}
      <Input
        name={name}
        placeholder={placeholder}
        type={type}
        requared
        func={func}
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
