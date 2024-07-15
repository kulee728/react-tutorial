

function 페이지네이션 (){
    return(
        <>
        <h1>페이지네이션 종류</h1>
        1. 기본페이지네이션 1 2 3 4 5 6 ..
        2. 순차 페이지네이션 (이전) 8 9 10 11 12 (다음)
        3. 더보기 페이지네이션
            - 세로로 특정 내용까지만 보여주고 더보기 버튼을 누르면 보이는 페이지네이션
        4. 무한스크롤 페이지네이션
            - 세로로 게~속 내리면서 볼 수 있는 페이지네이션
            - 스크롤 페이지네이션 작성하기 위해
            npm i [scroll관련라이브러리]  설치해야함
        *npm search 에서 찾아보자. (npmjs.com)
        import InfiniteScroll from 'react-infinite-scroller';
        이거 할래
        </>
    )

}