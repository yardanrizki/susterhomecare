"use client";

import { Col, Container, Row } from "react-bootstrap";
import Image from "next/image";
import "./mitra.css"; // Import the CSS file

// Array gambar dengan URL dan ukuran yang dapat diatur
const partnerData = [
  {
    imgSrc:
      "https://perawathomecare.id/wp-content/uploads/2024/01/fisiohome_id_logo-removebg-preview-150x150.webp",
    link: "https://fisiohome.id/",
    alt: "Fisiohome",
  },
  {
    imgSrc:
      "https://perawathomecare.id/wp-content/uploads/2023/12/logo-trans-6-_1_.webp",
    link: "https://wicaraku.id/",
    alt: "Wicaraku",
  },
  {
    imgSrc:
      "https://perawathomecare.id/wp-content/uploads/2023/12/logo-pusatokupasi-warna-no-bg-1-_1_.webp",
    link: "https://pusatokupasi.com/",
    alt: "Pusatokupasi",
  },
];

const SlideComponent = () => {

  // Tidak perlu lagi ada logika untuk mendapatkan slides, cukup render semua
  const visibleSlides = partnerData;

  return (
    <Container className="py-4">
      <Row className="justify-content-center">
        <Col md={10} className="text-center">
          <h2 className="mb-4">Mitra Kesehatan Kami</h2>
          <div className="slider-wrapper">
            <div className="slide-track">
              {visibleSlides.map((partner, index) => (
                <div key={index} className="slide-item">
                  <a
                    href={partner.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      loading="lazy"
                      decoding="async"
                      src={partner.imgSrc}
                      alt={partner.alt}
                      className="partner-image"
                      width={150}
                      height={150}
                    />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default SlideComponent;
