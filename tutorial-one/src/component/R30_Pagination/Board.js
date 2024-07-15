import React, {useState,useEffect} from 'react';
import Pagination from './Pagination';
import axios from 'axios';

const Board=()=>{
    const [currentPage,setCurrentPage] = useState(1);
    const [itemPerPage,setItemPerPage] = useState(10); //한 페이지 당 10개씩
    const [data,setData] =useState([]);
    const currentPageLastItem = currentPage * itemPerPage; //현 페이지 마지막 아이템 index
    const currentPageFirstItem = currentPageLastItem - itemPerPage; // 현 페이지 첫번째 아이템
    //위 값은 (currentPage-1)*itemPerPage와 같다.
    

    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then(res=>{
            setData(res.data);
            console.log(data);
        })
        .catch(err=>{
            alert(err+ " 에러 발생!");
        })

    },[]);

    
    const itemList = data.slice(currentPageFirstItem,currentPageLastItem);
    const paginate = (pageNumber) =>setCurrentPage(pageNumber);
    
    return(
        <div className='container'>
            <h1> 리액트 페이지네이션 예제</h1>
            <ul className='list-group-mb-4'>
                {itemList.map(item=>(
                    <li key={item.id} className='list-group-item'>
                        {item.title}
                    </li>
                ))}
            </ul>
            <Pagination
                itemPerPage={itemPerPage}
                totalItems={data.length}
                paginate={paginate}
                currentPage={currentPage}/> 
        </div>
    )
}
export default Board;
