import React from "react";
import { InputGroup, Input, InputLeftElement } from "@chakra-ui/react";
import { FiSearch } from "react-icons/fi";
import { CountriesState } from "../context/Context";

const Search = () => {
  const { state, dispatch } = CountriesState();

  const inputChangeHandler = (event) => {
    dispatch({ type: "INPUT-CHANGE", value: event.target.value });
  };

  return (
    <InputGroup shadow="lg" w="96" display={{ base: "none", md: "flex" }}>
      <InputLeftElement color="gray.500">
        <FiSearch />
      </InputLeftElement>
      <Input
        onChange={inputChangeHandler}
        placeholder="Search for countries..."
      />
    </InputGroup>
  );
};

export default Search;
