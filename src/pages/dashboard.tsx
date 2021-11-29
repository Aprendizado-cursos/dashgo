import dynamic from 'next/dynamic'

import { Flex, SimpleGrid, Box, Text } from "@chakra-ui/react";

import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";

import Chart = dynamic(()=>import('react-apexcharts'), {ssr: false});

const options = {};
const series = [{ name: "series1", data: [31, 120, 10, 28, 51, 18, 109] }];

export default function Dashboard() {
    return (
        <Flex direction="column" h="100vh">
            <Header></Header>
            <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
                <Sidebar></Sidebar>
                <SimpleGrid flex="1" gap="4" minChildWidth="320px" align="flex-start">
                    <Box p="8" bg="gray.800" borderRadius={8}>
                        <Text fontSize="lg" mb="4">
                            Inscritos da semana
                        </Text>
                        <Chart type="area" heigth={160} options={options} series={series}></Chart>
                    </Box>
                    <Box p="8" bg="gray.800" borderRadius={8}>
                        <Text fontSize="lg" mb="4">
                            Taxa de abertura
                        </Text>
                    </Box>
                </SimpleGrid>
            </Flex>
        </Flex>
    );
}
