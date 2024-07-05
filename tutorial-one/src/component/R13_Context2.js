import React,{createContext,useContext,useState} from "react";

    /*1. Context 객체 생성*/
const TestContext = createContext();

const Child2=()=>{

    const {number,setNumber} = useContext(TestContext);
    return (
        <>
            <h3>자식 컴포넌트 위치</h3>
            <input type="password" value={number} 
            onChange={e=>{setNumber(e.target.value)}}></input>
            <Decendent2/>
        </>
    )

}
const Decendent2 = () =>{
    const {number,setNumber} = useContext(TestContext);
    return(
        <>
            <h4>후손 컴포넌트</h4>
            <input type="text" value={number} onChange={e=>setNumber(e.target.value)}></input>
        </>
    )

}



    /*1. 부모 생성 */
const Parent2 = () =>{
    const [number,setNumber] = useState(0); // number 초기값 0 

    /*
    Context 는 값을 1개만 제공할 수 있어서
    2개 이상의 값을 제공하기 원한다면 {}, [] 묶어서 제공해야한다.
   
    TestContext.Provider value = {{number, setNumber}}
    이건 아래와 같다.
    {"number" : number, "setNumber" : setNumber변환될값}
    */



    return (
        <>
            <TestContext.Provider value = { {number, setNumber} }>
                <h1>{/* Parent Component의 혅재 값 출력 */}
                    부모다.:
                    <span className="red">{number}</span>

                </h1>
                <Child2/>
            </TestContext.Provider>
        </>
    );
}
export  default Parent2;