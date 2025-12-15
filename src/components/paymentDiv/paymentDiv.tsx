import "./paymentDiv.css";
interface IPaymentDiv {
  title: string;
  sum: number | string;
}
export default function PaymentDiv({ title, sum }: IPaymentDiv) {
  return (
    <div className="payment-div">
      <p className="payment-title">{title}</p>
      <p className="payment-sum">{typeof sum === "string" ? sum : `$${sum}`}</p>
    </div>
  );
}
