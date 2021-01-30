import { useState, useEffect } from "react";

const useMemory = () => {
    let [tiles, setTiles] = useState([]);
    let [tilesAmount, setTilesAmount] = useState(12);
    let [score, setScore] = useState(0);
    let [level, setLevel] = useState('easy');
    let [firstTile, setFirstTile] = useState('');
  
    const [disabled, setDisabled] = useState(false);

    const showTile = (e) => {
        const target = e.target.style;
        target.backgroundColor = `rgb(${230 - e.target.id*3}, ${230 - e.target.id*3}, ${230 - e.target.id*3})`;
        target.borderColor = 'magenta';
        target.color = "black";
        setTimeout(() => {
          target.borderColor = 'rgb(20, 100, 0)';
          target.backgroundColor = 'rgb(20, 100, 0)';
          target.color = "rgb(20, 100, 0)";
        }, 1500);
    
    
        if(!firstTile){
          return setFirstTile(e.target);
        }
    
        setDisabled(true);
        setTimeout(() => {
          setDisabled(false);
        }, 1500);
    
    
          if(firstTile.id === e.target.id && (firstTile.offsetLeft !== e.target.offsetLeft || firstTile.offsetTop !== e.target.offsetTop )){
            setTimeout(() => {
              setScore(score + 1);
              firstTile.style.opacity = "0";
              e.target.style.opacity = "0";
              setFirstTile('');
          }, 500);
          } else {
            setFirstTile('');
          }
      }
    
      useEffect(() => {
        let numbers = [];
        for(let i = 0; i < tilesAmount / 2; i++){
          numbers.push(i);
        }
        let cloneNumbers = [...numbers];
        let allNumbers = numbers.concat(cloneNumbers);
        const shuffle = [...allNumbers].sort(() => Math.random() - 0.5);
        setTiles(shuffle);
      }, [tilesAmount])
    

    return {
            setLevel,
            setScore,
            setTilesAmount,
            tilesAmount,
            score,
            disabled,
            showTile,
            level,
            tiles
        };
};

export default useMemory;