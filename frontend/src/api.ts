import axios from "axios";
import {Data} from "./Data";
import React from "react";

export const handleDeleteRows = (
    selectedRows: Data[],
    setSelectedRows: React.Dispatch<React.SetStateAction<Data[]>>,
    fetchData: () => void) => {
  const rowIdsToDelete = selectedRows.map((row: Data) => row.id)
  axios.delete(`/bulletinBoard?rowIds=${rowIdsToDelete.join(',')}`)
      .then(() => {
        setSelectedRows([])
        fetchData()
      })
}
export const fetchData = (
    page: number,
    setTodoList: React.Dispatch<React.SetStateAction<Data[]>>,
    setTotalPages: React.Dispatch<React.SetStateAction<number>>
) => {
  axios.get(`/bulletinBoard`, {
    params: {
      page,
      size: 5
    }
  }).then(response => {
    setTodoList(response.data.content)
    setTotalPages(response.data.totalElements / 5)
  })
}

