import "./viewProduct.css";
import { ViewProductDetails } from "../../layouts";
import { useParams } from "react-router-dom";
import { useGetProductByIdQuery } from "../../api/productApi";
import { AlertMui, Review } from "../../components/index";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { AlertProps } from "../../types/types";
import { useState } from "react";
export default function ViewProduct() {
  const { id } = useParams();
  const { data: product, isLoading, error } = useGetProductByIdQuery(id);
  const [addAlert, setAlert] = useState<AlertProps>({
    message: "",
    type: "success",
  });
  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>Error</p>;
  }
  return (
    <Box component={"main"} className="main-view-product">
      {addAlert.message && <AlertMui setAlert={setAlert}>{addAlert}</AlertMui>}

      <Box component={"section"} className="main-images-product">
        <ViewProductDetails product={product} />
      </Box>
      <Stack
        component={"section"}
        direction={"column"}
        className="main-description-product"
      >
        <Box className="review-section">
          <Typography
            component={"h2"}
            variant="h4"
            className="review-section__title"
          >
            Reviews
          </Typography>
          {product.reviews?.length !== 0 ? (
            product.reviews.map((review) => (
              <Review review={review} key={review.id} />
            ))
          ) : (
            <Typography>No reviews yet.</Typography>
          )}
        </Box>
      </Stack>
    </Box>
  );
}
