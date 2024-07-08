import logo from './logo.svg';
import './App.css';
//Routes, Route import해서 링크 설정
import { Routes,Route } from 'react-router-dom';
import Contact from './Component/Contact';
import Home from './Component/home';
import About from './Component/About';
import Navbar from './Component/Navbar';


function App() {
  return (
    <div>
      
      <Navbar/>
      <Routes>

        <Route path="/" element={<Home/>}> </Route> {/** 
         * path는 경로, element는 return 하는 html 파일 명
          단, index.js 나 index 같은 이름은 html 파일 명으로 피해주는것이 좋다.
         * */}
         <Route path="/about" element={<About/>}/>
         <Route path="/contact" element={<Contact/>}/>

      </Routes>
      
    </div>
  );
}

export default App;
