import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import Slider from "react-slick";
import Container from "react-bootstrap/Container";
import Spinner from "react-bootstrap/Spinner";

import { ApiResponse, PlanInfo } from "../../ts/types";

import api from "../../services/api";

import PlanPackage from "../PlanPackage";

import "./styles.scss";

const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1026,
            settings: {
                slidesToShow: 2,
            },
        },
        {
            breakpoint: 682,
            settings: {
                slidesToShow: 1,
            },
        },
    ],
};

type Props = {
    months: number;
};

const PlansList: React.FC<Props> = ({ months }) => {
    const [plans, setPlans] = useState<PlanInfo[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchPlans() {
            const res = await api.get<ApiResponse>("/prices");

            // Convertendo a resposta da api para um array de objetos
            const plansArray: PlanInfo[] = Object.values(
                res.data.shared.products
            );

            setPlans(plansArray);
            setLoading(false);
        }
        fetchPlans();
    }, []);

    return (
        <Container as="section" fluid className="text-center">
            {loading ? (
                <Spinner animation="border" />
            ) : (
                <Slider {...sliderSettings}>
                    {plans.map((plan) => {
                        if (months === 36) {
                            return (
                                plan.cycle?.triennially && (
                                    <PlanPackage
                                        key={plan.id}
                                        name={plan.name}
                                        payment={plan.cycle.triennially}
                                        recommended
                                    />
                                )
                            );
                        }
                        if (months === 12) {
                            return (
                                plan.cycle?.annually && (
                                    <PlanPackage
                                        key={plan.id}
                                        name={plan.name}
                                        payment={plan.cycle.annually}
                                    />
                                )
                            );
                        }
                        if (months === 1) {
                            return (
                                plan.cycle?.monthly && (
                                    <PlanPackage
                                        key={plan.id}
                                        name={plan.name}
                                        payment={plan.cycle.monthly}
                                    />
                                )
                            );
                        }
                        return null;
                    })}
                </Slider>
            )}
        </Container>
    );
};

const mapStateToProps = (state: Props) => ({
    months: state.months,
});

export default connect(mapStateToProps)(PlansList);
