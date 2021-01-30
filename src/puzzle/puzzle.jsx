
import React from "react";
import usePuzzle from "./helpers/usePuzzle";

const Puzzle = () => {
const { shuffle, numbers, ref } = usePuzzle();

  return (
    <div className="puzzle">
      <div className="puzzle-table">
        {shuffle(numbers)}
        <div className="black-tile" ref={ref}></div>
      </div>
    </div>
  );
}

export default Puzzle;