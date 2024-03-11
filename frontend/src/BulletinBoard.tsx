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

  const [selectedRows, setSelectedRows] = useState<number[]>([])

  const handleRowSelection = (rowId: number) => {
    if (selectedRows.includes(rowId)) {
      setSelectedRows(selectedRows.filter((id) => id !== rowId))
    } else {
      setSelectedRows([...selectedRows, rowId])
    }
  }

  const handleDeleteRows = () => {
    const newData = data.filter((row) => !selectedRows.includes(row.id))
    setData(newData)
    selectedRows.forEach((rowId) => {
      axios.delete(`/bulletinBoard/${rowId}`)
          .then((response) => {
          })
          .catch((error) => {
          })
    })

    setSelectedRows([])
  }

  const toggleAllRows = () => {
    if (selectedRows.length === data.length) {
      setSelectedRows([])
    } else {
      const allRowIds = data.map(row => row.id)
      setSelectedRows(allRowIds)
    }
  }

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
                        checked={selectedRows.includes(value.id)}
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
          <button onClick={handleDeleteRows}>delete</button>
          <button onClick={moveToWrite}>write</button>
        </div>
      </div>
  );
}

export default BulletinBoard