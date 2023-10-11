import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import HomePage from './pages/HomePage';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from './pages/LoginPage';
import CalendarPage from './pages/CalendarPage';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="calendar" element={<CalendarPage />} />
        {/* <Route path="/" element={<Layout />}/> */}
        {/* <Route path="restaraunts" element={<Restaraunts />} /> */}
      </Routes>
  </BrowserRouter>
);


