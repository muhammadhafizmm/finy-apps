import { Text } from "@chakra-ui/react";
import { useRouter } from "next/router"
import { useEffect } from "react"

export default function LoginSuccess() {
    const router = useRouter();
    useEffect(() => {
        setTimeout(() => {
            router.push("/user/account/muhammadhafizmm-57bdhw8")
        }, 3000)
    }, [])
    return (
        <Text>
            Login Berhasil
        </Text>
    )
}