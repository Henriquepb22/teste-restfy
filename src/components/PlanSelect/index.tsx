import React from "react";
import Col from "react-bootstrap/Col";

import "./styles.scss";

const PlanSelect: React.FC = () => {
    return (
        <Col xs={12} md={4} lg={3} className="text-center">
            <div>
                <span>Icone</span>
                <h1>Plano M</h1>
            </div>
            <div>
                <p>
                    <span>R$ 647,64</span> R$ 453,35
                </p>
                <p>equivalente a</p>
                <h2>
                    R$ <strong>12,59</strong>/mês
                </h2>
            </div>
            <button className="button">Contrate Agora</button>
            <div>
                <p>
                    <strong>1 ano de Domínio Grátis (icone)</strong>
                </p>
                <p>
                    economize R$ 174,48<span> 40% OFF</span>
                </p>
            </div>
            <div>
                <ul>
                    <li>Sites Ilimitados</li>
                    <li>
                        <strong>100GB</strong> de Armazenamento
                    </li>
                    <li>
                        Contas de E-mail <strong>Ilimitadas</strong>
                    </li>
                    <li>
                        Criador de Sites <strong>Grátis</strong>
                    </li>
                    <li>
                        Certificado SSL <strong>Grátis</strong> (https)
                    </li>
                </ul>
            </div>
        </Col>
    );
};

export default PlanSelect;
