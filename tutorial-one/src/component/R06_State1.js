import React, {useState} from "react";
/*
React 초기,
class 코드 작성은 render와 같은 불필요한 코드 작성을
많이 요구했고, function은 기능적으로 부족한 부분이 있어
두가지의 단점을 보완한 "Hook" 기능을 만들었다.
[Hook의 종류] = react 에서 어떤 동작이나 상태를
표현하거나 변경할 때 사용하는 기능 (진짜 중요한기능들)
 1. useState · 
 2. useEffect · 
 3. useContext · 
 4. useReducer · 
 5. useMemo · 
 6. useCallback · 
 7. useRef. useRef
*/

/*
use 로 시작하는 Hook은
import React, {useState,useContext} from 'react' 식으로 쓴다
State : 컴포넌트(객체) 의 상태

useState() 함수 >> 컴포넌트(객체)의 상태
- 해당하는 객체를 다시 새로고침(랜더링)하여 실행하는 함수.
ReRendering.
- Rendering = 표현. 

*/
//class StateEx1 extends Component{}
//function StateEx1(){} 와 같은 표현. React 초창기 문법

// ES6 (ECMSCript 6)에서의 가장 최신 문법
const StateEx1 = () =>{
    const[test,setTest] = useState('A');
    //test : 초기 변수 값(값이 없을 수도 있음)
    //setTest : test값을 변경하기 위한 값
    //useState('A') : test의 초기 값
    //const[초기값,변경될 값] = useState('처음에 들어갈 값');

    const valueChange = () =>{
        if(test == 'A')
            setTest('B');
        else
            setTest('A');

    }    


    return(
        /*return 내에는 <> </> 태그나 div 로 전체를 감싼다
        해당 코드는
        /public/index.html 내 <div id="root"> 내부로 삽입된다.
        usercode인 css, html도 거기로 간다! 
        */
        <>
            <h1>{test}</h1>
            {/*
                onclick 을 react에서는 onClick 으로쓴다.
            */}
            <button onClick={valueChange}>변경클릭버튼
            </button>
        </>
    )
}

export default StateEx1;

