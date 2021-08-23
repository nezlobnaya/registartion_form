import { usePagination, DOTS } from "../hooks/usePagination";

const Pagination = ({ onPageChange, totalCount, currentPage, pageSize }) => {

  const paginationRange = usePagination({
    currentPage,
    totalCount,
    pageSize
  });


  // If there are less than 2 times in pagination range we shall not render the component
  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  let lastPage = paginationRange[paginationRange.length - 1];

  return (
  <nav aria-label="Page navigation example">
   <ul className="pagination">
    <li className="page-item">
      <a className="page-link" href="#" aria-label="Previous">
        <span aria-hidden="true">&laquo;</span>
        <span className="sr-only" onClick={onPrevious}>Previous</span>
      </a>
    </li>
    {paginationRange.map((pageNumber,index) => {
         if (pageNumber === DOTS) {
           return <li key={index} className="pagination-item dots">&#8230;</li>;
         }
         return (
            <li key={index} className="page-item" onClick={() => onPageChange(pageNumber)}>{pageNumber}</li>)
})}
    <li className="page-item">
      <a className="page-link" href="#" aria-label="Next">
        <span aria-hidden="true">&raquo;</span>
        <span className="sr-only" onClick={onNext}>Next</span>
      </a>
    </li>
  </ul>
</nav>
  )};

export default Pagination;
