"use client";

import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css'; // Pastikan ini di _app.js atau layout.tsx
import 'next/image'

const featureListVitaminBoosters = [
  {
    title: "On-site Service",
    desc: "Lakukan tindakan di rumah, di kantor, atau di mana pun",
    img: "https://perawathomecare.id/wp-content/uploads/2024/01/Group-520-1-150x150.webp",
  },
  {
    title: "100% Tindakan Perawat",
    desc: "Semua tindakan dilakukan oleh perawat yang profesional, sehingga dijamin aman",
    img: "https://perawathomecare.id/wp-content/uploads/2024/01/Group-27-2-1-150x150.webp",
  },
  {
    title: "Konsultasi Gratis",
    desc: "Konsultasikan keluhanmu dengan tenaga medis ahli, gratis.",
    img: "https://perawathomecare.id/wp-content/uploads/2024/09/Group-27-2-1-150x150.webp",
  },
  {
    title: "Pendaftaran Mudah",
    desc: "Pendaftaran mudah dan bisa atur jadwal kunjungan sesuai keinginan",
    img: "https://perawathomecare.id/wp-content/uploads/2024/01/Group-519-2-1-150x150.webp",
  },
  {
    title: "Harga Sudah All In",
    desc: "Harga layanan sudah termasuk biaya vitamin, jasa medis & transportasi perawat",
    img: "https://perawathomecare.id/wp-content/uploads/2024/01/Group52141-ezgif.com-png-to-webp-converter-150x150.webp",
  },
  {
    title: "Pemesanan 24 Jam",
    desc: "Lakukan booking infus vitamin kapanpun sesuai kebutuhanmu.",
    img: "https://perawathomecare.id/wp-content/uploads/2024/05/Group-521-1-150x150.webp",
  },
];

const FeatureListVitaminBoosters = () => {
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
        {featureListVitaminBoosters.map((item, idx) => (
          <Col md={4} className="mb-4 text-center" key={idx}>
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
            <p className="pt-3">{item.desc}</p>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default FeatureListVitaminBoosters;
