import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";

const targetData = [
  {
    imgSrc:
      "https://perawathomecare.id/wp-content/uploads/2024/05/Group-923-2-1.webp",
    altText: "Health Conscious Professional",
    title: "Health Conscious Professional",
    description:
      "Seorang pekerja aktif berusia 25-45 tahun yang ingin memprioritaskan kesehatan dan kebugarannya namun kesulitan untuk merawat kesehatan ditengah kesibukannya. Menjaga kesehatan dan mencegah dari sakit adalah upaya paling cocok untuk Anda sehingga dapat mempertahankan kinerja dengan optimal.",
  },
  {
    imgSrc:
      "https://perawathomecare.id/wp-content/uploads/2024/05/Group-922-1.webp",
    altText: "Pre Travel Optimizer",
    title: "Pre Travel Optimizer",
    description:
      "Traveller yang sering bepergian dari segala usia, mencari solusi untuk mengatasi jet lag, kelelahan, dan penyakit yang terkait dengan perjalanan. Cocok untuk Anda yang ingin bepergian jauh seperti, liburan keluarga, umroh, business trip, dll.",
  },
  {
    imgSrc:
      "https://perawathomecare.id/wp-content/uploads/2024/05/Group-921-2-1.webp",
    altText: "The Busy Parent",
    title: "The Busy Parent",
    description:
      "Orang tua berusia 30-45 tahun yang sibuk dengan pengasuhan anak, pekerjaan, dan tanggung jawab rumah tangga. Cocok bagi anda yang ingin memprioritaskan kesehatan Anda sekaligus menjaga kesehatan keluarga, tetapi kesulitan menemukan waktu yang sesuai.",
  },
];

const TargetAudience = () => {
  return (
    <section
      style={{ color: "#fff", padding: "60px 0", backgroundColor: "#84040B" }}
      className="hero-bebas-section"
    >
      <Container>
        {/* Heading */}
        <Row className="text-center mb-5">
          <Col>
            <h2 className="fw-bold">Cocok untuk Siapa Saja</h2>
            <p>
              Vitamin booster adalah layanan yang cocok untuk menjaga kesehatan
              ditengah kesibukan Anda.
            </p>
          </Col>
        </Row>

        {/* Looping through the data array to display each section */}
        {targetData.map((item, index) => (
          <Row
            key={index}
            className="justify-content-center mb-4 align-items-center"
          >
            <Col md={2} className="text-center">
              <Image src={item.imgSrc} alt={item.altText} fluid />
            </Col>
            <Col md={6} className="align-content-center">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </Col>
          </Row>
        ))}
      </Container>
    </section>
  );
};

export default TargetAudience;
