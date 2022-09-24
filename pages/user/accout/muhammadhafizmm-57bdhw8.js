import { useRouter } from "next/router"
import { Text } from "@chakra-ui/react";

export default function User() {
    const router = useRouter();
    return (
        <Text onClick={() => router.push("/login")}>
            Kembali HEHE
        </Text>
    )
}