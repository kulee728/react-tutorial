const parent2 = (props) =>{
    /*
    props : 부모 컴포넌트 (tag)로 부터 전달받은 값을 담는 객체
    
      <Props2 name='강감찬' age='72' gender='남자'/> 이런 값이
       상위 코드 (App.js 등) 에서 넘어온다.
     
       변수 선언 / 초기화  오른쪽에 있는 props 객체의 키 값이
     변수명과 일치한다면 자동으로 대입되는 것이다.
     상위 코드에서 props.name 등으로 접근할 수 있는 이유.
    */
   const {name,age,gender} = props;
   return (
    <div className="info">
        이름 : {name} / 나이 : {age} / 성별 : {gender}
    </div>
   )
}

export default parent2;