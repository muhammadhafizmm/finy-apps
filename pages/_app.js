import { useEffect, useState } from "react";
import { Box, ChakraProvider, Text, useToast } from "@chakra-ui/react";
import { useMediaQuery } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";
import * as firebase from "firebase/app";
import { firebaseCloudMessaging } from "../utils/firebase";
import PushNotificationLayout from "../components/PushNotificationLayout";

export const theme = extendTheme({
  fonts: {
    body: `'Roboto', sans-serif`,
  },
  color: {
    marlboro: "#ED1C24",
    mild: "#FFFFFF",
    apple: "#E54D4B",
    rose: "#95302E",
    ash: "#575B5F",
    black: "#000000",
  },
  breakpoints: {
    sm: "320px",
    md: "480px",
    lg: "960px",
    xl: "1200px",
  },
});

function MyApp({ Component, pageProps }) {
  const [isMobile] = useMediaQuery("(max-width: 480px)");

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
        <Box
          style={
            isMobile
              ? { maxWidth: "100%"}
              : { width: 480}
          }
        >
          <PushNotificationLayout>
            <Component {...pageProps} />
          </PushNotificationLayout>
        </Box>
      </Box>
    </ChakraProvider>
  );
}

export default MyApp;
