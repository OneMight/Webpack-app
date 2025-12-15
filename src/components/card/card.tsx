import { ProductCard } from "../../interfaces/product";
import "./card.css";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { setProducts, addTotalSum } from "../../store/userProductSlice";
import { Link } from "react-router-dom";
import { ROUTES } from "../../utils/routes";
const Card = ({ thing, setError }: ProductCard) => {
  const dispatch = useAppDispatch();
  const product = useAppSelector((state) => state.userProduct.product);
  const handleSetProduct = () => {
    if (product.every((elem) => elem.title !== thing.title)) {
      dispatch(setProducts(thing));
      dispatch(addTotalSum(thing.price));
    } else {
      setError("You already add this product to cart");
      return;
    }
  };
  return (
    <div className="card-div">
      <img className="card-img" src={thing.images?.[0]} alt={thing.title} />
      <Link
        to={ROUTES.VIEWPRODUCT.replace(":id", `${thing.id}`)}
        className="card-title"
      >
        {thing.title}
      </Link>
      <div className="card-controll">
        <p className="card-price">${thing.price}</p>
        <button className="card-button" onClick={() => handleSetProduct()}>
          +
        </button>
      </div>
    </div>
  );
};

export default Card;
