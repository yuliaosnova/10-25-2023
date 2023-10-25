import { createContext, useContext, useEffect, useState } from "react";

import * as API from "../../servises/api";

const Context = createContext();

export const useData = () => useContext(Context);

export const Provider = ({ children }) => {
  const [tabs, setTabs] = useState([]);

  useEffect(() => {
    API.fetchData()
      .then((response) => {
        console.log(response.data);
        setTabs(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return <Context.Provider value={{ tabs }}>{children}</Context.Provider>;
};
