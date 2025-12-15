import "./review.css";
import { Rating } from "@mui/material";
import { convertDate } from "../../utils/timeConvert";
export interface IReviewProduct {
  id: number;
  comment: string;
  date: string;
  reviewerName: string;
  reviewerEmail: string;
  rating: number;
}
interface IReview {
  review: IReviewProduct;
}
export default function Review({ review }: IReview) {
  return (
    <article className="review-user">
      <div className="review-rate">
        <p className="reviewer-name">{review.reviewerName}</p>
        <Rating name="read-only" value={review.rating} readOnly />
      </div>
      <p className="review-comment">{review.comment}</p>
      <p className="review-posted-time">{convertDate(review.date)}</p>
    </article>
  );
}
