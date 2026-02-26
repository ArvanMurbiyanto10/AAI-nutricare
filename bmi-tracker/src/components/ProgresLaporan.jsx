import React, { useEffect, useState } from "react";
import "./ProgresLaporan.css";

const ProgresLaporan = () => {
  const [drawChart, setDrawChart] = useState(false);

  useEffect(() => {
    setTimeout(() => setDrawChart(true), 400);
  }, []);

  return (
    <div className="progres-wow-container">
      <div className="progres-header-wow slide-up">
        <h2>Perjalanan Suksesmu 🏆</h2>
        <p>
          Konsistensi adalah kunci. Lihat seberapa jauh kamu telah melangkah!
        </p>
      </div>

      <div className="chart-glass-card slide-up delay-1">
        <div className="chart-title-area">
          <h3>Grafik Berat Badan (Bulan Terakhir)</h3>
          <span className="trend-badge positive">📉 Turun 2.5 kg!</span>
        </div>

        {/* CUSTOM WOW SVG LINE CHART */}
        <div className="wow-chart-wrapper">
          <svg viewBox="0 0 800 300" className="wow-line-chart">
            {/* Grid Garis Latar */}
            <path d="M 50 250 L 750 250" className="grid-line" />
            <path d="M 50 150 L 750 150" className="grid-line" />
            <path d="M 50 50 L 750 50" className="grid-line" />

            {/* Area Transparan Biru di Bawah Garis */}
            <path
              d="M 100 250 L 100 200 C 200 180, 300 120, 400 140 C 500 160, 600 70, 700 80 L 700 250 Z"
              className={`area-gradient ${drawChart ? "reveal-area" : ""}`}
            />

            {/* Garis Utama Animasi */}
            <path
              d="M 100 200 C 200 180, 300 120, 400 140 C 500 160, 600 70, 700 80"
              className={`main-line ${drawChart ? "draw-line" : ""}`}
              strokeDasharray="1000"
              strokeDashoffset="1000"
            />

            {/* Titik Point Data (Animasi Pop) */}
            <circle
              cx="100"
              cy="200"
              r="6"
              className={`data-point ${drawChart ? "pop-1" : ""}`}
            />
            <circle
              cx="230"
              cy="160"
              r="6"
              className={`data-point ${drawChart ? "pop-2" : ""}`}
            />
            <circle
              cx="400"
              cy="140"
              r="6"
              className={`data-point ${drawChart ? "pop-3" : ""}`}
            />
            <circle
              cx="560"
              cy="110"
              r="6"
              className={`data-point ${drawChart ? "pop-4" : ""}`}
            />
            <circle
              cx="700"
              cy="80"
              r="6"
              className={`data-point highlight ${drawChart ? "pop-5" : ""}`}
            />

            {/* Teks Label X-Axis */}
            <text x="100" y="280" className="chart-label">
              Minggu 1
            </text>
            <text x="400" y="280" className="chart-label">
              Minggu 2
            </text>
            <text x="700" y="280" className="chart-label">
              Minggu 3 (Skrg)
            </text>

            {/* Teks Tooltip Melayang di Titik Terakhir */}
            <g className={`tooltip-group ${drawChart ? "show-tooltip" : ""}`}>
              <rect
                x="660"
                y="30"
                width="80"
                height="30"
                rx="8"
                className="tooltip-bg"
              />
              <text x="700" y="50" className="tooltip-text">
                65.5 kg
              </text>
            </g>
          </svg>
        </div>
      </div>

      <div className="bottom-stats-grid slide-up delay-2">
        <div className="mini-stat-glass">
          <div className="mini-icon fire">🔥</div>
          <div className="mini-info">
            <h4>Rata-rata Defisit</h4>
            <p>-450 kcal/hari</p>
          </div>
        </div>
        <div className="mini-stat-glass">
          <div className="mini-icon water">💧</div>
          <div className="mini-info">
            <h4>Asupan Air</h4>
            <p>2.5 Liter/hari</p>
          </div>
        </div>
        <div className="mini-stat-glass">
          <div className="mini-icon steps">👟</div>
          <div className="mini-info">
            <h4>Aktivitas</h4>
            <p>8,000 Langkah</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgresLaporan;
