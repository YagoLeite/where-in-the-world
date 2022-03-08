import "../styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import CountriesContext from "../context/Context";
import theme from "../components/theme";
import "@fontsource/nunito-sans/800.css";
import "@fontsource/nunito-sans/300.css";
import "@fontsource/nunito-sans/600.css";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <CountriesContext>
        <Component {...pageProps} />
      </CountriesContext>
    </ChakraProvider>
  );
}

export default MyApp;
