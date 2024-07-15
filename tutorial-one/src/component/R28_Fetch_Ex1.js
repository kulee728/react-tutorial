import React, {useState,useEffect} from "react"
import axios from "axios"

//fetch 예제


const FectchEx1 = () =>{
    const [users,setUsers] = useState([]);
    const [error,setError] = useState('');

    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users")

        .then(res=>{
            return res.json();
        })
        .then(data =>{
            setUsers(data);
        })
        .catch(error=>{
            setError(error);
        })
    });

    return(
        <>
            <h1>User List</h1>
            <ul>
                {users.map(user=>(
                    <li key={user.id}>{user.name}</li>

                ))}
            </ul>
        </>
    )
}
export default FectchEx1;