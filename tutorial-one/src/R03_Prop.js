/* pros 예제 1 (함수형 컴포넌트)

@param {*} props : 부모 -> 자식 컴포넌트로 데이터 전달 시 사용하는 객체
*/

const parent1 = (props) =>{
    
    console.log("부모 1번 : ",props);

    return(
        <>
            <h3>Props 예제 1번 확인하기</h3>
            {/*작성 값이나 코드를 html내부에 사용할때 중괄호 {} 를 사용한다.*/}
            <ul>
                <li>번호 : {props.num} </li>
                <li>이름 : {props.name}</li>
                <li>나이 : {props.age} 세</li>
                <li>점수 : {props.score} 점</li>
                
            </ul>
        </>
    )
}
export default parent1;