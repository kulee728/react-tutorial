import React,{useRef,useEffect,useState} from "react";


const RefInputFocus = () =>{
    const [typeMsg,setTypeMsg] = useState('');
    const inputRef = useRef(null);


    const btnClicked = ()=>{/*
        if(!inputRef.current){
            setTypeMsg("여기안에들어갔지롱");
        }*/
        if(inputRef.current.value ==""){
            console.log(inputRef.current.value);
            inputRef.current.focus();
        }
    }
    useEffect(btnClicked,[]);
    return (
        <div>
            <input ref={inputRef} type='text'/>
            <button onClick={btnClicked}>input 값이 비었다면 input으로 위치 포커싱</button>
            <p>{typeMsg}</p>
        </div>
    )
}
export default RefInputFocus;