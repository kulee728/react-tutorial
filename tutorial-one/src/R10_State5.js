import React, {useState} from "react";

const IDvalue = (props) =>{
    //이것은 곧 핸들러 이다
    //handler = 어떤 값을 처리하거나 조종하는 변수
    const {handler} = props;
    
    return(
        <div className="wrapper">
            {/* htmlFor = for 속성 */}
            <label htmlFor="inputId">Id</label>
            {/* onChange = 값 변경 시 부모로 전달받은 함수 핸들러 수행 */}
            <input type="text" id="inputId" onChange={handler}/>
        </div>
    )
}

const PWvalue = ({handler})=>{

    return(
        <div className="wrapper">
        {/* htmlFor = for 속성 */}
        <label htmlFor="inputPw">Pwd</label>
        {/* onChange = 값 변경 시 부모로 전달받은 함수 핸들러 수행 */}
        <input type="text" id="inputPw" onChange={handler}/>
    </div>

    )
}




const ParentEx = () =>{
    const [id,setId] = useState(''); //초기 값
    const [pw,setPw] = useState('');

    //eventListener : 동작(상태 변화) 감지
    //eventHandler : Listener 이벤트 감지시 수행될 기능
    const idHandler = (e) =>{
        setId(e.target.value) //ID
    } //idHandler 이라는 이벤트 핸들러 기능 설정.. 
    //<IDvalue handler={idHandler}/> 에서 변경되는 target의 value 가져오기

    const pwHandler = (e) =>{
        setPw(e.target.value)
    } 


    return(
        <div>
            <IDvalue handler={idHandler}/>
            <PWvalue handler={pwHandler}/>
            {/*ID,PW 입력되지 않으면 버튼 비활성화 */}
            <button disabled={id.length===0 || pw.length===0}>
                Login
            </button>
        </div>
    )
}
export default ParentEx;