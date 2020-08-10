import React from "react";
import Container from "react-bootstrap/Container";

const Layout: React.FC = ({ children }) => {
    return <Container fluid="lg">{children}</Container>;
};

export default Layout;
