import React,{useState,useContext} from "react";

import UserInfoContext from "./SaveUserInfo";

//input 타입을 만들고 저장
const InputArea=()=>{

    const [userList,setUserList] = useContext(UserInfoContext);
    const[inputName,setInputName] = useState('');
    const[inputPhone,setInputPhone] = useState('');
    const AddUser=() =>{
            const newUser = {
               "inputName": inputName,
                "inputPhone" :inputPhone
            }
            const newUserList = [...userList,newUser];
            setUserList(newUserList);
            setInputName('');
            setInputPhone('');
    }
    return(
        <div>
            <label htmlFor="inputNameTag">이름 입력 : </label>
            <input type="text" id="inputNameTag" onChange={(e)=>{
                setInputName(e.target.value)
            }} value={inputName}/><br/>
            <label htmlFor="inputPhoneTag">전화번호 입력 : </label>
            <input type="text" id="inputPhoneTag" onChange={(e)=>{
                setInputPhone(e.target.value)
            }} value={inputPhone}/><br/>
            <button onClick={AddUser}>이름 전화번호 입력하기</button>

        </div>
    )
    
}
export default InputArea;