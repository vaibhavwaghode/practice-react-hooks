import React from 'react';
import {useState,useCallback} from 'react';
import HeaderCallback from './headerCallback';

const UseCallbackHook = () => {
    const [count ,setCount] = useState(0);


    const newFn = useCallback(()=>{

    },[])

  return (
    <div>
        <HeaderCallback newFn={newFn}/>
        <h1>{count}</h1>
        <button onClick={()=>setCount(prev => prev+1)}>counter++</button>

    </div>
  )
}

export default UseCallbackHook
