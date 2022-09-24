import { Box, Button, Circle, Link, Flex, Image, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import { theme } from "./_app";

const Style = styled.div``;

export default function Home() {
  const router = useRouter();
  return (
    <Box backgroundColor={theme.color.marlboro} w="100vw" h="100vh">
      <Navbar />
      <Flex
        h={"calc(100% - 98px)"}
        flexDirection="row"
        p={"0 4vw 0 9vw"}
        justifyContent="space-between"
        overflowY="hidden"
      >
        <Flex
          flexDirection={"column"}
          height="100%"
          justifyContent={"center"}
          position={"relative"}
          top="-1em"
        >
          <Image
            w={380}
            src="https://ik.imagekit.io/znmtfjgtk/Finy/logo-white_doRIzeNTh.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1663994870815"
          />
          <Box width={375} marginTop={"-1em"}>
            <Text color={theme.color.mild} fontWeight="bold" fontSize={35}>
              Solusi pintar buat atur keuangan Kamu!
            </Text>
          </Box>
          <Button
            onClick={() => router.push("/login")}
            alignSelf={"self-start"}
            backgroundColor={theme.color.apple}
            color={theme.color.mild}
            boxShadow={"0px 4.54098px 4.54098px rgba(0, 0, 0, 0.25)"}
            _hover={{ bg: "#D81D24" }}
          >
            Mulai Sekarang
          </Button>
        </Flex>
        <Box position={"relative"} width="50%" height={"100%"}>
          <Image
            position="absolute"
            zIndex="10"
            left="-18%"
            top="30%"
            maxW={215}
            width="40%"
            src="https://ik.imagekit.io/znmtfjgtk/Finy/notification-listrik_iIs_ADou-.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1664002271673"
          />
          <Image
            position="absolute"
            left="-12%"
            top="8%"
            zIndex="10"
            maxW={215}
            width="40%"
            src="https://ik.imagekit.io/znmtfjgtk/Finy/notification-listrik_iIs_ADou-.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1664002271673"
          />
          <Image
            position="absolute"
            right="10px"
            top="18%"
            zIndex="10"
            maxW={215}
            width="40%"
            src="https://ik.imagekit.io/znmtfjgtk/Finy/notification-listrik_iIs_ADou-.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1664002271673"
          />
          <Image
            boxSize={"84%"}
            position="absolute"
            bottom="0"
            left="2em"
            zIndex="5"
            src={
              "https://ik.imagekit.io/znmtfjgtk/Finy/iphone-hands-main_-SnTGoMbYl.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1664001545603"
            }
          />
          <Circle
            w={600}
            h={600}
            backgroundColor={theme.color.rose}
            position="absolute"
            bottom="-5em"
            left="1em"
          ></Circle>
        </Box>
      </Flex>
    </Box>
  );
}
