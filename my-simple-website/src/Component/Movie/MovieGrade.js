import React,{useState,useEffect} from "react";
import axios from "axios";
import './MovieGrade.css'

const MovieRating = () =>{
    const [movies,setMovies] = useState([]);
    const [loading,setLoading] = useState(true);
    useEffect(()=>{
        axios("https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year")
        .then(res =>{
            setMovies(res.data.data.movies); //res=[].data data 내 movies[] 가져옴
            setLoading(false);
            console.log(res);
            console.log(res.data);
            console.log(res.data.data);
            console.log(res.data.data.movies);
            
            //
        }) //가져오기 try 성공한 경우
        .catch(error =>{
            alert("데이터를 가져오는데 실패 했습니다.");
        }); // .get .then .catch 환장의 콜라보
    },[]);

    //만약 로딩중이라면 로딩 div
    if(loading) return <div>로딩중입니다...</div>

    return(
        <div className="movie-container">
            <h1>Good 평점 영화들</h1>
            <div className='movie-content'>
                {movies.map(movie=>(
                    <div key={movie.id} className="movie">
                        <img src={movie.medium_cover_image}/>
                        <h2>{movie.title}</h2>
                        <p>평점 : {movie.rating}</p>
                        <p>개봉년도 : {movie.year}</p>
                        <p>개봉년도 : {movie.year}</p>
                        <p>러닝타임 : {Math.floor(movie.runtime/60)!=0&&<span>{Math.floor(movie.runtime/60)}시간</span>}
                        {movie.runtime%60}분</p>
                    </div>
                ))}
            </div>

        </div>

    )
}
export default MovieRating;