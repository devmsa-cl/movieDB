const reducer = (state, action) => {
  const { payload, type } = action;

  if (type === "BOOKMARK") {
    const bookmarkIds = state.bookmark.map((mv) => mv.id);
    const newBookmark = state.bookmark;
    if (!bookmarkIds.includes(payload.movie.id)) {
      newBookmark.push(payload.movie);
    }

    return {
      ...state,
      bookmark: newBookmark,
    };
  }

  if (type === "CLEAR_BOOKMARK") {
    return {
      ...state,
      bookmark: [],
    };
  }

  if (type === "REMOVE_BOOKMARK") {
    const newBookmark = state.bookmark.filter(
      (mv) => mv.id !== payload.movieId
    );
    return {
      ...state,
      bookmark: newBookmark,
    };
  }

  throw new Error("Action does not found.");
};

export default reducer;
