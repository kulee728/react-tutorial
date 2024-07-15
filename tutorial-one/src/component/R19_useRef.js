import React,{useRef,useEffect} from "react";

const Ref=()=>{

    const countRef = useRef(0);

    useEffect(()=>{
        countRef.current++; //새로고침될 때 마다 countRef 값 증가
        console.log('react 새로고침 되었습니다. '+countRef.current);
    })

    return(
        <>
            <h1>useRef. 과연 무엇일까요</h1>
            <pre>
                React 주기적으로 새로고침은 실시간 값 반영을 가능케 한다.
                00.js, 컴포넌트가 새로고침 될 때 마다 특정 기능이나 값이 초기화되지 않고,
                값이 유지될 수 있도록 할 때 사용한다.

                ex)로그인 값이 새로고침해도, 로그인 시간 제한 전까지는
                로그아웃이 되지않게 하는등 유지할 때 사용
                - 그 외 입력 필드의 포커스 설정(스크롤 위치등) 
            </pre>
            <p>리액트가 새로고침 할 때 마다 숫자값을 증가</p>
            <p>{countRef.current}</p>ㅇㅇ
        </>
    )
}
export default Ref;