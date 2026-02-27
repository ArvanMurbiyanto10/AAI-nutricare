import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./ProfilTarget.css";

const ProfilTarget = () => {
  const [formData, setFormData] = useState({
    tinggi: 172,
    berat: 68,
    usia: 21,
    gender: "Laki-laki",
    target: "maintain", // 'lose', 'maintain', 'gain'
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSave = (e) => {
    e.preventDefault();
    alert("Profil dan Target berhasil diperbarui!");
    // Nanti logika update ke Database/Supabase dimasukkan ke sini
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  return (
    <div className="pt-layout">
      {/* --- TOP BAR --- */}
      <header className="top-bar-pt">
        <Link to="/dashboard" className="btn-back">
          <span>←</span> Kembali
        </Link>
        <div className="pt-header-title">
          <h3>Profil & Target</h3>
          <p>Sesuaikan metrik tubuhmu</p>
        </div>
        <div style={{ width: "80px" }}></div>
      </header>

      <main className="pt-content">
        <motion.form
          className="pt-form-container"
          onSubmit={handleSave}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
        >
          {/* Section: Data Tubuh */}
          <div className="pt-section">
            <h4 className="pt-section-title">📊 Metrik Tubuh Saat Ini</h4>
            <div className="pt-grid-inputs">
              <div className="input-group">
                <label>Tinggi Badan (cm)</label>
                <input
                  type="number"
                  name="tinggi"
                  value={formData.tinggi}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="input-group">
                <label>Berat Badan (kg)</label>
                <input
                  type="number"
                  name="berat"
                  value={formData.berat}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="input-group">
                <label>Usia</label>
                <input
                  type="number"
                  name="usia"
                  value={formData.usia}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="input-group">
                <label>Jenis Kelamin</label>
                <select
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                >
                  <option value="Laki-laki">Laki-laki</option>
                  <option value="Perempuan">Perempuan</option>
                </select>
              </div>
            </div>
          </div>

          {/* Section: Pemilihan Target */}
          <div className="pt-section">
            <h4 className="pt-section-title">🎯 Apa Target Kamu?</h4>
            <div className="target-cards">
              <label
                className={`target-card ${formData.target === "lose" ? "active" : ""}`}
              >
                <input
                  type="radio"
                  name="target"
                  value="lose"
                  checked={formData.target === "lose"}
                  onChange={handleChange}
                />
                <span className="target-icon">📉</span>
                <h5>Turunkan BB</h5>
                <p>Defisit kalori sehat</p>
              </label>

              <label
                className={`target-card ${formData.target === "maintain" ? "active" : ""}`}
              >
                <input
                  type="radio"
                  name="target"
                  value="maintain"
                  checked={formData.target === "maintain"}
                  onChange={handleChange}
                />
                <span className="target-icon">⚖️</span>
                <h5>Jaga Berat Badan</h5>
                <p>Pertahankan massa tubuh</p>
              </label>

              <label
                className={`target-card ${formData.target === "gain" ? "active" : ""}`}
              >
                <input
                  type="radio"
                  name="target"
                  value="gain"
                  checked={formData.target === "gain"}
                  onChange={handleChange}
                />
                <span className="target-icon">📈</span>
                <h5>Naikkan BB / Otot</h5>
                <p>Surplus kalori & protein</p>
              </label>
            </div>
          </div>

          <button type="submit" className="btn-save-profile">
            Simpan Perubahan
          </button>
        </motion.form>
      </main>
    </div>
  );
};

export default ProfilTarget;
