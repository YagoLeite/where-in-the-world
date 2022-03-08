import React from "react";
import { Text, VStack } from "@chakra-ui/react";
import CountrieDetail from "../../components/CountrieDetail";

const Wrapper = () => {
  return (
    <VStack h="100%" w="100%" justifyContent="center" alignItems="center">
      <CountrieDetail />
    </VStack>
  );
};

export default Wrapper;
