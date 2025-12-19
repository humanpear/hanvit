import { Outlet } from "react-router-dom";
import Footer from "./footer";
import Header from "./header";
import { useState } from "react";
import { SectionId } from "@/shared/constants/sections";

export type LayoutOutletContext = {
    activeSection: SectionId;
    onSectionChange: (id: SectionId) => void;
}

function RootLayout () {
    const [activeSection, setActiveSection] = useState<SectionId>("home");

    const contextValue: LayoutOutletContext = {
        activeSection,
        onSectionChange: setActiveSection,
    };

    return (
        <>
        <Header activeSection={activeSection} />
        <main>
            <Outlet context={contextValue} />
        </main>
        <Footer />
        </>
    )
}

export default RootLayout
