import "./viewProductDetails.css";
import { ControllPanelCard, Button } from "../../components";
import Rating from "@mui/material/Rating";
import { ImagesView } from "../index";
import { useState } from "react";
import { IViewDetail } from "../../types/intefaces";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import {
  setProducts,
  addTotalSum,
  plusCount,
  minusCount,
} from "../../store/userProductSlice";
export const ViewProductDetails = ({ product }: IViewDetail) => {
  const dispatch = useAppDispatch();
  const [count, setCount] = useState<number>(1);
  const thing = useAppSelector((state) => state.userProduct.product);
  const handleMinusCount = (product: IViewDetail) => {
    if (count != 1) {
      setCount((prev) => prev - 1);
      minusCount(product);
    }
  };
  const handlePlusCount = (product: IViewDetail) => {
    setCount((prev) => prev + 1);
    dispatch(plusCount(product));
  };
  const handleAddToBasket = ({ product }: IViewDetail) => {
    if (!thing.includes(product)) {
      dispatch(setProducts(product));
      dispatch(addTotalSum(product.price));
    }
  };

  return (
    <section className="product-card">
      <ImagesView thing={product} />
      <div className="product-card-description">
        <div className="product-card-main-information">
          <div className="product-card-headling">
            <h2 className="product-card-title">{product.title}</h2>
            <p className="product-card-price">
              <span>${product.price}</span> |
              <Rating name="read-only" value={product.rating} readOnly /> (
              {product.reviews.length} reviews)
            </p>
          </div>
          <div>
            <p className="product-card-description__p">{product.description}</p>
            <ul className="product-card-list">
              <li>Weight: {product.weight} lb</li>
              <li>Width: {product.dimensions.width} inch</li>
              <li>Height: {product.dimensions.height} inch</li>
              <li>Depth: {product.dimensions.depth} inch</li>
            </ul>
          </div>
        </div>
        <div className="product-card-controll-panel">
          <div className="product-card-add-to-cart">
            <ControllPanelCard
              count={count}
              minus={() => handleMinusCount({ product })}
              plus={() => handlePlusCount({ product })}
            />
            <Button
              borderradius="20px"
              fontSize="18px"
              width="75%"
              backgroundcolor="#000"
              padding="5px 0"
              textcolor="#fff"
              children="Add to Cart"
              func={() => handleAddToBasket({ product })}
            />
          </div>
          <Button
            borderradius="20px"
            fontSize="18px"
            width="100%"
            backgroundcolor="#fff"
            padding="5px 0"
            borderColor="#000"
            textcolor="#000"
            children="Buy now"
            func={() => {}}
          />
        </div>
        <div>
          <article className="product-card-delivery">
            <img src="/images/worldwide.svg" alt="worldwide" />
            <p>Free worldwide shipping on all orders over $100</p>
          </article>
          <article className="product-card-delivery">
            <img src="/images/delivery.svg" alt="delivery" />
            <p>Delivers in: {product.shippingInformation}</p>
          </article>
        </div>
      </div>
    </section>
  );
};
export default ViewProductDetails;
