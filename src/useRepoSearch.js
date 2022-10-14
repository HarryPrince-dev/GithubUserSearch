import { useState, useEffect } from "react";

const useRepoSearch = (data) => {
  let [repodata, setRepoData] = useState(null);
  
  useEffect(() => {
    if(data !== "Not Found" && data !== null)
    { 
      const fetchData = async () => {
        fetch(data.repos_url)
          .then((response) => response.json())
          .then((result) => {
            setRepoData(result);
          });
      };
      fetchData();
   }
   else
   {
      setRepoData("Not Found");
   }

  }, [data]);

  return { repodata };
};

export default useRepoSearch;
