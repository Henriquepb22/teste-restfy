import React from "react";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import { FaServer, FaInfoCircle } from "react-icons/fa";

import { PlanPackageProps } from "../../ts/types";

import "./styles.scss";

const PlanPackage: React.FC<PlanPackageProps> = ({ name, price }) => {
    return (
        <div className="text-center plan-package-wrapper">
            <header className="package-header">
                <FaServer size={30} color="#3f7ec1" />
                <h4>{name}</h4>
            </header>
            <div className="package-prices">
                <p>
                    <span>R$ {price}</span> <strong>R$ 453,35</strong>
                </p>
                <p>equivalente a</p>
                <h5>
                    R$ <strong>12,59</strong>/mês
                </h5>
            </div>
            <button className="buy-plan-button">Contrate Agora</button>
            <div className="package-info">
                <p>
                    <strong>
                        1 ano de Domínio Grátis{" "}
                        <FaInfoCircle size={15} color="#3f7ec1" />
                    </strong>
                </p>
                <p>
                    economize R$ 174,48{" "}
                    <span className="discount-percent">40% OFF</span>
                </p>
            </div>
            <ul className="package-content-list">
                <li>
                    <OverlayTrigger
                        placement="bottom"
                        overlay={
                            <Tooltip id="tooltip-sites">
                                Sites ilimitados em seu domínio
                            </Tooltip>
                        }
                    >
                        <span className="highlight">Sites Ilimitados</span>
                    </OverlayTrigger>
                </li>
                <li>
                    <strong>100GB</strong> de Armazenamento
                </li>
                <li>
                    <OverlayTrigger
                        placement="bottom"
                        overlay={
                            <Tooltip id="tooltip-sites">
                                E-mails profissionais para sua empresa!
                            </Tooltip>
                        }
                    >
                        <span className="highlight">
                            Contas de E-mail <strong>Ilimitadas</strong>
                        </span>
                    </OverlayTrigger>
                </li>
                <li>
                    Criador de Sites <strong>Grátis</strong>
                </li>
                <li>
                    Certificado SSL <strong>Grátis</strong> (https)
                </li>
            </ul>
        </div>
    );
};

export default PlanPackage;
