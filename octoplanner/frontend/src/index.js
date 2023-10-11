import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './pages/HomePage';
import reportWebVitals from './reportWebVitals';
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

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
