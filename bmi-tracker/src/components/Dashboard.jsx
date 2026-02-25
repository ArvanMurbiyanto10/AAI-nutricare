import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Dashboard.css";

const Dashboard = () => {
  const [weight, setWeight] = useState(69);
  const height = 175;
  const userName = "Arvan";

  const bmiValue = (weight / Math.pow(height / 100, 2)).toFixed(1);
  let bmiStatus = "Normal Ideal";
  let statusClass = "status-normal";
  
  if (bmiValue < 18.5) {
    bmiStatus = "Kurus";
    statusClass = "status-warning";
  } else if (bmiValue >= 25 && bmiValue < 30) {
    bmiStatus = "Overweight";
    statusClass = "status-warning";
  } else if (bmiValue >= 30) {
    bmiStatus = "Obesitas";
    statusClass = "status-danger";
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
    (total, food) => total + parseInt(food.calories || 0),
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
    <div className="dashboard-wrapper">
      <nav className="dashboard-nav">
        <Link to="/" className="nav-brand">AAI Nutricare</Link>
        <div className="user-profile">
          <div className="user-avatar">{userName[0]}</div>
          <span className="fw-bold">{userName}</span>
          <Link to="/" className="btn-logout">Keluar</Link>
        </div>
      </nav>

      <header className="dashboard-header">
        <div className="header-container">
          <div className="welcome-text">
            <h1>Halo, {userName}! 👋</h1>
            <p>Berikut adalah ringkasan kesehatan kamu hari ini.</p>
          </div>
        </div>
      </header>

      <main className="dashboard-content">
        {/* BMI Section */}
        <section className="dash-card">
          <div className="card-title">
            <div className="card-icon">⚖️</div>
            Kalkulator BMI
          </div>
          <div className="bmi-display">
            <div className="bmi-value">{bmiValue}</div>
            <div className={`bmi-status-badge ${statusClass}`}>
              {bmiStatus}
            </div>
          </div>
          <div className="bmi-stats">
            <div className="stat-item">
              <div className="stat-label">Tinggi</div>
              <div className="stat-value">{height} cm</div>
            </div>
            <div className="stat-item">
              <div className="stat-label">Berat</div>
              <div className="stat-value">{weight} kg</div>
            </div>
          </div>
          <button onClick={handleUpdateWeight} className="btn-update-weight">
            Update Berat Badan
          </button>
        </section>

        {/* Food Journal Section */}
        <section className="dash-card">
          <div className="journal-header">
            <div className="card-title" style={{marginBottom: 0}}>
              <div className="card-icon">🥗</div>
              Jurnal Makanan
            </div>
            <div className="total-calories">
              Total: <span>{totalCalories} kcal</span>
            </div>
          </div>

          <div style={{marginBottom: '1.5rem'}}>
             <button 
              onClick={() => setShowAddForm(!showAddForm)} 
              className="btn-action"
            >
              {showAddForm ? "Batal" : "+ Tambah Makanan"}
            </button>
          </div>

          {showAddForm && (
            <form onSubmit={handleAddFood} className="add-food-form">
              <input
                type="text"
                className="input-dash"
                placeholder="Nama Makanan"
                value={newFood.name}
                onChange={(e) => setNewFood({ ...newFood, name: e.target.value })}
                required
              />
              <input
                type="number"
                className="input-dash"
                placeholder="Kalori"
                value={newFood.calories}
                onChange={(e) => setNewFood({ ...newFood, calories: e.target.value })}
                required
              />
              <button type="submit" className="btn-add-submit">Simpan</button>
            </form>
          )}

          <div className="food-list">
            {foods.length === 0 ? (
              <p className="text-center text-muted py-4">Belum ada catatan makanan hari ini.</p>
            ) : (
              foods.map((food) => (
                <div key={food.id} className="food-item">
                  <div className="food-info">
                    <span className="food-time">{food.time}</span>
                    <span className="food-name">{food.name}</span>
                  </div>
                  <div style={{display: 'flex', alignItems: 'center', gap: '15px'}}>
                    <span className="food-cal">{food.calories} kcal</span>
                    <button 
                      onClick={() => handleDeleteFood(food.id)}
                      className="btn-delete"
                      title="Hapus"
                    >
                      🗑️
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Dashboard;
