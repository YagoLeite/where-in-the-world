import "../styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import CountriesContext from "../context/Context";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <CountriesContext>
        <Component {...pageProps} />
      </CountriesContext>
    </ChakraProvider>
  );
}

export default MyApp;
