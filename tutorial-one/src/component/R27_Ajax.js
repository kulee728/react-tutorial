import axios from "axios";
import React from "react";


const Ajax_Fetch = () =>{

    return(
        <>
            <h1>Ajax와 Fetch</h1>
            <pre>
                Ajax는 서버와 통신에서 웹 페이지를 새로고침 하지 않고
                데이터를 가져오거나 보낼 수 있게 해주는 기술
                jQuery js 에서 많이 사용

                React에서는 Ajax 대신 Fetch API, Axios 와 같은 라이브러리를 사용한다.
                여기서 질문 (API는..? 라이브러리는..?)
                fetch API : 리액트에 내장되어 있는 API를 가져와서 사용.
                Application Programming Interface (API) : 기술 연결 주소.
                어떤 기술(데이터) 를 주소값으로 가져오거나 디스플레이하고 싶을 때 사용.
                ex) 마이페이지 API는 무엇인가
                    속 뜻 : 마이페이지 주소는?
                    로그인 데이터를 가져올 수 있는 벡엔드 주소가 뭐에요?
                ex) 게시판에서 게시물이 안보여요. API가 잘못된 것 같아요.
                    (속 뜻 : 벡엔드에서 데이터 가져오는 주소가 잘못됐거나 그 안에 코드가 이상하다.)

            axios 라이브러리 : npm i axios 로 외부 기능을 가져와 사용.
            기능은 npmJs 로 되어있는 홈페이지에 가입
            <a href="https://www.npmjs.com">npm으로 이동하기</a>
            사용 예제 코드
            ** 따로 설치 X
            </pre>
            <h3>사용 예제 코드</h3>
            <p>**따로 설치 X</p>
            <pre>
                fetch('api주소작성') //불러올 주소가 적힌 try라 생각하자.
                //1. 데이터 무사히 가져왔다면 json으로 파일 전달
                    .then(res=>{
                        return res.json();
                    })

                    .then(data =>{
                        실행할 코드 작성
                    })
                    // 데이터 가져오는데 실패했다면
                    .catach(error=>{ //자바에서 catch 또는 else로 에러가 발생했을 때를 보여줌
                        에러 실행
                    })

            </pre>
        </>
    )

}
export default Ajax_Fetch;