import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import { ButtonInterface } from "../../types/intefaces";
const ColorButton = styled(Button)(
  ({
    backgroundcolor,
    textcolor,
    borderradius,
    fontSize,
    padding,
    width,
  }: ButtonInterface) => ({
    backgroundColor: backgroundcolor || "rgba(0, 0, 0, 1)",
    color: textcolor || "rgba(255, 255, 255, 1)",
    fontFamily: "Exo, sans-serif",
    borderRadius: borderradius || "20px",
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
    textcolor,
    borderradius,
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
      borderradius={borderradius}
      textcolor={textcolor}
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
