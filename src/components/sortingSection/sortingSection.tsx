import type { FiltersArray } from "../../types/types";
import "./sortingSection.css";

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
    <div className={`filters ${openedFilters ? "open-filter" : ""}`}>
      <h2 className="filters-title">{name}</h2>
      <div className="filters-display">
        <label className="filter">
          <input
            type="radio"
            className="disable-all"
            checked={selectedFilter === ""}
            name="disable-all"
            onChange={() => onChange("")}
          />
          <p className="filter-name">reset filters</p>
        </label>
        {filters.map((elem, id) => {
          return (
            <label key={id} className="filter">
              <input
                type="radio"
                name={String(elem)}
                checked={selectedFilter === String(elem)}
                onChange={() => onChange(String(elem))}
                className="filter-checkbox"
              />
              <p className="filter-name">{String(elem)}</p>
            </label>
          );
        })}
      </div>
    </div>
  );
}
