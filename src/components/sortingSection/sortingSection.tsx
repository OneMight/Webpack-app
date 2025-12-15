import Stack from "@mui/material/Stack";
import type { FiltersArray } from "../../types/types";
import "./sortingSection.css";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import StepLabel from "@mui/material/StepLabel";
import InputLabel from "@mui/material/InputLabel";
import FormLabel from "@mui/material/FormLabel";

interface ISortingSection {
  name: string;
  filters: FiltersArray[];
  onChange: (name: string) => void;
  selectedFilter: string;
  openedFilters: boolean;
}
export default function SortingSection({
  name,
  filters,
  onChange,
  openedFilters,
  selectedFilter,
}: ISortingSection) {
  return (
    <Stack
      direction={"column"}
      className={`filters ${openedFilters ? "open-filter" : ""}`}
    >
      <Typography component={"h2"} variant="h4" className="filters-title">
        {name}
      </Typography>
      <Box className="filters-display">
        <FormLabel className="filter">
          <input
            type="radio"
            className="disable-all"
            checked={selectedFilter === ""}
            name="disable-all"
            onChange={() => onChange("")}
          />
          <Typography component={"p"} className="filter-name">
            reset filters
          </Typography>
        </FormLabel>

        {filters.map((elem, id) => {
          return (
            <Stack direction={"row"} key={id}>
              <FormLabel className="filter">
                <input
                  type="radio"
                  name={String(elem)}
                  checked={selectedFilter === String(elem)}
                  onChange={() => onChange(String(elem))}
                  className="filter-checkbox"
                />
                <Typography className="filter-name">{String(elem)}</Typography>
              </FormLabel>
            </Stack>
          );
        })}
      </Box>
    </Stack>
  );
}
