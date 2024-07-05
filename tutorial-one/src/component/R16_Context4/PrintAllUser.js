import React,{useContext, useState} from "react";
import InputArea from "./CreateUserInfo";
import UserInfoContext from "./SaveUserInfo";

const PrintAllComponent = () =>{
    const [userList,setUserList] = useState([]);
    return(
        <UserInfoContext.Provider value ={{userList,setUserList}}>
            <InputArea/>
            <div>
                {userList.map((newUser,index)=>{
                    return(
                        <ul key={index}>
                            <li>가입 순서 : {index}</li>
                            <li>이름 : {newUser.inputName}</li>
                            <li>전화번호 : {newUser.inputPhone}</li>
                        </ul>
                    )
                })}
            </div>
        </UserInfoContext.Provider>

    )

}
export default PrintAllComponent;