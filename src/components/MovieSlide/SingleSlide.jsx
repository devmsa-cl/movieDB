import React from "react";
import Rating from "../Rating/Rating";
function SingleSlide({
  vote_average,
  release_date,
  original_title,
  poster_path,
  movie_id,
  navigate,
}) {
  const goTo = () => {
    navigate(`/movie/${movie_id}`);
  };
  return (
    <div className="slide__item">
      <img
        src={`https://image.tmdb.org/t/p/w300${poster_path}`}
        alt="movie cover"
        className="slide__movie-cover"
        onClick={goTo}
      />
      <div className="slide__score">
        <Rating vote_average={vote_average} />
      </div>
      <h3>{original_title}</h3>
      <p>Oct 29, 2021</p>
    </div>
  );
}

export default SingleSlide;
