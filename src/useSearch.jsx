import { useState, useEffect } from "react";
import axios from "axios";
export const useSearch = ({ q, page = 1, searchType = "movie" }) => {
  const [data, setData] = useState([]);
  const [totalPage, setTotalPage] = useState(null);
  const [resultsCount, setResultsCount] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const getSearchResult = async () => {
    const s = searchType === "movie" ? "multi" : searchType;
    try {
      const res = await axios(
        `https://api.themoviedb.org/3/search/${s}?query=${q}&include_adult=false&language=en-US&page=${page}`,
        {
          headers: {
            authorization: "Bearer " + process.env.REACT_APP_ACCESS_TOKEN,
          },
        }
      );

      const { results, total_pages, total_results } = res.data;
      setData(results);
      setTotalPage(total_pages);
      setResultsCount(total_results);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getSearchResult();
  }, [q, page, searchType]);

  return { isLoading, data, totalPage, resultsCount };
};
