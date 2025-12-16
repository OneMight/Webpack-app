import "./popularProductComp.css";
import Button from "../../components/button/buttonUI";
import { useGetProductsQuery } from "../../api/productApi";
import Card from "../../components/card/card";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../utils/routes";
import { Product } from "../../interfaces/product";
import { useState } from "react";
import { AlertMui } from "../../components";
import type { AlertProps } from "../../types/types";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";

const PopularProductComp = () => {
  const { data, error, isLoading } = useGetProductsQuery({ limit: 8, skip: 0 });
  const [addAlert, setAlert] = useState<AlertProps>({
    message: "",
    type: "success",
  });
  const navigate = useNavigate();
  const handleDirectToShop = () => {
    navigate(ROUTES.CATEGORIES);
  };

  if (isLoading || error) {
    return <Typography component={"p"}>Loading....</Typography>;
  }
  return (
    <Stack
      direction={"column"}
      component={"section"}
      className="main-page_section"
    >
      {addAlert.message && <AlertMui setAlert={setAlert}>{addAlert}</AlertMui>}

      <Box className="main-page_direction">
        <Stack direction={"column"} className="main-page_title-text">
          <Typography component={"h1"} variant="h4" className="main-page_title">
            Most Popular Products
          </Typography>
          <Typography component={"p"} className="main-page_text">
            Most popular products
          </Typography>
        </Stack>
        <Button
          padding="5px 5px"
          tint="#fff"
          radius="20px"
          fontSize="16px"
          width="120px"
          onClick={handleDirectToShop}
          children="View All"
        />
      </Box>
      <Box className="main-page_card-container">
        {data.products.map((product: Product) => {
          return <Card key={product.id} setAlert={setAlert} thing={product} />;
        })}
      </Box>
    </Stack>
  );
};
export default PopularProductComp;
