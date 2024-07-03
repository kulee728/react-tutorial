/*
JS 파일은 외부에서 사용하기 위해서는 무조건 대문자로 시작해야 한다.
*/
import React, {Component } from "react";
// node-modules 폴더에서 react 폴더 파일을 가져와서, 이 페이지에서 사용하겠다는 뜻
// react 폴더 별칭을 React로 설정

// node_modules : Node.js 에서 프로젝트가 사용할 패키지, 라이브러리 저장됨
// 우리가 만든 코드(클래스)는 export defualt 해야 외부에서 사용 가능하다.


//old ver >> 컴포넌트 extends는 예전 방식이다
class ComponentA extends Component{
    render(){
        //render 함수는 return  되는 html 코드 (jsx,js + xml)를 화면에 출력한다.
        // 화면이 변경되어야 할 시점에 자동으로 호출된다.
        // 컴포넌트를 상속받는 하위 클래스에 반드시 있어야 하는함수이다.
        console.log("js 작성 공간");
        return(
            //아무것도 없는 태그<>는 div랑 똑같다
            <> 
            <p>
                리액트에서 return 블록은
                코드를 처음부터 끝까지 감싸줄 태그가 필요하다.
                <div>div를 넣은  태그입니다.</div>
                <>아무것도 안 넣은 태그입니다.</><br></br>

                div : html 표준 태그, 레이아웃과 스타일링일 위한 컨테이너로 사용
                <></> html 표준에 없는 사용자 정의 태그, 특정 기능 혹은 화면을 감싸는데ㅔ

            </p>
                <h2>클래스형 컴포넌트</h2>
            </>

        )
    }
}

export default ComponentA;
//다른 js에서 내보내고자 하는 코드를 import 해서 사용 가능
