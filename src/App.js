// import logo from './logo.svg';
// import Button from '@mui/material/Button'
// import { useState } from 'react';
import './App.css';
// import { useEffect } from 'react';
// import UseStateHook from './component/useStateHook';
// import UseEffectHook from './component/useEffectHook';
// import {UseRefHook} from './component/useRefHook';
// import UseRefHookExample from './component/UseRefHookExample';
// import UseMemoHook from './component/UseMemoHook';
// import Card from './component/card';
// import UseCallbackHook from './component/UseCallbackHook';
// import Profile from './component/profile';
// import Footer from './component/Footer';
// import {useState} from 'react';
// import { useReducer } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { increment, decrement, input } from './slice/counterSlice';
// import { useEffect, useLayoutEffect } from 'react';
import ButtonClick from './component/HOC/ButtonClick';
import ButtonHover from './component/HOC/ButtonHover';


function App() {


  // const [name,setName] = useState(
  //   localStorage.getItem('username')?localStorage.getItem('username'):" "
  // );


  // useEffect(()=>{
  //   localStorage.setItem('username',name);
  //   console.log(localStorage.getItem('username'));
  // },[])



  // useEffect(()=>{
  //   console.log("UseEffect after the render DOM")
  // },[])

  // useLayoutEffect(()=>{
  //   console.log("useLayoutEffect before rendering DOM")
  // },[])


  // const count = useSelector((state)=> state.counter.count);

  // const dispatch = useDispatch();

  // const initialState = {count : 0};


  // const reducer = (state,action)=>{
  //   console.log('Current State:', state);
  //   console.log('Action:', action);

  //       switch(action.type){
  //         case 'increment':{
  //           return {count : state.count + 1}
  //         }
  //         case 'decrement':{
  //           return {count : state.count - 1}
  //         }
  //         case 'input': {
  //           return {count : action.payload}
  //         }
  //         default : {
  //           return {count : state.count}
  //         }
  //       }

  // }

  // const [state,dispatch]= useReducer(reducer,initialState)


  return (
    <div className="App">

      {/* <div className="card">
        <div className='nav'>
          <div className='logo'>

          </div>
          <div className='title'>
            <h2>Leader Rank</h2>
          </div>
          <div className='viewlink'>
            view all
          </div>
        </div>
      </div> */}

      {/* <h1>{count}</h1>
      <button onClick={()=>dispatch(increment())}>Increase</button>
      <button onClick={()=>dispatch(decrement())}>Decrease</button>
      <input onChange={(e)=>dispatch(input(Number(e.target.value)))} type="number"/> */}
      <h1>Test Message</h1>

      {/* {Array(4000).fill('').map((item,index)=>(
        <li key={index}>{Math.pow(Math.random(),10)}</li>
      ))} */}
      {/* <UseEffectHook/> */}
      {/* <Profile/> */}
      {/* <input type='text' value={name} placeholder='Enter you user name' onChange={(e)=>setName(e.target.value)}/>

      <h1>Hello, {name}!</h1> */}



      <div className='HOC'>
              <ButtonClick />
              <ButtonHover />
      </div>
    </div>
  );
}

export default App;
