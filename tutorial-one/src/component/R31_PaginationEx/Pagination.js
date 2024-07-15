import React from "react";

import "./Pagination.css";
/*
itemPerPage : 한 페이지 당 보여줄 항목 수
totalItems : 전체 항목 수
paginate : 페이지 번호를 업데이트 하는 function
currentPage : 현재 랜더링중인 페이지 번호
*/

const Pagination = ({ itemPerPage, totalItems, paginate, currentPage }) => {
  const pageNumbers = [];
  const totalPages = Math.ceil(totalItems / itemPerPage);
  //전체 항목 수와 페이지당 항목 수를 바탕으로
  //전체 페이지 수를 계산하고 각 페이지 번호를 저장한다.
  for (let i = 1; i <= Math.ceil(totalItems / itemPerPage); i++) {
    //올림을 사용한다. (53개글 10개씩 = > 6개페이지)
    console.log("pagination i :" + i);
    pageNumbers.push(i);
  }

  //페이지 번호 새로고침 함수
  //모든 페이지 번호를 한번에 보여주는게 아니라 10개씩만 보여주자
  const renderPageNumber = () => {
    if (totalPages <= 10) {
      return pageNumbers;
    }
    const startPage = Math.max(1, currentPage - 5);
    const endPage = Math.min(totalPages, currentPage + 4);

    return pageNumbers.slice(startPage - 1, endPage);
  };

  return (
    <nav>
      <ul className="pagination">
        {/* href='!#' 새로고침을 막는 */}

        {currentPage > 1 && (
          <li>
            <a
              onClick={() => paginate(currentPage - 1)}
              href="!#"
              className="page-link"
            >
              &laquo;
            </a>
          </li>
        )}

        {renderPageNumber().map((pageNumber) => (
          <li
            key={pageNumber}
            className={`page-item ${
              currentPage === pageNumber ? "active" : ""
            }`}
          >
            {/*
                    <a onClick={(e)=> {e.preventDefault(); paginate(번호)} href='!#'></a>
                    */}
            <a
              onClick={() => paginate(pageNumber)}
              href="!#"
              className="page-link"
            >
              {pageNumber}
            </a>
          </li>
        ))}
        {currentPage < totalPages && (
          <li>
            <a
              onClick={() => paginate(currentPage + 1)}
              href="!#"
              className="page-link"
            >
              &raquo;
            </a>
          </li>
        )}
      </ul>
    </nav>
  );
};
export default Pagination;
