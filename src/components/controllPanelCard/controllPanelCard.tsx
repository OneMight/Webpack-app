import "./ControllPanelCard.css";

interface ControllPanel {
  count: number;
  minus: () => void;
  plus: () => void;
}

export default function ControllPanelCard({
  count,
  minus,
  plus,
}: ControllPanel) {
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
