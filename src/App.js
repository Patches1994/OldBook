import './App.css';
import { useState } from "react";
import Calculator from "./calculator/calculator";
import TicTacToe from "./tic-tac-toe/tictactoe";
import Puzzle from "./puzzle/puzzle";
import MemoryGame from "./memory/memoryGame";
import Header from "./header/header";

const GameEnum = {
  CALCULATOR: "calculator",
  MEMORY: "memory",
  TICTACTOE: "tic-tac-toe",
  PUZZLE: "puzzle"
};

Object.freeze(GameEnum);

const App = () => {
  const [game, setGame] = useState(GameEnum.CALCULATOR);
  return (
    <div className="App">
      <Header games={GameEnum} setGame={setGame} />
      {game === GameEnum.CALCULATOR && <Calculator />}
      {game === GameEnum.TICTACTOE && <TicTacToe />}
      {game === GameEnum.PUZZLE && <Puzzle />}
      {game === GameEnum.MEMORY && <MemoryGame />}
    </div>
  );
}

export default App;