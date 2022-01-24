import {
    Box,
    Button,
    Checkbox,
    Flex,
    Heading,
    Icon,
    Table,
    Tbody,
    Td,
    Text,
    Th,
    Thead,
    Tr,
    useBreakpointValue,
} from "@chakra-ui/react";
import { RiAddLine } from "react-icons/ri";
import { Header } from "../../components/Header";
import { Pagination } from "../../components/Pagination";
import { Sidebar } from "../../components/Sidebar";
import Link from "next/link";
import { useEffect } from "react";

export default function UserList() {
    const isWideVersion = useBreakpointValue({ base: false, lg: true });

    useEffect(() => {
        fetch("http://localhost:3000/api/users")
            .then((response) => response.json())
            .then((data) => console.log(data));
    }, []);

    return (
        <Box>
            <Header></Header>
            <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
                <Sidebar></Sidebar>
                <Box flex="1" borderRadius={8} bgColor="gray.800" p="8">
                    <Flex mb="8" justify="space-between" align="center">
                        <Heading size="lg" fontWeight="normal">
                            Usuários
                        </Heading>
                        <Link href="/users/create" passHref>
                            <Button
                                as="a"
                                size="sm"
                                fontSize="sm"
                                colorScheme="pink"
                                leftIcon={<Icon fontSize="20" as={RiAddLine}></Icon>}>
                                Criar novo
                            </Button>
                        </Link>
                    </Flex>
                    <Table colorScheme="whiteAlpha">
                        <Thead>
                            <Tr>
                                <Th px={["4", "4", "6"]} color="gray.300" width="8">
                                    <Checkbox colorScheme="pink"></Checkbox>
                                </Th>
                                <Th>Usuário</Th>
                                {isWideVersion && <Th>Data de cadastro</Th>}

                                <Th width="8"></Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            <Tr>
                                <Td px={["4", "4", "6"]}>
                                    <Checkbox colorScheme="pink"></Checkbox>
                                </Td>
                                <Td>
                                    <Box>
                                        <Text fontWeight="bold">Leonardo Petta do Nascimento</Text>
                                        <Text fontSize="sm" color="gray.300">
                                            leonardocps9@gmail.com
                                        </Text>
                                    </Box>
                                </Td>
                                {isWideVersion && <Td>04 de Abril, 2021</Td>}
                            </Tr>
                        </Tbody>
                    </Table>
                    <Pagination></Pagination>
                </Box>
            </Flex>
        </Box>
    );
}
