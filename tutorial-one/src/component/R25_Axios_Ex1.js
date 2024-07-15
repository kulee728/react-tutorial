import React, {useState} from 'react';
import axios from 'axios';




const Axios_Ex1 = ()=>{
    const [data,setData] = useState(null);

    const jsonLoadBtn=()=>{
        axios.get("http://jsonplaceholder.typicode.com/todos/1") // /1하면 더 특정 url을 가져온다
        //spring boot에서 던진 값도 가져올 수 있을 것이다.
            .then(res =>{
                setData(res.data);
            }) //가져오기 try 성공한 경우
            .catch(error =>{
                alert("데이터를 가져오는데 실패 했습니다.");
            }); // .get .then .catch 환장의 콜라보
    }

    return (
        <>
            <h1>버튼을 클릭하면 json 안에 작성된 내용 가져오기</h1>
            <button onClick={jsonLoadBtn}>불러오기</button>
            {data && <textarea rows="20" cols="80" value={JSON.stringify(data,null,2)} readOnly={true}></textarea>}
        </>
    );
}

export default Axios_Ex1;
/*
{data && <textarea value={JSON.stringify(data,null,2)} readOnly={true}></textarea>}
JSON.stringify = JSON 가져온 값을 문자열로 변환함.
(data, null, 2)
data -> value : JSON으로 가져온 data
null -> replacer : 가져올 범위 지정. null은 모두 가져옴
2 -> space : 2칸씩 들여쓰기 하겠다(indentation)

*/