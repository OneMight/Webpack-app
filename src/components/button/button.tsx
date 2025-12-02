import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { ButtonInterface } from '../../types/intefaces';
const ColorButton = styled(Button)(
  ({ backgroundcolor,color,  borderRadius, fontSize, padding, width }:ButtonInterface) => ({
    backgroundColor: backgroundcolor || 'rgba(0, 0, 0, 1)',
    color: color || 'rgba(255, 255, 255, 1)',
    fontFamily: 'Exo, sans-serif',
    borderRadius: borderRadius || '20px',
    fontSize: fontSize || '16px',
    padding: padding || '13px',
    display: 'flex',
    alignItems: 'center',
    textTransform: 'none',
    width: width || 'fit-content',
    
  }),
);

export default function CustomizedButtons(props:ButtonInterface ) {
  const { children,color,borderRadius, fontSize, padding, func, width,backgroundcolor } =
    props;
  return (
    <ColorButton
      variant="contained"
      backgroundcolor={backgroundcolor}
      borderRadius={borderRadius}
      color={color}
      fontSize={fontSize}
      padding={padding}
      onClick={func}
      width={width}
      onClickCapture={func}
      
    >
     {children}
      
    </ColorButton>
  );
}
