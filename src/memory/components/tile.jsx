import React from "react";

const Tile = (props) => {
    const { disabled, id, showTile, children } = props;
    return (
        <button className="tile" disabled={disabled} id={id} onClick={showTile}>
            {children}
        </button>
    )
};

export default Tile;