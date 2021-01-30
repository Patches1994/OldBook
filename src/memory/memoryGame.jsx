import React from "react";
import Tile from "./components/tile";
import MemoryBoard from "./components/memoryBoard";
import useMemory from "./helpers/useMemory";

const LevelEnum = {
    EASY: "easy",
    MEDIUM: "medium",
    HARD: "hard"
};

Object.freeze(LevelEnum);

const MemoryGame = () => {
    const {
        setLevel,
        setTilesAmount,
        setScore,
        score,
        showTile,
        disabled,
        tiles,
        level,
    } = useMemory();
    return (
        <div className="memory">
            <input className="easy" type="button" value={LevelEnum.EASY} onClick={() => {
                setLevel(LevelEnum.EASY);
                setTilesAmount(12);
                setScore(0);
            }}/>
            <input className="medium" type="button" value={LevelEnum.MEDIUM} onClick={() => {
                setLevel(LevelEnum.MEDIUM);
                setTilesAmount(24);
                setScore(0);
            }}/>
            <input className="hard" type="button" value={LevelEnum.HARD} onClick={() => {
                setLevel(LevelEnum.HARD);
                setTilesAmount(36);
                setScore(0);
            }}/>
            <MemoryBoard>
            {tiles.map((tile, index) => {
                return <Tile key={level + index} id={tile} showTile={showTile} disabled={disabled}>{tile}</Tile>
            })}
            </MemoryBoard>
            <p className="score">Points: {score}</p>
      </div>
    )
};

export default MemoryGame;