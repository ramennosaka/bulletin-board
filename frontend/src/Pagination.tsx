import React from 'react'

// @ts-ignore
function Pagination({currentPage, totalPages, onPageChange}) {
  let pages = []

  const start = Math.floor(currentPage / 5) * 5 + 1;
  const end = Math.min(totalPages, start + 4);

  for (let i = start; i <= end; i++) {
    pages.push(i);
  }

  return (
      <div className="pagination">
        <button disabled={currentPage === 0} onClick={() => onPageChange(currentPage - 1)}>
          {'<'}
        </button>
        {pages.map((page) => (
            <button key={page}
                    onClick={() => onPageChange(page - 1)}
            >
              {page}
            </button>
        ))}
        <button disabled={currentPage === (totalPages - 1)} onClick={() => onPageChange(currentPage + 1)}>
          {'>'}
        </button>
      </div>
  )
}

export default Pagination