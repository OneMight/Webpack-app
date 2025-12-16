import "./shopList.css";
import { useAppSelector } from "../../app/hooks";
import { ProductBasket, PaymentDiv } from "../../components";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
export default function ShopList() {
  const product = useAppSelector((state) => state.userProduct.product);
  const totalSum = useAppSelector((state) => state.userProduct.subtotal);
  return (
    <Box component={"main"} className="main-shop-list">
      {product?.length != 0 ? (
        <Box className="main-tables">
          <Stack
            direction={"row"}
            component={"section"}
            className="main-product-list"
          >
            <Box className="main-product__title">
              <Typography component={"p"} className="main-product__table-text">
                Product
              </Typography>
              <Stack
                direction={"row"}
                component={"article"}
                className="main-product__header-table"
              >
                <Typography
                  component={"p"}
                  className="main-product__table-text"
                >
                  Price
                </Typography>
                <Typography
                  component={"p"}
                  className="main-product__table-text"
                >
                  Quantity
                </Typography>
                <Typography
                  component={"p"}
                  className="main-product__table-text"
                >
                  Total
                </Typography>
              </Stack>
            </Box>
            <Stack
              direction={"column"}
              component={"section"}
              className="main-product__things"
            >
              {product.map((elem) => {
                return (
                  <ProductBasket
                    thing={elem}
                    key={elem.id}
                    quantity={elem.quantity}
                  />
                );
              })}
            </Stack>
          </Stack>
          <Stack
            direction={"column"}
            component={"section"}
            className="main-total-sum"
          >
            <Box className="main-total__title">
              <Typography
                component={"p"}
                className="main-product__table-text right-table"
              >
                Cart Total
              </Typography>
            </Box>
            <Box component={"section"} className="main-total__payment">
              <PaymentDiv title="SUBTOTAL" sum={totalSum} />
              <PaymentDiv title="DISCOUNT" sum={"---"} />
              <PaymentDiv title="TOTAL" sum={totalSum} />
            </Box>
          </Stack>
        </Box>
      ) : (
        <Typography component={"p"} className="main-shop__not-add">
          Your basket is empty. Add something from shop page
        </Typography>
      )}
    </Box>
  );
}
