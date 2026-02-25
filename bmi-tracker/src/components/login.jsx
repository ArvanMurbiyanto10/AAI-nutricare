// src/components/login.jsx
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Simulasi login sederhana
    if (email && password) {
      console.log("Logging in with:", email);
      navigate("/dashboard");
    } else {
      alert("Silakan masukkan email dan password");
    }
  };

  return (
    <div className="login-page">
      {/* Background Ornaments */}
      <div className="login-bg-glow glow-1"></div>
      <div className="login-bg-glow glow-2"></div>

      <div className="login-container">
        <div className="login-card">
          <Link to="/" className="back-link">
            ← Kembali
          </Link>
          <div className="login-header">
            <h1 className="login-logo">
              AAI <span className="text-highlight">Nutricare</span>
            </h1>
            <p className="login-subtitle">Masuk untuk memantau gizi harian Anda</p>
          </div>

          <form onSubmit={handleLogin} className="login-form">
            <div className="input-group">
              <label htmlFor="email">Email</label>
              <div className="input-wrapper">
                <span className="input-icon">✉️</span>
                <input
                  type="email"
                  id="email"
                  placeholder="name@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="input-group">
              <label htmlFor="password">Password</label>
              <div className="input-wrapper">
                <span className="input-icon">🔒</span>
                <input
                  type="password"
                  id="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="login-options">
              <label className="remember-me">
                <input type="checkbox" />
                <span>Ingat saya</span>
              </label>
              <a href="#" className="forgot-password">
                Lupa password?
              </a>
            </div>

            <button type="submit" className="btn-login">
              Masuk Sekarang
            </button>
          </form>

          <div className="login-footer">
            <p>
              Belum punya akun? <Link to="#">Daftar gratis</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
