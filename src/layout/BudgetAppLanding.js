import React from "react";
import Header from './../common/Header';
import BudgetApp from './../components/Budget-App/BudgetApp';

const BudgetAppLanding = () => {
    return (
        <>
            <Header header='Budget App' />
            <BudgetApp />
        </>
    );
}

export default BudgetAppLanding;