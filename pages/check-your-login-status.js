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
import DotAnimation from "../components/DotAnimation";

export default function LoginCheck() {
  const router = useRouter();
  const [height, setHeight] = useState("100vh");

  useEffect(() => {
    setTimeout(() => {
      router.push("/login-success");
    }, 8500);
  }, []);

  useEffect(() => {
    setHeight(window.innerHeight + "px");
  });

  const prefersReducedMotion = usePrefersReducedMotion();
  const animation1 = prefersReducedMotion
    ? undefined
    : `${keyframe_notif1} 8s ease`;
  const animation2 = prefersReducedMotion
    ? undefined
    : `${keyframe_notif2} 8s ease`;
  const animation3 = prefersReducedMotion
    ? undefined
    : `${keyframe_notif3} 8s ease`;

  return (
    <Flex
      h={height}
      flexDirection={"column"}
      alignItems={"center"}
      padding="2em 0"
      bg={theme.color.apple}
    >
      <VStack spacing={"1em"}>
        <Box position={"relative"} animation={animation1}>
          <Notification
            description={"Membaca data transaksi anda"}
            loading
          ></Notification>
        </Box>
        <Box position={"relative"} animation={animation2}>
          <Notification
            description={"Menganalisis data transaksi anda"}
            loading
          ></Notification>
        </Box>
        <Box pos={"relative"} animation={animation3}>
          <Notification
            description={"Membuat notifikasi untuk anda"}
            loading
          ></Notification>
        </Box>
        <Flex paddingTop={"3em"}>
          <Text
            fontWeight={"bold"}
            color={theme.color.mild}
            fontSize="3xl"
            marginRight={"6px"}
          >
            Loading
          </Text>
          <Box position="relative" bottom="-25px">
            <DotAnimation size={7} color={theme.color.mild}></DotAnimation>
          </Box>
        </Flex>
      </VStack>
    </Flex>
  );
}

const keyframe_notif1 = keyframes`
  0% {
    bottom: -10px;
    opacity: 0;
  }
  10% {
    bottom: 0;
    opacity: 1;
  }
  100% {
    bottom: 0;
    opacity: 1;
  }
`;
const keyframe_notif2 = keyframes`
  0% {
    bottom: -10px;
    opacity: 0;
  }
  30% {
    bottom: -10px;
    opacity: 0;
  }
  40% {
    bottom: 0;
    opacity: 1;
  }
  100% {
    bottom: 0;
    opacity: 1
  }
`;
const keyframe_notif3 = keyframes`
  0% {
    bottom: -10px;
    opacity: 0;
  }
  60% {
    bottom: -10px;
    opacity: 0;
  }
  70% {
    bottom: 0;
    opacity: 1
  }
  100% {
    bottom: 0;
    opacity: 1
  }
`;
