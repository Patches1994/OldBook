import React, { useState } from "react";
import Keypad from "./components/keypad";
import Result from "./components/result";
import CustomDiv from "../div/customDiv";

const Calculator = () => {
    const [result, setResult] = useState("");

    const getResult = () => {
        try {
            setResult(eval(result) || "" + "") ;
        } catch (e) {
            setResult("error");
        }
    }

    const reset = () => setResult("")
    const backspace = () => setResult(result.slice(0, -1))

    const onClick = (button) => {
        if (button === "=") {
            getResult();
        } else if (button === "C") {
            reset();
        } else if (button === "CE") {
            backspace();
        } else {
            setResult(result + button);
        }
    };

    return (
        <div className="calculator-body">
            <h1> Calculator </h1>
            <Result result={result} />
            <Keypad onClick={onClick} />
            <CustomDiv />
        </div>
    )
}

export default Calculator;