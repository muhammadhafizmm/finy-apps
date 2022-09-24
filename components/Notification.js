import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { theme } from "../pages/_app";
import DotAnimation from "./DotAnimation";

export default function Notification({description, count, loading}) {
  return (
    <Box padding={"1em"} bg={"#F7A3A3"} w="400px" borderRadius={"15px"}>
      <Flex justifyContent={"space-between"}>
        <Flex alignItems={"center"}>
          <Flex
            w="24px"
            h="24px"
            padding="5px"
            bg={theme.color.mild}
            marginRight="8px"
            justifyContent={"center"}
            alignItems="center"
            borderRadius={"5px"}
          >
            <Image
              h="19px"
              src={
                "https://ik.imagekit.io/znmtfjgtk/Finy/FINY_LOGO_7wy5lJz3N.png?ik-sdk-version=javascript-1.4.3&updatedAt=1664022417807"
              }
            ></Image>
          </Flex>
          <Text fontWeight={"bold"} fontSize={"small"} color={"#B15555"}>
            FINY
          </Text>
        </Flex>
        <Text fontWeight={"bold"} fontSize={"small"} color={"#7F5353"}>
          1m ego
        </Text>
      </Flex>
      <Flex justifyContent={"space-between"}>
        <Text marginTop={"8px"} fontWeight={"bold"}>
            {description}
        </Text>
        {loading && <DotAnimation size={2} color={theme.color.black}></DotAnimation>}
      </Flex>
      {count && (
        <Flex marginTop={"5px"}>
            <Text fontWeight={"light"} color="#9E2B2B">{`${count} more notifications`}</Text>
        </Flex>
      )}
    </Box>
  );
}
