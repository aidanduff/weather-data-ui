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
      <ul className="pagination m-2">
        <li>
          <a
            className="page-link"
            href="/#"
            onClick={() => onPageChange(--currentPage)}
          >
            Previous
          </a>
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
              <a href="/#">...</a>
            </li>
          ) : null
        )}
        <li>
          <a
            className="page-link"
            href="/#"
            onClick={() => onPageChange(++currentPage)}
          >
            Next
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
