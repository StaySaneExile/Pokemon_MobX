import React, {useState} from 'react'

export const Pagination = (props) => {


  const totalPages = Math.ceil(props.totalCount / props.pageLimit)
  const pages = []
  for (let i = 0; i < totalPages; i++) {
    pages.push(i)
  }

  const [currentPage, setCurrentPage] = useState(0)

  const minusCurrentPage = (value) => {
    if (currentPage >= 1)
      setCurrentPage(pages[currentPage - value])
    props.changeOffset(currentPage * props.pageLimit)
  }

  const plusCurrentPage = (value) => {
    setCurrentPage(pages[currentPage + value])
    props.changeOffset(currentPage * props.pageLimit)
  }

  const nextPage = () => {
    props.getNextPage()
  }
  const previousPage = () => {
    props.getPreviousPage()
  }
  return (
    <div>
      <nav aria-label="Page navigation example">
        <ul className="pagination">
          <a onClick={previousPage} className="page-link" href="#">
            Previous
          </a>
          {
            currentPage >= 1
              ? <a onClick={() => minusCurrentPage(1)} className="page-link" href="#">
                {pages[currentPage]}
              </a>
              : ''
          }
          <li className="page-item active" aria-current="page">
            <a className="page-link" href="#" aria-current={true}>
              {currentPage + 1}
            </a>
          </li>
          <a onClick={() => plusCurrentPage(1)} className="page-link" href="#">
            {currentPage + 2}
          </a>
          <a onClick={() => plusCurrentPage(2)} className="page-link" href="#">
            {currentPage + 3}
          </a>
          <a onClick={nextPage} className="page-link" href="#">
            Next
          </a>
        </ul>
      </nav>
    </div>
  )
}