import "../styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";

import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
  fonts: {
    body: `'Roboto', sans-serif`,
  },
  color: {
    marlboro: "#B73A38",
    mild: "#FFFFFF",
    apple: "#ED1C24",
    rose: "#95302E",
    black: "black"
  }
})

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
