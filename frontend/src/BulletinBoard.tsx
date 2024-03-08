import {useNavigate} from "react-router-dom";
import React, {useCallback, useEffect, useState} from "react";
import axios from "axios";

interface Data {
  id: number;
  title: string;
  content: string
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

  return (
      <div className="BulletinBoard">
        <table>
          <thead>
          <tr>
            <th>id</th>
            <th>title</th>
            <th>created time</th>
          </tr>
          </thead>
          <tbody>
          {data.map((value) => {
            return (
                <tr key={value.id} onClick={() => handleButtonClick(value)}>
                  <td className="id">{value.id}</td>
                  <td>{value.title}</td>
                  <td>{value.createdTime}</td>
                </tr>
            )
          })}
          </tbody>
        </table>
        <div>
          <button onClick={moveToWrite}>write</button>
        </div>
      </div>
  );
}

export default BulletinBoard