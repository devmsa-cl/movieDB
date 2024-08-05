import React from "react";
import { Link } from "react-router-dom";
import { useAppContext } from "../../../contextAPI";
export default function Collapse({ onRequestCollapseClose }) {
  const { bookmark: movies, removeFromBookmark } = useAppContext();
  return (
    <>
      {movies.map((movie) => {
        return (
          <li key={movie.id}>
            <img
              src={process.env.REACT_APP_MOVIE_POSTER + movie.poster}
              alt={movie.title}
              className="bookmark-mv-cover"
            />
            <div className="bookmark-detail">
              <Link
                to={`movie/${movie.id}`}
                onClick={() => onRequestCollapseClose(false)}
              >
                {movie.title}
              </Link>
              <p>10/24/2022</p>
              <span onClick={() => removeFromBookmark(movie.id)}>remove</span>
            </div>
          </li>
        );
      })}
    </>
  );
}
