import React from "react";

import { PlanPackageProps } from "../../ts/types";

import calculatePrices from "../../utils/calculatePrices";

import PlanInfoContent from "../PlanInfoContent";
import PlanInfoHeader from "../PlanInfoHeader";
import PlanInfoPrices from "../PlanInfoPrices";

import "./styles.scss";

const PlanPackage: React.FC<PlanPackageProps> = ({
    id,
    name,
    payment,
    billingCycle,
    recommended,
}) => {
    const {
        totalPrice,
        discount,
        monthlyValue,
        discountValue,
    } = calculatePrices(payment.priceOrder, payment.months);

    return (
        <div
            className={`text-center plan-package-wrapper ${
                recommended ? "recommended" : ""
            }`}
        >
            <PlanInfoHeader name={name} />
            <PlanInfoPrices
                productId={id}
                billingCycle={billingCycle}
                promoCode="PROMO40"
                totalPrice={totalPrice}
                discount={discount}
                monthlyValue={monthlyValue}
                discountValue={discountValue}
                recommended={recommended}
            />
            <PlanInfoContent />
        </div>
    );
};

export default PlanPackage;
