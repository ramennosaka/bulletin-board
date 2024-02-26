import React, {useEffect, useState} from 'react';
import './App.css';
import axios from "axios";

function App() {
  interface Data {
    id: number;
    title: string;
    createdTime: string;
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
          console.error('error todos:', error);
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
                  <td className="id">{value.id}</td>
                  <td>{value.title}</td>
                  <td>{value.createdTime}</td>
                </tr>
            )
          })}
          </tbody>
        </table>
      </div>
  );
}

export default App;
