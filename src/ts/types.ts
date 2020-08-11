export type ChangeMonthlyAction = (months: number) => ChangeMonthlyReducer;

export interface ChangeMonthlyReducer {
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
    cycle: {
        monthly: Cycle;
        semiannually: Cycle;
        biennially: Cycle;
        triennially: Cycle;
        quarterly: Cycle;
        annually: Cycle;
    };
}

export interface PlanPackageProps {
    name: string;
    price: string;
}

type Cycle = {
    priceRenew: string;
    priceOrder: string;
    months: number;
};
