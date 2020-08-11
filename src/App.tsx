import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import { Provider } from "react-redux";

import Layout from "./components/Layout";
import PaymentCycleSelect from "./components/PaymentCycleSelect";
import PlansList from "./components/PlansList";

import "./styles/global.styles.scss";

import store from "./context/store";

function App() {
    return (
        <Provider store={store}>
            <Layout>
                <PaymentCycleSelect />
                <PlansList />
            </Layout>
        </Provider>
    );
}

export default App;
