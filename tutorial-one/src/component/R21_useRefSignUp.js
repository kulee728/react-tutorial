import React,{useState,useEffect,useRef} from "react";

function SignUpform(){
    
    /* 
        const [emailRef,setEmailRef] = useState(초기값)
        const emailRef = useRef(null); >> 참조. reference 주소를 할당하므로 추후 새로고침해도 값을가질것임

        */
    const emailRef = useRef(null);
    //react refresh 되어도 특정 값을 유지할 수 있도록 useRef를 설정함.
    //React 가 새로고침 되어도 변경된 특정 값을 유지할 수 있도록 useRef 설정.
    //useEffect를 사용, [] 안에 값을 비워줌으로서 최초 1회만 실행하는 기능 설정.

    useEffect(()=>{

            emailRef.current.focus();
            console.log(emailRef.current);
    },[]);

    return(
        <div>
            <h2>회원가입</h2>
            <form>
                <label>이메일</label>
                <input type="email"
                ref={emailRef}
                placeholder="이메일을 입력해주세요."/>
                <label>비밀번호</label>
                <input type="password" placeholder="비밀번호를 입력해주세요."/>
            </form>
        </div>

    )

}
export default SignUpform;