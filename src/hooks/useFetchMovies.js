import { useState, useEffect } from "react";
import axios from "axios";

function useFetchMovies(url) {
  const [movieData, setMovieData] = useState({});
  const [loading, setLoading] = useState(true); //처음 로딩 상태값은 true여야 함!
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true); //fetch를 해와야하므로 true
    setMovieData(null);
    setError(null);
    axios
      .get(url)
      .then((res) => {
        setMovieData(res.data.data.movie);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setLoading(false); //fetch가 끝났으므로 false
      });
  }, [url]);

  return { movieData, loading, error };
}

export default useFetchMovies;
