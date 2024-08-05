import React from "react";
import "./Search.css";
import { useLocation, useSearchParams } from "react-router-dom";
import SearchForm from "../../components/SearchForm/SearchForm";
import Pagination from "../../components/Pagination/Pagination";
import Loading from "../../components/Loading/Loading";
import SearchItem from "./SearchItem";
import { useFetchSearch } from "../../useFetch";
import { useSearch } from "../../useSearch";
import SearchFilter from "./SearchFilter";
function Search() {
  const [searchType, setSearchType] = React.useState("movie");
  const [searchParams, setSearchParams] = useSearchParams();
  const { isLoading, resultsCount, totalPage, data } = useSearch({
    q: searchParams.get("q"),
    searchType,
    page: searchParams.get("page") || 1,
  });
  return (
    <section id="search">
      <div className="container">
        <div className="search-form-container col-1-2">
          <SearchForm
            autoSearchHandler={(searchValue) => {
              setSearchParams({
                q: searchValue,
                page: 1,
              });
              setSearchType("movie");
            }}
          />
        </div>
        {isLoading ? (
          <Loading />
        ) : (
          <div className="row search">
            <SearchFilter
              q={searchParams.get("q")}
              searchType={searchType}
              onRequestSearchChange={(searchType) => {
                setSearchType(searchType);
              }}
            />
            <div className="col-1-2 col-xlg">
              <div className="search__results">
                {data.map((movie) => {
                  return <SearchItem key={movie.id} {...movie} />;
                })}
                {totalPage > 1 ? (
                  <Pagination
                    total={totalPage}
                    current={+searchParams.get("page") || 1}
                    setPage={(page) => {
                      setSearchParams({
                        q: searchParams.get("q"),
                        page,
                      });
                    }}
                  />
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default Search;
