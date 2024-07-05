import React, {useState,useContext} from "react";

import UserContext from "./Usercontext";

const Child = () =>{
    
    const {userList,setUserList} = useContext(UserContext);

    const [inputName,setInputName] = useState('');
    const [inputAge,setInputAge] = useState('');

    const addUserList = () =>{
        // 상태 변수값을 이용해서 user 객체 생성 (변수명key : value)
        const user = {
            "inputName" : inputName,
            "inputAge" : inputAge
        };
        const newUser = [...userList,user]; //문법 유의! 
        //이미 생성되어 있는 userList를 복사하여 user를 추가한 새로운 배열 newUser를 선언
        console.log("aa");
        setUserList(newUser);
    }
    return (
        <div>
            <label htmlFor="inputNameTag">이름</label>
            <input type="text" id="inputNameTag" onChange={(e)=>{
                setInputName(e.target.value)
            } }value={inputName}/><br/>
            <label htmlFor="inputAgeTag">나이</label>
            <input type="number" id="inputAgeTag"onChange={(e)=>{setInputAge(e.target.value)}} value={inputAge}/>
            {/*
            value 의 초기값은 useState('') 일 것이다.
            값변경 event가 감지되면 input 에 작성된 값이 곧 value 가 될 것이다.
            */}<br/>
            <button onClick={addUserList}>유저 추가하기</button>
        </div>

    )
}
export default Child;