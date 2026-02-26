import React from "react";
import "./ProfilTarget.css";

const ProfilTarget = () => {
  return (
    <div className="profil-container">
      <div className="profil-header">
        <h2>Profil & Target</h2>
        <p>Sesuaikan data diri untuk perhitungan kalori yang lebih akurat.</p>
      </div>

      <div className="profil-layout">
        <div className="profil-card">
          <div className="avatar-section">
            <div className="avatar-circle">👤</div>
            <h3>Pengguna AAI</h3>
            <p>user@nutricare.com</p>
          </div>

          <form className="profil-form">
            <div className="form-group">
              <label>Umur (Tahun)</label>
              <input type="number" defaultValue="25" />
            </div>
            <div className="form-group-row">
              <div className="form-group">
                <label>Tinggi (cm)</label>
                <input type="number" defaultValue="170" />
              </div>
              <div className="form-group">
                <label>Berat (kg)</label>
                <input type="number" defaultValue="65" />
              </div>
            </div>
            <div className="form-group">
              <label>Target Saya</label>
              <select defaultValue="maintain">
                <option value="lose">Turunkan Berat Badan</option>
                <option value="maintain">Jaga Berat Badan</option>
                <option value="gain">Naikkan Berat Badan</option>
              </select>
            </div>
            <button type="button" className="btn-save-profil">
              Simpan Perubahan
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProfilTarget;
