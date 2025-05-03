"use client";

import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css'; // Pastikan ini di _app.js atau layout.tsx

const featureListPerawatMedis = [
  {
    title: "Jasa Infus",
    img: "https://perawathomecare.id/wp-content/uploads/2023/09/AnyConv.com__perawat-luka-ringan-150x150.webp",
  },
  {
    title: "Jasa Injeksi",
    img: "https://perawathomecare.id/wp-content/uploads/2023/09/AnyConv.com__Group-22-2-150x150.webp",
  },
  {
    title: "Infus Elektrolit",
    img: "https://perawathomecare.id/wp-content/uploads/2024/05/Group-23-1-150x150.webp",
  },
  {
    title: "Infus Obat",
    img: "https://perawathomecare.id/wp-content/uploads/2024/05/Group-22-1-150x150.webp",
  },
];

const FeatureListPerawtMedis = () => {
  return (
    <Container className="my-5">
      <div className="text-center my-3">
        <h2
          className="semi-bold"
          style={{ fontFamily: "sans-serif", fontSize: 45 }}
        >
          <span style={{ color: "#0a0a0a" }}>
            Apa Itu <span style={{ color: "#cc1925" }}>Infus</span>
          </span>
          <br />
          <span style={{ color: "#cc1925" }}>& Suntik Vitamin?</span>
        </h2>
        <p>Karena Perawathomecare telah hadir untuk Anda!</p>
      </div>
      <Row>
        {featureListPerawatMedis.map((item, idx) => (
          <Col md={3} className="mb-4 text-center" key={idx}>
            <image
              src={item.img}
              width={150}
              height={150}
              alt={item.title}
              loading="lazy"
              decoding="async"
              className="pt-3"
            />
            <h4 className="pt-5">{item.title}</h4>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default FeatureListPerawtMedis;
