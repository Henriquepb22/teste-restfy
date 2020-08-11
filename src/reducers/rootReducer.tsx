import { CHANGE_MONTHLY_PAYMENT } from "../ts/constants";
import { ChangeMonthlyAction } from "../ts/types";

type State = {
    months: number;
};

export const initialState: State = {
    months: 36,
};

const rootReducer = (state = initialState, action: ChangeMonthlyAction) => {
    switch (action.type) {
        case CHANGE_MONTHLY_PAYMENT:
            return {
                months: action.months,
            };
        default:
            return state;
    }
};

export default rootReducer;
