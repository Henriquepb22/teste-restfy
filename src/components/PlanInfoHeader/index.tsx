import React from "react";
import { FaServer } from "react-icons/fa";

import "./styles.scss";

type Props = {
    name: string;
};

const PlanInfoHeader: React.FC<Props> = ({ name }) => {
    return (
        <header className="package-header">
            <FaServer size={30} color="#3f7ec1" />
            <h4>{name}</h4>
        </header>
    );
};

export default PlanInfoHeader;
