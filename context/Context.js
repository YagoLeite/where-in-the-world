import { createContext, useContext, useReducer, useState } from "react";
import { CountriesReducer } from "./Reducer";

const Countries = createContext();

const CountriesContext = ({ children }) => {
  const [region, setRegion] = useState("All");
  const [state, dispatch] = useReducer(CountriesReducer, {
    all: [],
    africa: [],
    americas: [],
    asia: [],
    europe: [],
    oceania: [],
    input: "",
  });

  return (
    <Countries.Provider value={{ state, dispatch, region, setRegion }}>
      {children}
    </Countries.Provider>
  );
};

export const CountriesState = () => {
  return useContext(Countries);
};

export default CountriesContext;
