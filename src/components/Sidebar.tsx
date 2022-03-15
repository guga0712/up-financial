import { Box, Stack, Text, Link, Icon } from "@chakra-ui/react";
import { RiBankLine, RiDashboardLine, RiUser3Line } from "react-icons/ri";

export function Sidebar() {
    return (
        <Box as="aside" w="64" mr="8">
            <Stack spacing="12" align="flex-start">
                <Box>
                    <Text fontWeight="bold" color="gray.400" fontSize="small">GERAL</Text>
                    <Stack spacing="4" mt="8" align="stretch">
                        <Link display="flex">
                            <Icon as={RiDashboardLine} fontSize="20" />
                            <Text ml="4" fontWeight="medium">Dashboard</Text>
                        </Link>
                        <Link display="flex">
                            <Icon as={RiUser3Line} fontSize="20" />
                            <Text ml="4" fontWeight="medium">Clientes</Text>
                        </Link>
                        <Link display="flex">
                            <Icon as={RiBankLine} fontSize="20" />
                            <Text ml="4" fontWeight="medium">Financeiro</Text>
                        </Link>
                    </Stack>
                </Box>
            </Stack>
        </Box>
    );
}