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
    <Box>
      <Head>
        <title>Where in the World?</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Body loading={loading} />
    </Box>
  );
}
