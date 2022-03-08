import React, { useEffect } from "react";
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
  ScaleFade,
  useDisclosure,
} from "@chakra-ui/react";
import useFetch from "../hooks/useFetch";
import { CountriesState } from "../context/Context";
import { useRouter } from "next/router";

const CountrieDetail = () => {
  const { isOpen, onToggle } = useDisclosure();
  const route = useRouter();
  const name = route.query.countryName;
  console.log(name);
  const { loadedData, loading } = useFetch(
    `https://restcountries.com/v2/name/${route.query.countryName}`
  );

  const { state } = CountriesState();

  useEffect(() => {
    if (loadedData && !isOpen) {
      onToggle();
    }
  }, [loadedData]);

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
        <Flex>
          <Text>Top Level Domain:</Text>
          {loadedData[0].topLevelDomain ? (
            loadedData[0].topLevelDomain.map((a, index) => {
              if (index === loadedData[0].topLevelDomain.length - 1) {
                return <Text key={index}>{a}</Text>;
              } else {
                return <Text key={index}>{a}, </Text>;
              }
            })
          ) : (
            <Text>No Top Level Domain found.</Text>
          )}
        </Flex>
        <Flex>
          <Text>Currencies:</Text>
          {loadedData[0].currencies ? (
            loadedData[0].currencies.map((a, index) => {
              if (index === loadedData[0].currencies.length - 1) {
                return <Text key={index}>{a.code}</Text>;
              } else {
                return <Text key={index}>{a.code}, </Text>;
              }
            })
          ) : (
            <Text>No currencies found.</Text>
          )}
        </Flex>
        <Flex>
          <Text>Languages:</Text>
          {loadedData[0].languages ? (
            loadedData[0].languages.map((a, index) => {
              if (index === loadedData[0].languages.length - 1) {
                return <Text key={index}>{a.name}</Text>;
              } else {
                return <Text key={index}>{a.name}, </Text>;
              }
            })
          ) : (
            <Text>No languages found.</Text>
          )}
        </Flex>
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
    console.log(loadedData);
  }

  return (
    <Box w="100%" h="100%">
      <Box alignSelf="left" onClick={() => route.back()}>
        Voltar
      </Box>
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
      {loadedData && !loading && (
        <ScaleFade in={isOpen} initialScale={0.9} offsetY="20px">
          <Stack direction={["column", "column", "column", "row"]} px="3%">
            {loadedData && (
              <Flex bg="red" w="100%" h="100%">
                <Image src={loadedData[0].flag} w="100%" h="100%" />
              </Flex>
            )}
            <Grid
              w="100%"
              gridTemplateColumns={["repeat(1, 1fr)", "repeat(2, 1fr)"]}
            >
              {!loading && loadedData && <GridItem>{firstInfo} </GridItem>}
              {!loading && loadedData && <GridItem>{secondInfo} </GridItem>}
              {!loading && loadedData && (
                <GridItem display="flex" gap={2} colStart={1} colEnd={-1}>
                  Border Countries: {borderCountries}
                </GridItem>
              )}
            </Grid>
          </Stack>
        </ScaleFade>
      )}
    </Box>
  );
};

export default CountrieDetail;
