import React, { useEffect, useState } from "react";
import axios from "axios";
const fetchAPI = (query) => {
  return axios(query, {
    headers: { authorization: "Bearer " + process.env.REACT_APP_ACCESS_TOKEN },
  });
};
export default function useSearchTotal(q) {
  const [isLoading, setIsLoading] = useState(true);
  const [total, setTotal] = useState({
    tv: 0,
    person: 0,
    movie: 0,
  });

  const getResults = async () => {
    const apiTv =
      fetchAPI(`https://api.themoviedb.org/3/search/tv?query=${q}&include_adult=false&language=en-US&page=1';
        `);
    const apiMovie =
      fetchAPI(`https://api.themoviedb.org/3/search/movie?query=${q}&include_adult=false&language=en-US&page=1';
        `);
    const apiPerson =
      fetchAPI(`https://api.themoviedb.org/3/search/person?query=${q}&include_adult=false&language=en-US&page=1';
        `);

    const ers = await Promise.all([apiMovie, apiTv, apiPerson]);

    const result = ers.map((r) => r.data.total_results);

    setTotal({
      movie: result[0],
      tv: result[1],
      person: result[2],
    });
    setIsLoading(false);
  };

  useEffect(() => {
    getResults();
  }, [q]);

  return { isLoading, total };
}
