import { Box, Button, Flex, Heading, Icon, useDisclosure, Table, Thead, Tbody, Tr, Checkbox, Th  } from "@chakra-ui/react";
import { RiAddLine } from "react-icons/ri";
import { AddCostumer } from "../../components/AddCostumers";
import { CostumerData } from "../../components/AddCostumers/CostumerData";
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
                        <Heading size="lg" fontWeight="normal">Clientes</Heading>
                        <Button onClick={onOpen} as="a" size="sm" fontSize="sm" colorScheme="pink" leftIcon={<Icon as={RiAddLine} fontSize="20px" />}>
                            Criar novo
                        </Button>
                    </Flex>
                    <AddCostumer onClose={onClose} isOpen={isOpen} />
                    <Table colorScheme="whiteAlpha">
                        <Thead>
                            <Tr>
                            <Th px="6" color="gray.300" width="8">
                                    <Checkbox colorScheme="pink" />
                                </Th>
                                <Th>Nome da loja</Th>
                                <Th>SiteLoja</Th>
                                <Th>Data Contrato</Th>
                                <Th></Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            <CostumerData nomeLoja="AmarPlus" siteLoja="www.site.com" dataContrato="24/03/2022"></CostumerData>
                            <CostumerData nomeLoja="Athele" siteLoja="www.site.com" dataContrato="24/03/2022"></CostumerData>
                            <CostumerData nomeLoja="Plushé" siteLoja="www.site.com" dataContrato="24/03/2022"></CostumerData>
                        </Tbody>
                    </Table>
                </Box>
            </Flex>
        </Box>
    );
}