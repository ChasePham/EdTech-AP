import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import WelcomePage from './pages/WelcomePage';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from './pages/LoginPage';
import CalendarPage from './pages/CalendarPage';
import HomePage from './pages/HomePage';
import InputPage from './pages/InputPage';
import AboutPage from './pages/AboutPage';
import OctoPage from './pages/OctoPage';
import AccountPage from './pages/AccountPage';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
      <Routes>
        <Route index element={<WelcomePage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="calendar" element={<CalendarPage />} />
        <Route path="home" element={<HomePage />} />
        <Route path="input" element={<InputPage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="octo" element={<OctoPage />} />
        <Route path="account" element={<AccountPage />} />

        {/* <Route path="/" element={<Layout />}/> */}
      </Routes>
  </BrowserRouter>
);


