import Box from "@mui/material/Box";
import "./ControllPanelCard.css";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

interface ControllPanel {
  count: number;
  minus: () => void;
  plus: () => void;
}
export default function ControllPanelCard({
  count,
  minus,
  plus,
}: ControllPanel) {
  return (
    <Box className="product-controll">
      <Button
        sx={{ minWidth: "25px", color: "var(--total-black)" }}
        className="product-control__button"
        onClick={minus}
      >
        -
      </Button>
      <Typography component={"p"} className="procut-text">
        {count}
      </Typography>
      <Button
        sx={{ minWidth: "25px", color: "var(--total-black)" }}
        className="product-control__button"
        onClick={plus}
      >
        +
      </Button>
    </Box>
  );
}
