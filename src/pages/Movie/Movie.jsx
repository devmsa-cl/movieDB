import React from "react";
import "./Movie.css";
import { useFetch } from "../../useFetch";
import Cast from "../../components/Cast/Cast";
import { useParams } from "react-router-dom";
import MovieSkeleton from "./MovieSkeleton";
import MovieTitle from "./MovieTitle";
import MovieDetail from "./MovieDetail";
function Movie() {
  const [movie, setMovie] = React.useState({});
  const { id } = useParams();
  const { data, isLoading } = useFetch(`/movie/${id}`, true);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  React.useEffect(() => {
    const newObject = {};
    newObject.genres = data.genres;
    newObject.id = data.id;
    newObject.title = data.original_title || data.name;
    newObject.overview = data.overview;
    newObject.poster = data.poster_path;
    newObject.backdrop = data.backdrop_path;
    newObject.language = data.original_language;
    newObject.vote_average = data.vote_average;
    newObject.release_date = data.release_date;
    newObject.runtime = data.runtime;
    newObject.cast = data.credits;
    setMovie(newObject);
  }, [data]);

  React.useEffect(() => {
    window.scrollTo(0, 0);
    return () => {};
  }, [movie]);

  return (
    <>
      <section
        className="movie-header"
        style={{
          backgroundImage: `linear-gradient(
        to bottom,
        hsl(224, 50%, 31%),
        hsl(224, 50%, 31%, 80%)
      ),
      ${
        !isLoading
          ? `url(${process.env.REACT_APP_MOVIE_BACKDROP}${movie.backdrop})`
          : ""
      }`,
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-1-2">
              <div
                className={
                  isLoading || !isLoading
                    ? "movie__poster skeleton"
                    : "movie__poster"
                }
              >
                {isLoading ? (
                  <>
                    <div className="skeleton-image"></div>
                  </>
                ) : (
                  <>
                    {movie.poster ? (
                      <img
                        src={`${process.env.REACT_APP_MOVIE_POSTER}${movie.poster}`}
                        alt=""
                      />
                    ) : (
                      <img src={`/default-movie.png`} alt="" />
                    )}
                  </>
                )}
              </div>
            </div>
            <div className="col-1-2">
              <div className="movie__detail">
                {isLoading ? (
                  <MovieSkeleton />
                ) : (
                  <>
                    <MovieTitle movie={movie} />
                    <MovieDetail movie={movie} />
                    <div className="movie__overview">
                      <h4>Overview</h4>
                      <p>{movie.overview}</p>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
      {movie.cast && <Cast cast={movie.cast.cast.slice(0, 15)} />}
    </>
  );
}

export default Movie;
