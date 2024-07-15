import React,{useRef,useEffect} from "react";

export const SignUpform2=()=>{
    const formRefArr = useRef([]);
    //formRefArr.current = [];
    const pwdRef = useRef(null);
    
    useEffect(()=>{
        console.log("a");
        //console.log( formRefArr.current["password"].value)
        if(formRefArr.current["password"].value===""){
            formRefArr.current["password"].focus();
            console.log("b");
        }
    },[])
    
    const submitForm =()=>{
        if(formRefArr.current["email"].value ==="")
            alert("이메일을 입력해주세요");
        if(formRefArr.current["password"].value ==="")
            alert("비밀번호를 입력해주세요");
        
        console.log(formRefArr);
    }

    return(
        <div>
            <form>
            <label>이메일</label>
            <input type="email" placeholder="이메일을 입력해주세요" 
            ref={el=>formRefArr.current["email"] =el}></input><br/>
            <label>비밀번호</label>
            <input type="password" placeholder="비밀번호를 입력해주세요"
             ref={el=>formRefArr.current["password"]=el}></input><br/>
            <button onClick={submitForm} type="button"> 제출하기 </button>
            </form>
        </div>
    )

}
//export default SignUpform2;