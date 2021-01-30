import React from "react";

const Keypad = (props) => {
    const { onClick } = props;
    return (
        <div className="button">
            <button className="calculator-btn" name="(" onClick={e => onClick(e.target.name)}>(</button>
            <button className="calculator-btn" name=")" onClick={e => onClick(e.target.name)}>)</button>
            <button className="calculator-btn" name="CE" onClick={e => onClick(e.target.name)}>CE</button>
            <button className="calculator-btn" name="C" onClick={e => onClick(e.target.name)}>C</button><br/>


            <button className="calculator-btn" name="1" onClick={e => onClick(e.target.name)}>1</button>
            <button className="calculator-btn" name="2" onClick={e => onClick(e.target.name)}>2</button>
            <button className="calculator-btn" name="3" onClick={e => onClick(e.target.name)}>3</button>
            <button className="calculator-btn" name="+" onClick={e => onClick(e.target.name)}>+</button><br/>


            <button className="calculator-btn" name="4" onClick={e => onClick(e.target.name)}>4</button>
            <button className="calculator-btn" name="5" onClick={e => onClick(e.target.name)}>5</button>
            <button className="calculator-btn" name="6" onClick={e => onClick(e.target.name)}>6</button>
            <button className="calculator-btn" name="-" onClick={e => onClick(e.target.name)}>-</button><br/>

            <button className="calculator-btn" name="7" onClick={e => onClick(e.target.name)}>7</button>
            <button className="calculator-btn"name="8" onClick={e => onClick(e.target.name)}>8</button>
            <button className="calculator-btn" name="9" onClick={e => onClick(e.target.name)}>9</button>
            <button className="calculator-btn" name="*" onClick={e => onClick(e.target.name)}>x</button><br/>


            <button className="calculator-btn" name="." onClick={e => onClick(e.target.name)}>.</button>
            <button className="calculator-btn" name="0" onClick={e => onClick(e.target.name)}>0</button>
            <button className="calculator-btn" name="=" onClick={e => onClick(e.target.name)}>=</button>
            <button className="calculator-btn" name="/" onClick={e => onClick(e.target.name)}>÷</button><br/>
    </div>
    )
};

export default Keypad;