import {useNavigate} from "react-router-dom";
import React, {useCallback, useEffect, useState} from "react";
import axios from "axios";

interface Data {
  id: number;
  title: string;
  content: string;
  createdTime: string;
}

function BulletinBoard() {
  const navigate = useNavigate()
  const [data, setData] = useState<Data[]>([]);
  const [selectedRows, setSelectedRows] = useState<Data[]>([])
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState<number>(0)

  const handleButtonClick = (value: Data) => {
    navigate(`/detail/${value.id}`, {state: value})
  }

  const moveToWrite = useCallback(() => {
    navigate("/editor", {state: {}})
  }, [navigate])

  useEffect(() => {
    axios.get('/bulletinBoard')
        .then(response => {
          setData(response.data)
        })
  }, []);


  const handleRowSelection = (rowId: number) => {
    const selectedIndex = selectedRows.findIndex(row => row.id === rowId);
    if (selectedIndex !== -1) {
      const updatedRows = [...selectedRows];
      updatedRows.splice(selectedIndex, 1);
      setSelectedRows(updatedRows);
    } else {
      const selectedRow = data.find(row => row.id === rowId);
      if (selectedRow) {
        setSelectedRows([...selectedRows, selectedRow]);
      }
    }
  }
  const handleDeleteRows = () => {
    const rowIdsToDelete = selectedRows.map((row) => row.id)
    axios.delete(`/bulletinBoard?rowIds=${rowIdsToDelete.join(',')}`)
        .then((response) => {
          setSelectedRows([])
        })
  }

  const toggleAllRows = () => {
    if (selectedRows.length === data.length) {
      setSelectedRows([])
    } else {
      setSelectedRows([...data])
    }
  }

  const fetchData = async () => {
    try {
      const response = await axios.get(`/bulletinBoard?page=${page}&size=10`)
      setData(response.data)
    } catch (error) {
    }
  }

  useEffect(() => {
    fetchData()
  }, [page]);

  const handlePageChange = (newPage: number) => {
    setPage(newPage)
  }

  console.log({selectedRows, data})

  return (
      <div className="BulletinBoard">
        <table>
          <thead>
          <tr>
            <th onClick={toggleAllRows}>
              <input type="checkbox" checked={selectedRows.length === data.length} readOnly/>
            </th>
            <th>id</th>
            <th>title</th>
            <th>created time</th>
          </tr>
          </thead>
          <tbody>
          {data.map((value) => {
            return (
                <tr key={value.id}>
                  <td>
                    <input
                        type="checkbox"
                        checked={selectedRows.some((row) => row.id === value.id)}
                        onChange={() => handleRowSelection(value.id)}
                    />
                  </td>
                  <td className="id" onClick={() => handleButtonClick(value)}>{value.id}</td>
                  <td onClick={() => handleButtonClick(value)}>{value.title}</td>
                  <td onClick={() => handleButtonClick(value)}>{value.createdTime}</td>
                </tr>
            )
          })}
          </tbody>
        </table>
        <div>
          <button onClick={handleDeleteRows} disabled={selectedRows.length === 0}>delete</button>
          <button onClick={moveToWrite}>write</button>
        </div>
        {totalPages > 0 && (
            <div>
              <span>Page: </span>
              {Array.from({length: totalPages}).map((_, i) => (
                  <button key={i} onClick={() => handlePageChange(i + 1)}>{i + 1}</button>
              ))}
            </div>
        )}
      </div>
  );
}

export default BulletinBoard