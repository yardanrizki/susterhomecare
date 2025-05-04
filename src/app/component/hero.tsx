"use client";

import React from "react";
import Image from "next/image";
import { Container, Row, Col } from "react-bootstrap";
import WhatsAppButton from "./buttonwhatsaap";
import "../style/globals.css"

interface HeroProps {
  background?: string;
  imageSrc?: string;
}

const Hero: React.FC<HeroProps> = ({
  background = "linear-gradient(to right, #84040B 45%, #B87075 80%)",
  imageSrc = "/assets/image/main.png",
}) => {
  return (
    <section
      className="text-white"
      style={{
        background,
        paddingTop: "4rem",
        paddingBottom: "4rem",
        display: "flex",
        alignItems: "center", // Vertically center
      }}
    >
      <Container>
        <Row className="align-items-center">
          {/* Kiri: Teks */}
          <Col
            lg={6}
            className="text-center text-lg-start d-flex flex-column justify-content-center"
          >
            <h1 className="fw-bold display-5 display-md-4 mb-3">
              Jasa Suntik Vitamin
              <br className="d-none d-md-block" />
              ke Rumah
            </h1>
            <h2 className="fw-bold fs-3 fs-md-2 text-warning mb-3">
              #TanpaRibetAntre
            </h2>

            <p className="fs-5 mb-4">
              Layanan home service cepat, aman, dan profesional untuk memenuhi
              kebutuhan vitamin Anda tanpa perlu keluar rumah.
            </p>

            <div className="d-flex flex-column flex-md-row justify-content-center justify-content-lg-start align-items-center gap-2 mb-3">
              <p className="mb-0 fs-6">Harga Mulai Dari</p>
              <p className="mb-0 text-decoration-line-through">Rp 458.000</p>
            </div>

            <h3 className="fw-bold fs-2 text-light mb-4">Rp 358.000</h3>

            <div className="d-flex justify-content-center justify-content-lg-start">
              <WhatsAppButton
                phoneNumber="6282166829882"
                message="Tanya tentang Layanan B"
                buttonText="Saya Berminat"
                showText={true}
                showIcon={true}
                className="rounded-pill px-4 py-3 fw-semibold text-light shadow-lg"
                style={{ backgroundColor: "#AA151F", fontSize: "1rem" }}
              />
            </div>
          </Col>

          {/* Kanan: Gambar */}
          <Col lg={6} className="text-center mt-5 mt-lg-0">
            <div style={{ maxWidth: "100%", height: "auto" }}>
              <Image
                src={imageSrc}
                alt="Perawat Suntik Vitamin"
                width={500}
                height={500}
                className="img-fluid rounded-4 shadow"
                style={{ objectFit: "contain" }}
                priority
              />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;
