/*
https://www.npmjs.com/
(node package manager) npm install bootstrap 으로..설치나 실행 환경이 아주 쉽게 가능하다

특정 버전은
npm i bootstrap@5.2.1 이렇게 가능

npm uninstall bootstrap

npm으로 인한 설치는 npm start로 시작하고 있는 패키지와 관계 없이 가능하다.
*/
//import 'bootstrap/dist/css/bootstrap.css';
/**bootstarp import 같은건 보통 index.js에 사용한다.
 * 부트스트랩 뿐 아니라 전체적으로 사용할 css는 index.js 혹은
 * App.js에 작성한다.
 * 
 */



import React from 'react';

const BootstrapEx1 = () =>{

    return(
        <div className="container"> {/*반응형 레이아웃 컨테이너 만들기*/}
            <div className="row">{/* 행 생성 */}
                <div ClassName="col-md-auto">
                    <h1>React와 Bootstrap 사용 시작</h1>
                    <button className='btn btn-primary'>부트스트랩 버튼</button>
                </div>
            </div>

        </div>
    )
}

export default BootstrapEx1;

/*
package manager 종류
npm = 상대적으로 설치 속도 느림
yarn = npm 과 똑같은 패키지 관리자 npm 보다 좀 더 빠름.
*/