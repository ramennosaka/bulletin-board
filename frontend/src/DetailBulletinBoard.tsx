import React, {useEffect, useState} from 'react';
import {useLocation} from 'react-router-dom';

const DetailBulletinBoard = () => {
  const [titleData, setTitleData] = useState("")
  const [createdTimeData, setCreatedTimeData] = useState("")
  const location = useLocation();

  useEffect(() => {
    setTitleData(location.state.title)
    setCreatedTimeData(location.state.createdTime)
  },[location])

  return (
      <div>
        <div>Title: {titleData}({createdTimeData})</div>
        <br/>
        <div>
          This is big news. Honda and Tanzu work together!!!
          Wow, this is amazing.
        </div>
      </div>
  );
}

export default DetailBulletinBoard