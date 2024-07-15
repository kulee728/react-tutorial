import React,{ useState,useContext } from "react"
import LoginContext from "./LoginContext"

const Login = ()=>{
      // App.js에 작성한 Context에서
    //   loginMember 와  오른쪽에 작성한 LoginContext 에 키가 일치하는 값을 가져와 대입
    // 만약에 로그인한 값이 없으면 로그인화면으로 이동
    const {loginMember,setLoginMember} = useContext(LoginContext);

    const [id,setId] = useState('');
    const [pw,setPw] = useState('');
    
    const loginSubmission = ()=>{
        fetch("/login",{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
                "Accept" : "application/json"},
                body : JSON.stringify({id:id,pw:pw}) //본문으로 id,pw 전달
                    .then(response=>response.json())
                    .then(map=>{
                        console.log(map);
                        //로그인 실패시
                        if(map.loginMember ===null){
                            alert("아이디 비밀번호가 일치하지 않습니다.");
                            return;
                        }
                        setLoginMember(map.loginMember); //App.js 로 로그인 정보 던지기
                        setId('');
                        setPw('');
                    })
            })

    }

      

    return(
        <div className="login-container">
            <table>
                <tbody>
                    <tr>
                        <th>ID</th>
                        <td>
                            <input type="text" onChange={e=>setId(e.target.value)} value={id}/>
                        </td>
                    </tr>
                    <tr>
                        <th>PW</th>
                        <td>
                            <input type="password" onChange={e=>setPw(e.target.value)} value={pw}/>
                        </td>
                        <td>
                            <button onClick={loginSubmission}>로그인</button>
                        </td>
                    </tr>
                </tbody>
            </table>

        </div>
    )
}
export default Login;