import React from 'react';

function UseEffectEx(){
    return(
        <div>
    <h1>useEffect란 ?</h1>
    <pre>
        useEffect 함수는 컴포넌트(function, const 시작)가 랜더링 될 때마다
        특정 작업을 실행할 수 있도록 하는 hook
        리액트에서의 컴포넌트 : 하나의 목적(기능) 을 가진 js 파일들 
    </pre>    
        [useEffect] 사용 방법
        
        import [useEffect] from "react";
        useEffect(function,deps)
        
        function : **.js 를 랜더링했을때 수행하려는 작업
        deps : 배열 형태, 검사하고자 하는 특정 값 혹은 빈 배열을 작성한다.
        특성 값을 넣는 경우 컴포넌트가 실행될 때, 혹은 지정 값이 업데이트 될 때 useEffect 
        function 이 실행된다.
        deps 를 작성하지 않고, function만 작성하면 컴포넌트가 실행될 때에만 function 호출.

        {/*useEffect(()=>{},[]) 기본 형태. 익명함수,빈배열*/}
   
    </div>
    )
}
export default UseEffectEx;