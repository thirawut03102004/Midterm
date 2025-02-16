import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import img2 from '../img/2.jpg';
import img3 from '../img/3.jpg';
import img4 from '../img/4.jpg';
import img5 from '../img/5.jpg';
import img6 from '../img/6.jpg';
import img7 from '../img/7.jpg';

const MenuPage = () => {
  const navigate = useNavigate();
  const [order, setOrder] = useState({
    หมูสามชั้น: 0,
    น้ำซุป: 0,
    เนื้อวัว: 0,
    น้ำอัดลม: 0,
    เห็ด: 0,
    เส้นอุด้ง: 0
  });

  const [orderComplete, setOrderComplete] = useState(false);

  const addToOrder = (item) => {
    setOrder({ ...order, [item]: order[item] + 1 });
  };

  const calculateTotal = () => {
    return (
      order.หมูสามชั้น * 60 +
      order.น้ำซุป * 45 +
      order.เนื้อวัว * 90 +
      order.น้ำอัดลม * 20 +
      order.เห็ด * 30 +
      order.เส้นอุด้ง * 40
    );
  };

  const totalItems = Object.values(order).reduce((total, quantity) => total + quantity, 0);
  const discount = totalItems >= 5 ? 0.1 * calculateTotal() : 0;
  const finalTotal = calculateTotal() - discount;

  const handlePayment = () => {
    setOrderComplete(true);
    setTimeout(() => {
      setOrderComplete(false);
      navigate("/");
    }, 2000);
  };

  return (
    <div style={{ fontFamily: "Arial, sans-serif", backgroundColor: "#f4f4f4", textAlign: "center" }}>
      <header style={{
        backgroundColor: "#e63946",
        padding: "15px",
        color: "#fff",
        textAlign: "center",
        fontSize: "24px",
        fontWeight: "bold"
      }}>
        <h1>ร้านหมูกระทะบุฟเฟ่ต์หมูสด</h1>
      </header>

      {/* Menu Content */}
      <div style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: "20px",
        padding: "30px"
      }}>
        {[{ img: img2, name: "น้ำซุป", price: 45 },
        { img: img3, name: "หมูสามชั้น", price: 60 },
        { img: img4, name: "เนื้อวัว", price: 90 },
        { img: img5, name: "น้ำอัดลม", price: 20 },
        { img: img6, name: "เห็ด", price: 30 },
        { img: img7, name: "เส้นอุด้ง", price: 40 }].map(item => (
          <div key={item.name} style={{
            textAlign: "center",
            backgroundColor: "#fff",
            padding: "15px",
            borderRadius: "10px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            width: "200px"
          }}>
            <img src={item.img} alt={item.name} style={{
              width: "150px",
              height: "150px",
              borderRadius: "8px",
              marginBottom: "10px",
              objectFit: "cover"
            }} />
            <button onClick={() => addToOrder(item.name)} style={{
              backgroundColor: "#e63946",
              color: "white",
              padding: "10px",
              border: "none",
              borderRadius: "5px",
              fontSize: "18px",
              cursor: "pointer",
              width: "150px",
              height: "40px"
            }}>
              {item.name} {item.price} บาท
            </button>
          </div>
        ))}
      </div>

      {/* Order Summary */}
      <div style={{
        margin: "40px auto",
        padding: "20px",
        backgroundColor: "#fff",
        borderRadius: "8px",
        textAlign: "center",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        maxWidth: "400px"
      }}>
        <h2>รายการที่สั่ง</h2>
        <ul style={{ listStyle: "none", padding: 0 }}>
          {Object.keys(order).map(item => order[item] > 0 && (
            <li key={item}>{item} x {order[item]} = {order[item] * (
              item === "หมูสามชั้น" ? 60 :
              item === "น้ำซุป" ? 45 :
              item === "เนื้อวัว" ? 90 :
              item === "น้ำอัดลม" ? 20 :
              item === "เห็ด" ? 30 :
              40)} บาท</li>
          ))}
        </ul>
        {discount > 0 && (
          <div>
            <h4>ส่วนลด 10%: {discount.toFixed(2)} บาท</h4>
          </div>
        )}
        <h3>รวมทั้งหมด: {finalTotal.toFixed(2)} บาท</h3>
        <button onClick={handlePayment} style={{
          backgroundColor: "#e63946",
          color: "white",
          padding: "15px 30px",
          border: "none",
          borderRadius: "5px",
          fontSize: "20px",
          cursor: "pointer"
        }}>
          จ่ายเงิน
        </button>
      </div>

      {orderComplete && (
        <div style={{
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          backgroundColor: "#f1faee",
          padding: "20px",
          borderRadius: "8px",
          textAlign: "center",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)"
        }}>
          <h2>ขอบคุณที่สั่งซื้อกับเรา!</h2>
          <p>การสั่งซื้อของคุณสำเร็จแล้ว</p>
        </div>
      )}
      <footer style={{
        backgroundColor: "#222",
        color: "#fff",
        padding: "15px",
        textAlign: "center",
        position: "fixed",
        bottom: 0,
        width: "100%"
      }}>
        <p>ติดต่อเรา: 089-999-9999 | Line: @mookratha</p>
      </footer>
    </div>
  );
};

export default MenuPage;
