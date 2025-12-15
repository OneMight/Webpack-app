import { Review } from "../../interfaces/product";
import "./review.css";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Rating from "@mui/material/Rating";
import { convertDate } from "../../utils/timeConvert";
import Typography from "@mui/material/Typography";
export default function Review({ review }: Review) {
  return (
    <Box component={"article"} className="review-user">
      <Box className="review-rate">
        <Typography className="reviewer-name">{review.reviewerName}</Typography>
        <Rating name="read-only" value={review.rating} readOnly />
      </Box>
      <Typography className="review-comment">{review.comment}</Typography>
      <Typography className="review-posted-time">
        {convertDate(review.date)}
      </Typography>
    </Box>
  );
}
