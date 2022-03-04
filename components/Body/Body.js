import {
  Box,
  Flex,
  Grid,
  GridItem,
  useColorModeValue,
  Spinner,
  Stack,
} from "@chakra-ui/react";
import React from "react";
import Card from "./Card";

import CountriesMenu from "../CountriesMenu";
import { CountriesState } from "../../context/Context";
import Search from "../Search";

const Body = (props) => {
  const { state, region } = CountriesState();
  const text = useColorModeValue("dark", "light");
  const bg = useColorModeValue("hsl(0, 0%, 98%)", "gray.800");

  const test =
    region === "All"
      ? state.All
      : region === "Africa"
      ? state.Africa
      : region === "Americas"
      ? state.Americas
      : region === "Asia"
      ? state.Asia
      : region === "Europe"
      ? state.Europe
      : state.Oceania;

  return (
    <Box bg={bg} h="100vh" w="100%" px="3%">
      <Stack direction={["column", "row"]} justifyContent="space-between">
        <Search />
        <CountriesMenu />
      </Stack>
      {props.loading && (
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
      <Grid h="100%" gridTemplateColumns="repeat(auto-fit, minmax(290px, 1fr))">
        {!props.loading &&
          test?.map((a) => (
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
