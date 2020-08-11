import React from "react";
import { FaInfoCircle } from "react-icons/fa";

import formatPrices from "../../utils/formatPrices";

import "./styles.scss";

type Props = {
    totalPrice: number;
    discount: number;
    monthlyValue: number;
    discountValue: number;
    recommended?: boolean;
};

const PlanInfoPrices: React.FC<Props> = ({
    totalPrice,
    discount,
    monthlyValue,
    discountValue,
    recommended,
}) => {
    return (
        <>
            <div className="package-prices">
                <p>
                    <span>R$ {formatPrices(totalPrice)}</span>{" "}
                    <strong>R$ {formatPrices(discount)}</strong>
                </p>
                <p>equivalente a</p>
                <h5>
                    R$ <strong>{formatPrices(monthlyValue)}</strong>/mês
                </h5>
            </div>
            <button
                className={`buy-plan-button ${
                    recommended ? "recommended" : ""
                }`}
            >
                Contrate Agora
            </button>
            <div className="package-info">
                <p>
                    <strong>
                        1 ano de Domínio Grátis{" "}
                        <FaInfoCircle size={15} color="#3f7ec1" />
                    </strong>
                </p>
                <p>
                    economize R$ {formatPrices(discountValue)}{" "}
                    <span className="discount-percent">40% OFF</span>
                </p>
            </div>
        </>
    );
};

export default PlanInfoPrices;
