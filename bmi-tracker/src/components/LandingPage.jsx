// src/components/LandingPage.jsx
import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import "./LandingPage.css";

const LandingPage = () => {
  const scrollToFeatures = () => {
    const featuresArea = document.getElementById("info-features");
    if (featuresArea) {
      featuresArea.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <Navbar />

      <div className="landing-wrapper">
        {/* --- HERO SECTION (PREMIUM PHOTO BACKGROUND) --- */}
        <div className="hero-section">
          {/* Ornamen Cahaya di Background */}
          <div className="hero-glow glow-1"></div>
          <div className="hero-glow glow-2"></div>

          <div className="hero-container">
            {/* --- KOLOM KIRI: TEKS --- */}
            <div className="hero-text-content">
              <div className="modern-badge">
                <span className="badge-icon">✨</span> Revolusi Gaya Hidup Sehat
              </div>

              <h1 className="hero-title">
                <span className="gradient-text">AAI</span> Nutricare
              </h1>

              <p className="hero-description">
                Pelacak Gizi & BMI Harian personal Anda. Pantau asupan kalori
                dengan mudah, capai target berat badan ideal, dan mulailah gaya
                hidup sehat dari sekarang.
              </p>

              <div className="hero-action-buttons">
                <Link to="/dashboard" className="btn-modern-primary">
                  Mulai Sekarang
                </Link>
                <Link to="/login" className="btn-modern-secondary">
                  Masuk
                </Link>
              </div>
            </div>

            {/* --- KOLOM KANAN: GAMBAR ESTETIK --- */}
            <div className="hero-visual-content">
              <div className="premium-image-frame">
                <img
                  src="/fotolandingpage.jpeg"
                  alt="Preview AAI Nutricare"
                  className="hero-image"
                />

                {/* Ornamen Kartu Melayang di atas foto */}
                <div className="floating-tag tag-top">🥗 Gizi Terjaga</div>
                <div className="floating-tag tag-bottom">
                  🎯 Target Tercapai
                </div>
              </div>
            </div>
          </div>

          {/* Indikator Scroll Bawah */}
          <div className="scroll-indicator-modern" onClick={scrollToFeatures}>
            <p>Kenali Lebih Lanjut</p>
            <div className="mouse-icon">
              <div className="wheel"></div>
            </div>
          </div>
        </div>

        {/* --- FITUR / INFO SECTION --- */}
        <div id="info-features" className="features-section">
          {/* Ornamen Bola Warna (Blob) Blur di Background Fitur */}
          <div className="bg-blob blob-1"></div>
          <div className="bg-blob blob-2"></div>
          <div className="bg-blob blob-3"></div>

          <div className="features-header">
            <h2>
              Kenapa Memilih{" "}
              <span className="text-highlight">AAI Nutricare?</span>
            </h2>
            <p>
              Semua alat yang Anda butuhkan untuk mencapai tubuh ideal, dalam
              satu tempat.
            </p>
          </div>

          {/* --- PENJELASAN DETAIL APLIKASI (SPLIT LAYOUT) --- */}
          <div id="about-section" className="about-wrapper">
            <div className="about-text-content">
              <h3 className="about-title">Asisten Kesehatan Pribadimu</h3>
              <p>
                <strong>AAI Nutricare</strong> bukan sekadar aplikasi pencatat
                kalori biasa. Kami mengerti bahwa setiap tubuh memiliki
                kebutuhan unik.
                <br />
                <br />
                Melalui antarmuka yang cerdas, kami mempermudah Anda melacak
                gizi harian, menganalisis status BMI secara <em>real-time</em>,
                dan merancang perjalanan menuju berat badan idaman. Fokus pada
                tujuan Anda, biarkan kami yang mengurus perhitungannya.
              </p>
              <ul className="about-checkmarks">
                <li>✅ Analisis kalori otomatis</li>
                <li>✅ Panduan BMI yang disesuaikan</li>
                <li>✅ Evaluasi progres setiap saat</li>
              </ul>
            </div>

            <div className="about-visual-content">
              {/* Kartu stat UI melayang */}
              <div className="floating-stat-card card-1">
                <span className="stat-icon">🔥</span>
                <div>
                  <h4>500 kcal</h4>
                  <p>Kalori Terbakar</p>
                </div>
              </div>
              <div className="floating-stat-card card-2">
                <span className="stat-icon">🎯</span>
                <div>
                  <h4>65 kg</h4>
                  <p>Target Ideal</p>
                </div>
              </div>
              <div className="floating-stat-card card-3">
                <span className="stat-icon">🥗</span>
                <div>
                  <h4>Seimbang</h4>
                  <p>Status Gizi Hari Ini</p>
                </div>
              </div>
            </div>
          </div>

          {/* --- HEADER FITUR UNGGULAN KAMI --- */}
          <div className="unggulan-header">
            <h3>
              <span className="text-highlight">Fitur Unggulan</span> Kami
            </h3>
            <p>
              Jelajahi alat canggih yang siap membantu perjalanan sehat Anda
              sehari-hari.
            </p>
          </div>

          {/* --- GRID KARTU FITUR --- */}
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon glass-icon">⚖️</div>
              <h3>BMI Cerdas</h3>
              <p>
                Ketahui persis di mana posisi kesehatanmu. Sistem kami
                menghitung Indeks Massa Tubuh secara instan dan memberikan
                panduan status idealmu.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon glass-icon">🥗</div>
              <h3>Jurnal Kalori</h3>
              <p>
                Catat setiap makanan dengan mudah. Kontrol batas asupan kalori
                harianmu agar tetap seimbang tanpa harus merasa kelaparan.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon glass-icon">🎯</div>
              <h3>Target Akurat</h3>
              <p>
                Tetapkan tujuanmu! Ingin menurunkan atau menaikkan berat badan?
                Pantau histori harianmu dan jadikan evaluasi yang memotivasi.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
