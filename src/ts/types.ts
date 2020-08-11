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
    name: string;
    payment: Cycle;
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
