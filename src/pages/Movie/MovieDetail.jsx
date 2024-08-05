import Rating from "../../components/Rating/Rating";
export default function MovieDetail({ movie }) {
  return (
    <div className="movie__info">
      <Rating vote_average={movie.vote_average} />
      <p>10/28/2021</p>
      {movie.genres && (
        <ul>
          {movie.genres.map((genre) => {
            return <li key={genre.id}>{genre.name}</li>;
          })}
          <li>{movie.runtime}m</li>
        </ul>
      )}
    </div>
  );
}
