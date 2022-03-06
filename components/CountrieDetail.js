import React from "react";
import {
  Box,
  Stack,
  VStack,
  Text,
  Grid,
  GridItem,
  Flex,
  Spinner,
  Image,
} from "@chakra-ui/react";
import useFetch from "../hooks/useFetch";
import { CountriesState } from "../context/Context";
import { useRouter } from "next/router";

const CountrieDetail = () => {
  const route = useRouter();
  const name = route.query.countryName;
  console.log(name);
  const { loadedData, loading } = useFetch(
    `https://restcountries.com/v2/name/${route.query.countryName}`
  );

  const { state } = CountriesState();

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

    const borderCountries = loadedData[0].borders ? (
      loadedData[0].borders.map((border, index) => {
        const borderCountriesToName = state.all.filter(
          (country) => country.alpha3Code === border
        );
        return (
          <Text
            h="fit-content"
            w="fit-content"
            borderWidth="1px"
            shadow="dark-lg"
            key={index}
            onClick={() => route.push(borderCountriesToName[0]?.name)}
          >
            {borderCountriesToName[0]?.name}
          </Text>
        );
      })
    ) : (
      <Text>No borders found</Text>
    );
  }

  return (
    <>
      <Box onClick={() => route.back()}>Voltar</Box>
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
      <Stack direction={["column", "column", "column", "row"]} px="3%">
        {loadedData && (
          <Box
            bg="red"
            w={["350px", "400px", "500px", "1000px"]}
            h={["300px", "300px", "300px", "450px"]}
          >
            <Image src={loadedData[0].flag} w="100%" h="100%" />
          </Box>
        )}
        {/* {!loading && loadedData && firstInfo}
        {!loading && loadedData && secondInfo}
        {!loading && loadedData && borderCountries} */}
        <Grid w="100%" gridTemplateColumns="repeat(2, 1fr)" bg="orange">
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
