import React from "react";

const Axios_JSON = () =>{
    return(
        <>
            <h1>Axios와 json</h1>
            <h3>JSON</h3>
            <h3>비동기처리</h3>
            <pre>
                JSON..과연 무엇일까요?
                JavaScript Object Notation

                주로 서버(java벡엔드)와 클라이언트(frontend) 간의 데이터 교환 형식.
                {
                    "표기명1" : 표기내용,
                    "표기명2" : 표기내용,
                    "표기명3" : 표기내용,
                    "표기명4" : ["표기내용4-1","표기내용4-2",...],
                    ..
                    ..

                } 
                개발자들이 서버에서 가져온 값을 화면에서 보고싶다면, 임시로 json으로 표현가능하여
                볼 수 있다. jsonplaceholder.typicode.com
                <a href='jsonplaceholder.typicode.com'>jsonplaceholder이동하기</a>  
                jsonplaceholder : 임시데이터로 사진, 포스터 같은 파일 보기 개발자들이 무료로 사용 가능.
                대표적으로 post, comment, photo, todos, users 가 존재
                http://jsonplaceholder.typicode.com/comments (comments 외 photos,albums,posts,...)
                무료로 쓸 수 있는 데이터들이다.

            </pre>
            <h3>비동기처리</h3>
            Ajax : js 로 서버와 비동기적인 데이터 교환. FetchAPI를 사용한다.
            Axios_JSON : js의 http client library, js에서 http요청을 보내고 응답을 처리한다.
            Promise :Axios  성공 유무
            Fetch : Ajax 성공 유무 

            <h5>Axios 를 활용한 API 가져오기</h5>
            프로젝트를 가져오기 위해 axios를 설치 (npm i axios 혹은 yarn add axios)
            https://axios-http.com/kr/docs/intro 에서 가져올 수 있다.

        </>

    ) 
}
export default Axios_JSON;