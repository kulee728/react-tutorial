import React from "react";

const Result = ({inputText,answerText}) =>{

    const isCorrect = inputText === answerText;
    return(
        <div className="result">
            <h2>결과</h2>
            {isCorrect ? (
                <p>완벽히 작성하셨습니다!</p>
            ) :(
                <p>정답이 아닙니다. 유심히 보십시오.</p>
            )}
        </div>
    );

};

export default Result;