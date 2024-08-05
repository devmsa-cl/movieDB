import BookmarkIcon from "../../components/BookmarkIcon";
import { useAppContext } from "../../contextAPI";
export default function MovieTitle({ movie }) {
  const { addToBookmark, bookmark } = useAppContext();
  const bookmarkHandle = () => {
    const { title, id, poster, release_date } = movie;

    addToBookmark({ title, id, poster, release_date });
  };
  return (
    <h1 className="movie__title">
      {movie.title}
      <span className="movie__year">
        ({new Date(movie.release_date).getFullYear()})
      </span>
      <BookmarkIcon
        clickHandle={bookmarkHandle}
        fill={bookmark.map((mv) => mv.id).includes(movie.id) ? true : false}
      />
    </h1>
  );
}
