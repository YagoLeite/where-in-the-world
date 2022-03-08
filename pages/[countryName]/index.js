import { Box } from "@chakra-ui/react";
import React from "react";
import Header from "../../components/Header/Header";
import Wrapper from "./Wrapper";

const index = () => {
  return (
    <Box minH="100vh" w="100%">
      <Header />
      <Wrapper />
    </Box>
  );
};

export default index;
