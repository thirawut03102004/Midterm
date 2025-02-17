import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import MenuPage from "./pages/MenuPage";
import img1 from "./img/1.jpg";
import img10 from "./img/10.jpg";
import img12 from "./img/12.jpg";

const Home = () => {
  const navigate = useNavigate();
  const images = [img1, img10, img12];
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 4000); // เปลี่ยนภาพทุก 4 วินาที
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#f4f4f4",
        overflow: "hidden",
        padding: "10px",
        textAlign: "center",
      }}
    >
      <header
        style={{
          backgroundColor: "rgba(230, 57, 70, 0.8)",
          padding: "20px",
          color: "#fff",
          textAlign: "center",
          borderRadius: "10px",
          margin: "30px auto",
          maxWidth: "850px",
        }}
      >
        <h1 style={{ fontSize: "2rem", margin: "0" }}>ร้านชาบูหมูสด</h1>
      </header>

      {/* ภาพพื้นหลังสไลด์โชว์ */}
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "400px",
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img
          src={images[currentImage]}
          alt="Food"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            position: "absolute",
            transition: "opacity 1s ease-in-out",
          }}
        />
      </div>

      {/* ปุ่มสำหรับเริ่มสั่งอาหาร */}
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <button
          onClick={() => navigate("/menu")}
          style={{
            backgroundColor: "#333",
            color: "white",
            padding: "12px 24px",
            border: "none",
            borderRadius: "8px",
            fontSize: "18px",
            fontWeight: "pointer",
            cursor: "pointer",
            transition: "background-color 0.3s ease",
          }}
        >
          เริ่มสั่งอาหาร
        </button>
      </div>

      <footer
        style={{
          backgroundColor: "rgba(230, 57, 70, 0.8)",
          color: "#fff",
          padding: "15px",
          textAlign: "center",
          position: "fixed",
          bottom: 0,
          width: "100%",
          zIndex: 2,
        }}
      >
        <p>ติดต่อเรา: 089-999-9999 | Line: @Chabumusod </p>
      </footer>
    </div>
  );
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/Midterm" element={<Home />} />
        <Route path="/menu" element={<MenuPage />} />
      </Routes>
    </Router>
  );
}

export default App;
