import React,{useState} from "react";

function StateEx2(){

    const [abc,efg] = useState('Z');
    //버튼을 클릭할 경우 Z를 X로 변경하기

    const zToX =()=>{
        if(abc=='X') efg('Z');
        else efg('X');
        
    }
    return(
        <>
            <h1>{abc}</h1>
            <button onClick={zToX}>값변경하기</button>
        </>
    )


}
export default StateEx2; 