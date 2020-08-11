import { CHANGE_MONTHLY_PAYMENT } from "../ts/constants";
import { ChangeMonthlyPaymentAction } from "../ts/types";

export const changeMonthlyPayment: ChangeMonthlyPaymentAction = (months) => {
    return {
        type: CHANGE_MONTHLY_PAYMENT,
        months,
    };
};
