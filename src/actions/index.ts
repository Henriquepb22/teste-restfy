import { CHANGE_MONTHLY_PAYMENT } from "../ts/constants";
import { ChangeMonthlyAction } from "../ts/types";

export const changeMonthly: ChangeMonthlyAction = (months) => {
    return {
        type: CHANGE_MONTHLY_PAYMENT,
        months,
    };
};
