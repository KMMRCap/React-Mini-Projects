import React, { useContext } from "react";
import { Contexts } from './../../contexts/Context';

const Factor = () => {

    const { var1, var2, var3, var4 } = useContext(Contexts)

    return (
        <div className="factor">
            <h2>Factor</h2>
            <hr />
            <div className="var">
                <h3>Var1 :</h3>
                <h3>${var1 ? var1 * 100 : 0}</h3>
            </div>
            <div className="var">
                <h3>Var1 :</h3>
                <h3>${var2 ? var2 * 200 : 0}</h3>
            </div>
            <div className="var">
                <h3>Var1 :</h3>
                <h3>${var3}</h3>
            </div>
            <div className="var">
                <h3>Var1 :</h3>
                <h3>${var4}</h3>
            </div>
            <hr />
            <div className="total">
                <h2>Total :</h2>
                <h2>${(var1 * 100) + (var2 * 200) + var3 + var4}</h2>
            </div>
            <button>Go to payment page</button>
        </div>
    );
}

export default Factor;