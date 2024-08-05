import React, { useContext, useReducer } from "react";
import reducer from "./reducer";
import useNext from "./useNext";
const AppContext = React.createContext();
let localBookmark = JSON.parse(localStorage.getItem("bookmark"));
const initialState = {
  bookmark: localBookmark || [],
};

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const nextState = useNext(state);
  const addToBookmark = async (movie) => {
    dispatch({ type: "BOOKMARK", payload: { movie } });

    saveBookmark();
  };
  const removeFromBookmark = (movieId) => {
    dispatch({ type: "REMOVE_BOOKMARK", payload: { movieId } });

    saveBookmark();
  };
  const saveBookmark = async () => {
    const state = await nextState();

    localStorage.setItem("bookmark", JSON.stringify(state.bookmark));
  };
  const clearBookmark = async () => {
    dispatch({ type: "CLEAR_BOOKMARK" });
    localStorage.removeItem("bookmark");
  };

  return (
    <AppContext.Provider
      value={{ ...state, addToBookmark, removeFromBookmark, clearBookmark }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};
