import {
  Box,
  Flex,
  Grid,
  GridItem,
  useColorModeValue,
  Spinner,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import Card from "./Card";

import CountriesMenu from "../CountriesMenu";
import { CountriesState } from "../../context/Context";
import Search from "../Search";

const Body = ({ loading }) => {
  const { state, region } = CountriesState();
  const text = useColorModeValue("dark", "light");
  const bg = useColorModeValue("hsl(0, 0%, 98%)", "gray.800");

  const countriesList =
    region === "All"
      ? state.all
      : region === "Africa"
      ? state.africa
      : region === "Americas"
      ? state.americas
      : region === "Asia"
      ? state.asia
      : region === "Europe"
      ? state.europe
      : state.oceania;

  const searchFilteredList = countriesList.filter((country) =>
    country.name.toLowerCase().includes(state.input.toLowerCase())
  );

  console.log(countriesList);

  return (
    <Flex
      direction="column"
      gap={["10px", "15px", "30px"]}
      bg={bg}
      h="100vh"
      w="100%"
    >
      <Flex
        direction={["column", "column", "row"]}
        justifyContent="space-between"
        w="100%"
        gap={["10px", "15px", "30px"]}
      >
        <Flex w={["100%", "100%", "50%", "50%"]}>
          <Search countriesList={countriesList} />
        </Flex>
        <Flex w={["100%", "100%", "30%", "30%"]}>
          <CountriesMenu />
        </Flex>
      </Flex>
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
        gap={["10px", "30px", "30px"]}
        gridTemplateColumns="repeat(auto-fit, minmax(300px, 1fr))"
      >
        {!loading && countriesList.length === 0 && (
          <Flex
            direction="column"
            h="100%"
            w="100%"
            align="center"
            fontSize={["15px", "20px", "25px"]}
            fontWeight="700"
            color="red"
          >
            <Text textAlign="center">
              {`The API I'm using may be going through some issues.`}
            </Text>
            <Text textAlign="center">Sorry for the inconvenience</Text>
          </Flex>
        )}
        {!loading &&
          state.input === "" &&
          countriesList?.map((a, index) => (
            <GridItem
              h="380px"
              display="flex"
              justifyContent="center"
              alignItems="center"
              key={index}
            >
              <Card data={a} />
            </GridItem>
          ))}
        {!loading &&
          state.input !== "" &&
          searchFilteredList.map((a, index) => (
            <GridItem
              h="380px"
              display="flex"
              justifyContent="center"
              alignItems="center"
              key={index}
            >
              <Card data={a} />
            </GridItem>
          ))}
      </Grid>
    </Flex>
  );
};

export default Body;
