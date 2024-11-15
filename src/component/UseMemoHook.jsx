import react from 'react';
import {useState,useMemo} from 'react';

function UseMemoHook(){

    const [value,setValue] = useState(0);
    const [counter,setCounter] = useState(0);


    function CubeNum(num){
        console.log("calculation done!")
        return Math.pow(num,3)
    }

    // const cube = CubeNum(value)
    const cube = useMemo(()=>{return CubeNum(value)},[value]);

    //here component is re-rendering because of changing any state variable with the help of useState But value of cube is not recalculating on reach render because of UseMemo Hook which is use for increasing performance of the app

    return (
        <div>
            <input type="number" value={value} onChange={(e)=>setValue(e.target.value)} />

            <h1>Cube of the Number is : {cube}</h1>

            <button onClick={()=>setCounter(counter+1)}>Counter++</button>

            <h1>Count : {counter}</h1>

        </div>
    )
}

export default UseMemoHook;