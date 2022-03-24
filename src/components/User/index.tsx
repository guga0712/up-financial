import { Box, Button, Icon, Tr, Checkbox, Td, Text } from '@chakra-ui/react'
import { RiPencilLine } from 'react-icons/ri';

interface UserProps {
    name: string;
    email: string;
    createdDate: string;
}

export function UserData({ name, email, createdDate }: UserProps) {
    return (
        <Tr>
            <Td px="6">
                <Checkbox colorScheme="pink" />
            </Td>
            <Td>
                <Box>
                    <Text fontWeight="bold">{name}</Text>
                    <Text fontSize="small" color="gray.300">{email}</Text>
                </Box>
            </Td>
            <Td>
                {createdDate}
            </Td>
            <Td>
                <Button as="a" size="sm" fontSize="sm" colorScheme="purple" leftIcon={<Icon as={RiPencilLine} />}>
                    Editar
                </Button>
            </Td>
        </Tr>
    );
}