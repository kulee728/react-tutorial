import React,{useState} from 'react';

const Loading = ()=>{
    const [loading,setLoding] = useState(true);
    
    if(loading){
        return(
            <div>로딩중입니다..</div>
        )
    }


    return(
        <>
        <h1>로딩표기</h1>
        <pre>
            js에서 innerHTML 쓰듯 react도 innerHTML 쓸 수 있다.
            if(loading) return <div>로딩중입니다.</div> 
            이런 식으로..

        </pre>
        </>
    )
}