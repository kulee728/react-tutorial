import React,{useState} from "react";

const 댓글내용 = (props) =>{
    const {handler} = props;
    return(
        <div class="wrapper">

        <label htmlFor="inputComment">댓글내용 : </label>
            {/* onChange = 값 변경 시 부모로 전달받은 함수 핸들러 수행 */}
            <input type="textarea" id="inputComment" onChange={handler}/>
        </div>

    )
}

const 작성자 = ({handler}) =>{
    return(
        <div class="wrapper">

        <label htmlFor="inputComment">작성자 : </label>
            {/* onChange = 값 변경 시 부모로 전달받은 함수 핸들러 수행 */}
            <input type="textarea" id="inputWriter" onChange={handler}/>
        </div>

    )
}

const 댓글창 = () =>{
   const [comment, setComment] = useState('');
   const [writer,setWriter] = useState('');
   
   const commentHandler = (e) =>{
     setComment(e.target.value);
   }
   const writerHandler = (e) =>{
    setWriter(e.target.value);
   }

   return(
    <>
    <div>
            <댓글내용 handler={commentHandler}/>
            <작성자 handler={writerHandler}/>
            {/*ID,PW 입력되지 않으면 버튼 비활성화 */}
            <button disabled={comment.length===0 || writer.length===0}>
                댓글 작성
            </button>
 </div>

    {/*
        댓글 입력 창과 댓글 작성 창 보여주고
        댓글과 댓글 작성자가 모두 안적혀있으면 버튼 비활성화
        모두 적혀있으면 활성화.
    */}
    </>
   )
    
}
export default 댓글창;