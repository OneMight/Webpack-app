import "./viewProductDetails.css";
import { AlertMui, Button } from "../../components";
import Rating from "@mui/material/Rating";
import { ImagesView } from "../index";
import { IViewDetail } from "../../types/intefaces";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { setProducts, addTotalSum } from "../../store/userProductSlice";
import { memo, useState } from "react";
export const ViewProductDetails = memo(({ product }: IViewDetail) => {
  const dispatch = useAppDispatch();
  const [error, setError] = useState<string>(null);
  const thing = useAppSelector((state) => state.userProduct.product);
  const handleAddToBasket = ({ product }: IViewDetail) => {
    if (thing.every((elem) => elem.title !== product.title)) {
      dispatch(setProducts(product));
      dispatch(addTotalSum(product.price));
    } else {
      setError("You already add this product to cart");
    }
  };

  return (
    <section className="product-card">
      {error && <AlertMui setError={setError}>{error}</AlertMui>}
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
            <Button
              borderradius="20px"
              fontSize="18px"
              width="100%"
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
});
export default memo(ViewProductDetails);
