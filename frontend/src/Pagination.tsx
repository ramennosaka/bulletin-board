import React from 'react'

// @ts-ignore
function Pagination({currentPage, totalPages, onPageChange}) {
  const pages = Array.from({length: totalPages}, (_, i) => i + 1)

  return (
      <div className="pagination">
        <button disabled={currentPage === 0} onClick={() => onPageChange(currentPage - 1)}>
          {'<'}
        </button>
        {pages.map((page) => (
            <button key={page} onClick={() => onPageChange(page - 1)}>
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