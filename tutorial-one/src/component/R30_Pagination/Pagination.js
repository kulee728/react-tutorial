import React from 'react';

import './Pagination.css'
/*
itemPerPage : 한 페이지 당 보여줄 항목 수
totalItems : 전체 항목 수
paginate : 페이지 번호를 업데이트 하는 function
currentPage : 현재 랜더링중인 페이지 번호
*/

const Pagination=({itemPerPage,totalItems,paginate,currentPage})=>{
    const pageNumbers =[];
    //전체 항목 수와 페이지당 항목 수를 바탕으로
    //전체 페이지 수를 계산하고 각 페이지 번호를 저장한다.
    for(let i=1;i<=Math.ceil(totalItems / itemPerPage);i++){ 
        //올림을 사용한다. (53개글 10개씩 = > 6개페이지)
        console.log("pagination i :" +i);
        pageNumbers.push(i);
        
    }
    



    return(
        <nav>
            <ul className='pagination'>{/* href='!#' 새로고침을 막는 */}
                {pageNumbers.map(pageNumber =>(
                    <li key={pageNumber} 
                    className={`page-item ${currentPage === pageNumber ? 'active' : ''}`}>
                                            {/*
                    <a onClick={(e)=> {e.preventDefault(); paginate(번호)} href='!#'></a>
                    */}
                        <a onClick={()=> paginate(pageNumber)} href='!#' className='page-link'>{pageNumber}</a>
                    </li> 
                ))}
            </ul>
        </nav>
    )
}
export default Pagination;