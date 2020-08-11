import React, { memo } from "react";
import Tooltip from "react-bootstrap/Tooltip";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";

import "./styles.scss";

const PlanInfoContent: React.FC = () => {
    return (
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
    );
};

export default memo(PlanInfoContent);
