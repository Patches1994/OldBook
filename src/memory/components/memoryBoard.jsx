import React from 'react';

const MemoryBoard = (props) => {
    const { children } = props;
    return  <div className="memory-board"> {children}</div>
};

export default MemoryBoard;
