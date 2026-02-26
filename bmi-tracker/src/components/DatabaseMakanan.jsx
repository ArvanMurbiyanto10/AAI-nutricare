import React from "react";
import "./DatabaseMakanan.css";

const DatabaseMakanan = () => {
  return (
    <div className="db-container">
      <div className="db-header">
        <h2>Database Makanan</h2>
        <p>Cari data gizi dari ribuan makanan dan minuman.</p>
      </div>

      <div className="search-bar-wrapper">
        <input
          type="text"
          placeholder="Cari makanan (contoh: Nasi Goreng)..."
          className="search-input"
        />
        <button className="btn-search">Cari</button>
      </div>

      <div className="db-results">
        <div className="db-empty-state">
          <span className="search-icon">🔍</span>
          <p>Ketik nama makanan di atas untuk melihat kalori dan nutrisinya.</p>
        </div>
      </div>
    </div>
  );
};

export default DatabaseMakanan;
