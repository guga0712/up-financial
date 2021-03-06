import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
    showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
    return (
        <Flex align="center">
            {showProfileData && (
                <Box mr="4" textAlign="right">
                    <Text>Gustavo Martins</Text>
                    <Text color="gray.300">martins0712@hotmail.com</Text>
                </Box>
            )}

            <Avatar size="md" name="Gustavo Martins" src="https://github.com/guga0712.png" />
        </Flex>
    );
}