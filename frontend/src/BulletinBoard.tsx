import {useNavigate} from "react-router-dom";
import React, {useEffect, useState} from "react";
import axios from "axios";
// @ts-ignore
import Pagination from "./Pagination"

interface Data {
  id: number;
  title: string;
  content: string;
  createdTime: string;
}

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

  const handleDeleteRows = () => {
    const rowIdsToDelete = selectedRows.map((row) => row.id)
    axios.delete(`/bulletinBoard?rowIds=${rowIdsToDelete.join(',')}`)
        .then(() => {
          setSelectedRows([])
          fetchData()
        })
  }
  const toggleAllRows = () => {
    if (selectedRows.length === todoList.length) {
      setSelectedRows([])
    } else {
      setSelectedRows([...todoList])
    }
  }

  const fetchData = () => {
    axios.get(`/bulletinBoard`, {
      params: {
        page,
        size: 5
      }
    }).then(response => {
      setTodoList(response.data.content)
      setTotalPages(Math.ceil(response.data.totalElements / 5))
    })
  }
  useEffect(() => {
    fetchData()
  }, [page]);
  const handlePageChange = (newPage: number) => {
    if (newPage < 0 || newPage > totalPages - 1) {
      return
    }
    setPage(newPage)
  }

  return (
      <div className="BulletinBoard">
        <table>
          <thead>
          <tr>
            <th onClick={toggleAllRows}>
              <input
                  type="checkbox"
                  checked={selectedRows.length === todoList.length}
                  readOnly
              />
            </th>
            <th>id</th>
            <th>title</th>
            <th>created time</th>
          </tr>
          </thead>
          <tbody>
          {todoList.map((value) => {
            return (
                <tr key={value.id} onClick={() => handleButtonClick(value)}>
                  <td onClick={(event) => event.stopPropagation()}>
                    <input
                        type="checkbox"
                        checked={selectedRows.some((row) => row.id === value.id)}
                        onChange={() => handleRowSelection(value.id)}
                    />
                  </td>
                  <td className="id">{value.id}</td>
                  <td>{value.title}</td>
                  <td>{value.createdTime}</td>
                </tr>
            )
          })}
          </tbody>
        </table>
        <div>
          <button
              onClick={handleDeleteRows}
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