import React from "react";
import _ from "lodash";

const Pagination = ({
  weatherDataItemsCount,
  currentPage,
  pageSize,
  onPageChange,
}) => {
  const pagesCount = Math.ceil(weatherDataItemsCount / pageSize);
  if (pagesCount === 1) return null;
  const pages = _.range(1, pagesCount + 1);
  let paginationButton = 1;
  return (
    <nav>
      <ul className="pagination">
        <li className="page-link" onClick={() => onPageChange(--currentPage)}>
          Previous
        </li>
        {pages.map((page) =>
          paginationButton++ <= 3 || paginationButton >= pagesCount - 1 ? (
            <li
              key={page}
              className={
                page === currentPage ? "page-item active" : "page-item"
              }
            >
              <a
                className="page-link"
                href="/#"
                onClick={() => onPageChange(page)}
              >
                {page}
              </a>
            </li>
          ) : paginationButton === pagesCount / 2 ? (
            <li key={page} className="page-link disabled">
              ...
            </li>
          ) : null
        )}
        <li className="page-link" onClick={() => onPageChange(++currentPage)}>
          Next
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
