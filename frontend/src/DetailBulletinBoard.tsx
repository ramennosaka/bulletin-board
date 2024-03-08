import React, {useCallback, useEffect, useState} from 'react';
import {useLocation, useNavigate, useParams} from 'react-router-dom';
import axios from "axios";

const DetailBulletinBoard = () => {
  const [titleData, setTitleData] = useState("")
  const [createdTimeData, setCreatedTimeData] = useState("")
  const [createdContentData, setCreatedContentData] = useState("")
  const {id} = useParams() // Study
  const location = useLocation();
  const navigate = useNavigate();

  const moveToWrite = useCallback(() => {
    navigate(`/editor/${id}`, {
      state: {
        title: titleData,
        content: createdContentData
      }
    })
  }, [navigate, id, titleData, createdContentData])


  useEffect(() => {
    setTitleData(location.state.title)
    setCreatedTimeData(location.state.createdTime)
    setCreatedContentData(location.state.content)
  }, [location])

  return (
      <div>
        <div>Title: {titleData}({createdTimeData})</div>
        <br/>
        <div>
          {createdContentData}
        </div>
        <button onClick={moveToWrite}>Modify</button>
      </div>
  );
}

export default DetailBulletinBoard