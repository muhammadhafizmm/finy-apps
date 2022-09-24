import { useEffect, useState } from "react";
import { Box, ChakraProvider, Text, useToast } from "@chakra-ui/react";
import { useMediaQuery } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";
import * as firebase from "firebase/app";
import { firebaseCloudMessaging } from "../utils/firebase";

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
    sm: "320px",
    md: "768px",
    lg: "960px",
    xl: "1200px",
  },
});

function MyApp({ Component, pageProps }) {
  const [isMobile] = useMediaQuery("(max-width: 768px)");
  const [tokenTest, setTokenTest] = useState("")
  const toast = useToast();

  useEffect(() => {
    setToken();

    // Event listener that listens for the push notification event in the background
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker.addEventListener("message", (event) => {
        console.log("event for the service worker", event);
      });
    }

    // Calls the getMessage() function if the token is there
    async function setToken() {
      try {
        const token = await firebaseCloudMessaging.init();
        if (token) {
          console.log("token", token);
          setTokenTest(token)
          getMessage();
        }
      } catch (error) {
        console.log(error);
      }
    }
  });

  // Get the push notification message and triggers a toast to display it
  function getMessage() {
    const messaging = firebase.messaging();
    messaging.onMessage((message) => {
      toast({
        title: "Test.",
        description: "Mantap ga tuh.",
        status: "success",
        duration: 9000,
        isClosable: true,
      });
    });
  }

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
        <Text>{tokenTest && tokenTest}</Text>
        <Box style={isMobile ? { maxWidth: "100%" } : { width: 768 }}>
          <Component {...pageProps} />
        </Box>
      </Box>
    </ChakraProvider>
  );
}

export default MyApp;
