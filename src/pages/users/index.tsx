import {
    Box,
    Button,
    Checkbox,
    Flex,
    Heading,
    Icon,
    Spinner,
    Table,
    Tbody,
    Td,
    Text,
    Th,
    Thead,
    Tr,
    useBreakpointValue,
} from "@chakra-ui/react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { RiAddLine } from "react-icons/ri";
import { Header } from "../../components/Header";
import { Pagination } from "../../components/Pagination";
import { Sidebar } from "../../components/Sidebar";
import { useUsers } from "../../services/hooks/useUsers";

export default function UserList() {
    const [page, setPage] = useState(1);
    const { data, isLoading, error, isFetching } = useUsers(page);

    const isWideVersion = useBreakpointValue({ base: false, lg: true });

    useEffect(() => {}, []);

    return (
        <Box>
            <Header></Header>
            <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
                <Sidebar></Sidebar>
                <Box flex="1" borderRadius={8} bgColor="gray.800" p="8">
                    <Flex mb="8" justify="space-between" align="center">
                        <Heading size="lg" fontWeight="normal">
                            Usuários
                            {isFetching && !isLoading && <Spinner size="sm" color="gray.500" ml="4"></Spinner>}
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
                    {isLoading ? (
                        <Flex justify="center">
                            {" "}
                            <Spinner></Spinner>
                        </Flex>
                    ) : error ? (
                        <Flex justify="center">
                            <Text>Fala ao obter dados do usuário</Text>
                        </Flex>
                    ) : (
                        <>
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
                                    {data.users.map((user) => {
                                        return (
                                            <Tr key={user.id}>
                                                <Td px={["4", "4", "6"]}>
                                                    <Checkbox colorScheme="pink"></Checkbox>
                                                </Td>
                                                <Td>
                                                    <Box>
                                                        <Text fontWeight="bold">{user.name}</Text>
                                                        <Text fontSize="sm" color="gray.300">
                                                            {user.email}
                                                        </Text>
                                                    </Box>
                                                </Td>
                                                {isWideVersion && <Td>{user.createdAt}</Td>}
                                            </Tr>
                                        );
                                    })}
                                </Tbody>
                            </Table>
                            <Pagination
                                totalCountOfRegister={data.totalCount}
                                currentPage={page}
                                onPageChange={setPage}></Pagination>
                        </>
                    )}
                </Box>
            </Flex>
        </Box>
    );
}
