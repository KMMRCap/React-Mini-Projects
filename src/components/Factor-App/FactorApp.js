import React from "react";
import Factor from "./Factor";
import Variables from "./Variables";

const FactorApp = () => {
    return (
        <main className="factor-app">
            <div className="factor-cont">
                <Variables />
                <Factor />
            </div>
        </main>
    );
}

export default FactorApp;