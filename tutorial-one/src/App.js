import './App.css'; /* CSS를 얻어와 아래 작성된 태그 옆에 className으로 적용된다. */
/*
 기존 html에서는 css를 적용할 때 class를 사용하지만
 React에서 작성한 html에 css를 적용할때는 className으로 속성을 적용한다.
 css나 다른 js 를 가져올때 import 를 사용한다,

 css : import '/폴더/cssName.css' 을 써준다.
 js : import [별칭] from '/폴더/jsFilename.js'
  
 예시: R01_ClassComponent.js 를 R01 별칭 사용해서 App.js에 적용
*/
import R01 from './R01_ClassComponent.js'
import R02 from './R02_FunctionComponent.js'

function 
App() {
  return (
    <div className="App-header">
      <R01/>
      <p>-------------------------------------</p>
      <R02/>
    </div>
  );
}

export default App;
