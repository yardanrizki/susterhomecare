"use client";

import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./mitra.css";
import Image from "next/image";

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
  // Tambahan data duplikat ...
];

const SlideComponent = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalSlides = partnerData.length;
  const slidesToShow = 3;

  useEffect(() => {
    const autoSlide = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalSlides);
    }, 3000);
    return () => clearInterval(autoSlide);
  }, [totalSlides]);

  const getVisibleSlides = () => {
    const slides = [];
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
