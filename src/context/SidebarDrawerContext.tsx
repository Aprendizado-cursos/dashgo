import { useDisclosure, UseDisclosureReturn } from "@chakra-ui/react";
import { useRouter } from "next/dist/client/router";
import React, { createContext, ReactNode, useContext } from "react";

interface SideBarDrawerProviderProps {
    children: ReactNode;
}

type SideBarDrawerContextData = UseDisclosureReturn;

const SidebarDrawerConter = createContext({} as SideBarDrawerContextData);

export function SideBarDrawerProvider({ children }: SideBarDrawerProviderProps) {
    const disclosure = useDisclosure();
    const router = useRouter();

    React.useEffect(() => {
        disclosure.onClose();
    }, [router.asPath]);

    return <SidebarDrawerConter.Provider value={disclosure}>{children}</SidebarDrawerConter.Provider>;
}

export const useSidebarDrawer = () => useContext(SidebarDrawerConter);
