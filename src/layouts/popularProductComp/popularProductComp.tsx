import "./popularProductComp.css";
import Button from "../../components/button/button";
import { useGetProductsQuery } from "../../hooks/productApi";
import Card from "../../components/card/card";
import { Product } from "../../types/intefaces";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { setProducts } from "../../store/ProductSlice";
const PopularProductComp = () => {
  const { data, error, isLoading } = useGetProductsQuery("");
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (data?.products) {
      dispatch(setProducts(data.products));
    }
  }, [data]);

  const products = useAppSelector((state: any) => state.product);
  if (isLoading || error) {
    return <p>Loading....</p>;
  }
  const productList = data.products;

  return (
    <section className="main-page_section">
      <div className="main-page_direction">
        <div className="main-page_title-text">
          <h1 className="main-page_title">Most Popular Products</h1>
          <p className="main-page_text">Most popular products</p>
        </div>
        <Button
          padding="5px 5px"
          textColor="#fff"
          borderRadius="20px"
          fontSize="16px"
          width="120px"
          children="View All"
        />
      </div>
      <div className="main-page_card-container">
        {productList.map((product: Product) => {
          return (
            <Card
              key={product.id}
              images={product.images}
              price={product.price}
              title={product.title}
            />
          );
        })}
      </div>
    </section>
  );
};
export default PopularProductComp;
