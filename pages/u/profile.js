import { useEffect, useState } from "react";
import {
  Text,
  Flex,
  Box,
  Image,
  useMediaQuery,
  VStack,
  Button,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import Navbar from "../../components/Navbar";
import { theme } from "../_app";
export default function Profile() {
  const router = useRouter();
  const [isMobile] = useMediaQuery("(max-width: 480px)");
  const [height, setHeight] = useState("100vh");

  useEffect(() => {
    setHeight(window.innerHeight + "px");
  });
  return (
    <>
      <Navbar auth />
      <Flex justifyContent="center">
        <VStack
          position={"relative"}
          top={{ base: 0, md: 73 }}
          w="95%"
          paddingTop={"1em"}
          spacing={"1em"}
        >
          <Flex
            padding={".8em"}
            h="fit-content"
            bg="#E77876"
            w="100%"
            borderRadius={"10px"}
            alignItems="center"
            justifyContent={"space-between"}
          >
            <Text fontWeight={"bold"} color={theme.color.mild} fontSize="xl">
              Atur notifikasi kamu di sini
            </Text>
            <Flex pos={"relative"} bottom="-5px" w="40px" h="40px">
              <Image src="https://ik.imagekit.io/znmtfjgtk/Finy/Group_16__1__9iSod7Dpk.png?ik-sdk-version=javascript-1.4.3&updatedAt=1664053900082"></Image>
            </Flex>
          </Flex>
          <Flex
            padding={"1.4em"}
            h="fit-content"
            bg={"#B73A38"}
            w="100%"
            borderRadius={"10px"}
            justifyContent={"space-between"}
            flexDirection="column"
          >
            <Flex w="100%" justifyContent={"space-between"}>
              <Box w="50%">
                <Text
                  fontSize={"large"}
                  fontWeight="bold"
                  color={theme.color.mild}
                >
                  Lihat raport analisis keuangan mu🏆
                </Text>
              </Box>
              <Box w="60px" h="60px">
                <Image src="https://ik.imagekit.io/znmtfjgtk/Finy/Frame_15_TbfeQ1ySS.png?ik-sdk-version=javascript-1.4.3&updatedAt=1664054734992"></Image>
              </Box>
            </Flex>
            <VStack spacing={"1em"} alignItems="flex-start">
              <Flex flexDirection={"column"}>
                <Text
                  fontSize={"large"}
                  fontWeight="bold"
                  color={theme.color.mild}
                >
                  ⭐ Financial Basic
                </Text>
                <Flex flexDirection={"column"}>
                  <Flex flexDirection={"column"} paddingLeft="1.3em">
                    <Text fontWeight="bold" color={theme.color.mild}>
                      Cashflow Positif ✅
                    </Text>
                    <Flex>
                      <Text
                        fontWeight="light"
                        color={theme.color.mild}
                        fontSize="small"
                      >
                        rata-rata cashflow bulanan kamu
                      </Text>{" "}
                      <Text
                        fontWeight="bold"
                        color={theme.color.mild}
                        fontSize="small"
                        paddingLeft={".2em"}
                      >
                        Rp. 5.877.190,00
                      </Text>
                    </Flex>
                  </Flex>
                  <Flex
                    flexDirection={"column"}
                    paddingLeft="1.3em"
                    paddingTop={".3em"}
                  >
                    <Text fontWeight="bold" color={theme.color.mild}>
                      Mengelola utang dengan baik ✅
                    </Text>
                    <Flex>
                      <Text
                        fontWeight="light"
                        color={theme.color.mild}
                        fontSize="small"
                      >
                        hutang yang kamu miliki adalah
                      </Text>{" "}
                      <Text
                        fontWeight="bold"
                        color={theme.color.mild}
                        fontSize="small"
                        paddingLeft={".2em"}
                      >
                        Rp. 0,00
                      </Text>
                    </Flex>
                  </Flex>
                </Flex>
              </Flex>
              <Flex flexDirection={"column"}>
                <Text
                  fontSize={"large"}
                  fontWeight="bold"
                  color={theme.color.mild}
                >
                  ⭐ Financial Safety
                </Text>
                <Flex flexDirection={"column"}>
                  <Flex flexDirection={"column"} paddingLeft="1.3em">
                    <Text fontWeight="bold" color={theme.color.mild}>
                      Mampu menabung dengan rutin ❎
                    </Text>
                    <Flex>
                      <Text
                        fontWeight="light"
                        color={theme.color.mild}
                        fontSize="small"
                      >
                        persentase tabungan terhadap income kamu
                      </Text>{" "}
                      <Text
                        fontWeight="bold"
                        color={theme.color.mild}
                        fontSize="small"
                        paddingLeft={".2em"}
                      >
                        hanya 18,7 %
                      </Text>
                    </Flex>
                  </Flex>
                  <Flex
                    flexDirection={"column"}
                    paddingLeft="1.3em"
                    paddingTop={".3em"}
                  >
                    <Text fontWeight="bold" color={theme.color.mild}>
                      Dana darurat 6x pengeluaran bulanan ❎
                    </Text>
                    <Flex>
                      <Text
                        fontWeight="light"
                        color={theme.color.mild}
                        fontSize="small"
                      >
                        tabungan kamu baru mencapai
                      </Text>{" "}
                      <Text
                        fontWeight="bold"
                        color={theme.color.mild}
                        fontSize="small"
                        paddingLeft={".2em"}
                      >
                        2,9x rata-rata pengeluaran
                      </Text>
                    </Flex>
                  </Flex>
                  <Flex
                    flexDirection={"column"}
                    paddingLeft="1.3em"
                    paddingTop={".3em"}
                  >
                    <Text fontWeight="bold" color={theme.color.mild}>
                      Asuransi ❎
                    </Text>
                    <Flex>
                      <Text
                        fontWeight="light"
                        color={theme.color.mild}
                        fontSize="small"
                      >
                        Uang yang kamu sisihkan untuk pembayaran asuransi
                      </Text>{" "}
                      <Text
                        fontWeight="bold"
                        color={theme.color.mild}
                        fontSize="small"
                        paddingLeft={".2em"}
                      >
                        Rp. 0,00
                      </Text>
                    </Flex>
                  </Flex>
                </Flex>
              </Flex>
              <Flex flexDirection={"column"}>
                <Text
                  fontSize={"large"}
                  fontWeight="bold"
                  color={theme.color.mild}
                >
                  ⭐ Financial Growth
                </Text>
                <Flex flexDirection={"column"}>
                  <Flex flexDirection={"column"} paddingLeft="1.3em">
                    <Text fontWeight="bold" color={theme.color.mild}>
                      Memilki produk investasi ✅
                    </Text>
                    <Text fontWeight="bold" color={theme.color.mild}>
                      Diversifikasi produk investasi ❎
                    </Text>
                    <Flex>
                      <Text
                        fontWeight="light"
                        color={theme.color.mild}
                        fontSize="small"
                      >
                        produk investasi yang kamu miliki ada
                      </Text>{" "}
                      <Text
                        fontWeight="bold"
                        color={theme.color.mild}
                        fontSize="small"
                        paddingLeft={".2em"}
                      >
                        1 jenis
                      </Text>
                    </Flex>
                  </Flex>
                  <Flex
                    flexDirection={"column"}
                    paddingLeft="1.3em"
                    paddingTop={".3em"}
                  >
                    <Text fontWeight="bold" color={theme.color.mild}>
                      Rencana pensiun ❎
                    </Text>
                    <Flex>
                      <Text
                        fontWeight="light"
                        color={theme.color.mild}
                        fontSize="small"
                      >
                        Uang yang kamu sisihkan untuk pensiun
                      </Text>{" "}
                      <Text
                        fontWeight="bold"
                        color={theme.color.mild}
                        fontSize="small"
                        paddingLeft={".2em"}
                      >
                        Rp. 0,00
                      </Text>
                    </Flex>
                  </Flex>
                </Flex>
              </Flex>
              <Flex flexDirection={"column"}>
                <Text
                  fontSize={"large"}
                  fontWeight="bold"
                  color={theme.color.mild}
                >
                  ⭐ Financial Freedom
                </Text>
                <Flex flexDirection={"column"}>
                  <Flex flexDirection={"column"} paddingLeft="1.3em">
                    <Text fontWeight="bold" color={theme.color.mild}>
                      Passive Income ❎
                    </Text>
                    <Flex>
                      <Text
                        fontWeight="light"
                        color={theme.color.mild}
                        fontSize="small"
                      >
                        uang hasil return investasi kamu mencapai <b>0% pengeluaran perbulan</b>
                      </Text>
                    </Flex>
                  </Flex>
                </Flex>
              </Flex>
            </VStack>
          </Flex>
          <Button
            size={"lg"}
            onClick={() => router.push("/")}
            borderRadius={"10px"}
            background={theme.color.rose}
            color={theme.color.mild}
            border="solid 2px transparent"
            _hover={{
              border: `solid 2px ${theme.color.rose}`,
              color: theme.color.rose,
              bg: theme.color.mild,
            }}
          >
            Keluar
          </Button>
          <Box padding={"15px"}></Box>
        </VStack>
      </Flex>
    </>
  );
}
