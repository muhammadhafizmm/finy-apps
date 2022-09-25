import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { Box, useToast } from "@chakra-ui/react";
import { useState } from "react";
import Notification from "./Notification";

function PushNotificationLayout({ children }) {
  const [isAvailable, setIsAvailable] = useState()
  const router = useRouter();
  const toast = useToast();
  useEffect(() => {
    // Event listener that listens for the push notification event in the background
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker.addEventListener("message", (event) => {
        console.log("event for the service worker", event);
        toast({
          position: "top-middle",
          render: () => (
            <Notification 
              description={event.data?.firebaseMessaging?.payload?.data?.title}
              paragraph={event.data?.firebaseMessaging?.payload?.data?.body}
            />
          ),
        });
      });
    }
  }, []);

  return <>{children}</>;
}

export default PushNotificationLayout;
