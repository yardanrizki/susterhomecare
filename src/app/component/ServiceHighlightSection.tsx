"use client"; // kalau pakai Next.js app router (src/app)

import { Container, Row, Col, Button } from "react-bootstrap";
import Image from "next/image";

function ServiceHighlightSection() {
  return (
    <section
      style={{ padding: "0", backgroundColor: "#F1F2ED" }}
      className="bebas-section"
    >
      <Container>
        <Row className="align-items-center">
          <Col lg={6} className="text-center">
            <Image
              src="https://perawathomecare.id/wp-content/uploads/2024/09/Rectangle_6344__1___1___1_-removebg-preview-1.webp"
              alt="Perawat Suntik Vitamin"
              width={400}
              height={400}
              className="img-fluid"
              style={{ maxHeight: "400px", height: "auto" }}
            />
          </Col>
          <Col lg={6}>
            <h2 className="m-4 text-start">Paket Layanan Kami</h2>
            <p>
              Mari pesan layanan Perawathomecare via WhatsApp gratis untuk
              selamanya! Kami juga menyediakan berbagai paket jasa layanan yang
              dapat Anda nikmati sesuai kebutuhanmu.
            </p>
            <Button
              variant="light"
              className=" btn-animated mt-3 rounded-pill px-4 py-2 fw-semibold d-flex align-items-center gap-2"
              style={{ color: "#AA151F" }}
            >
              Lihat paket Layanan kami
              <i className="bi bi-arrow-right"></i>
            </Button>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default ServiceHighlightSection;
