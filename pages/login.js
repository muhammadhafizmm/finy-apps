import { useEffect, useState } from "react";
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
import { firebaseCloudMessaging } from "../utils/firebase";

export default function Login() {
  const router = useRouter();
  const [height, setHeight] = useState("100vh");

  const askNotificationPermission = () => {
    const validation = setToken();
    // Calls the getMessage() function if the token is there
    async function setToken() {
      try {
        const token = await firebaseCloudMessaging.init();
        if (token) {
          console.log("token", token);
          return true;
        }
      } catch (error) {
        console.log(error);
      }
      return false;
    }
    return validation;
  };

  useEffect(() => {
    setHeight(window.innerHeight + "px");
  });
  return (
    <Flex
      h={height}
      overflow="hidden"
      bg={theme.color.apple}
      justifyContent="center"
      alignItems={"center"}
    >
      <Flex
        w={{ base: "90%" }}
        flexDirection={"column"}
        padding={{ base: "2em" }}
        bg={theme.color.mild}
        height="fit-content"
        borderRadius={"15px"}
      >
        <Flex
          cursor={"pointer"}
          alignItems={"center"}
          paddingBottom={{ base: "1em" }}
          onClick={() => router.push("/")}
        >
          <ArrowBackIcon />
          <Text
            fontWeight={"bold"}
            color={theme.color.black}
            fontSize={{ base: "small" }}
            marginLeft={".5em"}
          >
            Kembali
          </Text>
        </Flex>
        <Box w={{ base: "100%" }}>
          <Image
            w={{ base: "100px" }}
            src="https://ik.imagekit.io/znmtfjgtk/Finy/logo-red-black_FYGp0atON.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1663993532635"
          ></Image>
          <Text
            color={theme.color.ash}
            paddingBottom="2em"
            fontSize={{ base: "small" }}
          >
            Silakan masuk ke akun Anda untuk menghubungkan informasi transaksin
            anda
          </Text>
        </Box>
        <form>
          <FormControl>
            <FormLabel fontWeight={"bold"}>User ID</FormLabel>
            <Input placeholder="ID One Mobile / Internet Banking" value="test_user_hack@on" />
          </FormControl>
          <FormControl marginTop={"1em"}>
            <FormLabel fontWeight={"bold"}>Password</FormLabel>
            <Input placeholder="Password One Mobile / Internet Banking" value="cute12345" type="password"/>
          </FormControl>
          <Button
            onClick={async () => {
              const userAns = await askNotificationPermission();
              if (userAns) {
                router.push("/check-your-login-status");
              }
            }}
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
          <Text color={theme.color.ash} fontSize={{ base: "small" }}>
            Belum memiliki tabungan OCBC,{" "}
            <Link color={theme.color.marlboro}>Daftar sekarang!</Link>
          </Text>
        </form>
      </Flex>
    </Flex>
  );
}
