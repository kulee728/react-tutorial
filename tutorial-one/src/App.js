import './App.css'; /* CSS를 얻어와 아래 작성된 태그 옆에 className으로 적용된다. */
/*
 기존 html에서는 css를 적용할 때 class를 사용하지만
 React에서 작성한 html에 css를 적용할때는 className으로 속성을 적용한다.
 css나 다른 js 를 가져올때 import 를 사용한다,

 css : import '/폴더/cssName.css' 을 써준다.
 js : import [별칭] from '/폴더/jsFilename.js'
  
 예시: R01_ClassComponent.js 를 R01 별칭 사용해서 App.js에 적용
*/

import BootstrapEx1 from './component/R14_Bootstrap.js';
import R01 from './component/R01_ClassComponent.js'
import R02 from './component/R02_FunctionComponent.js'
import Props1 from './component/R03_Prop.js'
import Props2 from './component/R04_Props2.js'
import 김연경 from './component/R05_Prop3.js'
import StateEx1 from './component/R06_State1.js'
import StateEx2 from './component/R07_State2.js'
import Ex2 from './component/R08_State3.js'
import StateEx4 from './component/R09_State4.js'
import StateEx5 from './component/R10_State5.js'
import 댓글창 from './component/R11_State6.js'
import Context1 from './component/R12_Conext1.js'
import Context2 from './component/R13_Context2.js'
import Context11 from './component/R14_Bootstrap.js'
import Context3 from './component/R15_Context3/Parent.js'
import Context4 from './component/R16_Context4/PrintAllUser.js'
function 
App() {
  return (
    /*
  주석 -> {/*주로 코드를 주석처리*///} 

    <div className="App-header">
      
      {/*<R01/>*/}
      <p>-------------------------------------</p>
      {/*<R02/>*/}
      {/*
      <Props1 num='1' name='홍길동' age='20' score='90'/>
      <Props1 num='2' name='백길동' age='21' score='91'/>
      <Props1 num='3' name='청길동' age='23' score='92'/>
      
      <h3> Props 예제 2번 사용하기</h3>
      <Props2 name='강감찬' age='72' gender='남자'/>
      {/*
      Props2 객체는 
    <div className="info">
        이름 : {name} / 나이 : {age} / 성별 : {gender}
    </div>
    <<<< 이 코드를 한줄로 작성하기 위해 가져온 것. 
      
      

      
      <김연경 num='5' name='김연정' age='40' gender='여자' phone='010-1111-2222'/>

 
 <StateEx1/>

 <StateEx2/>

<Ex2 init="10" step="5"/> */}
 {/*<ex2 init="50" step="10"/>
 <StateEx4  init="50" step="1"/>

 <StateEx5/>
  <댓글창/>
  <Context1/>
  <BootstrapEx1/>
  <Context3/>
  <Context3/>*/}
  <Context4/>
    </div>
  );
}

export default App;
