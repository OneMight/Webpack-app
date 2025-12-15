import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
interface ButtonInterface {
  background?: string;
  padding: string;
  radius: string;
  fontSize: string;
  width: string;
  tint: string;
  children?: string;
  disabled?: boolean;
  onClick?: () => void;
}
const ColorButton = styled(Button)(
  ({
    background,
    tint,
    radius,
    fontSize,
    padding,
    width,
  }: ButtonInterface) => ({
    backgroundColor: background || "rgba(0, 0, 0, 1)",
    color: tint || "rgba(255, 255, 255, 1)",
    fontFamily: "Exo, sans-serif",
    borderRadius: radius || "20px",
    fontSize: fontSize || "16px",
    padding: padding || "13px",
    display: "flex",
    alignItems: "center",
    textTransform: "none",
    width: width || "fit-content",
  }),
);

export default function CustomizedButtons(props: ButtonInterface) {
  const {
    children,
    tint,
    radius,
    fontSize,
    padding,
    disabled,
    onClick,
    width,
    background,
  } = props;
  return (
    <ColorButton
      variant="contained"
      background={background}
      radius={radius}
      tint={tint}
      fontSize={fontSize}
      padding={padding}
      onClick={onClick}
      width={width}
      disabled={disabled}
    >
      {children}
    </ColorButton>
  );
}
