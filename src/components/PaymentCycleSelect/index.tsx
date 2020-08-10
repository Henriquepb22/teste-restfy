import React, { ChangeEvent, useState } from "react";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";

const PaymentCycleSelect: React.FC = () => {
    const [selectedPaymentCycle, setSelectedPaymentCycle] = useState(36);

    const handleOptionChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSelectedPaymentCycle(Number(e.target.value));
    };

    return (
        <Row className="justify-content-center text-center">
            <Form>
                <Form.Label>Quero pagar a cada:</Form.Label>
                <Form.Group
                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
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

export default PaymentCycleSelect;
