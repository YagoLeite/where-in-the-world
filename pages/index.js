import { Box } from "@chakra-ui/react";
import Head from "next/head";
import Header from "../components/Header/Header";
import Body from "../components/Body/Body";
import useFetch from "../hooks/useFetch";
import { CountriesState } from "../context/Context";
import { useEffect } from "react";

export default function Home() {
  const { state, dispatch } = CountriesState();
  const { loadedData, loading } = useFetch("https://restcountries.com/v2/all");

  useEffect(() => {
    if (loadedData) {
      dispatch({ type: "FIRST-LOADING", value: loadedData });
    }
  }, [loadedData, dispatch]);

  return (
    <Box h="100%" minH="100vh" w="100%">
      <Head>
        <title>Where in the World?</title>
        <meta
          name="description"
          content="REST Countries API with color theme switcher"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Body loading={loading} />
    </Box>
  );
}
