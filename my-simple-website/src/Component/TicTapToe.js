import React,{useState,useEffect} from 'react';
import '../TicTapToe.css';
import { Link } from 'react-router-dom';
const shuffleRandomArray = (array) =>{
    return array.sort(()=>Math.random()-0.5);
}
/*
const [timer,setTimer] = useState('30');

useEffect(()=>{
    //TictapToe.js 가 실행되면 특정 기능 시작하기! (ex.타이머)
    const time = setInterval(()=>{
        setTimer(timer-1);
    },1000);
    return () => clearInterval
    },[])

*/
const TicTapToe = ()=>{
    const [numbers,setNumbers] = useState(shuffleRandomArray([...Array(9).keys()].map(n=>n+1)));
    const [nextNumber,setNextNumber] = useState(1);
    const [message,setMessage] = useState('');
    const [success,setSuccess] = useState(false);





    const clickedNumber = (number) =>{
        if(success)
            return;
        if(number===nextNumber){
            if(number===9){
                setMessage('축하합니다! 정답입니다!');
                setSuccess(true);
            }
            else{
                setNextNumber(nextNumber+1);
            }
        }
        else{
            setMessage('틀렸습니다. 처음부터 다시하세요.');
        }
    }

    const reStartTicTapToe = ()=>{
        setNumbers(shuffleRandomArray([...Array(9).keys()].map(n=>n+1)));
        setNextNumber(1);
        setMessage('');
    }

    return(
        <>
        <div className="tictaptoe-container">
        <h1>TicTapToe</h1>
        {/*<p>남은 시간 : {timer}</p>*/}
        <div className='tictaptoe-grid'>
          
            {numbers.map((number)=>(
                <button className="tictaptoe-button" key={number} onClick={()=>clickedNumber(number)}>
                    {number}
                </button>
            ))}
        </div>
        <p>{message}</p>
        <button onClick={reStartTicTapToe}>게임 재시작</button>
        {success && <Link to="/tictaptoe2"><button>다음 단계로 이동하기</button></Link>}
        
        </div>
        </>
    )

}

export default TicTapToe;