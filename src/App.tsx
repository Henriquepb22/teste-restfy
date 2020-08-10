import React from "react";

import Layout from "./components/Layout";
import PaymentCycleSelect from "./components/PaymentCycleSelect";
import PlansList from "./components/PlansList";

import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/global.styles.scss";

function App() {
    return (
        <Layout>
            <PaymentCycleSelect />
            <PlansList />
        </Layout>
    );
}

export default App;
