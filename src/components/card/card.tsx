import { ProductCard } from "../../interfaces/product";
import "./card.css";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { setProducts, addTotalSum } from "../../store/userProductSlice";
import { Link } from "react-router-dom";
import { ROUTES } from "../../utils/routes";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
const Card = ({ thing, setError }: ProductCard) => {
  const dispatch = useAppDispatch();
  const product = useAppSelector((state) => state.userProduct.product);
  const handleSetProduct = () => {
    if (product.every((elem) => elem.title !== thing.title)) {
      dispatch(setProducts(thing));
      dispatch(addTotalSum(thing.price));
    } else {
      setError("You already add this product to cart");
      return;
    }
  };
  return (
    <Box className="card-div">
      <img className="card-img" src={thing.images?.[0]} alt={thing.title} />
      <Link
        to={ROUTES.VIEWPRODUCT.replace(":id", `${thing.id}`)}
        className="card-title"
      >
        {thing.title}
      </Link>
      <Box className="card-controll">
        <Typography component={"p"} className="card-price">
          ${thing.price}
        </Typography>
        <Button
          sx={{ minWidth: "25px", color: "var(--total-black)" }}
          className="card-button"
          onClick={handleSetProduct}
        >
          +
        </Button>
      </Box>
    </Box>
  );
};

export default Card;
