"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import Image from "next/image";
import { Container, Row, Col } from "react-bootstrap";
import "./partnershipsection.css"; // Import the new CSS file

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
        <Row>
          <Col>
            <div className="swiper-container">
              <Swiper
                modules={[Autoplay]}
                loop={true}
                speed={500}
                autoplay={{ delay: 5000 }}
                spaceBetween={50} // Menambahkan jarak antar slide
                slidesPerView={3}
                slidesPerGroup={1}
                breakpoints={{
                  320: { slidesPerView: 1, spaceBetween: 20 },
                  480: { slidesPerView: 2, spaceBetween: 40 },
                  768: { slidesPerView: 3, spaceBetween: 60 },
                }}
              >
                {partners.map((partner, index) => (
                  <SwiperSlide key={index}>
                    <figure className="swiper-slide-inner">
                      <div className="image-container">
                        <Image
                          src={partner.src}
                          alt={partner.alt}
                          width={partner.width}
                          height={partner.height}
                          className="swiper-slide-image"
                        />
                      </div>
                    </figure>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
