import React, { memo } from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";

import { changeMonthlyPayment } from "../../actions";

type Props = {
    monthlyPaymentChange: (month: number) => void;
};

const PaymentCycleSelect: React.FC<Props> = ({ monthlyPaymentChange }) => {
    const handleOptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        monthlyPaymentChange(Number(e.target.value));
    };

    return (
        <Row as="section" className="justify-content-center text-center">
            <Form>
                <Form.Label>Quero pagar a cada:</Form.Label>
                <Form.Group
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        handleOptionChange(e)
                    }
                >
                    <Form.Check
                        inline
                        type="radio"
                        label="3 anos"
                        value={36}
                        id="36"
                        name="selectedCycle"
                        defaultChecked
                    />
                    <Form.Check
                        inline
                        type="radio"
                        label="1 ano"
                        value={12}
                        id="12"
                        name="selectedCycle"
                    />
                    <Form.Check
                        inline
                        type="radio"
                        label="1 mês"
                        value={1}
                        id="1"
                        name="selectedCycle"
                    />
                </Form.Group>
            </Form>
        </Row>
    );
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
    monthlyPaymentChange: (months: number) =>
        dispatch(changeMonthlyPayment(months)),
});

export default connect(null, mapDispatchToProps)(memo(PaymentCycleSelect));
