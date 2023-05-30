import React from "react";
import { Body, Footer, Header, Page } from "./Layout.style";
import { LayoutProps } from "./types";

const Layout = ({ children }: LayoutProps) => {
    return (
        <Page>
            <Header>Header</Header>
            <Body>{children}</Body>
            <Footer>Footer</Footer>
        </Page>
    );
};

export default Layout;
