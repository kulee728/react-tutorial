/*
함수형 컴포넌트
*/

/*
1. 함수 생성
2. return html 생성
3. 만든 함수를 export default 지정
4. const 함수예제
*/

const 함수예제 = () =>{

    return(
        /*
            리액트 컴포넌트에 class 추가할 경우
            className 으로 작성
        */ 
       <>
       <h2 className="red"> 함수형 컴포넌트 입니다. </h2>
       <p>클래스 컴포넌트와 사용방식은 비슷, 기본 틀이 다름
        부가적으로 작성해야하는 코드가 상대적으로 적다.
        const 혹은 function으로 시작하는 코드에는 render()를 작성하지 않는다.
       </p>
       </>
    )

}
export default 함수예제;