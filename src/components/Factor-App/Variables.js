import React, { useContext } from "react";
import { Contexts } from './../../contexts/Context';

const Variables = () => {

    const { var1, setVar1, setVar2, setVar3, var4, setVar4 } = useContext(Contexts)

    const handleCheckBoxes = (item) => {
        if (item.checked) {
            setVar4(var4 + parseInt(item.value))
        } else {
            setVar4(var4 - parseInt(item.value))
        }
    }

    return (
        <div className="variables">
            <div className="var-input">
                <span>Var 1 : </span>
                <input
                    type='number'
                    id="var1"
                    value={var1}
                    onChange={(e) => setVar1(parseInt(e.target.value? e.target.value : 0))} />
                <p>Cost per Item : 100$</p>
            </div>
            <div className="var-input">
                <span>Var 2 : </span>
                <select
                    name="var2"
                    id="var2"
                    onChange={(e) => setVar2(parseInt(e.target.value))}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                </select>
                <p>Cost per Item : 200$</p>
            </div>
            <div className="var-input">
                <span>Var 3 : </span>
                <div>
                    <label htmlFor="var3-1">$100</label>
                    <input
                        onClick={(e) => setVar3(parseInt(e.target.value))}
                        defaultChecked
                        type='radio'
                        id="var3-1"
                        value='100'
                        name="var3" />
                </div>
                <div>
                    <label htmlFor="var3-2">$200</label>
                    <input
                        onClick={(e) => setVar3(parseInt(e.target.value))}
                        type='radio'
                        id="var3-2"
                        value='200'
                        name="var3" />
                </div>
                <div>
                    <label htmlFor="var3-3">$300</label>
                    <input
                        onClick={(e) => setVar3(parseInt(e.target.value))}
                        type='radio'
                        id="var3-3"
                        value='300'
                        name="var3" />
                </div>
            </div>
            <div className="var-input">
                <span>Var 4 : </span>
                <div>
                    <label htmlFor="var4-1">$100</label>
                    <input
                        // checked={ch1}
                        // onChange={() => setCh1(!ch1)}
                        onClick={(e) => handleCheckBoxes(e.target)}
                        type='checkbox'
                        id="var4-1"
                        value='100'
                        name="var4" />
                </div>
                <div>
                    <label htmlFor="var4-2">$200</label>
                    <input
                        onClick={(e) => handleCheckBoxes(e.target)}
                        type='checkbox'
                        id="var4-2"
                        value='200'
                        name="var4" />
                </div>
                <div>
                    <label htmlFor="var4-2">$300</label>
                    <input
                        onClick={(e) => handleCheckBoxes(e.target)}
                        type='checkbox'
                        id="var4-3"
                        value='300'
                        name="var4" />
                </div>
            </div>
        </div>
    );
}

export default Variables;