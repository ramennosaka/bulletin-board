import {useNavigate} from "react-router-dom";
import React, {useEffect, useState} from "react";
// @ts-ignore
import Pagination from "./Pagination"
import Table from "./Table";
import {Data} from "./Data";
import {fetchData, handleDeleteRows} from "./api"


function BulletinBoard() {
  const navigate = useNavigate()
  const [todoList, setTodoList] = useState<Data[]>([]);
  const [selectedRows, setSelectedRows] = useState<Data[]>([])
  const [page, setPage] = useState(0)
  const [totalPages, setTotalPages] = useState<number>(0)

  const handleButtonClick = (value: Data) => {
    navigate(`/detail/${value.id}`)
  }
  const moveToWrite = () => {
    navigate("/editor")
  }

  const handleRowSelection = (rowId: number) => {
    const selectedIndex = selectedRows.findIndex(row => row.id === rowId);
    if (selectedIndex !== -1) {
      const updatedRows = [...selectedRows];
      updatedRows.splice(selectedIndex, 1);
      setSelectedRows(updatedRows);
    } else {
      const selectedRow = todoList.find(row => row.id === rowId);
      if (selectedRow) {
        setSelectedRows([...selectedRows, selectedRow]);
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
    fetchData(page, setTodoList, setTotalPages)
  }, [page]);

  const handlePageChange = (newPage: number) => {
    if (newPage < 0 || newPage > totalPages - 1) {
      return
    }
    setPage(newPage)
  }

  const onDeleteRows = () => {
    handleDeleteRows(
        selectedRows,
        setSelectedRows,
        () => fetchData(page, setTodoList, setTotalPages
        ));
  };

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
  );
}

export default BulletinBoard