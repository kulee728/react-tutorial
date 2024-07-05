import React,{useState} from "react";

const StateEx4=(data) =>{
    const [age,setAge] = useState(Number(data.init));
    
    return(
        <div className="count-container">

            <button onClick={()=>
                setAge(Number(age)-Number(data.step)) 
            }>
            - {data.step}년
            </button>
            <h3>현재 나이는 {age}</h3>
            <button onClick={()=>
                setAge(Number(age)+Number(data.step)) 
            }>
            + {data.step}년
            </button>
        </div>
    )
}
export default StateEx4;