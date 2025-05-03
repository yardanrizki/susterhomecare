"use client";
import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

const featureData = [
  {
    title: "Vitamin Booster",
    description:
      "Dapatkan asupan vitamin home service yang cepat, efektif dan aman oleh perawat profesional.",
    img: "https://perawathomecare.id/wp-content/uploads/2024/05/Group-907-1.webp",
    alt: "Vitamin Booster",
  },
  {
    title: "Beauty Booster",
    description:
      "Memberikan energi baru pada kulit dan meningkatkan kesehatan kulit secara keseluruhan.",
    img: "https://perawathomecare.id/wp-content/uploads/2024/05/Group-908.webp",
    alt: "Beauty Booster",
  },
  {
    title: "Perawat Medis",
    description:
      "Perawat profesional yang membantu merawat anak-anak, orang lanjut usia, atau orang sakit kronis.",
    img: "https://perawathomecare.id/wp-content/uploads/2024/05/Group-909.webp",
    alt: "Perawat Medis",
  },
];

const FeatureCardSection = () => {
  return (
    <Container fluid className="my-5">
      <Row className="justify-content-center">
        {featureData.map((item, index) => (
          <Col key={index} md={4} className="mb-4">
            <Card className="shadow-sm text-center p-4 h-100">
              <Card.Img
                variant="top"
                src={item.img}
                alt={item.alt}
                style={{ width: "60px" }}
                className="mb-3 mx-auto d-block"
              />
              <hr />
              <Card.Body>
                <Card.Title className="fw-bold">{item.title}</Card.Title>
                <Card.Text className="text-muted">{item.description}</Card.Text>
                <Button variant="primary" className="text-capitalize">
                  Lihat Selengkapnya
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default FeatureCardSection;
