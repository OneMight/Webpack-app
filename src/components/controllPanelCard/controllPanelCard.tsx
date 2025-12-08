import { IControllPanel } from "../../types/intefaces";
import "./ControllPanelCard.css";
export default function ControllPanelCard({
  count,
  minus,
  plus,
}: IControllPanel) {
  return (
    <div className="product-controll">
      <button className="product-control__button" onClick={minus}>
        -
      </button>
      <p className="procut-text">{count}</p>
      <button className="product-control__button" onClick={plus}>
        +
      </button>
    </div>
  );
}
