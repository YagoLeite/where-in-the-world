import React from "react";
import { Box, Stack, VStack, Text, Grid, GridItem } from "@chakra-ui/react";
import useFetch from "../hooks/useFetch";
import { CountriesState } from "../context/Context";
import Link from "next/link";

const CountrieDetail = () => {
  const { loadedData, loading } = useFetch(
    "https://restcountries.com/v2/name/peru"
  );

  const { state } = CountriesState();

  console.log(loadedData);
  if (loadedData) {
    const firstInfo = (
      <VStack
        alignItems="left"
        justifyContent="center"
        w="100%"
        h="100%"
        fontSize="14px"
      >
        <Text>{loadedData[0].name}</Text>
        <Text>Native Name: {loadedData[0].nativeName}</Text>
        <Text>Population: {loadedData[0].population}</Text>
        <Text>Region: {loadedData[0].region}</Text>
        <Text>Sub Region: {loadedData[0].subregion}</Text>
        <Text>Capital: {loadedData[0].capital}</Text>
      </VStack>
    );

    const secondInfo = (
      <VStack
        alignItems="left"
        justifyContent="center"
        w="100%"
        h="100%"
        fontSize="14px"
      >
        <Text>Top Level Domain: </Text>
        <Text>Currencies: asdasd</Text>
        <Text>Languages: asdasd, asasd</Text>
      </VStack>
    );

    const borderCountries = loadedData[0].borders.map((border, index) => {
      const borderCountriesToName = state.All.filter(
        (country) => country.alpha3Code === border
      );
      return (
        <Text
          h="fit-content"
          w="fit-content"
          borderWidth="1px"
          shadow="dark-lg"
          key={index}
        >
          {borderCountriesToName[0]?.name}
        </Text>
      );
    });
    console.log(state);
  }

  return (
    <>
      <Link href="/">voltar</Link>
      {/* <Grid h="50%" w="80%" gridTemplateColumns="repeat(4, 1fr)" gap={10}>
        <GridItem colStart="1" colEnd="3">
          <Box w="100%" h="100%" bg="red"></Box>
        </GridItem>
        {!loading && loadedData && (
          <>
            <GridItem>{firstInfo}</GridItem>
            <GridItem>{secondInfo}</GridItem>
            <GridItem>{borderCountries} </GridItem>
          </>
        )}
      </Grid> */}
      <Stack direction={["column", "column", "column", "row"]} px="3%">
        <Box bg="red" w="500px" h="450px"></Box>
        {/* {!loading && loadedData && firstInfo}
        {!loading && loadedData && secondInfo}
        {!loading && loadedData && borderCountries} */}
        <Grid gridTemplateColumns="repeat(2, 1fr)" bg="orange">
          {!loading && loadedData && <GridItem>{firstInfo} </GridItem>}
          {!loading && loadedData && <GridItem>{secondInfo} </GridItem>}
          {!loading && loadedData && (
            <GridItem display="flex" gap={2} colStart={1} colEnd={-1} bg="red">
              Border Countries: {borderCountries}
            </GridItem>
          )}
        </Grid>
      </Stack>
    </>
  );
};

export default CountrieDetail;
