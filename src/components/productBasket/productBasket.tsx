import { useState } from "react";
import "./productBasket.css";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { ProductCard } from "../../interfaces/product";
import { ControllPanelCard } from "../index";
import {
  deleteProduct,
  addTotalSum,
  minusTotalSum,
} from "../../store/userProductSlice";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
export default function ProductBasket({ thing, quantity }: ProductCard) {
  const [count, setCount] = useState<number>(quantity);
  const dispatch = useAppDispatch();

  const handlePlusCount = () => {
    setCount((prev) => prev + 1);
    dispatch(addTotalSum(thing));
  };
  const handleMinusCount = () => {
    if (count != 1) {
      setCount((prev) => prev - 1);
      dispatch(minusTotalSum(thing));
    }
  };
  const handleDeleteFromBasket = () => {
    dispatch(deleteProduct(thing));
  };
  return (
    <Box component={"section"} className="product">
      <Box className="product-left">
        <Button
          sx={{ minWidth: "30px", color: "var(--total-black)" }}
          className="product-control__button"
          onClick={handleDeleteFromBasket}
        >
          X
        </Button>
        <Box className="product-desc">
          <img
            className="product-img"
            src={thing.thumbnail}
            alt={thing.title}
          />
          <Typography className="product-text">{thing.title}</Typography>
        </Box>
      </Box>
      <Box className="product-right">
        <Typography className="product-price">${thing.price}</Typography>
        <ControllPanelCard
          count={count}
          minus={handleMinusCount}
          plus={handlePlusCount}
        />
        <Typography className="product-total-text">
          ${count * thing.price}
        </Typography>
      </Box>
    </Box>
  );
}
