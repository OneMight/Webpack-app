import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import { ButtonInterface } from "../../types/intefaces";
const ColorButton = styled(Button)(
  ({
    backgroundcolor,
    textColor,
    borderRadius,
    fontSize,
    padding,
    width,
  }: ButtonInterface) => ({
    backgroundColor: backgroundcolor || "rgba(0, 0, 0, 1)",
    textColor: textColor || "rgba(255, 255, 255, 1)",
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
    func,
    width,
    backgroundcolor,
  } = props;
  return (
    <ColorButton
      variant="contained"
      backgroundcolor={backgroundcolor}
      borderRadius={borderRadius}
      textColor={textColor}
      fontSize={fontSize}
      padding={padding}
      onClick={() => func()}
      width={width}
      disabled={disabled}
      onClickCapture={() => func()}
    >
      {children}
    </ColorButton>
  );
}
