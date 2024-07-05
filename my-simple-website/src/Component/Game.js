import React,{useState} from 'react';





const Game =() =>{
    //사용자가 맞출 숫자를 입력 : guess
    const [guess,setGuess] = useState('');
    const [message,setMessage] = useState('');
    const [number,setNumber] = useState(Math.floor(Math.random()*10)+1);
    const [attempts, setAttempts] = useState(0);
    const maxAttemps = 10;
    const [remainingAttemps, setRemainingAttempts] = useState(maxAttemps);
    //사용자가 숫자를 맞추려 할 때마다(버튼제출) attepts를 올려보자
    
    const handleSubmit=(e)=>{
        e.preventDefault(); //인터넷이 가지고 있는 기본 동작 방지 (알아서 새로고침이나 제출 안되도록)
        const userGuess = parseInt(guess,10);
    
            
            if(userGuess === number && remainingAttemps!=0){
                setMessage("축하축하추! 맞췄추!");
            }
            else{
                if(remainingAttemps==0){
                    setMessage("으이그~ 모든 기회를 소진했어요!");
                    return;
                }
                setAttempts(attempts+1);
                setRemainingAttempts(remainingAttemps-1);

                if(userGuess>number){
                    setMessage("숫자가 너무커요 ㅡ,ㅡ")
                }
                else{
                    setMessage("숫자 is car , 숫자가 자가용 >_<");
                }

            }

    }
    
    const handleChange = (e)=>{
        setGuess(e.target.value);
    }

    const handleRestart = (e)=>{
        setGuess('');
        setMessage('');
        setNumber(Math.floor(Math.random()*10)+1);
    }


    return (
        <div>
            <h1>숫자 맞추기 게임</h1>
            <form onSubmit={handleSubmit}>
                <input type="number"
                    value={guess}
                    onChange={handleChange} //숫자 입력 eventHandler
                    placeholder='1에서 10 사이의 숫자 입력하기'
                ></input><br/>
                <button>추측하기</button>
            </form>
            <p>{message}</p>
            <p>현재 추측 횟수 : {attempts}</p>
            <p>남은 추측 횟수 : {maxAttemps-attempts}</p>
            <button onClick={handleRestart}>재시작버튼</button>
        </div>

    )

}
export default Game; 