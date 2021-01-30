import React from "react";

const Result = (props) => {
    const { result } = props;

    return (
        <div className="result"> 
            <p>{result}</p>
        </div>
    );
}

export default Result;