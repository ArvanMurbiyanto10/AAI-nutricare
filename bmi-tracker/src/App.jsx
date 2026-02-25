// src/App.jsx
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import Login from "./components/login";
import Register from "./components/register";
import "./App.css";

// --- KOMPONEN DASHBOARD ---
const Dashboard = () => {
  const [weight, setWeight] = useState(69);
  const height = 175;

  const bmiValue = (weight / Math.pow(height / 100, 2)).toFixed(1);
  let bmiStatus = "Normal Ideal";
  let badgeColor = "bg-success";
  if (bmiValue < 18.5) {
    bmiStatus = "Kurus";
    badgeColor = "bg-warning text-dark";
  } else if (bmiValue >= 25) {
    bmiStatus = "Overweight";
    badgeColor = "bg-danger";
  }

  const handleUpdateWeight = () => {
    const newWeight = prompt("Masukkan berat badan terbaru kamu (kg):", weight);
    if (newWeight && !isNaN(newWeight)) setWeight(parseFloat(newWeight));
  };

  const [foods, setFoods] = useState([
    { id: 1, time: "07:30", name: "Oatmeal & Pisang", calories: 320 },
    { id: 2, time: "12:15", name: "Nasi Merah & Dada Ayam", calories: 550 },
  ]);
  const [showAddForm, setShowAddForm] = useState(false);
  const [newFood, setNewFood] = useState({ name: "", calories: "" });

  const totalCalories = foods.reduce(
    (total, food) => total + parseInt(food.calories),
    0,
  );

  const handleAddFood = (e) => {
    e.preventDefault();
    if (!newFood.name || !newFood.calories) return;
    const now = new Date();
    const timeString = `${now.getHours().toString().padStart(2, "0")}:${now.getMinutes().toString().padStart(2, "0")}`;
    const foodItem = {
      id: Date.now(),
      time: timeString,
      name: newFood.name,
      calories: newFood.calories,
    };
    setFoods([...foods, foodItem]);
    setNewFood({ name: "", calories: "" });
    setShowAddForm(false);
  };

  const handleDeleteFood = (id) => {
    if (window.confirm("Yakin ingin menghapus catatan ini?")) {
      setFoods(foods.filter((food) => food.id !== id));
    }
  };

  return (
    <div className="dashboard-section">
      {/* Top Bar (Sekarang dijamin Full Width) */}
      <div className="top-bar">
        <div className="greeting">
          <p>Halo, selamat datang kembali 👋</p>
          <h3>Arvan</h3>
        </div>
        <div>
          {/* Tombol kembali ke Beranda sementara */}
          <Link to="/" className="btn btn-outline-light btn-sm">
            Keluar
          </Link>
        </div>
      </div>

      <div className="container-fluid px-4">
        <div className="row g-4">
          {/* Kartu Kalkulator BMI */}
          <div className="col-md-4">
            <div className="super-card">
              <div className="card-header-green">
                <span>⚖️</span> Kalkulator BMI
              </div>
              <div className="card-body p-4 text-center">
                <h1
                  style={{
                    fontSize: "4rem",
                    color: "#27ae60",
                    fontWeight: "bold",
                  }}
                >
                  {bmiValue}
                </h1>
                <span
                  className={`badge ${badgeColor} mb-3 px-3 py-2`}
                  style={{ fontSize: "1rem" }}
                >
                  {bmiStatus}
                </span>
                <p className="text-muted">
                  Tinggi: {height} cm | Berat: <strong>{weight} kg</strong>
                </p>
                <button
                  onClick={handleUpdateWeight}
                  className="btn btn-outline-success mt-2 w-100 fw-bold"
                >
                  Update Berat Badan
                </button>
              </div>
            </div>
          </div>

          {/* Kartu Catatan Makanan */}
          <div className="col-md-8">
            <div className="super-card">
              <div className="card-header-green">
                <span>🥗</span> Jurnal Makanan Hari Ini
              </div>
              <div className="card-body p-4">
                <div className="d-flex justify-content-between align-items-center mb-4">
                  <h4 className="mb-0 text-secondary">
                    Total:{" "}
                    <strong style={{ color: "#e74c3c" }}>
                      {totalCalories} kcal
                    </strong>
                  </h4>
                  <button
                    onClick={() => setShowAddForm(!showAddForm)}
                    className="btn btn-green"
                  >
                    {showAddForm ? "Batal" : "+ Tambah Makanan"}
                  </button>
                </div>

                {showAddForm && (
                  <form
                    onSubmit={handleAddFood}
                    className="bg-light p-3 rounded mb-4 border"
                  >
                    <div className="row g-2">
                      <div className="col-md-6">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Nama Makanan"
                          value={newFood.name}
                          onChange={(e) =>
                            setNewFood({ ...newFood, name: e.target.value })
                          }
                          required
                        />
                      </div>
                      <div className="col-md-4">
                        <input
                          type="number"
                          className="form-control"
                          placeholder="Kalori"
                          value={newFood.calories}
                          onChange={(e) =>
                            setNewFood({ ...newFood, calories: e.target.value })
                          }
                          required
                        />
                      </div>
                      <div className="col-md-2">
                        <button type="submit" className="btn btn-primary w-100">
                          Simpan
                        </button>
                      </div>
                    </div>
                  </form>
                )}

                <div className="table-responsive">
                  <table className="table table-hover align-middle">
                    <thead className="table-light">
                      <tr>
                        <th>Waktu</th>
                        <th>Menu Makanan</th>
                        <th>Kalori</th>
                        <th className="text-center">Aksi</th>
                      </tr>
                    </thead>
                    <tbody>
                      {foods.length === 0 ? (
                        <tr>
                          <td
                            colSpan="4"
                            className="text-center text-muted py-3"
                          >
                            Belum ada catatan hari ini.
                          </td>
                        </tr>
                      ) : (
                        foods.map((food) => (
                          <tr key={food.id}>
                            <td>
                              <span className="badge bg-secondary">
                                {food.time}
                              </span>
                            </td>
                            <td className="fw-medium">{food.name}</td>
                            <td className="text-danger fw-bold">
                              {food.calories} kcal
                            </td>
                            <td className="text-center">
                              <button
                                onClick={() => handleDeleteFood(food.id)}
                                className="btn btn-sm btn-outline-danger"
                              >
                                🗑️
                              </button>
                            </td>
                          </tr>
                        ))
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- ROUTER & GABUNGAN APLIKASI ---
export default function App() {
  return (
    <Router
      future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true,
      }}
    >
      <Routes>
        {/* Rute "/" HANYA menampilkan Landing Page */}
        <Route path="/" element={<LandingPage />} />

        {/* Rute "/dashboard" HANYA menampilkan Dashboard */}
        <Route path="/dashboard" element={<Dashboard />} />

        {/* Rute "/login" sementara */}
        <Route path="/login" element={<Login />} />

        {/* Rute "/register" */}
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}
