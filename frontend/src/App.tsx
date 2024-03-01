import React, {useEffect, useState} from 'react';
import './App.css';
import axios from "axios";
import {useNavigate} from "react-router-dom";

function App() {
  interface Data {
    id: number;
    title: string;
    createdTime: string;
  }

  const navigate = useNavigate()

  const handleButtonClick = (value: Data) => {
    navigate(
        `/detailBulletinBoard/${value.id}`,
        { state: { title: value.title, createdTime: value.createdTime
        }})
  }

  const [data, setData] = useState<Data[]>([]);

  useEffect(() => {
    const apiUrl = 'http://localhost:3000/bulletinBoard';
    axios.get(apiUrl)
        .then(response => {
          console.log(response)
          setData(response.data)
        })
        .catch(error => {
          console.error('error:', error);
        })
  }, []);
  return (
      <div className="App">
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
                <tr key={value.id}>
                  <td className="id" onClick={() => handleButtonClick(value)}>{value.id}</td>
                  <td onClick={() => handleButtonClick(value)}>{value.title}</td>
                  <td onClick={() => handleButtonClick(value)}>{value.createdTime}</td>
                </tr>
            )
          })}
          </tbody>
        </table>
      </div>
  );
}

export default App;
