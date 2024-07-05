import React, {createContext,useContext} from "react";
/*
Context 란
- Context : 사용하면 단계마다 일일이 props를 넘겨주지 않고도
Component(객체)에 데이터를 제공할 수 있음 

- createContext : 기본값을 가질 수 있고,
이 기본값은 해당 컨텍스트를 사용하는 컴포넌트가
상위 컴포넌트에서 제공하는 값을 찾을 수 없을 때 사용

- useContext :
context의 현재 값을 가져올 때 사용.
context에서 어떤 값을 받아 현재 값으로 보여줌

- Provider :
컨텍스트를 사용하는 컴포넌트들한테 동일한 값을 
모두 제공하는 컴포넌트. Provider는 value 라는 
prop을 받아서 하위 컴포넌트들에게
접근할 수 있도록 한다.

*/

/*
1. Context 객체 생성
// Context를 저장하는 변수명은 무조건 대문자로 시작한다.
*/
const TestContext = createContext();
//TestContext.Provider value = '부모가 전달한 값'
//TestContext로 value 내 작성한 '부모가 전달한 값'을
//createContext 내 저장, createContext 안에 있는 '부모가 전달한 값'이 
//Provider 밑에 있는 const, function, class 등 모든 컴포넌트에 전달된다.

//자식 컴포넌트
const Child1 = () =>{
    const parentValue = useContext(TestContext);
    return(
        <>
            <h2>자식 공간</h2>
            <p>{parentValue}</p>
            <p>---------------------------------</p>
            <Decendent1/>
        </>

    )
}

const Decendent1=()=>{
    const parentValue = useContext(TestContext) 
    return(
        <>
            <h2>후손 공간</h2>
            <p>{parentValue}</p>
            <p>---------------------------------</p>
        </>

    )
}



// 부모 컴포넌트
const Parent1 = () =>{
    return (
        /* Context 객체를 이용, 하위 컴포넌트에
        value 를 전달 (.Provider) */
        <TestContext.Provider value ='부모가 전달한 값'>
            <Child1/>
        </TestContext.Provider>
    );

}

export default Parent1;