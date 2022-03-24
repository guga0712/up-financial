import { Box, Button, Flex, Heading, Icon, useDisclosure, Table, Thead, Tr, Th, Checkbox, Tbody } from "@chakra-ui/react";
import { RiAddLine } from "react-icons/ri";
import { AddFinancial } from "../../components/AddFinancial";
import { FinancialData } from "../../components/AddFinancial/FinancialData";
import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";

export default function financialList() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <Box>
            <Header />
            <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
                <Sidebar />
                <Box flex="1" borderRadius="10px" bg="gray.800" p="8">
                    <Flex mb="8" justify="space-between" align="center">
                        <Heading size="lg" fontWeight="normal">Financeiro</Heading>
                        <Button onClick={onOpen} as="a" size="sm" fontSize="sm" colorScheme="pink" leftIcon={<Icon as={RiAddLine} fontSize="20px" />}>
                            Criar novo
                        </Button>
                    </Flex>
                    <AddFinancial isOpen={isOpen} onClose={onClose} />
                    <Table colorScheme="whiteAlpha">
                        <Thead>
                            <Tr>
                            <Th px="6" color="gray.300" width="8">
                                    <Checkbox colorScheme="pink" />
                                </Th>
                                <Th>Titulo</Th>
                                <Th>Valor</Th>
                                <Th>Tipo de Transação</Th>
                                <Th>Responsável</Th>
                                <Th>Data</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            <FinancialData titulo="Movimentação 1" valor="2000" tipoTransacao="Entrada" responsavel="Samuel" date="24/03/2022"></FinancialData>
                            <FinancialData titulo="Movimentação 2" valor="5000" tipoTransacao="Saída" responsavel="Victor" date="24/03/2022"></FinancialData>
                            <FinancialData titulo="Movimentação 3" valor="1000" tipoTransacao="Sáida" responsavel="David" date="24/03/2022"></FinancialData>
                        </Tbody>
                    </Table>
                </Box>

            </Flex>
        </Box>
    );
}