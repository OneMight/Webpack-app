import { useState } from "react";
import { ProductCard } from "../../interfaces/product";
import "./imagesView.css";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
export default function ImagesView({ thing }: ProductCard) {
  const [selected, setSelected] = useState<number>(0);
  const handleSetSelected = (id: number) => {
    setSelected(id);
  };
  return (
    <Box className="images-view">
      <Box className="images-select">
        {thing.images?.map((elem, ids) => {
          return (
            <Button
              className="small-image"
              key={ids}
              onClick={() => handleSetSelected(ids)}
            >
              <img className="image-cart" src={elem} alt={elem} />
            </Button>
          );
        })}
      </Box>
      <Box className="image-selected">
        <img className="selected" src={thing.images?.[selected]} alt="" />
      </Box>
    </Box>
  );
}
