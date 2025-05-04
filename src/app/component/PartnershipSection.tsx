"use client";

import Image from "next/image";
import { Container, Row, Col } from "react-bootstrap";
import "./partnershipsection.css"; // Import the CSS file

// Array gambar dengan URL dan ukuran yang dapat diatur
const partners = [
  {
    src: "https://perawathomecare.id/wp-content/uploads/2024/12/Core_Pilates-removebg-preview.webp",
    alt: "Core Pilates",
    width: 330,
    height: 330,
  },
  {
    src: "https://perawathomecare.id/wp-content/uploads/2024/12/Prodia-BMJ.webp",
    alt: "Logo Prodia BMJ",
    width: 330,
    height: 330,
  },
  {
    src: "https://perawathomecare.id/wp-content/uploads/2024/12/Logo-Hobi-Muncak.webp",
    alt: "Logo Hobi Muncak",
    width: 330,
    height: 330,
  },
  {
    src: "https://perawathomecare.id/wp-content/uploads/2024/12/Alfa_medika-removebg-preview.webp",
    alt: "Logo Alfa Medika",
    width: 330,
    height: 330,
  },
  {
    src: "https://perawathomecare.id/wp-content/uploads/2024/05/myvalue-logo-set-1-1-1.webp",
    alt: "Myvalue Logo",
    width: 294,
    height: 330,
  },
  {
    src: "https://perawathomecare.id/wp-content/uploads/2024/05/image-37-2.webp",
    alt: "KlinikGo",
    width: 264,
    height: 330,
  },
  {
    src: "https://perawathomecare.id/wp-content/uploads/2024/05/Group-865-1.webp",
    alt: "cosamart",
    width: 330,
    height: 330,
  },
  {
    src: "https://perawathomecare.id/wp-content/uploads/2024/05/image-66-1-1.webp",
    alt: "KlikDokter",
    width: 330,
    height: 330,
  },
  {
    src: "https://perawathomecare.id/wp-content/uploads/2024/05/logo_TAPapp_update_2019_Text-only-general-1-1.webp",
    alt: "Logo TAPapp",
    width: 310,
    height: 330,
  },
  {
    src: "https://perawathomecare.id/wp-content/uploads/2024/05/image-68-1-1.webp",
    alt: "bli bli",
    width: 340,
    height: 330,
  },
];

export default function PartnershipSection() {
  return (
    <section id="partnership" className="py-10 pb-lg-4 align-items-center">
      <Container>
        <Row className="text-center mb-4 mt-4 pb-3">
          <Col>
            <h2
              className="fw-bold"
              style={{ fontFamily: "sans-serif", fontSize: "45px" }}
            >
              <span style={{ color: "#0a0a0a" }}>Telah Bekerja</span>{" "}
              <span style={{ color: "#cc1925" }}>Sama Dengan</span>
            </h2>
          </Col>
        </Row>

        {/* Gambar Partner: Menggunakan Grid */}
        <Row className="partner-images">
          {partners.map((partner, index) => (
            <Col xs={6} sm={4} md={3} lg={2} key={index} className="mb-4">
              <div className="image-container">
                <Image
                  src={partner.src}
                  alt={partner.alt}
                  width={partner.width}
                  height={partner.height}
                  className="partner-image"
                />
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}
  