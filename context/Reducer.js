export const CountriesReducer = (state, action) => {
  const filtering = (arr, region) => {
    return arr.filter((countrie) => countrie.region === region);
  };
  switch (action.type) {
    case "FIRST-LOADING":
      return {
        ...state,
        All: action.value,
        Africa: filtering(action.value, "Africa"),
        Americas: filtering(action.value, "Americas"),
        Asia: filtering(action.value, "Asia"),
        Europe: filtering(action.value, "Europe"),
        Oceania: filtering(action.value, "Oceania"),
      };
    default:
      return state;
  }
};
