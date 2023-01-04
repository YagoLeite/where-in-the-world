import { Box, Flex, useColorModeValue } from "@chakra-ui/react";
import Head from "next/head";
import Header from "../components/Header/Header";
import Body from "../components/Body/Body";
import useFetch from "../hooks/useFetch";
import { CountriesState } from "../context/Context";
import { useEffect } from "react";

export default function Home() {
  const { state, dispatch } = CountriesState();
  const { loadedData, loading } = useFetch("https://restcountries.com/v2/all");
  const bg = useColorModeValue("hsl(0, 0%, 98%)", "gray.800");

  useEffect(() => {
    if (loadedData) {
      dispatch({ type: "FIRST-LOADING", value: loadedData });
    }
  }, [loadedData, dispatch]);

  return (
    <Flex
      direction="column"
      h="100%"
      minH="100vh"
      w="100%"
      justify="center"
      align="center"
      bg={bg}
    >
      <Head>
        <title>Where in the World?</title>
        <meta
          name="description"
          content="REST Countries API with color theme switcher"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Flex
        direction="column"
        w="100%"
        py={["10px", "15px", "20px"]}
        px={["15px", "15px", "20px"]}
        maxW="1900px"
        gap={["10px", "15px", "30px"]}
      >
        <Header />
        <Body loading={loading} />
      </Flex>
    </Flex>
  );
}
