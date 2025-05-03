"use client";

import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css'; // Pastikan ini di _app.js atau layout.tsx
import Image from "next/image";

const featureList = [
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
    title: "On-site Service",
    desc: "Lakukan tindakan di rumah, di kantor, atau di mana pun",
    img: "https://perawathomecare.id/wp-content/uploads/2024/01/Group-519-2-1-150x150.webp",
  },
  {
    title: "100% Tindakan Perawat",
    desc: "Semua tindakan dilakukan oleh perawat yang profesional, sehingga dijamin aman",
    img: "https://perawathomecare.id/wp-content/uploads/2024/01/Group-519-2-1-150x150.webp",
  },
];

const FeatureList = () => {
  return (
    <Container className="my-5">
      <Row>
        {featureList.map((item, idx) => (
          <Col md={6} className="mb-4 text-center" key={idx}>
            <Image
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

export default FeatureList;
