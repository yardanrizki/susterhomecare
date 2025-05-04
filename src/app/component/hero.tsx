"use client";

import React from "react";
import Image from "next/image";
import { Container, Row, Col } from "react-bootstrap";
import WhatsAppButton from "./buttonwhatsaap";

interface HeroProps {
  background?: string; // warna latar belakang
  imageSrc?: string; // src gambar hero, opsional
}

const Hero: React.FC<HeroProps> = ({
  background = "linear-gradient(to right, #84040B 45%, #B87075 80%)",
  imageSrc = "/assets/image/main.png", // default foto kalau gak dikasih
}) => {
  return (
    <section
      className="text-white py-5"
      style={{
        background,
      }}
    >
      <Container className="h-100">
        <Row className="align-items-center my-5">
          {/* Kiri: Teks */}
          <Col lg={7} className="text-start">
            <h2 className="fw-bold display-5 mb-3">
              Jasa Suntik
              <br />
              Vitamin ke Rumah
            </h2>
            <h2 className="fw-bold display-5 mb-4">#TanpaRibetAntre</h2>
            <p className="fs-5">
              Dapatkan layanan vitamin home service yang cepat, efektif, dan
              aman oleh perawat profesional kami.
            </p>
            <div className="d-flex align-items-center gap-2">
              <p className="pe-lg-5 mb-0 fs-6">Harga Mulai Dari</p>
              <p className="mb-0 text-decoration-line-through">Rp 458.000</p>
            </div>
            <div className="d-flex justify-content-end">
              <WhatsAppButton
                phoneNumber="6282166829882"
                message="Tanya tentang Layanan B"
                buttonText="Saya Berminat"
                showText={true}
                showIcon={true}
                className="rounded-pill px-4 py-2 mt-3 fw-semibold text-light d-flex justify-content-end"
                style={{ backgroundColor: "#AA151F" }}
              />
            </div>

            <h3 className="fw-bold text-light">Rp 358.000</h3>
          </Col>

          {/* Kanan: Gambar */}
          <Col lg={5} className="text-center mt-5 mt-lg-0">
            <Image
              src={imageSrc}
              alt="Perawat Suntik Vitamin"
              width={500}
              height={400}
              className="img-fluid"
              style={{ objectFit: "contain" }}
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;
