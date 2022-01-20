import { Flex, Icon, IconButton, useBreakpointValue } from "@chakra-ui/react";
import { RiMenuLine } from "react-icons/ri";
import { useSidebarDrawer } from "../../context/SidebarDrawerContext";
import { Logo } from "./Logo";
import { NotificationsNav } from "./NotificationsNav";
import { Profile } from "./Profile";
import { SearchBox } from "./SearchBox";

export function Header() {
    const { onOpen } = useSidebarDrawer();

    const isWideVersion = useBreakpointValue({
        base: false,
        lg: true,
    });

    return (
        <Flex w="100%" maxWidth={1480} h="20" as="header" mx="auto" mt="4" px="6" align="center">
            {!isWideVersion && (
                <IconButton
                    icon={<Icon as={RiMenuLine}></Icon>}
                    fontSize="24"
                    variant="unstyled"
                    onClick={onOpen}
                    aria-label="Open Navigation"
                    mr="2"></IconButton>
            )}
            <Logo></Logo>
            {isWideVersion && <SearchBox></SearchBox>}

            <Flex align="center" ml="auto">
                <NotificationsNav></NotificationsNav>
                <Profile showProfileData={isWideVersion}></Profile>
            </Flex>
        </Flex>
    );
}
