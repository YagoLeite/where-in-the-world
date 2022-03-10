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
import LeftDetail from "./details/LeftDetail";
import RightDetail from "./details/RightDetail";

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
    const borderCountries = loadedData[0].borders ? (
      loadedData[0].borders.map((border, index) => {
        const borderCountriesToName = state.all.filter(
          (country) => country.alpha3Code === border
        );
        return (
          <Flex
            key={index}
            h="100%"
            w="100%"
            justifyContent="center"
            alignItems="center"
          >
            <Text
              className="test"
              bg="transparent"
              _hover={{ bg: "transparent" }}
              _active={{ bg: "transparent" }}
              borderWidth="3px"
              w="150px"
              textAlign="center"
              h="fit-content"
              p="2%"
              shadow="lg"
              cursor="pointer"
              onClick={() => route.push(borderCountriesToName[0]?.name)}
              wordBreak="break-all"
            >
              {borderCountriesToName[0]?.name}
            </Text>
          </Flex>
        );
      })
    ) : (
      <Text>No borders found</Text>
    );
  }

  return (
    <Box w="100%" h="100%">
      {loading && (
        <Flex
          h="calc(100vh - 4.5rem)"
          justifyContent="center"
          alignItems="center"
        >
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
                {!loading && loadedData && <LeftDetail data={loadedData[0]} />}
                {!loading && loadedData && <RightDetail data={loadedData[0]} />}
                {!loading && loadedData && (
                  <GridItem display="flex" gap={2} colStart={1} colEnd={-1}>
                    <HStack w="100%" h="100%">
                      <Text fontWeight={800}>Border Countries:</Text>
                      <Grid
                        gap={2}
                        maxW="100%"
                        gridTemplateColumns="repeat(auto-fit, minmax(50px, 150px))"
                      >
                        {borderCountries}
                      </Grid>
                    </HStack>
                    {/* <Grid gridTemplateColumns="repeat(auto-fit, minmax(50px, 1fr))">
                      <Text fontWeight={800}>Border Countries:</Text>
                      {borderCountries}
                    </Grid> */}
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
