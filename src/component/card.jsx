import React from 'react';
import {useState,useMemo} from 'react';

const Card = () => {

    const [number,setNumber] = useState(0);
    const [count,setCount] = useState(0);


    function CubeNum(num){
        console.log("Calculation Done!")
        return Math.pow(num,3);
    }

    let result = useMemo(()=>{ return CubeNum(number)},[number])

  return (
    <div>
        <input type="text" value={number} onChange={(e)=>{setNumber(e.target.value)}} />

        <h1>Cube of the Number : {result}</h1>

        <button onClick={()=>{setCount(count+1)}}>Counter++</button>
        <h1>Count : {count}</h1>
    </div>
  )
}

export default Card;
