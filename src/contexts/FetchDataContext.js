import { createContext, useState } from "react";
import axios from "axios";
import data from "../mockdata/data";

export const FetchDataContextObject = createContext();

const FetchDataContextProvider = ({ children }) => {
  const [fetchedData, setFetchedData] = useState(null);

  const fetchData = async () => {
    const url = "https://reqres.in/api/workintech";
    const postData = data;

    await axios
      .post(url, postData)
      .then((res) => {
        console.log("Data", res.data);
        setFetchedData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <FetchDataContextObject.Provider value={{ fetchData, fetchedData }}>
      {children}
    </FetchDataContextObject.Provider>
  );
};

export default FetchDataContextProvider;
