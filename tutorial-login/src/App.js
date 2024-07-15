import React, {useState} from 'react';
import LoginContext from './Components/LoginContext';
import Signup from './Components/SignUp';
import './App.css'
import Login from './Components/Login';

/* 현재 App.js 는 제일 상위 컴포넌트임 */
function App() {
  
  const [signUpView,setSignUpView] = useState(false);
  const [loginMember,setLoginMember] = useState(null);
  
  //value 의 값을 두개 이상 전달하기 위해서는 중괄호를 두개 써야한다.
  return (
    <LoginContext.Provider value={{loginMember,setLoginMember}} >
      <button onClick={()=>{setSignUpView(!signUpView)}}>
        {signUpView ? ('회원 가입 닫기') : ('회원 가입 열기')}
      </button>
      <div className='signup-wrapper'>
        {/*signUpView 가 true 인 경우에만 실행되는 공간*/}

        {signUpView && (<Signup/>)}
      </div>
    <h1>ToDo List</h1>
    <Login/>
    {/*로그인을 해야 ToDoList 보일 수 있도록 해보자. */}


    {/* value={} => 하나의 값만 작성
        value={{}} => 두가지 이상의 값을 작성
        loginMember => 처음에 로그인 안된 초기값을 가지고 있는 것
        setLoginMember => 로그인 한 다음에 로그인한 정보를 가지고 있는 것
    */}
    </LoginContext.Provider>
  );
}

export default App;
