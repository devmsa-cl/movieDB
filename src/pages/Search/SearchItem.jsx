import React from "react";
import { useNavigate } from "react-router-dom";
function SearchItem({ poster_path, title, name, release_date, overview, id }) {
  const navigate = useNavigate();
  const goto = () => {
    navigate(`/movie/${id}`);
  };
  return (
    <div className="search__item">
      <img
        src={`${
          poster_path === null || poster_path === undefined
            ? "../default-movie.png"
            : `https://image.tmdb.org/t/p/w400${poster_path}`
        }`}
        alt={title || name}
        className="search__item-image"
        onClick={goto}
      />
      <div className="search__item-info">
        <h3 className="search__item-title" onClick={goto}>
          {title || name}
        </h3>
        <p className="search__item-date">{release_date}</p>
        <p className="search__item-overview">{overview.slice(0, 220)}...</p>
      </div>
    </div>
  );
}

export default SearchItem;
