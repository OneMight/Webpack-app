import "./categoriesPage.css";
import { Card, SortingSection, Button } from "../../components/index";
import {
  useGetCategoriesQuery,
  useGetProductsQuery,
} from "../../hooks/productApi";
import { Input } from "../../components/index";
import { useState } from "react";
import { Product } from "../../types/intefaces";
export default function CategoriesPage() {
  const {
    data: categories,
    isLoading: isLoadingCategoris,
    error: errorCategory,
  } = useGetCategoriesQuery("");
  const [limit, setLimit] = useState<number>(12);
  const handleLoadMore = () => {
    setLimit((prev) => prev + 12);
  };
  const {
    data,
    isLoading: isLoadingProducts,
    error: errorProduct,
  } = useGetProductsQuery({ limit: limit, skip: 12 });
  if (isLoadingCategoris || isLoadingProducts) {
    return <p>isLoading</p>;
  }
  if (errorCategory || errorProduct) {
    return <p>Error</p>;
  }
  return (
    <main className="main">
      <div className="filter-div">
        <SortingSection name="Filters" filters={categories} />
      </div>
      <section className="main-div">
        <div className="main-title">
          <h2 className="main-text__title">Our Collection Of Products</h2>
          <Input
            name="search"
            placeholder="Search An Item"
            type="text"
            styles={{
              width: "98%",
              backgroundColor: "#fff",
              border: "1px solid gray",
              borderRadius: "30px",
              color: "#000",
            }}
          />
          <p className="main-subtitle">
            Showing {limit} of {data.total}
          </p>
        </div>
        <section className="main-data">
          {data.products.map((elem: Product) => {
            return (
              <Card
                images={elem.images}
                key={elem.id}
                title={elem.title}
                price={elem.price}
              />
            );
          })}
          <Button
            textcolor="#fff"
            borderRadius="30px"
            width="200px"
            padding="10px"
            fontSize="20px"
            func={() => handleLoadMore()}
          >
            Load More
          </Button>
        </section>
      </section>
    </main>
  );
}
