import Box from "@mui/material/Box";
import "./paymentDiv.css";
import Typography from "@mui/material/Typography";
interface PaymentDiv {
  title: string;
  sum: number | string;
}
export default function PaymentDiv({ title, sum }: PaymentDiv) {
  return (
    <Box className="payment-div">
      <Typography component={"p"} className="payment-title">
        {title}
      </Typography>
      <Typography component={"p"} className="payment-sum">
        {typeof sum === "string" ? sum : `$${sum}`}
      </Typography>
    </Box>
  );
}
