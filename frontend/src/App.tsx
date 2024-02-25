import React from 'react';
import './App.css';


const dateAndTime: string = "2024-02-25 10:59"

const data = [
  {id: 1, title: "hello world", created_time: dateAndTime},
  {id: 2, title: "This is big news", created_time: dateAndTime},
  {id: 3, title: "Honda is big company", created_time: dateAndTime}
]

function App() {

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
          {data.map((value, key) => {
            return (
                <tr key={key}>
                  <td className="id">{value.id}</td>
                  <td>{value.title}</td>
                  <td>{value.created_time}</td>
                </tr>
            )
          })}
          </tbody>
        </table>
      </div>
  );
}

export default App;
