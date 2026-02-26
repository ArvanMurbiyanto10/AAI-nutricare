import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Dashboard.css";
import Beranda from "./Beranda";
import Jurnal from "./Jurnal";
import DatabaseMakanan from "./DatabaseMakanan";
import ProgresLaporan from "./ProgresLaporan";
import ProfilTarget from "./ProfilTarget";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("beranda");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const navigate = useNavigate();

  // Animasi masuk saat dashboard dimuat
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const handleLogout = () => navigate("/");

  const renderContent = () => {
    switch (activeTab) {
      case "beranda":
        return <Beranda />;
      case "jurnal":
        return <Jurnal />;
      case "database":
        return <DatabaseMakanan />;
      case "progres":
        return <ProgresLaporan />;
      case "profil":
        return <ProfilTarget />;
      default:
        return <Beranda />;
    }
  };

  const handleMenuClick = (tabName) => {
    setActiveTab(tabName);
    setIsMobileMenuOpen(false);
  };

  return (
    <div className={`dashboard-grand-layout ${isLoaded ? "loaded" : ""}`}>
      {/* Background Ornaments */}
      <div className="dash-bg-shape shape-1"></div>
      <div className="dash-bg-shape shape-2"></div>

      <div className="dashboard-glass-container">
        {/* SIDEBAR */}
        <aside className={`premium-sidebar ${isMobileMenuOpen ? "open" : ""}`}>
          <div className="sidebar-brand">
            <div className="brand-icon">✨</div>
            <h2>
              <span className="text-emerald">AAI</span> Nutricare
            </h2>
          </div>

          <nav className="premium-nav">
            {[
              { id: "beranda", icon: "📊", label: "Beranda" },
              { id: "jurnal", icon: "📓", label: "Jurnal Kalori" },
              { id: "database", icon: "🥗", label: "Database Gizi" },
              { id: "progres", icon: "📈", label: "Progres & Grafik" },
              { id: "profil", icon: "⚙️", label: "Profil Saya" },
            ].map((menu) => (
              <button
                key={menu.id}
                className={`premium-nav-item ${activeTab === menu.id ? "active" : ""}`}
                onClick={() => handleMenuClick(menu.id)}
              >
                <span className="nav-icon">{menu.icon}</span>
                <span className="nav-label">{menu.label}</span>
                {activeTab === menu.id && (
                  <div className="active-indicator"></div>
                )}
              </button>
            ))}
          </nav>

          <div className="sidebar-bottom">
            <div className="premium-nav-item logout" onClick={handleLogout}>
              <span className="nav-icon">🚪</span>
              <span className="nav-label">Keluar Sistem</span>
            </div>
          </div>
        </aside>

        {isMobileMenuOpen && (
          <div
            className="mobile-backdrop"
            onClick={() => setIsMobileMenuOpen(false)}
          ></div>
        )}

        {/* MAIN AREA */}
        <main className="premium-main">
          <header className="premium-topbar">
            <button
              className="btn-mobile-toggle"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <span className="toggle-line"></span>
              <span className="toggle-line short"></span>
              <span className="toggle-line"></span>
            </button>

            <div className="topbar-search">
              <span className="search-icon">🔍</span>
              <input type="text" placeholder="Pencarian cepat..." />
            </div>

            <div className="topbar-actions">
              <div className="action-btn notification has-alert">
                🔔<span className="alert-dot"></span>
              </div>
              <div
                className="action-user"
                onClick={() => handleMenuClick("profil")}
              >
                <div className="user-text">
                  <span className="user-name">Pengguna AAI</span>
                  <span className="user-tier">🌟 Premium</span>
                </div>
                <img
                  src="/nasi-putih.jpeg"
                  alt="Avatar"
                  className="user-avatar"
                />{" "}
                {/* Ganti foto avatar jika ada */}
              </div>
            </div>
          </header>

          <div className="premium-content-wrapper">{renderContent()}</div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
