import { useRouter } from "next/router";
import {
  Box,
  Text,
  Flex,
  Input,
  Image,
  Button,
  FormLabel,
  FormControl,
  Link,
} from "@chakra-ui/react";
import { ArrowBackIcon } from "@chakra-ui/icons";
import { theme } from "./_app";

export default function Login() {
  const router = useRouter();
  return (
    <Flex w="100vw" h="100vh" overflow="hidden">
      <Box w="50%" h="100%" bg={theme.color.marlboro}></Box>
      <Flex
        flexDirection={"column"}
        paddingX="4em"
        position="relative"
        top="17%"
      >
        <Flex
          cursor={"pointer"}
          alignItems={"center"}
          paddingBottom="2em"
          onClick={() => router.push("/")}
        >
          <ArrowBackIcon />
          <Text
            fontWeight={"bold"}
            color={theme.color.black}
            fontSize="larger"
            marginLeft={".5em"}
          >
            Kembali
          </Text>
        </Flex>
        <Box w={400}>
          <Image src="https://ik.imagekit.io/znmtfjgtk/Finy/logo-red-black_FYGp0atON.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1663993532635"></Image>
          <Text color={theme.color.ash} paddingBottom="2em">
            Silakan masuk ke akun Anda untuk menghubungkan informasi transaksin
            anda
          </Text>
        </Box>
        <form>
          <FormControl isRequired>
            <FormLabel fontWeight={"bold"}>User ID</FormLabel>
            <Input placeholder="ID One Mobile / Internet Banking" />
          </FormControl>
          <FormControl isRequired marginTop={"1em"}>
            <FormLabel fontWeight={"bold"}>Password</FormLabel>
            <Input placeholder="Password One Mobile / Internet Banking" />
          </FormControl>
          <Button
            bg={theme.color.apple}
            color={theme.color.mild}
            type="submit"
            marginTop={"2em"}
            marginBottom={"1em"}
            border={"solid 2px transparent"}
            _hover={{
              border: `solid 2px ${theme.color.apple}`,
              color: theme.color.apple,
              bg: theme.color.mild,
            }}
          >
            Masuk
          </Button>
          <Text color={theme.color.ash}>
            Belum memiliki tabungan OCBC,{" "}
            <Link color={theme.color.apple}>Daftar sekarang!</Link>
          </Text>
        </form>
      </Flex>
    </Flex>
  );
}
