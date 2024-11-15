import React from 'react';
import {useState,useEffect} from 'react';


const useEffectHook = () => {

    const [count,setCount] = useState(0);

    useEffect(()=>{
        setTimeout(()=>{
            setCount(count=>count+1);
        },2000)
    })


  return (
    <div>

        <h1>I have render this components {count} times</h1>

    </div>
  )
}

export default useEffectHook;

//use for data fetching , directly updating DOM, Timer like setTimeOut and SetInterval

