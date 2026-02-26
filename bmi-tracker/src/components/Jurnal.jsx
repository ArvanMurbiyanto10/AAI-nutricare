import React from "react";
import "./Jurnal.css";

const Jurnal = () => {
  return (
    <div className="jurnal-wow-container slide-up">
      <div className="jurnal-top-bar">
        <h2>Catatan Hari Ini 🍽️</h2>
        <div className="date-glass-picker">
          <button className="date-arrow">◀</button>
          <span className="current-date">Hari Ini, 26 Feb</span>
          <button className="date-arrow">▶</button>
        </div>
      </div>

      <div className="meal-timeline">
        {/* Contoh Card Terisi */}
        <div className="wow-meal-card filled slide-up delay-1">
          <div className="meal-card-left">
            <div className="meal-icon-box breakfast">🌅</div>
            <div className="meal-info">
              <h3>Sarapan</h3>
              <p>Roti Gandum, Telur Rebus</p>
            </div>
          </div>
          <div className="meal-card-right">
            <div className="cal-badge">320 kcal</div>
            <button className="btn-edit-meal">✏️</button>
          </div>
        </div>

        {/* Contoh Card Kosong */}
        <div className="wow-meal-card empty slide-up delay-2">
          <div className="meal-card-left">
            <div className="meal-icon-box lunch">☀️</div>
            <div className="meal-info">
              <h3>Makan Siang</h3>
              <p className="empty-text">Belum ada makanan dicatat</p>
            </div>
          </div>
          <div className="meal-card-right">
            <button className="btn-wow-add">+ Tambah</button>
          </div>
        </div>

        <div className="wow-meal-card empty slide-up delay-3">
          <div className="meal-card-left">
            <div className="meal-icon-box dinner">🌙</div>
            <div className="meal-info">
              <h3>Makan Malam</h3>
              <p className="empty-text">Belum ada makanan dicatat</p>
            </div>
          </div>
          <div className="meal-card-right">
            <button className="btn-wow-add">+ Tambah</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jurnal;
