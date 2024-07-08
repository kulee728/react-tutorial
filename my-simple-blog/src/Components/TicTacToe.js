import React, {useState,useEffect } from 'react';


const shuffleArray = (array) => {
  return array.sort(() => Math.random() - 0.5);
};

const TicTacToe= () => {
  const [numbers, setNumbers] = useState(shuffleArray([...Array(9).keys()].map(n => n + 1)));
  const [nextNumber, setNextNumber] =useState('1'); //1부터 시작
  const [message, setMessage] = useState('');//빈공간으로 놓기
  const [isFailed,setIsFailed] = useState(false);
  const handleNumberClick = (index) => {
    if(isFailed){
        return;
    }
    console.log("numbers[index] = "+numbers[index]);
    console.log(nextNumber);
    if ( Number(numbers[index]) === Number(nextNumber)) { //클릭한 숫자가 nextNumber (원래 클릭되어야하는 숫자인경우)
      if (nextNumber === 9) { 
        //맞추면 메세지내용 맞췄습니다.! 로 변경하기
        setMessage('정답입니다! 축하합니다!')
       
            const btnId = document.getElementById('button_'+9);
            btnId.classList.replace("number-button","number-button-success");

      } else {
        //색 변경 해주고
        const btnId = document.getElementById('button_'+nextNumber);
        btnId.classList.replace("number-button","number-button-disabled");

        setNextNumber(Number(nextNumber) + 1);
      }
    } else {
     //틀렸을경우 메세지 보여주기
        for(let i =1;i<=9;i++){
            const btnId = document.getElementById('button_'+i);
            btnId.classList.replace("number-button","number-button-disabled");
        }

        setMessage("틀렸습니다! 다시 시도하세요");
        setIsFailed(true);
    }
  };

  const handleRestart = () => {
    setNumbers(shuffleArray([...Array(9).keys()].map(n => n + 1)));
    setMessage('');
    setNextNumber('1');
    setIsFailed(false);
    for(let i =1;i<=9;i++){
        const btnId = document.getElementById('button_'+i);
        btnId.classList.replace("number-button-disabled","number-button");
    }
    //번호초기화 
//메세지 초기화
  };

  return (
    <div className="tic-tac-container">
      <h1>TicTac</h1>
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
