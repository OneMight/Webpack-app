import { useState } from "react";
import { ProductCard } from "../../types/intefaces";
import "./imagesView.css";
export default function ImagesView({ thing }: ProductCard) {
  const [selected, setSelected] = useState<number>(0);
  const handleSetSelected = (id: number) => {
    setSelected(id);
  };
  return (
    <div className="images-view">
      <div className="images-select">
        {thing.images?.map((elem, ids) => {
          return (
            <button
              className="small-image"
              key={ids}
              onClick={() => handleSetSelected(ids)}
            >
              <img className="image-cart" src={elem} alt={elem} />
            </button>
          );
        })}
      </div>
      <div className="image-selected">
        <img className="selected" src={thing.images?.[selected]} alt="" />
      </div>
    </div>
  );
}
