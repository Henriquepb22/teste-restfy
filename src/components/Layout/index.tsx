import React from "react";
import Container from "react-bootstrap/Container";

import "./styles.scss";

const Layout: React.FC = ({ children }) => {
    return (
        <Container as="main" fluid="lg" className="layout-wrapper">
            {children}
        </Container>
    );
};

export default Layout;
