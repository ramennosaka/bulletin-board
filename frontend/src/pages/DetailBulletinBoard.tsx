import React, { useCallback, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { BulletinItem } from '../types/BulletinItem'
import axios from 'axios'


const DetailBulletinBoard = () => {
  const { id } = useParams()
  const navigate = useNavigate()

  const [bulletinItem, setBulletinItem] = useState<BulletinItem>({
    content: '',
    createdTime: '',
    id: 0,
    title: '',
  })

  const moveToWrite = useCallback(() => {
    navigate(`/editor/${id}`, {})
  }, [navigate, id])

  useEffect(() => {
    axios.get(`/bulletinBoard/${id}`)
      .then(response => {
        setBulletinItem(response.data)
      })
  }, [id])


  return (
    <div>
      <div>Title: {bulletinItem.title}({bulletinItem.createdTime})</div>
      <br />
      <div>
        {bulletinItem.content}
      </div>
      <button onClick={moveToWrite}>Modify</button>
    </div>
  )
}

export default DetailBulletinBoard