import { Box, Text, Flex } from '@chakra-ui/react'

interface BoxProps {
    name: string;
    value: string;
    type: string;
    qtd?: string;
    qtdNumber?: string;
}

export function BoxesDashboard({ name, value, type, qtd, qtdNumber }: BoxProps) {
    return (
        <Box
            p="15px"
            bg="gray.900"
            w="300px"
            h="auto"
            alignItems="center"
            display="flex"
            flexDirection="column"
            borderRadius="10px"
        >
            <Flex flexDirection="column" gap="4" w="100%" p="10px">
                <Text fontSize="20px" color="white" fontWeight="bold">{name}</Text>
                <Flex
                    flexDirection="column"
                    h="auto"
                    w="100%"
                >
                    <Text fontSize="15px" color="gray.600">{qtd}</Text>
                    <Text fontSize="20px" color="white">{qtdNumber}</Text>
                    <Text fontSize="15px" color="gray.600">{type}</Text>
                    <Text fontSize="20px" color="white">R$ {value}</Text>
                </Flex>
            </Flex>

        </Box>
    );
}