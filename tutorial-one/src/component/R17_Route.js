/*
React Router 링크를 연결해서 이동하기 위해 사용되는 라이브러리
기존 html 주소값을 이동할 때 사용한 방법
기존 <a href="이동할html주소">이동하기</a>
>> a태그로 href 를 이용할 경우 html 파일 명을 작성해주는 것이므로 React 에서는 
단순히 a와 href 만 사용할 수는 없다.
React 는 html 파일이 index.html로, 한 파일 밖에 없기 때문에

리액트는 js 를 이동해서 html 파일을 보여주기 때문에
이를 a태그로 이동하는게 아닌 리액트만의 링크 이동 방식
react-router-dom 을 사용한다.

라우터란 ? 종이컵 전화기 사이 실. 연결 경로를 자동으로 전환해서 주는 기계
        : 연결 경로를 자동으로 전환하는 것은
        고객(=user)이 특정 화면/기능을 서버에 요청 할 경우
        고객의 요청에 따라 그것을 적절히 응답해주는 것을 뜻한다.
        
npm install react-router-dom
        
router 4가지 설정
BrowserRouter : html 에서 url전체의 관리자 역할 (History API 사용)
Routes : 링크 모음을 나타내는 표현 태그
Route : 어떤 링크가 어떠한 js를 표현하는지에 대한 속성
Link : 사용자가 누르고 이동할 수 있는 링크 생성. href 와 같다.

사용방법은 다음처럼
<BorwserRouter>
    <Routes>
        <Route path="이동링크" element={<js파일명}
        <Route path="/" elemnet={<Home/} <!-- 맨 위에 Home.js를 import--> >>이렇게 하면 경로"/" 가 Home.js를 가리킨다.
    </Routes>
</BorwserRouter>

주의사항.
*BrowserRouter 는 index, App.js 에서 주로사용한다.
App.js 를 index.js 바로 아래에서 사용하지 않는다면, index.js 바로 아래에서 표현되는 js 에서 BrowserRouter 에서 작성


*/

