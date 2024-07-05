import React,{useState} from "react";

const Ex2 = (props) =>{
    //props 로 전달받은 값 중 init 을 count 값으로 설정하기
    

    const [count,setCount] = useState(Number(props.init));

/*
JS 받아오는 값을 숫자로 처리할 때 있다.

useState(Number(props.init)) >> App.js에서 가져온 props의 init 필드를
가져온다. 이때 useState로 count의 값을 변경시켰다.
 
*/


    return(
        <div className="count-container">
            <button onClick={(count-Number(props.step))}>
            -{props.step}</button>
            
            <h3>{count}</h3>

            <button onClick={(count+Number(props.step))}>
            +{props.step}</button>

        </div>
    )


}
export default Ex2; 