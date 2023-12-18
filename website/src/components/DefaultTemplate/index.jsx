import { Footer } from "./Footer";
import React from "react"
import { Header } from "./Header";

export const DefaultTemplate = ({ children }) => {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    );
};