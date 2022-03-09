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
  Button,
  HStack,
} from "@chakra-ui/react";
import useFetch from "../hooks/useFetch";
import { CountriesState } from "../context/Context";
import { useRouter } from "next/router";
import { BiArrowBack } from "react-icons/bi";

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
        <Text fontWeight={800} fontSize="18px">
          {loadedData[0].name}
        </Text>
        <Flex gap={1}>
          <Text fontWeight={600}>Native Name: </Text>
          <Text fontWeight={300}>{loadedData[0].nativeName}</Text>
        </Flex>
        <Flex gap={1}>
          <Text fontWeight={600}>Population: </Text>
          <Text fontWeight={300}>{loadedData[0].population}</Text>
        </Flex>
        <Flex gap={1}>
          <Text fontWeight={600}>Region: </Text>
          <Text fontWeight={300}>{loadedData[0].region}</Text>
        </Flex>
        <Flex gap={1}>
          <Text fontWeight={600}>Sub Region: </Text>
          <Text fontWeight={300}>{loadedData[0].subregion}</Text>
        </Flex>
        <Flex gap={1}>
          <Text fontWeight={600}>Capital: </Text>
          <Text fontWeight={300}>{loadedData[0].capital}</Text>
        </Flex>
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
        <Flex gap={1}>
          <Text fontWeight={600}>Top Level Domain:</Text>
          {loadedData[0].topLevelDomain ? (
            loadedData[0].topLevelDomain.map((a, index) => {
              if (index === loadedData[0].topLevelDomain.length - 1) {
                return (
                  <Text fontWeight={300} key={index}>
                    {a}
                  </Text>
                );
              } else {
                return (
                  <Text fontWeight={300} key={index}>
                    {a},{" "}
                  </Text>
                );
              }
            })
          ) : (
            <Text>No Top Level Domain found.</Text>
          )}
        </Flex>
        <Flex gap={1}>
          <Text fontWeight={600}>Currencies:</Text>
          {loadedData[0].currencies ? (
            loadedData[0].currencies.map((a, index) => {
              if (index === loadedData[0].currencies.length - 1) {
                return (
                  <Text fontWeight={300} key={index}>
                    {a.code}
                  </Text>
                );
              } else {
                return (
                  <Text fontWeight={300} key={index}>
                    {a.code},
                  </Text>
                );
              }
            })
          ) : (
            <Text>No currencies found.</Text>
          )}
        </Flex>
        <Flex gap={1}>
          <Text fontWeight={600}>Languages:</Text>
          {loadedData[0].languages ? (
            loadedData[0].languages.map((a, index) => {
              if (index === loadedData[0].languages.length - 1) {
                return (
                  <Text fontWeight={300} key={index}>
                    {a.name}
                  </Text>
                );
              } else {
                return (
                  <Text fontWeight={300} key={index}>
                    {a.name},
                  </Text>
                );
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
          <Button
            bg="transparent"
            _hover={{ bg: "transparent" }}
            _active={{ bg: "transparent" }}
            h="fit-content"
            w="fit-content"
            borderWidth="3px"
            shadow="lg"
            key={index}
            onClick={() => route.push(borderCountriesToName[0]?.name)}
          >
            {borderCountriesToName[0]?.name}
          </Button>
        );
      })
    ) : (
      <Text>No borders found</Text>
    );
  }

  return (
    <Box w="100%" h="100%">
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
          <Stack direction="column" gap={2}>
            <Button
              bg="transparent"
              maxW="100px"
              alignSelf="left"
              borderWidth="1px"
              shadow="lg"
              _hover={{ bg: "transparent" }}
              _active={{ bg: "transparent" }}
              onClick={() => route.back()}
              leftIcon={<BiArrowBack />}
            >
              Voltar
            </Button>
            <Stack gap={3} direction={["column", "column", "column", "row"]}>
              {loadedData && (
                <Flex>
                  <Image src={loadedData[0].flag} w="100%" h="100%" />
                </Flex>
              )}
              <Grid
                w="100%"
                gap={3}
                gridTemplateColumns={["repeat(1, 1fr)", "repeat(2, 1fr)"]}
              >
                {!loading && loadedData && <GridItem>{firstInfo} </GridItem>}
                {!loading && loadedData && <GridItem>{secondInfo} </GridItem>}
                {!loading && loadedData && (
                  <GridItem display="flex" gap={2} colStart={1} colEnd={-1}>
                    <HStack w="100%" h="100%">
                      <Text fontWeight={800}>Border Countries:</Text>
                      <Flex
                        w="100%"
                        h="100%"
                        justifyContent="center"
                        alignItems="center"
                        gap={1}
                      >
                        {borderCountries}
                      </Flex>
                    </HStack>
                  </GridItem>
                )}
              </Grid>
            </Stack>
          </Stack>
        </ScaleFade>
      )}
    </Box>
  );
};

export default CountrieDetail;
