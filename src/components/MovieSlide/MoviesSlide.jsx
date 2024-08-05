import React from "react";
import "./MoviesSlide.css";
import SingleSlide from "./SingleSlide";
import SingleSlideSkeleton from "./SingleSlideSkeleton";
import { useFetch } from "../../useFetch";
import { Link, useParams, useNavigate } from "react-router-dom";

function MoviesSlide({ category }) {
  const navigate = useNavigate();
  const [movies, setMovies] = React.useState([]);
  const { data, isLoading } = useFetch(
    `${
      category.type === "trending"
        ? `/${category.type}/movie/week?api_key=8f39da33fa6dc69e363c433cc777b3c3&language=en-US&page=1`
        : `/movie/${category.type}?api_key=8f39da33fa6dc69e363c433cc777b3c3&language=en-US&page=1`
    }`
  );

  React.useEffect(() => {}, [movies]);

  return (
    <section className="movies-slide">
      <h2 className="heading-text">{category.title}</h2>
      <div className="slide">
        {isLoading
          ? Array.from({ length: 10 }).map((_, i) => {
              return <SingleSlideSkeleton key={i} />;
            })
          : data.map((item) => {
              const {
                vote_average,
                original_title,
                release_date,
                poster_path,
                id,
              } = item;
              return (
                <SingleSlide
                  key={id}
                  movie_id={id}
                  vote_average={vote_average}
                  original_title={original_title}
                  release_date={release_date}
                  poster_path={poster_path}
                  navigate={navigate}
                />
              );
            })}
      </div>
    </section>
  );
}

export default MoviesSlide;
