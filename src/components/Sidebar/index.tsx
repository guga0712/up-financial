import { Box, Stack, Text, Link, Icon } from "@chakra-ui/react";
import { RiBankLine, RiDashboardLine, RiGroupLine } from "react-icons/ri";
import { NavLink } from "./NavLink";

export function Sidebar() {
    return (
        <Box as="aside" w="64" mr="8">
            <Stack spacing="12" align="flex-start">
                <Box>
                    <Text fontWeight="bold" color="gray.400" fontSize="small">GERAL</Text>
                    <Stack spacing="4" mt="8" align="stretch">
                        <NavLink icon={RiDashboardLine} href="/dashboard">Dashboard</NavLink>
                        <NavLink icon={RiGroupLine} href="/costumers">Clientes</NavLink>
                        <NavLink icon={RiBankLine} href="/financial">Financeiro</NavLink>
                        <NavLink icon={RiGroupLine} href="/users">Usuários</NavLink>
                    </Stack>
                </Box>
            </Stack>
        </Box>
    );
}