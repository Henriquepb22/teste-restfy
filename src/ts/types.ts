export interface GlobalState {
    months: number;
}

export type ChangeMonthlyPaymentAction = (
    months: number
) => ChangeMonthlyAction;

export interface ChangeMonthlyAction {
    type: string;
    months: number;
}

export interface ApiResponse {
    shared: {
        products: PlanInfo;
    };
}

export interface PlanInfo {
    id: number;
    name: string;
    cycle: PaymentCycle;
}

export interface PlanPackageProps {
    id: number;
    billingCycle: string;
    name: string;
    payment: Cycle;
    recommended?: boolean;
}

export interface PlanInfoPricesProps {
    productId: number;
    billingCycle: string;
    promoCode?: string;
    totalPrice: number;
    discount: number;
    monthlyValue: number;
    discountValue: number;
    recommended?: boolean;
}

type PaymentCycle = {
    monthly: Cycle;
    semiannually: Cycle;
    biennially: Cycle;
    triennially: Cycle;
    quarterly: Cycle;
    annually: Cycle;
};

type Cycle = {
    priceRenew: string;
    priceOrder: string;
    months: number;
};
