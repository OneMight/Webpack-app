import "./viewProduct.css";
import { ViewProductDetails } from "../../layouts";
import { useParams } from "react-router-dom";
import { useGetProductByIdQuery } from "../../api/productApi";
import { Review } from "../../components/index";
export default function ViewProduct() {
  const { id } = useParams();
  const { data: product, isLoading, error } = useGetProductByIdQuery(id);
  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>Error</p>;
  }
  return (
    <main className="main-view-product">
      <section className="main-images-product">
        <ViewProductDetails product={product} />
      </section>
      <section className="main-description-product">
        <div className="review-section">
          <h2 className="review-section__title">Reviews</h2>
          {product.reviews !== null ? (
            product.reviews.map((review) => (
              <Review review={review} key={review.id} />
            ))
          ) : (
            <p>No reviews yet.</p>
          )}
        </div>
      </section>
    </main>
  );
}
