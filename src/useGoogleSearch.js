import { useState, useEffect } from "react";

const useGoogleSearch = (term) => {
  let [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      fetch(
        `https://api.github.com/users/${term}`
      )
        .then((response) => response.json())
        .then((result) => {
          setData(result);
        });
    };

    fetchData();
  }, [term]);
  if(data == null)
  {data = {login: "Not Found"}}

  return { data };
};

export default useGoogleSearch;
