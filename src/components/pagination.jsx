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
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a
            className="page-link disbled"
            onClick={() =>
              currentPage == 1 ? null : onPageChange(--currentPage)
            }
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
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <a className="page-link" onClick={() => onPageChange(page)}>
                {page}
              </a>
            </li>
          ) : paginationButton === pagesCount / 2 ? (
            <li key={page} className="page-link disabled">
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <a>...</a>
            </li>
          ) : null
        )}
        <li>
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a
            className="page-link"
            onClick={() =>
              currentPage <= Math.ceil(weatherDataItemsCount / pageSize) - 1
                ? onPageChange(++currentPage)
                : null
            }
          >
            Next
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
