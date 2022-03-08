import React from "react";
import { Text, VStack } from "@chakra-ui/react";
import CountrieDetail from "../../components/CountrieDetail";
import Test from "../../components/Test";

const Wrapper = () => {
  return (
    <VStack
      h="100%"
      w="100%"
      justifyContent="center"
      alignItems="center"
      p="3%"
    >
      <CountrieDetail />
      {/* <Test /> */}
    </VStack>
  );
};

export default Wrapper;
