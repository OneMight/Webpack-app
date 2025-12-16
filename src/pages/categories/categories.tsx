import React, { useState, useEffect } from "react";
import "./categories.css";
import {
  Card,
  SortingSection,
  ButtonUI,
  Input,
  AlertMui,
} from "../../components/index";
import {
  useGetCategoriesQuery,
  useGetProductsQuery,
} from "../../api/productApi";
import { Product } from "../../interfaces/product";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { AlertProps } from "../../types/types";
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
  const [openFilters, setOpenFilters] = useState<boolean>(false);
  const [addAlert, setAlert] = useState<AlertProps>({
    message: "",
    type: "success",
  });
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
        return data.total > prev ? 12 : data.total;
      }
    });
  }, [data?.total]);

  const handleLoadMore = () => {
    setLimit((prev) => {
      const add = data.total - prev > prev ? 12 : data.total - prev;
      return prev + add;
    });
  };

  const handleSetArrayFilters = (value: string) => {
    const item = value === selectedFilter ? "" : value;
    setSelectedFilter(item);
    setLimit((prev) => {
      const add = data.total - prev > prev ? 12 : data.total - prev;
      return prev + add;
    });
    setSearch("");
  };

  if (isLoadingCategoris || isLoadingProducts) return <p>isLoading</p>;
  if (errorCategory || errorProduct) return <p>Error</p>;

  return (
    <Box component={"main"} className="main">
      {addAlert.message && <AlertMui setAlert={setAlert}>{addAlert}</AlertMui>}
      <Box className="filter-div">
        <SortingSection
          name="Filters"
          filters={categories}
          openedFilters={openFilters}
          onChange={handleSetArrayFilters}
          selectedFilter={selectedFilter}
        />
      </Box>
      <Stack component={"section"} direction={"column"} className="main-div">
        <Stack component={"div"} direction={"column"} className="main-title">
          <Box className="main-filter-open">
            <Typography
              component={"h2"}
              variant="h5"
              className="main-text__title"
            >
              Our Collection Of Products
            </Typography>
            <Button
              className="open-filters"
              onClick={() => setOpenFilters((prev) => !prev)}
            >
              {openFilters ? "Close" : "Open"} filters
            </Button>
          </Box>

          <Input
            name="search"
            placeholder="Search An Item"
            type="text"
            value={search}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setSearch(e.target.value)
            }
            styles={{
              width: "85%",
              backgroundColor: "#fff",
              border: "1px solid gray",
              borderRadius: "30px",
              color: "#000",
            }}
          />
          <Typography component={"p"} className="main-subtitle">
            Showing {limit} of {data.total}
          </Typography>
        </Stack>
        <Box component={"section"} className="main-data">
          {data.products?.length !== 0 ? (
            data.products.map((elem: Product) => (
              <Card thing={elem} setAlert={setAlert} key={elem.id} />
            ))
          ) : (
            <Typography component={"p"}>No products found</Typography>
          )}
        </Box>
        <ButtonUI
          tint="#fff"
          radius="30px"
          width="200px"
          padding="10px"
          fontSize="20px"
          disabled={limit === data.total}
          onClick={handleLoadMore}
        >
          Load More
        </ButtonUI>
      </Stack>
    </Box>
  );
}
