import {
  Box,
  Flex,
  Image,
  Text,
  Button,
  useMediaQuery,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { theme } from "../pages/_app";

const NAVBAR_DESKTOP_LIST_WIDTH = 520;

export default function Navbar() {
  const router = useRouter();
  const [isMobile] = useMediaQuery("(max-width: 768px)");
  return (
    <Flex
      position={{ base: "relative", md: "absolute" }}
      left="0"
      justifyContent={"space-between"}
      backgroundColor={theme.color.mild}
      w="100%"
      padding={{ base: "1em 1.5em", md: "1em 3em" }}
      boxShadow={"0px 10px 5px rgba(0, 0, 0, 0.08)"}
    >
      <Box>
        <Image
          width={{base: "65px", md:"80px"}}
          maxW="none"
          src="https://ik.imagekit.io/znmtfjgtk/Finy/logo-red-black_FYGp0atON.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1663993532635"
        />
      </Box>
      <Flex
        flexDirection={"row"}
        alignItems={"center"}
        w={NAVBAR_DESKTOP_LIST_WIDTH}
        justifyContent={{ base: "flex-end", md: "space-between" }}
      >
        <Text fontWeight={"medium"} display={{ base: "none", md: "block" }}>
          Produk
        </Text>
        <Text fontWeight={"medium"} display={{ base: "none", md: "block" }}>
          Tentang Kami
        </Text>
        <Flex
          flexDirection={"row"}
          alignItems="center"
          display={{ base: "none", md: "flex" }}
        >
          <Text fontWeight={"bold"} color={theme.color.apple}>
            ID
          </Text>
          <Box paddingX={".7em"}>
            <Box
              height="14px"
              backgroundColor={theme.color.black}
              width="1px"
            />
          </Box>
          <Text fontWeight={"medium"}>EN</Text>
        </Flex>
        <Button
          size={{ base: "sm", md: "md" }}
          onClick={() => router.push("/login")}
          borderRadius={"10px"}
          background={theme.color.marlboro}
          color={theme.color.mild}
          border="solid 2px transparent"
          _hover={{
            border: `solid 2px ${theme.color.marlboro}`,
            color: theme.color.marlboro,
            bg: theme.color.mild,
          }}
        >
          <Text>Mulai Sekarang</Text>
        </Button>
      </Flex>
    </Flex>
  );
}
