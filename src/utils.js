import { useState, useEffect, useRef } from "react";

export const useFetch = (url) => {
  const [status, setState] = useState({
    loading: null,
    data: null,
    error: null
  });
  const apiCache = useRef({});
  function fetchData(url) {
    if (apiCache[url]) {
      setState(apiCache[url]);
      console.log("from cache");
      return;
    }
    setState({ loading: true });
    fetch(url)
      .then((res) => res.json())
      .then((result) => {
        setState({ loading: false, data: result });
        apiCache[url] = result;
      })
      .catch((error) => setState({ loading: false, error: error, data: null }));
  }
  useEffect(() => {
    if (url) {
      fetchData(url);
    }
  }, [url]);
  return [status, fetchData];
};
