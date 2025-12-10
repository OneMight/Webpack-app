import { ISortingSection } from "../../types/intefaces";
import "./sortingSection.css";
export default function SortingSection({
  name,
  filters,
  func,
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
            onChange={() => func("")}
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
                onChange={() => func(String(elem))}
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
