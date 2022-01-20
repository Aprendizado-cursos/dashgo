import { Flex } from "@chakra-ui/react";
import { Logo } from "./Header/Logo";
import { NotificationsNav } from "./Header/NotificationsNav";
import { Profile } from "./Header/Profile";
import { SearchBox } from "./Header/SearchBox";

export function Header() {
    return (
        <Flex w="100%" maxWidth={1480} h="20" as="header" mx="auto" mt="4" px="6" align="center">
            <Logo></Logo>
            <SearchBox></SearchBox>
            <Flex align="center" ml="auto">
                <NotificationsNav></NotificationsNav>
                <Profile></Profile>
            </Flex>
        </Flex>
    );
}
