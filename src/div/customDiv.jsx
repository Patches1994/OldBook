import React, { useState } from "react";


const CustomDiv = () => {
    const [pixels, setPixels] = useState(null);
    const [color, setColor] = useState(null);
    const customDiv = document.getElementById("custom-div");

    const changeHeight = () => customDiv.style.height = `${pixels}px`;
    const changeWidth = () => customDiv.style.height = `${pixels}px`;
    const changeBorderWidth = () => customDiv.style.borderWidth =`${pixels}px`;
    const changeLeft = () => {
        customDiv.style.removeProperty("right");
        customDiv.style.left =`${pixels}px`;
    }
    const changeTop = () => {
        customDiv.style.removeProperty("bottom");
        customDiv.style.top =`${pixels}px`;
    }
    const changeBackgroundColor = () => customDiv.style.backgroundColor = color;
    const changeBorderColor = () => customDiv.style.borderColor = color;


    return (
        <div className="div-wrapper">
            <input type="number" onChange={e => setPixels(e.target.value) } />
            <div className="div-btns">
                <button onClick={() => changeHeight()}>Height</button>
                <button onClick={() => changeWidth()}>Width</button>
                <button onClick={() => changeBorderWidth()}>Border width</button>
                <button onClick={() => changeLeft()}>Left</button>
                <button onClick={() => changeTop()}>Top</button>
            </div>
            <input type="color" onChange={e => setColor(e.target.value)} />
            <div className="div-btns">
                <button onClick={() => changeBackgroundColor()}>Background color</button>
                <button onClick={() => changeBorderColor()}>Border color</button>
            </div>
            <div className="base-div" id="custom-div" />
        </div>

    )
};

export default CustomDiv;
