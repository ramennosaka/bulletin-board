import { useNavigate } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
// @ts-ignore
import Pagination from '../components/Pagination'
import Table from '../components/Table'
import { BulletinItem } from '../types/BulletinItem'
import { deleteBulletinItems, fetchBulletinItems } from '../repository/BulletinBoardRepository'

function BulletinBoard() {

  const navigate = useNavigate()
  const [todoList, setTodoList] = useState<BulletinItem[]>([])
  const [selectedRows, setSelectedRows] = useState<BulletinItem[]>([])
  const [page, setPage] = useState(0)
  const [totalPages, setTotalPages] = useState<number>(0)

  const handleButtonClick = (value: BulletinItem) => {
    navigate(`/detail/${value.id}`)
  }

  const moveToWrite = () => {
    navigate('/editor')
  }

  const handleRowSelection = (rowId: number) => {
    const selectedIndex = selectedRows.findIndex(row => row.id === rowId)
    if (selectedIndex !== -1) {
      const updatedRows = [...selectedRows]
      updatedRows.splice(selectedIndex, 1)
      setSelectedRows(updatedRows)
    } else {
      const selectedRow = todoList.find(row => row.id === rowId)
      if (selectedRow) {
        setSelectedRows([...selectedRows, selectedRow])
      }
    }
  }

  const toggleAllRows = () => {
    if (selectedRows.length === todoList.length) {
      setSelectedRows([])
    } else {
      setSelectedRows([...todoList])
    }
  }

  useEffect(() => {
    fetchBulletinItems(page)
      .then(data => {
        setTodoList(data.content)
        setTotalPages(data.totalElements / 5)
      })
  }, [page])

  const handlePageChange = (newPage: number) => {
    if (newPage < 0 || newPage > totalPages - 1) {
      return
    }
    setPage(newPage)
  }

  const onDeleteRows = () => {
    const rowIdsToDelete = selectedRows.map((row: BulletinItem) => row.id)
    deleteBulletinItems(rowIdsToDelete)
      .then(() => {
        setSelectedRows([])
        fetchBulletinItems(page)
          .then(data => {
            setTodoList(data.content)
            setTotalPages(data.totalElements / 5)
          })
      })
  }

  return (
    <div className="BulletinBoard">
      <Table
        toggleAllRows={toggleAllRows}
        selectedRows={selectedRows}
        todoList={todoList}
        handleButtonClick={handleButtonClick}
        handleRowSelection={handleRowSelection}
      />
      <div>
        <button
          onClick={onDeleteRows}
          disabled={selectedRows.length === 0}>
          delete
        </button>
        <button onClick={moveToWrite}>
          write
        </button>
      </div>
      <Pagination
        currentPage={page}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  )
}

export default BulletinBoard