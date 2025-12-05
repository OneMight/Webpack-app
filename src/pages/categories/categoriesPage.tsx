import React, { useState, useEffect } from "react";
import "./categoriesPage.css";
import { Card, SortingSection, Button, Input } from "../../components/index";
import {
  useGetCategoriesQuery,
  useGetProductsQuery,
} from "../../hooks/productApi";
import { Product } from "../../types/intefaces";

export default function CategoriesPage() {
  const {
    data: categories,
    isLoading: isLoadingCategoris,
    error: errorCategory,
  } = useGetCategoriesQuery("");
  const [limit, setLimit] = useState<number>(12);
  const [selectedFilter, setSelectedFilter] = useState<string>("");
  const [search, setSearch] = useState<string>("");
  const [debouncedSearch, setDebouncedSearch] = useState<string>("");
  const {
    data,
    isLoading: isLoadingProducts,
    error: errorProduct,
  } = useGetProductsQuery({
    limit: limit,
    skip: 0,
    filter: selectedFilter,
    search: debouncedSearch,
  });

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearch(search);
    }, 500);

    return () => {
      clearTimeout(handler);
    };
  }, [search]);

  useEffect(() => {
    if (!data) return;

    setLimit((prev) => {
      if (data.total < prev) return data.total;
      else {
        return prev < data.total && data.total > 6 ? 12 : data.total;
      }
    });
  }, [data?.total]);

  const handleLoadMore = () => {
    setLimit((prev) => {
      const add = data.total - prev > 12 ? 12 : data.total - prev;
      return prev + add;
    });
  };

  const handleSetArrayFilters = (value: string) => {
    const item = value === selectedFilter ? "" : value;
    setSelectedFilter(item);
    setLimit((prev) => {
      const add = data.total - prev > 12 ? 12 : data.total - prev;
      return prev + add;
    });
    setSearch("");
  };

  if (isLoadingCategoris || isLoadingProducts) return <p>isLoading</p>;
  if (errorCategory || errorProduct) return <p>Error</p>;

  return (
    <main className="main">
      <div className="filter-div">
        <SortingSection
          name="Filters"
          filters={categories}
          func={handleSetArrayFilters}
          selectedFilter={selectedFilter}
        />
      </div>
      <section className="main-div">
        <div className="main-title">
          <h2 className="main-text__title">Our Collection Of Products</h2>
          <Input
            name="search"
            placeholder="Search An Item"
            type="text"
            value={search}
            func={(e: React.ChangeEvent<HTMLInputElement>) =>
              setSearch(e.target.value)
            }
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
          {data.products.map((elem: Product) => (
            <Card
              images={elem.images}
              key={elem.id}
              title={elem.title}
              price={elem.price}
            />
          ))}
        </section>
        <Button
          textcolor="#fff"
          borderRadius="30px"
          width="200px"
          padding="10px"
          fontSize="20px"
          disabled={limit === data.total}
          func={handleLoadMore}
        >
          Load More
        </Button>
      </section>
    </main>
  );
}
