import React from "react";
import "./SearchForm.css";
import { useNavigate } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
function Search({ autoSearchHandler }) {
  const navigate = useNavigate();
  const inputRef = React.useRef("");
  const searchHandle = (e) => {
    e.preventDefault();
    if (!inputRef.current.value) return;
    if (autoSearchHandler) return autoSearchHandler(inputRef.current.value);
    navigate(`/search?q=${inputRef.current.value}`);
  };
  return (
    <form action="" className="search-form" onSubmit={searchHandle}>
      <input
        type="text"
        className="search-form-input"
        placeholder="search... "
        ref={inputRef}
      />
      <button className="search-form-submit" type="submit">
        <p>Search</p>
        <BsSearch />
      </button>
    </form>
  );
}

export default Search;
