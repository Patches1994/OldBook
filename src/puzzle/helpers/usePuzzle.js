import { useState, useRef, useEffect } from "react";

const usePuzzle = () => {
    const [table, setTable] = useState([]);
    const [numbers, setNumbers] = useState([]);
    const ref = useRef(null);
  
    const changePosition = (e) => {
      if((ref.current.offsetLeft - 125 === e.target.offsetLeft && ref.current.offsetTop === e.target.offsetTop) || (ref.current.offsetLeft + 125 === e.target.offsetLeft && ref.current.offsetTop === e.target.offsetTop)){
        let leftSquare = ref.current.offsetLeft;
        let leftImage = e.target.offsetLeft;
        e.target.style.left = `${leftSquare}px`;
        return ref.current.style.left = `${leftImage}px`;
      }
      if((ref.current.offsetTop + 125 === e.target.offsetTop && ref.current.offsetLeft === e.target.offsetLeft) || (ref.current.offsetTop - 125 === e.target.offsetTop && ref.current.offsetLeft === e.target.offsetLeft)){
        let topSquare = ref.current.offsetTop;
        let topImage = e.target.offsetTop;
        e.target.style.top = `${topSquare}px`;
        return ref.current.style.top = `${topImage}px`;
      }
    }
  
    useEffect(() => {
      generateImages();
    }, []);
  
    const shuffle = (array) => {
      var currentIndex = array.length, temporaryValue, randomIndex;
      while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
      }
      return array.map((n, index) => {
        return <img alt={table[index]} src={table[index]} onClick={changePosition} style={{top: n[0]*125, left: n[1]*125}}/>
      })
    }
  
    const generateImages = () => {
      for(let i = 0; i < 4; i++){
        for(let j = 0; j < 4; j++){
          if(i === 3 && j === 3){
            return
          }
          setNumbers(numbers => [...numbers, [i, j]])
          setTable(table => [...table, `piece_${i}_${j}.png`])
        }
      }
    }

    return { shuffle, numbers, ref };
};

export default usePuzzle;
