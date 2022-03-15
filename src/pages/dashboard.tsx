import { Box, Flex, Text, SimpleGrid, Heading } from "@chakra-ui/react";
import { BoxesDashboard } from "../components/BoxesDashboard";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";

export default function Dashboard() {
    return (
        <Flex direction="column" h="100vh">
            <Header />
            <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
                <Sidebar />
                <Flex flexDirection="column" gap="4" bg="gray.800" p="30px" borderRadius="10px" maxWidth="1200px">
                    <Heading size="lg" fontWeight="normal">Dashboard</Heading>
                    <Flex gap="4">
                        <BoxesDashboard name="Conta Santander" value="100" type="Total" />
                        <BoxesDashboard name="Balanço" value="200" type="Valor" />
                        <BoxesDashboard name="Cliente" value="300" type="Total" qtd="Quantidade" qtdNumber="5" />
                        <BoxesDashboard name="Despesa Fixo" value="300" type="Total" />
                    </Flex>
                </Flex>
            </Flex>
        </Flex >
    )
}