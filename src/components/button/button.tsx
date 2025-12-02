import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { ButtonInterface } from '../../types/intefaces';
const ColorButton = styled(Button)(
  ({ backgroundcolor, Color, borderradius, fontSize, padding, width }:ButtonInterface) => ({
    backgroundColor: backgroundcolor || 'rgba(0, 0, 0, 1)',
    color: Color || 'rgba(255, 255, 255, 1)',
    fontFamily: 'var(--Exo)',
    borderradius: borderradius || '12px',
    fontSize: fontSize || '16px',
    padding: padding || '13px',
    display: 'flex',
    alignItems: 'center',
    textTransform: 'none',
    width: width || 'fit-content',
    
  }),
);

export default function CustomizedButtons(props:ButtonInterface ) {
  const { children, Color, borderradius, fontSize, padding, func, width,backgroundcolor } =
    props;
  return (
    <ColorButton
      variant="contained"
      backgroundcolor={backgroundcolor}
      Color={Color}
      borderradius={borderradius}
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
