import { Grid, Box } from "@chakra-ui/react";
import React from "react";

const Test = () => {
  return (
    <Grid w="100%" templateColumns="repeat(auto-fit, minmax(290px, 1fr))">
      <Box bg="red" h="200px"></Box>
      <Box bg="red" h="200px" w="100%"></Box>
      <Box bg="red" h="200px" w="100%"></Box>
      <Box bg="red" h="200px" w="100%"></Box>
      <Box bg="red" h="200px" w="100%"></Box>
    </Grid>
  );
};

export default Test;
