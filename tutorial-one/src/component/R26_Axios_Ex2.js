import React, { useState,useEffect } from "react";
import axios from "axios";

const Axios_Ex2 = () => {
  const [data, setData] = useState(null);
  const [objects, setObjects] = useState([]);


  useEffect( () => {
    axios
      .get("http://jsonplaceholder.typicode.com/comments")
      .then((res) => {
        setData(res.data);
      })
      .catch((error) => {
        alert("에러 발생!위용위용");
        console.log(error);
      });

    //JSON parsing 하기/*
    /*fetch(data)
      .then((res) => {
        return res.json();
      })
      .then((obj) => {
        List(obj);
      });

    setObjects(JSON.parse(data));
    console.log(objects);*/
  },[]);

  return (
    <>
      <h1>json 불러오고 list로 받아오기</h1>
      {data && (
        <textarea
          value={JSON.stringify(data, null, 4)}
          cols={60}
          rows={20}
          readOnly={true}
        />
      )}
      
      {data &&
      <ul>
        {data.map(comment=>(
            <li key={comment.postId}>

                <strong>PostID : </strong>{comment.postId}<br/>    
                <strong>UserID : </strong>{comment.id}<br/>    
                <strong>Name : </strong>{comment.name}<br/>    
                <strong>Email : </strong>{comment.email}<br/>    
                <strong>Body : </strong>{comment.body}<br/>
                <br/>    
            </li>
        ))}
        
      </ul>}
    </>
  );
};
export default Axios_Ex2;
