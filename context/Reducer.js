export const CountriesReducer = (state, action) => {
  const filtering = (arr, region) => {
    return arr.filter((countrie) => countrie.region === region);
  };
  switch (action.type) {
    case "FIRST-LOADING":
      return {
        ...state,
        all: action.value,
        africa: filtering(action.value, "Africa"),
        americas: filtering(action.value, "Americas"),
        asia: filtering(action.value, "Asia"),
        europe: filtering(action.value, "Europe"),
        oceania: filtering(action.value, "Oceania"),
      };
    default:
      return state;
  }
};
