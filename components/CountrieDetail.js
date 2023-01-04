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
            h="fit-content"
            w="fit-content"
            justifyContent="center"
            alignItems="center"
          >
            <Text
              bg="transparent"
              borderColor="gray.400"
              fontSize={["10px", "13px", "15px"]}
              borderWidth="1px"
              w={["100px", "130px", "150px"]}
              textAlign="center"
              overflowX="auto"
              shadow="sm"
              cursor="pointer"
              onClick={() => route.push(borderCountriesToName[0]?.name)}
              wordBreak="break-all"
            >
              {borderCountriesToName[0]?.name.length > 20
                ? borderCountriesToName[0]?.name.substring(0, 17) + "..."
                : borderCountriesToName[0]?.name}
            </Text>
          </Flex>
        );
      })
    ) : (
      <Text>No borders found</Text>
    );
  }

  return (
    <Flex direction="column" w="100%" h="100%">
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
          <Flex direction="column" gap="15px" h="100%">
            <Button
              bg="transparent"
              maxW="100px"
              alignSelf="left"
              borderWidth="1px"
              shadow="sm"
              _hover={{ bg: "transparent" }}
              _active={{ bg: "transparent" }}
              onClick={() => route.back()}
              leftIcon={<BiArrowBack />}
            >
              Voltar
            </Button>
            <Flex
              gap={["15px", "30px"]}
              direction={["column", "column", "column", "row"]}
              h="100%"
            >
              {loadedData && (
                <Flex w="100%">
                  <Image
                    h="100%"
                    w="100%"
                    src={loadedData[0].flag}
                    alt="Country Flag"
                    objectFit="cover"
                  />
                </Flex>
              )}

              <Flex w="100%" direction="column" h="100%" gap="15px">
                <Flex gap="10px" direction={["column", "row", "row", "row"]}>
                  <LeftDetail data={loadedData[0]} />
                  <RightDetail data={loadedData[0]} />
                </Flex>
                <Flex gap="10px" h="100%" align="center" justify="left">
                  <Flex w="fit-content">
                    <Text fontWeight={800} w="100%">
                      Border Countries:
                    </Text>
                  </Flex>
                  <Flex maxW="600px" wrap="wrap" gap="5px">
                    {borderCountries}
                  </Flex>
                </Flex>
              </Flex>
            </Flex>
          </Flex>
        </ScaleFade>
      )}
    </Flex>
  );
};

export default CountrieDetail;

// <Grid
// w="100%"
// gap={3}
// gridTemplateColumns={["repeat(1, 1fr)", "repeat(2, 1fr)"]}
// >
// {!loading && loadedData && <LeftDetail data={loadedData[0]} />}
// {!loading && loadedData && <RightDetail data={loadedData[0]} />}
// {!loading && loadedData && (
//   <GridItem display="flex" gap={2} colStart={1} colEnd={-1}>
//     <HStack w="100%" h="100%">
//       <Text fontWeight={800}>Border Countries:</Text>
//       <Grid
//         gap={2}
//         maxW="100%"
//         gridTemplateColumns="repeat(auto-fit, minmax(50px, 150px))"
//       >
//         {/* <Flex wrap="wrap"> */}
//         {borderCountries}
//         {/* </Flex> */}
//       </Grid>
//     </HStack>
//   </GridItem>
// )}
// </Grid>
