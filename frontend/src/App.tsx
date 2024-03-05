import React from 'react';
import './App.css';
import {BrowserRouter, Route, Routes } from "react-router-dom";
import DetailBulletinBoard from "./DetailBulletinBoard";
import BulletinBoard from "./BulletinBoard";
import CreateTopic from "./CreateTopic";

function App() {
  const handleTopicCreate = (newTopic: {title: string, content: string}) => {}
  const navigateToBulletinBoard = () => {}

    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<BulletinBoard/>}/>
          <Route path="/detail/:id" element={<DetailBulletinBoard/>}/>
          {/* path name - verb is not good */}
          <Route path="/create" element={<CreateTopic  onTopicCreate={handleTopicCreate} navigateToBulletinBoard={navigateToBulletinBoard}/>}/>
        </Routes>
      </BrowserRouter>  )
}

export default App;
