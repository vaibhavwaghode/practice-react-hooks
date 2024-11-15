import React from 'react'
import {useState} from 'react'
const useStateHook = () => {


    const [car , setCar ] = useState({
        name : "SUV",
        color: "green",
        model: "mega",
        year : "2020"
    });




//    const [color , setColor] = useState('red')
    // const [counter,setCounter] = useState(0);

    // const ChangeColor = () => {
    //     setColor("green");
    //     console.log(color);
    // }

        // const UpdateCounter = () => {
        //     setCounter((prev)=>prev+1);
        //     setCounter((prev)=>prev+1);
        //     setCounter((prev)=>prev+1);
        //     setCounter((prev)=>prev+1);
        // }

        const UpdateCar = () => {
            setCar({...car,model: "mini"})
        }


  return (
    <div>
        <h1>This is my {car.color} car and {car.model} model is {car.year}  100cc</h1>
        <button onClick={UpdateCar}>Update Car</button>
    </div>
  )
}

export default useStateHook;
