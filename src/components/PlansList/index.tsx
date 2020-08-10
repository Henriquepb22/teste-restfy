import React from "react";
import Slider from "react-slick";
import Container from "react-bootstrap/Container";

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

const PlansList: React.FC = () => {
    return (
        <Container as="section" fluid>
            <Slider {...sliderSettings}>
                <PlanPackage />
                <PlanPackage />
                <PlanPackage />
            </Slider>
        </Container>
    );
};

export default PlansList;
