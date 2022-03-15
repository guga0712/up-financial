import { Box, Flex, Heading, Button, Icon, Table, Thead, Tr, Th, Checkbox, Tbody, Td, Text } from '@chakra-ui/react'
import { RiAddLine, RiPencilLine } from 'react-icons/ri';
import { Header } from "../../components/Header"
import { Sidebar } from '../../components/Sidebar';
import { UserData } from '../../components/User'

export default function userList() {
    return (
        <Box>
            <Header />
            <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
                <Sidebar />
                <Box flex="1" borderRadius="10px" bg="gray.800" p="8">
                    <Flex mb="8" justify="space-between" align="center">
                        <Heading size="lg" fontWeight="normal">Usuários</Heading>
                        <Button as="a" size="sm" fontSize="sm" colorScheme="pink" leftIcon={<Icon as={RiAddLine} fontSize="20px" />}>
                            Criar novo
                        </Button>
                    </Flex>
                    <Table colorScheme="whiteAlpha">
                        <Thead>
                            <Tr>
                                <Th px="6" color="gray.300" width="8">
                                    <Checkbox colorScheme="pink" />
                                </Th>
                                <Th>Usuários</Th>
                                <Th>Data de cadastro</Th>
                                <Th width="8"></Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            <UserData name="Gustavo Martins" email="martins0712@hotmail.com" createdDate="15/03/2022" />
                            <UserData name="Samuel Oh" email="email1@hotmail.com" createdDate="15/03/2022" />
                            <UserData name="Usuário 1" email="email2@hotmail.com" createdDate="15/03/2022" />


                        </Tbody>
                    </Table>
                </Box>
            </Flex>
        </Box>
    );
}