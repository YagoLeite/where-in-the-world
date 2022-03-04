import { createContext, useContext, useReducer } from "react";
import { CountriesReducer } from "./Reducer";

const Countries = createContext();

const CountriesContext = ({ children }) => {
  const [state, dispatch] = useReducer(CountriesReducer, {
    all: [],
    africa: [],
    americas: [],
    asia: [],
    europe: [],
    oceania: [],
  });

  return (
    <Countries.Provider value={{ state, dispatch }}>
      {children}
    </Countries.Provider>
  );
};

export const CountriesState = () => {
  return useContext(Countries);
};

export default CountriesContext;
