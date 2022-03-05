import React from "react";
import { InputGroup, Input, InputLeftElement } from "@chakra-ui/react";
import { FiSearch } from "react-icons/fi";

const Search = () => {
  return (
    <InputGroup w="96" display={{ base: "none", md: "flex" }}>
      <InputLeftElement color="gray.500">
        <FiSearch />
      </InputLeftElement>
      <Input placeholder="Search for countries..." />
    </InputGroup>
  );
};

export default Search;
