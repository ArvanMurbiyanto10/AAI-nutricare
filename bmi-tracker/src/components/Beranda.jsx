import React, { useEffect, useState } from "react";
import "./Beranda.css";

const Beranda = () => {
  const [animateChart, setAnimateChart] = useState(false);

  useEffect(() => {
    setTimeout(() => setAnimateChart(true), 300); // Trigger animasi setelah 300ms
  }, []);

  return (
    <div className="beranda-wow-container">
      {/* HEADER BANNER */}
      <div className="welcome-banner glass-panel slide-up">
        <div className="banner-text">
          <h1>Selamat Pagi, Sang Juara! ☀️</h1>
          <p>
            Anda sudah mencapai <strong>45%</strong> dari target kalori hari
            ini. Terus semangat!
          </p>
        </div>
        <div className="banner-illustration">🚀</div>
      </div>

      <div className="wow-grid">
        {/* SVG ANIMATED DONUT CHART */}
        <div className="glass-panel main-stat-card slide-up delay-1">
          <h3>Ringkasan Kalori</h3>
          <div className="donut-chart-container">
            <svg viewBox="0 0 200 200" className="wow-donut">
              <circle cx="100" cy="100" r="80" className="donut-bg" />
              <circle
                cx="100"
                cy="100"
                r="80"
                className={`donut-progress ${animateChart ? "fill-animation" : ""}`}
                strokeDasharray="502" /* Keliling lingkaran (2 * pi * r) */
                strokeDashoffset={
                  animateChart ? "276" : "502"
                } /* 502 - (502 * 45%) */
              />
            </svg>
            <div className="donut-center-text">
              <span className="cal-number">1,100</span>
              <span className="cal-label">Kkal Tersisa</span>
            </div>
          </div>
          <div className="stat-details">
            <div className="stat-box">
              <span className="dot target"></span> Target: 2000
            </div>
            <div className="stat-box">
              <span className="dot eaten"></span> Terpakai: 900
            </div>
          </div>
        </div>

        {/* MACRO PROGRESS BARS */}
        <div className="glass-panel macro-card slide-up delay-2">
          <h3>Gizi Makro (Gram)</h3>

          <div className="macro-wow-item">
            <div className="macro-labels">
              <span className="m-name">🍞 Karbohidrat</span>
              <span className="m-value">120 / 250g</span>
            </div>
            <div className="macro-bar-bg">
              <div
                className={`macro-bar-fill blue ${animateChart ? "fill-48" : ""}`}
              ></div>
            </div>
          </div>

          <div className="macro-wow-item">
            <div className="macro-labels">
              <span className="m-name">🍗 Protein</span>
              <span className="m-value">80 / 120g</span>
            </div>
            <div className="macro-bar-bg">
              <div
                className={`macro-bar-fill green ${animateChart ? "fill-66" : ""}`}
              ></div>
            </div>
          </div>

          <div className="macro-wow-item">
            <div className="macro-labels">
              <span className="m-name">🥑 Lemak</span>
              <span className="m-value">30 / 60g</span>
            </div>
            <div className="macro-bar-bg">
              <div
                className={`macro-bar-fill orange ${animateChart ? "fill-50" : ""}`}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Beranda;
