import React, { useEffect, useState } from "react";
import {
  Text,
  Flex,
  Spinner,
  Image,
  ScaleFade,
  useDisclosure,
  Button,
} from "@chakra-ui/react";
import useFetch from "../hooks/useFetch";
import { CountriesState } from "../context/Context";
import { useRouter } from "next/router";
import { BiArrowBack } from "react-icons/bi";
import LeftDetail from "./details/LeftDetail";
import RightDetail from "./details/RightDetail";

const CountrieDetail = () => {
  const { isOpen, onToggle } = useDisclosure();
  const [loadedData, setLoadedData] = useState([{}]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const route = useRouter();
  const name = route.query.countryName;
  console.log(name);
  // const { loadedData, loading } = useFetch(
  //   `https://restcountries.com/v2/name/${name}`
  // );

  useEffect(() => {
    if (route.query.countryName) {
      setLoading(true);
      fetch(`https://restcountries.com/v2/name/${route.query.countryName}`)
        .then((response) => {
          if (response.ok) {
            return response.json();
          }
        })
        .then((data) => setLoadedData(data))
        .catch((error) => setError(error))
        .finally(() => setLoading(false));
    }
  }, [route.query.countryName]);

  const { state } = CountriesState();

  useEffect(() => {
    if (loadedData && !isOpen) {
      onToggle();
    }
  }, [loadedData, isOpen, onToggle]);

  const borderCountrieS = loadedData[0].borders?.map((border, index) => {
    const borderCountriesToName = state.all.filter(
      (country) => country.alpha3Code === border
    );

    return borderCountriesToName[0]?.name.length > 20
      ? borderCountriesToName[0]?.name.substring(0, 17) + "..."
      : borderCountriesToName[0]?.name;
  });

  console.log(borderCountrieS);

  if (loadedData) {
    const borderCountries = loadedData[0].borders ? (
      loadedData[0].borders?.map((border, index) => {
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
                    {/* {borderCountries} */}
                    {borderCountrieS?.map((borderName, index) => {
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
                            onClick={() =>
                              route.push(borderCountriesToName[0]?.name)
                            }
                            wordBreak="break-all"
                          >
                            {borderName}
                          </Text>
                        </Flex>
                      );
                    })}
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
