import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
interface ButtonInterface {
  backgroundColor?: string;
  borderColor?: string;
  padding: string;
  borderRadius: string;
  fontSize: string;
  width: string;
  textColor: string;
  children?: string;
  disabled?: boolean;
  onClick?: () => void;
}
const ColorButton = styled(Button)(
  ({
    backgroundColor,
    textColor,
    borderRadius,
    fontSize,
    padding,
    width,
  }: ButtonInterface) => ({
    backgroundColor: backgroundColor || "rgba(0, 0, 0, 1)",
    color: textColor || "rgba(255, 255, 255, 1)",
    fontFamily: "Exo, sans-serif",
    borderRadius: borderRadius || "20px",
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
    textColor,
    borderRadius,
    fontSize,
    padding,
    disabled,
    onClick,
    width,
    backgroundColor,
  } = props;
  return (
    <ColorButton
      variant="contained"
      backgroundColor={backgroundColor}
      borderRadius={borderRadius}
      textColor={textColor}
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
