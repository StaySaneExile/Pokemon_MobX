import React from "react";


export const LimitLoad  = ({changePageSize}) => {

  return (
    <div className='paginationBlock'>
      <div>
        <h3>Отображать по</h3>
      </div>
      <nav aria-label="Page navigation example">
        <ul className="pagination">
          <a onClick={()=>changePageSize(10)} className="page-link">10</a>
          <a onClick={()=>changePageSize(20)} className="page-link">20</a>
          <a onClick={()=>changePageSize(50)} className="page-link">50</a>
        </ul>
      </nav>
    </div>
  )
}