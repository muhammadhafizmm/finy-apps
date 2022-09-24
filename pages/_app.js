import "../styles/globals.css";
import { Flex, Box, ChakraProvider } from "@chakra-ui/react";
import { useMediaQuery } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  fonts: {
    body: `'Roboto', sans-serif`,
  },
  color: {
    marlboro: "#B73A38",
    mild: "#FFFFFF",
    apple: "#E54D4B",
    rose: "#95302E",
    ash: "#575B5F",
    black: "#000000",
  },
  breakpoints: {
    xs: "360",
    sm: "520px",
    md: "768px",
    lg: "960px",
    xl: "1200px",
  },
});

function MyApp({ Component, pageProps }) {
  const [isMobile] = useMediaQuery("(max-width: 768px)");
  return (
    <ChakraProvider theme={theme}>
      <Box
        width={"100vw"}
        style={
          isMobile
          ? { display: "block" }
          : { display: "flex", justifyContent: "center" }
        }
      >
        <Box style={isMobile ? { maxWidth: "100%" } : { width: 768 }}>
          <Component {...pageProps} />
        </Box>
      </Box>
    </ChakraProvider>
  );
}

export default MyApp;
