import React from 'react'
import { BulletinItem } from '../types/BulletinItem'

// @ts-ignore
function Table({ toggleAllRows, selectedRows, todoList, handleButtonClick, handleRowSelection }) {
  return (
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
      {todoList.map((value: BulletinItem) => {
        return (
          <tr key={value.id} onClick={() => handleButtonClick(value)}>
            <td onClick={(event) => event.stopPropagation()}>
              <input
                type="checkbox"
                checked={selectedRows.some((row: BulletinItem) => row.id === value.id)}
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
  )
}

export default Table