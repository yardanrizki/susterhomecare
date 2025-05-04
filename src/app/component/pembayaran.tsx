import React from "react";
import Image from "next/image";
import { Container, Row, Col } from "react-bootstrap";

const paymentLogos = [
  {
    src: "https://perawathomecare.id/wp-content/uploads/2023/12/Bank-Negara-Indonesia-jpeg-_1_.webp",
    alt: "Bank Negara Indonesia",
    width: 191,
    height: 120,
  },
  {
    src: "https://perawathomecare.id/wp-content/uploads/2023/12/Bank-Central-Asia-svg-_1_.webp",
    alt: "Bank Central Asia",
    width: 197,
    height: 63,
  },
  {
    src: "https://perawathomecare.id/wp-content/uploads/2023/12/layer1-_2_-_1_.webp",
    alt: "Layer 2",
    width: 147,
    height: 68,
  },
  {
    src: "https://perawathomecare.id/wp-content/uploads/2023/12/PermataBank-svg-1.webp",
    alt: "Permata Bank",
    width: 212,
    height: 53,
  },
  {
    src: "https://perawathomecare.id/wp-content/uploads/2023/12/Bank-Syariah-Indonesia-svg-1.webp",
    alt: "Bank Syariah Indonesia",
    width: 301,
    height: 85,
  },
  {
    src: "https://perawathomecare.id/wp-content/uploads/2023/12/layer1-_1_.webp",
    alt: "Layer 1",
    width: 197,
    height: 58,
  },
  {
    src: "https://perawathomecare.id/wp-content/uploads/2024/06/QRIS__1_-removebg-preview-1.webp",
    alt: "QRIS",
    width: 635,
    height: 393,
  },
];

const PaymentSection = () => {
  return (
    <section className="py-5 bg-light">
      <Container>
        <Row className="text-center mb-4">
          <Col>
            <h2 className="fw-bold">Pembayaran Non-Tunai & Elektronik</h2>
          </Col>
        </Row>

        <Row className="justify-content-center g-4">
          {paymentLogos.map((logo, index) => (
            <Col
              key={index}
              xs={12}
              sm={6}
              md={4}
              lg={3}
              className="d-flex justify-content-center align-items-center"
            >
              <div style={{ maxWidth: "160px", width: "100%" }}>
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={logo.width}
                  height={logo.height}
                  style={{
                    width: "100%",
                    height: "auto",
                    objectFit: "contain",
                  }}
                />
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default PaymentSection;
