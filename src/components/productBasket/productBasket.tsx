import { useState } from "react";
import "./productBasket.css";
import { useAppDispatch } from "../../app/hooks";
import { ProductCard } from "../../types/intefaces";
import { ControllPanelCard } from "../index";
import {
  deleteProduct,
  addTotalSum,
  minusTotalSum,
} from "../../store/userProductSlice";
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
    <section className="product">
      <div className="product-left">
        <button
          className="product-control__button"
          onClick={() => handleDeleteFromBasket(thing.id)}
        >
          X
        </button>
        <div className="product-desc">
          <img
            className="product-img"
            src={thing.images?.[0]}
            alt={thing.title}
          />
          <p className="product-text">{thing.title}</p>
        </div>
      </div>
      <div className="product-right">
        <p className="product-price">${thing.price}</p>
        <ControllPanelCard
          count={count}
          minus={handleMinusCount}
          plus={handlePlusCount}
        />
        <p className="product-total-text">${productPrice}</p>
      </div>
    </section>
  );
}
