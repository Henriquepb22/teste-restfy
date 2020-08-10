import React from "react";
import Row from "react-bootstrap/Row";

import PlanSelect from "../PlanSelect";

const PlansList: React.FC = () => {
    return (
        <Row className="justify-content-center">
            <PlanSelect />
            <PlanSelect />
            <PlanSelect />
        </Row>
    );
};

export default PlansList;
