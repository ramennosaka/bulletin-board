import React, {useEffect, useState} from 'react';
import {useLocation} from 'react-router-dom';

const DetailBulletinBoard = () => {
  const [titleData, setTitleData] = useState("")
  const [createdTimeData, setCreatedTimeData] = useState("")
  const [createdContentData, setCreatedContentData] = useState("")
  const location = useLocation();

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
      </div>
  );
}

export default DetailBulletinBoard