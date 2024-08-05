import React from "react";
import "./SearchFilter.css";
import useSearchTotal from "../../useSearchTotal";
function SearchFilter({ searchType, q, onRequestSearchChange }) {
  const { isLoading, total } = useSearchTotal(q);

  const handleFilterChange = (e) => {
    const { type, value } = e.target.closest("li").dataset;
    if (+value <= 0) return;
    onRequestSearchChange(type);
  };
  return (
    <div className="col-1-2 search__filter-container">
      <div className="search__filter">
        <h3>Filter</h3>
        <ul>
          <li
            onClick={handleFilterChange}
            data-type="movie"
            data-value={total?.movie}
            className={searchType === "movie" ? "active" : undefined}
          >
            Movies <span>{!isLoading && total.movie}</span>
          </li>
          <li
            onClick={handleFilterChange}
            data-type="tv"
            data-value={total?.tv}
            className={searchType === "tv" ? "active" : undefined}
          >
            Tv shows <span>{!isLoading && total.tv}</span>
          </li>
          <li
            onClick={handleFilterChange}
            data-type="person"
            data-value={total?.person}
            className={searchType === "person" ? "active" : undefined}
          >
            People <span>{!isLoading && total.person}</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default SearchFilter;
