import React, { useEffect } from "react";

export const useFetch = (uri, movie_id = false) => {
  const [data, setData] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  const changeLoadingBoolean = () => {
    setTimeout(() => {
      setIsLoading(false);
    }, 550);
  };

  const getMovies = async () => {
    const res = await fetch(
      `https://api.themoviedb.org/3${uri}?api_key=8f39da33fa6dc69e363c433cc777b3c3&append_to_response=credits`
    );
    const results = await res.json();
    if (movie_id) {
      setData(results);
      changeLoadingBoolean();
    } else {
      setData(results.results);
      changeLoadingBoolean();
    }
  };
  React.useEffect(() => {
    getMovies();
  }, [uri]);
  return { data, isLoading };
};

export const useFetchSearch = (query) => {
  const [data, setData] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  const getSearch = async () => {
    const res = await fetch(
      `https://api.themoviedb.org/3/search/multi?api_key=8f39da33fa6dc69e363c433cc777b3c3&language=en-US&page=1&query=${query}`
    );
    const results = await res.json();

    let searchResult = [...results.results];

    for (let i = 1; i < results.total_pages; i++) {
      const response = await fetch(
        `https://api.themoviedb.org/3/search/multi?api_key=8f39da33fa6dc69e363c433cc777b3c3&language=en-US&page=${
          i + 1
        }&query=${query}`
      );
      const r = await response.json();

      searchResult = [...searchResult, ...r.results];
    }

    setData(searchResult);
    setIsLoading(false);
  };

  React.useEffect(() => {
    setIsLoading(true);
    getSearch();
  }, [query]);

  return { data, isLoading };
};
