import React, {useState,useEffect } from 'react';


const shuffleArray = (array) => {
  return array.sort(() => Math.random() - 0.5);
};



/*
 * 틱택토2스탭 컴포넌트 시작 위치
 * 
 */
const TicTacToe= () => {
  const [numbers, setNumbers] = useState(shuffleArray([...Array(20).keys()].map(n => n + 1)));
  const [nextNumber, setNextNumber] =useState('1'); //1부터 시작
  const [message, setMessage] = useState('');//빈공간으로 놓기
  const [isFailed,setIsFailed] = useState(false);
  const [isSucess,setIsSucess] = useState(false);
  const [timer,setTimer] = useState(500); //시간 타이머 초기설정하기
  /*
  useEffect(()=>{
    setTimer(3);
    console.log("useEffect 호출됨");
  },[]);
*/
  useEffect(()=>{
    let countdown;
    if(timer>0) {//남은시간 0보다 크다면
      countdown = setTimeout(()=>{
        setTimer(t=>t-1);
      },1000); //setTimeout(실행할 기능, )

    } else if(timer<=0){
      alert("시간초과!");
    }
  });

  /*
  예시1
  useEffect( ()=>{}, [nextNumber]) : nextNumber의 값이 바뀔 때 마다 useEffect가 실행됨.

 
 예시2
  useEffect( function 기능명  () => {어떤 기능이 동작해야하나요?  }, 
  [어떤값이변경될때마다 function기능이 움직여야하나요?]);
  
  */
  
  const handleNumberClick = (index) => {
    if(isFailed || isSucess){
        return;
    }
    
    
    

    console.log("numbers[index] = "+numbers[index]);
    console.log(nextNumber);
    if ( Number(numbers[index]) === Number(nextNumber)) { //클릭한 숫자가 nextNumber (원래 클릭되어야하는 숫자인경우)
      if (nextNumber === 20) { 
        //맞추면 메세지내용 맞췄습니다.! 로 변경하기
        setMessage('정답입니다! 축하합니다!')
            setIsSucess(true);
            const btnId = document.getElementById('button_'+20);
            btnId.classList.replace("number-button","number-button-success");

      } else {
        //색 변경 해주고
        const btnId = document.getElementById('button_'+nextNumber);
        btnId.classList.replace("number-button","number-button-disabled");
        btnId.setAttribute('disabled', '');


        

        setNextNumber(Number(nextNumber) + 1);
      }
    } else {
     //틀렸을경우 메세지 보여주기
        for(let i =1;i<=numbers.length;i++){
            const btnId = document.getElementById('button_'+i);
            btnId.classList.replace("number-button","number-button-disabled");
            btnId.setAttribute('disabled', '');
        }

        setMessage("틀렸습니다! 다시 시도하세요");
        setIsFailed(true);
    }
  };

  const handleRestart = () => {
    setNumbers(shuffleArray([...Array(20).keys()].map(n => n + 1)));
    setMessage('');
    setNextNumber('1');
    setIsFailed(false);
    setIsSucess(false);
    setTimer('10');
    for(let i =1;i<=numbers.length;i++){
        const btnId = document.getElementById('button_'+i);
        btnId.classList.remove("number-button-disabled");
        btnId.classList.remove("number-button-success");
        btnId.removeAttribute('disabled');
        btnId.classList.add("number-button");
    }
    //번호초기화 
//메세지 초기화
  };

  return (
    <div className="tic-tac-container">
      <h1>TicTac</h1>

      <div className='timer'>남은 시간 : {timer}초</div>
      <div className="grid">
        {numbers.map((number,index) => (
          <button id={'button_'+number} key={index} onClick={() => handleNumberClick(index)} className="number-button">
            {number}
          </button>
        ))}
      </div>
      <p className="message">{message}</p>
      <button onClick={handleRestart} className="restart-button">게임 재시작</button>
    </div>
  );
};

export default TicTacToe;
