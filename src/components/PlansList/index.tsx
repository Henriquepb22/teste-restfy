import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import Slider from "react-slick";
import Container from "react-bootstrap/Container";

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

    useEffect(() => {
        async function fetchPlans() {
            const res = await api.get<ApiResponse>("/prices");

            // Convertendo a resposta da api para um array de objetos
            const plansArray: PlanInfo[] = Object.values(
                res.data.shared.products
            );

            setPlans(plansArray);
        }
        fetchPlans();
    }, []);

    useEffect(() => {
        console.log(months);
    }, [months]);

    return (
        <Container as="section" fluid>
            <Slider {...sliderSettings}>
                {plans?.map((plan) => (
                    <PlanPackage
                        key={plan.id}
                        name={plan.name}
                        price="123,12"
                    />
                ))}
            </Slider>
        </Container>
    );
};

const mapStateToProps = (state: Props) => ({
    months: state.months,
});

export default connect(mapStateToProps)(PlansList);
