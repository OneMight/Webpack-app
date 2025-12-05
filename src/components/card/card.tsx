import { Product } from "../../types/intefaces";
import "./card.css";
const Card = ({ title, price, images }: Product) => {
  return (
    <div className="card-div">
      <img className="card-img" src={images[0]} alt={title} />
      <p className="card-title">{title}</p>
      <div className="card-controll">
        <p className="card-price">${price}</p>
        <button className="card-button">+</button>
      </div>
    </div>
  );
};

export default Card;
