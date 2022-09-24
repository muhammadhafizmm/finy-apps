import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { Box, useToast } from "@chakra-ui/react";

function PushNotificationLayout({ children }) {
  const router = useRouter();
  const toast = useToast();
  useEffect(() => {
    // Event listener that listens for the push notification event in the background
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker.addEventListener("message", (event) => {
        console.log("event for the service worker", event);
        toast({
          position: "bottom-left",
          render: () => (
            <Box color="white" p={3} bg="blue.500">
              Hello World
            </Box>
          ),
        });
      });
    }
  });

  return <>{children}</>;
}

export default PushNotificationLayout;
