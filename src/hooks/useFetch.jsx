import { useState, useEffect } from "react";
import fatchDataFromApi from "../components/utils/api";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    fatchDataFromApi(url)
      .then((res) => {
        setData(res);
        setError(null);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, [url]);
  return { data, loading, error };
};

export default useFetch;
