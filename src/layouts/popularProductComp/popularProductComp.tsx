import "./popularProductComp.css";
import Button from "../../components/button/button";
import { useGetProductsQuery } from "../../hooks/productApi";
import Card from "../../components/card/card";
import { Product } from "../../types/intefaces";
import { useAppDispatch } from "../../app/hooks";
const PopularProductComp = () => {
  const { data, error, isLoading } = useGetProductsQuery({ limit: 8, skip: 0 });
  const dispatch = useAppDispatch();

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
          textcolor="#fff"
          borderRadius="20px"
          fontSize="16px"
          width="120px"
          children="View All"
        />
      </div>
      <div className="main-page_card-container">
        {productList.map((product: Product) => {
          return <Card key={product.id} thing={product} />;
        })}
      </div>
    </section>
  );
};
export default PopularProductComp;
