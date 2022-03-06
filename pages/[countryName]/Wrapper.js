import React from "react";
import { Text, VStack } from "@chakra-ui/react";
import CountrieDetail from "../../components/CountrieDetail";

const Wrapper = () => {
  return (
    <VStack h="90.5vh" bg="blue" justifyContent="center" alignItems="center">
      <CountrieDetail />
    </VStack>
  );
};

export default Wrapper;
