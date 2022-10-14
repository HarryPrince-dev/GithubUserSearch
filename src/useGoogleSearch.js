import { useState, useEffect } from "react";

const useGoogleSearch = (term) => {
  let [data, setData] = useState(null);
  
    useEffect(() => {
      if(term !== null)
      {
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
      }
      else
      {
        setData("Not Found")
      }
    }, [term]);

  return { data };
};

export default useGoogleSearch;