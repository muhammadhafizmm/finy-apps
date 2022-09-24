import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Flex, VStack, Text, Box } from "@chakra-ui/react";
import Notification from "../components/Notification";
import { theme } from "./_app";
import DotAnimation from "../components/DotAnimation";

export default function LoginCheck() {
  const router = useRouter();
  const [height, setHeight] = useState("100vh");

  useEffect(() => {
    setHeight(window.innerHeight + "px");
  });

  return (
    <Flex
      h={height}
      flexDirection={"column"}
      alignItems={"center"}
      padding="2em 0"
      bg={theme.color.rose}
    >
      <VStack spacing={"1em"}>
        <Notification
          description={"Membaca data transaksi anda..."}
          loading
        ></Notification>
        <Notification
          description={"Menganalisis data transaksi anda..."}
        ></Notification>
        <Notification
          description={"Membuat notifikasi untuk anda..."}
        ></Notification>
        <Flex>
          <Text fontWeight={"bold"} color={theme.color.mild} fontSize="3xl" marginRight={"6px"}>
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
