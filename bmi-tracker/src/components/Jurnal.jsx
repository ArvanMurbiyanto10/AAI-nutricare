import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import "./Jurnal.css";

// Mockup Data Makanan (Nanti ditarik dari Database)
const foodDatabase = [
  {
    id: 1,
    name: "Nasi Putih",
    portion: "1 Centong (100g)",
    cal: 130,
    category: "Karbohidrat",
  },
  {
    id: 2,
    name: "Dada Ayam Bakar",
    portion: "1 Potong (100g)",
    cal: 165,
    category: "Protein",
  },
  {
    id: 3,
    name: "Telur Rebus",
    portion: "1 Butir",
    cal: 78,
    category: "Protein",
  },
  {
    id: 4,
    name: "Tempe Goreng",
    portion: "1 Potong",
    cal: 118,
    category: "Nabati",
  },
  {
    id: 5,
    name: "Pisang Ambon",
    portion: "1 Buah",
    cal: 105,
    category: "Buah",
  },
  {
    id: 6,
    name: "Indomie Goreng",
    portion: "1 Bungkus",
    cal: 380,
    category: "Cepat Saji",
  },
  {
    id: 7,
    name: "Susu Sapi Segar",
    portion: "1 Gelas (200ml)",
    cal: 120,
    category: "Minuman",
  },
];

const JurnalKalori = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [mealType, setMealType] = useState("Makan Siang");
  const [selectedFoods, setSelectedFoods] = useState([]);

  // Filter pencarian
  const filteredFoods = foodDatabase.filter((food) =>
    food.name.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  // Fungsi tambah/hapus makanan ke keranjang jurnal
  const toggleFood = (food) => {
    const isExist = selectedFoods.find((item) => item.id === food.id);
    if (isExist) {
      setSelectedFoods(selectedFoods.filter((item) => item.id !== food.id));
    } else {
      setSelectedFoods([...selectedFoods, food]);
    }
  };

  // Hitung total kalori yang dipilih
  const totalCalories = selectedFoods.reduce(
    (total, item) => total + item.cal,
    0,
  );

  // Animasi Framer Motion
  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  return (
    <div className="jurnal-layout">
      {/* --- TOP BAR KEMBALI --- */}
      <header className="top-bar-jurnal">
        <Link to="/dashboard" className="btn-back">
          <span>←</span> Kembali
        </Link>
        <div className="jurnal-header-title">
          <h3>Jurnal Makanan</h3>
          <p>Catat asupan kalori harianmu</p>
        </div>
        <div style={{ width: "80px" }}></div>{" "}
        {/* Spacer agar judul di tengah */}
      </header>

      <main className="jurnal-content">
        {/* --- PILIH WAKTU MAKAN --- */}
        <motion.div
          className="meal-type-selector"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
        >
          {["Sarapan", "Makan Siang", "Makan Malam", "Cemilan"].map((type) => (
            <button
              key={type}
              className={`meal-pill ${mealType === type ? "active" : ""}`}
              onClick={() => setMealType(type)}
            >
              {type}
            </button>
          ))}
        </motion.div>

        {/* --- KOLOM PENCARIAN --- */}
        <motion.div
          className="search-container"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
        >
          <div className="search-box">
            <span className="search-icon">🔍</span>
            <input
              type="text"
              placeholder="Cari makanan (ex: Nasi, Telur, Ayam...)"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            {searchTerm && (
              <button
                className="clear-search"
                onClick={() => setSearchTerm("")}
              >
                ✖
              </button>
            )}
          </div>
        </motion.div>

        {/* --- DAFTAR MAKANAN --- */}
        <div className="food-list-grid">
          <AnimatePresence>
            {filteredFoods.length > 0 ? (
              filteredFoods.map((food, index) => {
                const isSelected = selectedFoods.some(
                  (item) => item.id === food.id,
                );
                return (
                  <motion.div
                    key={food.id}
                    className={`food-item-card ${isSelected ? "selected" : ""}`}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ delay: index * 0.05 }}
                    onClick={() => toggleFood(food)}
                  >
                    <div className="food-item-info">
                      <h4>{food.name}</h4>
                      <p>
                        {food.portion} •{" "}
                        <span className="category-tag-small">
                          {food.category}
                        </span>
                      </p>
                    </div>
                    <div className="food-item-action">
                      <span className="food-cal">{food.cal} kcal</span>
                      <button
                        className={`btn-select-food ${isSelected ? "active" : ""}`}
                      >
                        {isSelected ? "✓" : "+"}
                      </button>
                    </div>
                  </motion.div>
                );
              })
            ) : (
              <motion.div
                className="empty-search"
                initial="hidden"
                animate="visible"
                variants={fadeUp}
              >
                <span className="empty-icon">🍽️</span>
                <p>Makanan tidak ditemukan di database.</p>
                <button className="btn-tambah-manual">
                  Tambah Data Manual
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </main>

      {/* --- FLOATING BOTTOM BAR (Muncul jika ada makanan dipilih) --- */}
      <AnimatePresence>
        {selectedFoods.length > 0 && (
          <motion.div
            className="floating-summary-bar"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ type: "spring", stiffness: 100 }}
          >
            <div className="summary-info">
              <p>{selectedFoods.length} Makanan dipilih</p>
              <h3>
                {totalCalories} <span>kcal</span>
              </h3>
            </div>
            <button
              className="btn-simpan-jurnal"
              onClick={() =>
                alert(
                  `Berhasil menyimpan ${totalCalories} kcal untuk ${mealType}!`,
                )
              }
            >
              Simpan Jurnal
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default JurnalKalori;
