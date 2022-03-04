import {
  Box,
  Flex,
  Grid,
  GridItem,
  useColorModeValue,
  Spinner,
} from "@chakra-ui/react";
import React from "react";
import Card from "./Card";
import useFetch from "../../hooks/useFetch";

const test = [1, 2, 3, 4, 5, 6, 6, 7, 8, 8, 9, 4, 4, 1, 2];

const Body = () => {
  const text = useColorModeValue("dark", "light");
  const bg = useColorModeValue("hsl(0, 0%, 98%)", "gray.800");

  const { loadedData, loading } = useFetch("https://restcountries.com/v2/all");
  // console.log(loadedData);
  return (
    <Box bg={bg} h="100vh" w="100%">
      {loading && (
        <Flex h="100%" w="100%" justifyContent="center" alignItems="center">
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="blue.500"
            size="xl"
          />
        </Flex>
      )}
      <Grid
        h="100%"
        mx="5%"
        gridTemplateColumns="repeat(auto-fit, minmax(290px, 1fr))"
      >
        {!loading &&
          loadedData &&
          loadedData.map((a) => (
            <GridItem
              h="380px"
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <Card data={a} />
            </GridItem>
          ))}
      </Grid>
    </Box>
  );
};

export default Body;
