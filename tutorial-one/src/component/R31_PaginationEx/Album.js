import React, { useState, useEffect } from "react";
import axios from "axios";
import Pagination from "./Pagination";

const Album = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemPerPage, setItemPerPage] = useState(5);
  const currentPageLastItem = currentPage * itemPerPage;
  const currentPageFirstItem = (currentPage - 1) * itemPerPage;

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/photos")
      .then((res) => {
        setData(res.data);
        console.log(data);
      })
      .catch((err) => {
        console.log("에러발생 ! " + err);
      })
  }, []);

  const pageDisplayItems = data.slice(
    currentPageFirstItem,
    currentPageLastItem
  );
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <h1>엘범 페이지네이션</h1>
      <ul>
        {pageDisplayItems.map((item) => (
          <li key={item.id}>
            <img src={item.thumbnailUrl} />
          </li>
        ))}
      </ul>
      <Pagination
        itemPerPage={itemPerPage}
        totalItems={data.length}
        paginate={paginate}
        currentPage={currentPage}
      />
      
    </div>
  );
};
export default Album;