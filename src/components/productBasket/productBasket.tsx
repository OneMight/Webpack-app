import { useState } from "react";
import "./productBasket.css";
import { useAppDispatch } from "../../app/hooks";
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
export default function ProductBasket({ thing }: ProductCard) {
  const [count, setCount] = useState<number>(1);
  const [productPrice, setProductPrice] = useState<number>(thing.price);
  const dispatch = useAppDispatch();

  const handlePlusCount = () => {
    setCount((prev) => prev + 1);
    setProductPrice((prev) => Math.round((prev + thing.price) * 100) / 100);
    dispatch(addTotalSum(thing.price));
  };
  const handleMinusCount = () => {
    if (count != 1) {
      setCount((prev) => prev - 1);
      setProductPrice((prev) => Math.round((prev - thing.price) * 100) / 100);
      dispatch(minusTotalSum(thing.price));
    }
  };
  const handleDeleteFromBasket = (id: number) => {
    dispatch(deleteProduct(id));
    dispatch(minusTotalSum(productPrice));
  };
  return (
    <Box component={"section"} className="product">
      <Box className="product-left">
        <Button
          sx={{ minWidth: "30px", color: "var(--total-black)" }}
          className="product-control__button"
          onClick={() => handleDeleteFromBasket(thing.id)}
        >
          X
        </Button>
        <Box className="product-desc">
          <img
            className="product-img"
            src={thing.images?.[0]}
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
        <Typography className="product-total-text">${productPrice}</Typography>
      </Box>
    </Box>
  );
}
