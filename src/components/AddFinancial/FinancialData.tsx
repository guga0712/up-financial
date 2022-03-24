import { Box, Button, Icon, Tr, Checkbox, Td, Text } from '@chakra-ui/react'
import { RiPencilLine } from 'react-icons/ri';

interface FinancialDataProps{
    titulo: string;
    valor: string;
    tipoTransacao: string;
    responsavel: string;
    date: string;

}

export function FinancialData( { titulo, valor, tipoTransacao, responsavel, date} : FinancialDataProps){
    return(
        <Tr>
            <Td px="6">
                <Checkbox colorScheme="pink" />
            </Td>
            <Td>{titulo}</Td>
            <Td>{valor}</Td>
            <Td>{tipoTransacao}</Td>
            <Td>{responsavel}</Td>
            <Td>{date}</Td>
            <Td>
                <Button as="a" size="sm" fontSize="sm" colorScheme="purple" leftIcon={<Icon as={RiPencilLine} />}>
                    Editar
                </Button>
            </Td>
        </Tr>
    );
}