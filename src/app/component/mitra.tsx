"use client";

import { useState, useRef, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./mitra.css"

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
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalSlides = partnerData.length;
  const slidesToShow = 3; // Tampilkan 3 gambar sekaligus
  const autoSlideInterval = useRef(null);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  };

  useEffect(() => {
    autoSlideInterval.current = setInterval(() => {
      nextSlide();
    }, 3000); // 3 detik sekali geser
    return () => clearInterval(autoSlideInterval.current);
  }, []);

  // Hitung index aktif
  const getVisibleSlides = () => {
    let slides = [];
    for (let i = 0; i < slidesToShow; i++) {
      slides.push(partnerData[(currentIndex + i) % totalSlides]);
    }
    return slides;
  };

  const visibleSlides = getVisibleSlides();

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
                    <img
                      loading="lazy"
                      decoding="async"
                      src={partner.imgSrc}
                      alt={partner.alt}
                      className="partner-image"
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
