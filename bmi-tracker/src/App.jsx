// src/App.jsx
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import Login from "./components/login";
import Register from "./components/register";
import Dashboard from "./components/Dashboard";
import "./App.css";

// --- ROUTER & GABUNGAN APLIKASI ---
export default function App() {
  return (
    <Router
      future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true,
      }}
    >
      <Routes>
        {/* Rute "/" HANYA menampilkan Landing Page */}
        <Route path="/" element={<LandingPage />} />

        {/* Rute "/dashboard" HANYA menampilkan Dashboard */}
        <Route path="/dashboard" element={<Dashboard />} />

        {/* Rute "/login" sementara */}
        <Route path="/login" element={<Login />} />

        {/* Rute "/register" */}
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}
