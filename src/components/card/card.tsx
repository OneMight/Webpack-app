import { ProductCard } from "../../interfaces/product";
import "./card.css";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { setProducts } from "../../store/userProductSlice";
import { Link } from "react-router-dom";
import { ROUTES } from "../../utils/routes";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
const Card = ({ thing, setAlert }: ProductCard) => {
  const dispatch = useAppDispatch();
  const { isAuth } = useAppSelector((state) => state.userAuth);
  const handleSetProduct = () => {
    if (isAuth) {
      dispatch(setProducts({ ...thing, quantity: 1 }));
      setAlert({
        message: "Product added to basket successfully",
        type: "success",
      });
    } else {
      setAlert({
        message: "You need to login to add products to basket",
        type: "error",
      });
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
