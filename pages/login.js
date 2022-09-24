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
    <Flex
      h="100vh"
      overflow="hidden"
      bg={theme.color.marlboro}
      justifyContent="center"
      alignItems={"center"}
    >
      <Flex
        w={{base: "90%", md: "unset"}}
        flexDirection={"column"}
        padding={{base:"1em 2em" ,md:"2em 4em"}}
        bg={theme.color.mild}
        height="fit-content"
        borderRadius={"20px"}
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
            fontSize={{base: "small", sm: "medium", md: "large"}}
            marginLeft={".5em"}
          >
            Kembali
          </Text>
        </Flex>
        <Box w={{base: "100%", md: 500}}>
          <Image 
          w={{base: "100px", md: "135px"}}
          src="https://ik.imagekit.io/znmtfjgtk/Finy/logo-red-black_FYGp0atON.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1663993532635"></Image>
          <Text color={theme.color.ash} paddingBottom="2em" fontSize={{base: "small", md:"medium"}}>
            Silakan masuk ke akun Anda untuk menghubungkan informasi transaksin
            anda
          </Text>
        </Box>
        <form>
          <FormControl>
            <FormLabel fontWeight={"bold"}>User ID</FormLabel>
            <Input placeholder="ID One Mobile / Internet Banking" />
          </FormControl>
          <FormControl marginTop={"1em"}>
            <FormLabel fontWeight={"bold"}>Password</FormLabel>
            <Input placeholder="Password One Mobile / Internet Banking" />
          </FormControl>
          <Button
            onClick={() => router.push("/check-your-login-status")}
            bg={theme.color.marlboro}
            color={theme.color.mild}
            marginTop={"2em"}
            marginBottom={"1em"}
            border={"solid 2px transparent"}
            _hover={{
              border: `solid 2px ${theme.color.marlboro}`,
              color: theme.color.marlboro,
              bg: theme.color.mild,
            }}
          >
            Masuk
          </Button>
          <Text color={theme.color.ash} fontSize={{base:"small", md:"medium"}}>
            Belum memiliki tabungan OCBC,{" "}
            <Link color={theme.color.marlboro}>Daftar sekarang!</Link>
          </Text>
        </form>
      </Flex>
    </Flex>
  );
}
