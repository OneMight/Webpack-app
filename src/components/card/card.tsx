import { ProductCard } from "../../types/intefaces";
import "./card.css";
import { useAppDispatch } from "../../app/hooks";
import { setProducts, addTotalSum } from "../../store/userProductSlice";
const Card = ({ thing }: ProductCard) => {
  const dispatch = useAppDispatch();
  const handleSetProduct = () => {
    dispatch(setProducts(thing));
    dispatch(addTotalSum(thing.price));
  };
  return (
    <div className="card-div">
      <img className="card-img" src={thing.images?.[0]} alt={thing.title} />
      <p className="card-title">{thing.title}</p>
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
