import React from "react";

const Header = (props) => {
    const { games, setGame } = props;
    return (
        <div className="header-wrapper">
            <h1 className="header" onClick={() => setGame(games.CALCULATOR)}> Calculator </h1>
            <h1 className="header" onClick={() => setGame(games.MEMORY)}> Memory Game </h1>
            <h1 className="header" onClick={() => setGame(games.TICTACTOE)}> Tic-Tac-Toe </h1>
            <h1 className="header" onClick={() => setGame(games.PUZZLE)}> Puzzle </h1>
        </div>
    )
};

export default Header;