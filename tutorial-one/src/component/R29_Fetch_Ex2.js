import React,{useState,useEffect} from "react";
import axios from "axios";

const FetchEx2=()=>{
    const [photos,setPhotos] = useState([]);
    const [error,setError] = useState('');

    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/photos")
            .then(res=>{
                return res.json();
            })
            .then(data=>{
                //setPhotos(data); api 주소에 작성된 모든 데이터를 가져왔다.
                //여기서 data의 일부분만 가져오기를 원한다면
                //slice 를 이용할 수 있다.
                setPhotos(data.slice(0,10));
            })
            .catch(error=>{
                setError(error);
            })

    },[])


    return(
        <>
            <h1>사진 정보 가져오기</h1>
            <ul>
                {photos.map(photo=>(
                    <li key={photo.id}>
                        <strong>사진 Title : {photo.title}</strong><br/>
                        <strong>사진 thumbnail : </strong><br/>
                        <img src={photo.thumbnailUrl}></img><br/>
                        <br/>
                    </li>
                ))}

            </ul>
        </>
    )
}

export default FetchEx2;