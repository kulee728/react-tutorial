import React,{createContext} from "react";

const LoginContext = createContext(); //로그인 정보가 유지된다 = 유저가 로그인해있다 = context 접근으로 알 수 있다.
// App.js 에서 LoginContext 태그로 감싸주면 가능하다. (해당 범위에서는 로그인/로그아웃 정보에 대해 접근 가능)

export default LoginContext;