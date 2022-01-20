import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

export function Profile() {
    return (
        <Flex align="center">
            <Box mr="4" textAlign="right">
                <Text>Leonardo Petta do Nascimento</Text>
                <Text color="gray.300" fontSize="small">
                    leonardocps9@gmail.com
                </Text>
            </Box>
            <Avatar size="md" name="Diego Fernandes" src="https://avatars.githubusercontent.com/u/39427966?v=4" />
        </Flex>
    );
}
