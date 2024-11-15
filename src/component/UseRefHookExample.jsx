import react from 'react';
import {useRef} from 'react';



function UseRefHookExample() {

    const inputEle = useRef();

    console.log(inputEle.current);


    const UpdateChange = () => {
        // inputEle.current.style.backgroundColor = "green";
        inputEle.current.focus();
    }

    return (
        <div>
            <input type="text" ref={inputEle}/>
            <button onClick={UpdateChange}>Click Here</button>
        </div>
    )

}

export default UseRefHookExample;

// Access the dom element and can update it with ref of taking reference with help of useRef hook