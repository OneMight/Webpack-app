import "./viewProductDetails.css";
import { AlertMui, ButtonUI } from "../../components";
import Rating from "@mui/material/Rating";
import { ImagesView } from "../index";
import { ViewDetail } from "../../interfaces/product";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { setProducts, clearError } from "../../store/userProductSlice";
import { memo } from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
export const ViewProductDetails = memo(({ product }: ViewDetail) => {
  const error = useAppSelector((state) => state.userProduct.error);
  const dispatch = useAppDispatch();
  const handleAddToBasket = () => {
    dispatch(setProducts(product));
  };
  const handleClearError = () => {
    dispatch(clearError());
  };
  return (
    <Box component={"section"} className="product-card">
      {error && <AlertMui setError={handleClearError}>{error}</AlertMui>}
      <ImagesView thing={product} />
      <Stack
        component={"section"}
        direction={"column"}
        className="product-card-description"
      >
        <Stack direction={"column"} className="product-card-main-information">
          <Box className="product-card-headling">
            <Typography
              component={"h2"}
              variant="h4"
              className="product-card-title"
            >
              {product.title}
            </Typography>
            <Typography component={"p"} className="product-card-price">
              <Box component={"span"}>${product.price}</Box> |
              <Rating name="read-only" value={product.rating} readOnly /> (
              {product.reviews.length} reviews)
            </Typography>
          </Box>
          <Box>
            <Typography component={"p"} className="product-card-description__p">
              {product.description}
            </Typography>
            <List className="product-card-list">
              <ListItem>Weight: {product.weight} lb</ListItem>
              <ListItem>Width: {product.dimensions.width} inch</ListItem>
              <ListItem>Height: {product.dimensions.height} inch</ListItem>
              <ListItem>Depth: {product.dimensions.depth} inch</ListItem>
            </List>
          </Box>
        </Stack>
        <Stack direction={"column"} className="product-card-controll-panel">
          <ButtonUI
            radius="20px"
            fontSize="18px"
            width="100%"
            background="#000"
            padding="5px 0"
            tint="#fff"
            children="Add to Cart"
            onClick={handleAddToBasket}
          />
          <ButtonUI
            radius="20px"
            fontSize="18px"
            width="100%"
            background="#fff"
            padding="5px 0"
            tint="#000"
            children="Buy now"
          />
        </Stack>
        <Stack
          direction={"column"}
          className="product-card-delivery-description"
        >
          <Box component={"article"} className="product-card-delivery">
            <img src="/images/worldwide.svg" alt="worldwide" />
            <Typography component={"p"}>
              Free worldwide shipping on all orders over $100
            </Typography>
          </Box>
          <Box component={"article"} className="product-card-delivery">
            <img src="/images/delivery.svg" alt="delivery" />
            <Typography component={"p"}>
              Delivers in: {product.shippingInformation}
            </Typography>
          </Box>
        </Stack>
      </Stack>
    </Box>
  );
});
export default ViewProductDetails;
