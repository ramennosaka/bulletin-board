import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Route, Routes} from "react-router-dom"
import DetailBulletinBoard from "./DetailBulletinBoard";


const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

root.render(
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App/>}/>
          <Route path="/detailBulletinBoard/:id" element={<DetailBulletinBoard/>}/>
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
);

reportWebVitals();
