// src/components/register.jsx
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./register.css";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Password tidak cocok!");
      return;
    }
    console.log("Registering:", formData);
    navigate("/login");
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  return (
    <div className="register-page">
      <div className="register-bg-glow glow-1"></div>
      <div className="register-bg-glow glow-2"></div>

      <div className="register-container">
        <div className="register-card">
          <Link to="/" className="back-link">
            ← Kembali
          </Link>
          <div className="register-header">
            <h1 className="register-logo">
              Daftar <span className="text-highlight">Nutricare</span>
            </h1>
            <p className="register-subtitle">Mulai perjalanan hidup sehatmu hari ini</p>
          </div>

          <form onSubmit={handleRegister} className="register-form">
            <div className="input-group">
              <label htmlFor="name">Nama Lengkap</label>
              <div className="input-wrapper">
                <span className="input-icon">👤</span>
                <input
                  type="text"
                  id="name"
                  placeholder="Arvan"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="input-group">
              <label htmlFor="email">Email</label>
              <div className="input-wrapper">
                <span className="input-icon">✉️</span>
                <input
                  type="email"
                  id="email"
                  placeholder="name@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="form-grid-2">
              <div className="input-group">
                <label htmlFor="password">Password</label>
                <div className="input-wrapper">
                  <span className="input-icon">🔒</span>
                  <input
                    type="password"
                    id="password"
                    placeholder="••••••••"
                    value={formData.password}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="input-group">
                <label htmlFor="confirmPassword">Konfirmasi</label>
                <div className="input-wrapper">
                  <span className="input-icon">🛡️</span>
                  <input
                    type="password"
                    id="confirmPassword"
                    placeholder="••••••••"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
            </div>

            <button type="submit" className="btn-register">
              Buat Akun
            </button>
          </form>

          <div className="register-footer">
            <p>
              Sudah punya akun? <Link to="/login">Masuk</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
