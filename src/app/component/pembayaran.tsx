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
  const firstRow = paymentLogos.slice(0, 4);
  const secondRow = paymentLogos.slice(4, 7);
  const moreRows = paymentLogos.slice(7);

  return (
    <section className="py-2">
      <Container>
        <Row className="text-center mb-4">
          <Col>
            <h2 className="fw-bold">Pembayaran Non-Tunai & Elektronik</h2>
          </Col>
        </Row>

        {/* Baris pertama: 4 logo */}
        <Row className="justify-content-center mb-4 align-items-center">
          {firstRow.map((logo, index) => (
            <Col
              key={index}
              xs={5}
              lg={2}
              className="d-flex justify-content-center mb-4"
            >
              <div
                style={{
                  maxWidth: "150px",
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={logo.width}
                  height={logo.height}
                  style={{
                    maxWidth: "150px !important",
                    objectFit: "contain",
                  }}
                />
              </div>
            </Col>
          ))}
        </Row>

        {/* Baris kedua: 3 logo tengah */}
        <Row className="justify-content-center mb-3">
          {secondRow.map((logo, index) => (
            <Col
              key={index}
              xs={6}
              md={2}
              className="d-flex justify-content-center mb-4"
              style={{ maxWidth: "250px" }} // Biar lebih kecil kalau mau
            >
              <div style={{ maxWidth: "200px", width: "100%" }}>
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

        {/* Kalau ada tambahan logo lebih dari 7, teruskan isi */}
        {moreRows.length > 0 && (
          <Row className="justify-content-center mb-4">
            {moreRows.map((logo, index) => (
              <Col
                key={index}
                xs={6}
                md={4}
                className="d-flex justify-content-center mb-4"
              >
                <div style={{ maxWidth: "200px", width: "100%" }}>
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
        )}
      </Container>
    </section>
  );
};

export default PaymentSection;
