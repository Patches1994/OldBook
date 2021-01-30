import React, { useState } from "react";
import Board from "./components/board";
import getWinner from "./helpers/getWinner";

const TicTacToe = () => {
    const [board, setBoard] = useState(Array(9).fill(null));
    const [xIsNext, setXisNext] = useState(true);
    const winner = getWinner(board);

    const handleClick = i => {
        const boardCopy = [...board];
        if (winner || boardCopy[i]) return;
        boardCopy[i] = xIsNext ? 'X' : 'O';
        setBoard(boardCopy);
        setXisNext(!xIsNext);
    }

    return (
        <div>
            <Board squares={board} onClick={handleClick} />
        </div>
    );
};

export default TicTacToe;