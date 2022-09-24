import { useRouter } from "next/router"
import { useEffect } from "react"
import { Text } from "@chakra-ui/react";

export default function LoginCheck() {
    const router = useRouter();
    useEffect(() => {
        setTimeout(() => {
            router.push("/login-success")
        }, 5000)
    }, [])
    return (
        <Text>
            Check Login
        </Text>
    )
}