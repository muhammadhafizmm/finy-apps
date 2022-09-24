import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import {
  Flex,
  VStack,
  keyframes,
  Text,
  Box,
  usePrefersReducedMotion,
} from "@chakra-ui/react";
import Notification from "../components/Notification";
import { theme } from "./_app";

export default function LoginCheck() {
  const router = useRouter();
  const [height, setHeight] = useState("100vh");

  useEffect(() => {
    setTimeout(() => {
      window.location.replace("/")
    }, 3500);
  }, []);

  useEffect(() => {
    setHeight(window.innerHeight + "px");
  });

  const prefersReducedMotion = usePrefersReducedMotion();
  const animation1 = prefersReducedMotion
    ? undefined
    : `${keyframe_notif1} 3s ease`;

  return (
    <Flex
      position={"relative"}
      h={height}
      flexDirection={"column"}
      alignItems={"center"}
      padding="2em 0"
      bg={theme.color.apple}
      justifyContent="center"
    >
      <Box pos="absolute" top="3em">
        <Box position={"relative"} animation={animation1}>
          <Notification
            description={"🎉Notifikasi berhasil di buat 🎉"}
          ></Notification>
        </Box>
      </Box>
      <Flex paddingTop={"3em"} justifySelf="center">
        <Text
          fontWeight={"bold"}
          color={theme.color.mild}
          fontSize="3xl"
          marginRight={"6px"}
        >
          Berhasil
        </Text>
      </Flex>
    </Flex>
  );
}

const keyframe_notif1 = keyframes`
  0% {
    bottom: -10px;
    opacity: 0;
  }
  30% {
    bottom: 0;
    opacity: 1;
  }
  100% {
    bottom: 0;
    opacity: 1;
  }
`;
