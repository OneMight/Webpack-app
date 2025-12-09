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
        {filters.map((elem, id) => {
          return (
            <label key={id} className="filter">
              <input
                type="checkbox"
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
