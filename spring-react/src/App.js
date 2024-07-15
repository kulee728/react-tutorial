import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>벡엔드 스프링과 연결하기</h1>
      <pre>
          package.json 아래에
          "proxy" : "http://localhost:9090" 을 추가해주면
          9090 포트로 연결한 spring boot와 연결할 수 있다.
      </pre>
    </div>
  );
}

export default App;
