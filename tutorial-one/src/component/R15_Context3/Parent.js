import React,{useState} from "react";
import UserContext from "./Usercontext";
import Child from "./Child";

const ParentComponent = () =>{

    const [userList,setUserList] = useState([]); //[]은 곧 빈 배열
    return(
        <UserContext.Provider value = {{userList,setUserList}}>
            <Child/>
            <div>
                {userList.map((user,index)=>{
                    return(
                        <ul key={index}> index 번호 
                            <li>{index}번 째 유저</li>
                            <li>{user.inputName}</li>
                            <li>{user.inputAge}</li>
                        </ul>
                    )
                })} 
            </div>
        </UserContext.Provider>
    )
}

export default ParentComponent;

/*
List의 순회
List.map((list객체명,index명)=>{
    return(
    순회 수행 내용.
        key={index} 하면 하위 태그에서 list[index] 에 접근이 가능하다. (객체명으로)
        
    )

    })
*/