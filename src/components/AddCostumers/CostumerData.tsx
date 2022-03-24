import { Box, Button, Icon, Tr, Checkbox, Td, Text } from '@chakra-ui/react'
import { RiPencilLine } from 'react-icons/ri';

interface CostumerDataProps{
    nomeLoja: string;
    siteLoja: string;
    dataContrato: string;
}

export function CostumerData(  { nomeLoja, siteLoja, dataContrato} : CostumerDataProps){
    return(
        <Tr>
        <Td px="6">
            <Checkbox colorScheme="pink" />
        </Td>
        <Td>{nomeLoja}</Td>
        <Td>{siteLoja}</Td>
        <Td>{dataContrato}</Td>
        <Td>
            <Button as="a" size="sm" fontSize="sm" colorScheme="purple" leftIcon={<Icon as={RiPencilLine} />}>
                Editar
            </Button>
        </Td>
    </Tr>
    );
}