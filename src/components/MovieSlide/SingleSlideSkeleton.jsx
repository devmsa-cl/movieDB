import React from "react";

function SingleSlideSkeleton() {
  return (
    <div className="slide__item skeleton">
      <img
        src="/skeleton-img.png"
        alt="movie cover"
        className="slide__movie-cover skeleton"
      />
      <div className="slide__score">
        <div className="rating-skeleton"></div>
      </div>
      <h3></h3>
      <p></p>
    </div>
  );
}

export default SingleSlideSkeleton;
