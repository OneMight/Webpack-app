import "./viewProductDetails.css";
import { AlertMui, ButtonUI, ControllPanelCard } from "../../components";
import Rating from "@mui/material/Rating";
import { ImagesView } from "../index";
import { ViewDetail } from "../../interfaces/product";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { setProducts, setError } from "../../store/userProductSlice";
import { memo, useState } from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import { AlertProps } from "../../types/types";
export const ViewProductDetails = memo(({ product }: ViewDetail) => {
  const [count, setCount] = useState<number>(1);
  const [addAlert, setAlert] = useState<AlertProps>({
    message: "",
    type: "success",
  });
  const { isAuth } = useAppSelector((state) => state.userAuth);
  const dispatch = useAppDispatch();
  const handleAddToBasket = () => {
    if (isAuth) {
      dispatch(setProducts({ ...product, quantity: count }));
      setAlert({
        message: "Product added to basket successfully",
        type: "success",
      });
    } else {
      setAlert({
        message: "You need to login to add products to basket",
        type: "error",
      });
    }
  };
  return (
    <Box component={"section"} className="product-card">
      {addAlert.message && <AlertMui setAlert={setAlert}>{addAlert}</AlertMui>}
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
          <Stack
            direction={"row"}
            spacing={2}
            className="product-card-add-to-cart"
          >
            <ControllPanelCard
              count={count}
              minus={() => setCount((prev) => prev - 1)}
              plus={() => setCount((prev) => prev + 1)}
            />
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
          </Stack>

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
