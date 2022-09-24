import {
  Image,
  Flex,
  Box,
  useMediaQuery,
  Text,
  Button,
  Circle,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import Navbar from "../components/Navbar";
import { theme } from "./_app";

export default function Home() {
  const router = useRouter();
  const [isMobile] = useMediaQuery("(max-width: 768px)");
  return (
    <>
      <Navbar />
      <Flex
        bg={theme.color.apple}
        position="relative"
        height={`calc(100vh - ${isMobile ? "62px" : "97px"})`}
        alignItems={"center"}
        flexDirection="column"
        top={isMobile ? 0 : 97}
        overflow={"hidden"}
      >
        <Flex
          position={"relative"}
          bottom={"-10%"}
          left={"8vh"}
          flexDirection="column"
          zIndex={10}
        >
          <Image
            position={"relative"}
            w={"30vh"}
            left={"6.5vh"}
            bottom={"20px"}
            maxW={isMobile ? "unset" : "100%"}
            src="https://ik.imagekit.io/znmtfjgtk/Finy/Notifications__5__4sPwyxHoj.png?ik-sdk-version=javascript-1.4.3&updatedAt=1664023027008"
          />
          <Image
            h={"105vh"}
            maxW={isMobile ? "unset" : "100%"}
            src="https://ik.imagekit.io/znmtfjgtk/Finy/Frame_4__7__x9jh3G_qK.png?ik-sdk-version=javascript-1.4.3&updatedAt=1664018979668"
          />
        </Flex>
        <Flex
          w={isMobile ? "100%" : 768}
          flexDirection={"column"}
          alignItems="center"
          position={"absolute"}
          bottom="2em"
          zIndex={10}
        >
          <Box>
            <Image
              w={"25vh"}
              maxW={isMobile ? "unset" : "100%"}
              src="https://ik.imagekit.io/znmtfjgtk/Finy/Group_9_86F5o3t9C.png?ik-sdk-version=javascript-1.4.3&updatedAt=1664026150745"
            ></Image>
            <Box width={"35vh"} marginTop={"-1em"}>
              <Text
                color={theme.color.mild}
                fontWeight="bold"
                fontSize={"3.2vh"}
              >
                Solusi pintar buat atur keuangan Kamu!
              </Text>
            </Box>
            <Button
              size={{ base: "sm", md: "sm", xl: "md" }}
              onClick={() => router.push("/login")}
              alignSelf={"self-start"}
              backgroundColor={theme.color.marlboro}
              color={theme.color.mild}
              boxShadow={"0px 4.54098px 4.54098px rgba(0, 0, 0, 0.25)"}
              _hover={{ bg: "#D81D24" }}
            >
              Mulai Sekarang
            </Button>
          </Box>
        </Flex>
        <Circle
        position={"absolute"}
        bottom="-30vh"
        bg={theme.color.marlboro}
        size={"90vh"}
        ></Circle>
      </Flex>
    </>
  );
}
