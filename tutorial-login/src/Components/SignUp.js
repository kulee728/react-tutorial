import React, {useState} from "react";
const Signup = () => {
    const [id, setId] = useState('');
    const [pw, setPw] = useState('');
    const [signUpResult, setSignUpResult] = useState('');
    //아이디 중복검사와 중복검사 이벤트 핸들러
    const [idValidation,setIdValidation] = useState(false);
    const [pwValidation,setPwValidation] = useState(false);
    
    function initializeInput(){
        setId('');
        setPw('');

    }

    //ID,PWD 유효성 검사 eventHandler
    const idDupCheck=((eventId) =>{
        //eventId : 현재 입력하는 이벤트가 발생한 ID
        setId(eventId);

        if(eventId.trim().length <4){ // trim >> 문자열 양 옆 공백제거
            setIdValidation(false);
            return;
        }
        
        fetch("/idCheck?id="+eventId) //springboot controller에 던질 URL
            .then(response => response.text())
            .then(idCnt =>{
                if(Number(idCnt) === 0)
                    setIdValidation(true);
                else
                    setIdValidation(false);

            })

        setIdValidation(true);
        //DB에 중복 아이디가 있는지 비동기로 중복검사
        //axios, fetch 사용 가능
    })

    const signUpSubmission=()=>{
        if(!idValidation){
            alert("id가 유효하지 않습니다.");
            return;
        }
        //비밀번호 확인 일치 if()
        const inputValues = {};
        inputValues.id = id;
        inputValues.pw = pw;
        //이렇게하면
        // inputValues = {id:"id",pw:"pw"} 처럼 된다.
        
        fetch("/signUp",{
            method : "POST",
            headers : {"Content-Type" : "application/json"}, //보내는 주소
            //<form> 태그에는 {"Content-Type" : "application/json"}이 기본으로 포함된 상태로 넘어간다.
            //ContentType : 전달하는 값이 이미지, 동영상, 다중이미지 등 타입이 어떤것인지 정보를 전달한다.
            //application/json 은 코드가 존재하는 디렉토리 자체를, json은 key-value 형태인 json 파일 형식으로
            // 데이터를  전달함을 의미한다.

            body : JSON.stringify(inputValues) //보내는 값
                    .then(response => response.text())
                    .thtn(result =>{
                        if(Number(result)>0){
                            setSignUpResult('회원 가입 성공!');
                            initializeInput();
                        }
                        else{
                            setSignUpResult('회원 가입 문제가 발생했습니다.');
                        }
                    })
        })
    }
    

    return(
        <div className="signup-container">
            {/*
             label 태그 안에 for값을 작성하고 싶지 않다면
             <label for ="input에 작성된 id값과 일치하는 값을 작성"></label>
             <label><input/></label>
             작성해주면 for를 작성한 것과 동일하게 설정
             <label for="abc"></label><input id ="abc"/>
             ==똑같음==
             <label><input/></label>
            */}
            <label>
                ID :
                <input type="text"
                    onChange={e => idDupCheck(e.target.value)}
                    value={id}
                    className={idValidation ? '' : 'id-err'}
                    />
            </label>
            <label>
                PW :
                <input type="password"
                    onChange={e => {setPw(e.target.value)}}
                    value={pw}/>
            </label>
            <button onClick={signUpSubmission}>회원가입</button>
            <hr/>
            <h3>{signUpResult}</h3>
        </div>
    )
}
export default Signup;