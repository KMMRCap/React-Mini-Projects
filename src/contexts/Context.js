import React, { createContext, useState } from "react";

export const Contexts = createContext({
    budget: '', setBudget: () => { },
    income: [], setIncome: () => { },
    expence: [], setExpence: () => { },
    totalIncome: 0, setTotalIncome: () => { },
    totalExpence: 0, setTotalExpence: () => { },
    questions: [], setQuestions: () => { },
    var1: [], setVar1: () => { },
    var2: [], setVar2: () => { },
    var3: [], setVar3: () => { },
    var4: [], setVar4: () => { },
});

export const ContextWrapper = (props) => {

    const [budget, setBudget] = useState(0)
    const [income, setIncome] = useState([])
    const [expence, setExpence] = useState([])
    const [totalIncome, setTotalIncome] = useState(0)
    const [totalExpence, setTotalExpence] = useState(0)

    const [questions, setQuestions] = useState([])

    const [var1, setVar1] = useState(1)
    const [var2, setVar2] = useState(1)
    const [var3, setVar3] = useState(100)
    const [var4, setVar4] = useState(0)


    return (
        <Contexts.Provider value={
            {
                budget, setBudget,
                income, setIncome,
                expence, setExpence,
                totalIncome, setTotalIncome,
                totalExpence, setTotalExpence,
                questions, setQuestions,
                var1, setVar1,
                var2, setVar2,
                var3, setVar3,
                var4, setVar4
            }
        }>
            {props.children}
        </Contexts.Provider>
    )
}