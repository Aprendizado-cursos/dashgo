import { Flex, useBreakpointValue } from "@chakra-ui/react";
import { Logo } from "./Logo";
import { NotificationsNav } from "./NotificationsNav";
import { Profile } from "./Profile";
import { SearchBox } from "./SearchBox";

export function Header() {
    const isWideVersion = useBreakpointValue({
        base: false,
        lg: true,
    });

    return (
        <Flex w="100%" maxWidth={1480} h="20" as="header" mx="auto" mt="4" px="6" align="center">
            <Logo></Logo>
            {isWideVersion && <SearchBox></SearchBox>}

            <Flex align="center" ml="auto">
                <NotificationsNav></NotificationsNav>
                <Profile showProfileData={isWideVersion}></Profile>
            </Flex>
        </Flex>
    );
}
