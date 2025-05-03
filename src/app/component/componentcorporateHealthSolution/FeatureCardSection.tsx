import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";

const listDataUnggulan = [
  {
    imgSrc:
      "https://perawathomecare.id/wp-content/uploads/2024/09/Group-989-1.webp",
    altText: "Health Conscious Professional",
    title: "Tingkatkan Imunitas Secara Instan",
    description:
      "Suntikan vitamin yang dirancang untuk meningkatkan daya tahan tubuh karyawan Anda, membuat mereka lebih siap menghadapi tantangan.",
  },
  {
    imgSrc:
      "https://perawathomecare.id/wp-content/uploads/2024/09/Group-990-1.webp",
    altText: "Pre Travel Optimizer",
    title: "Atasi Stres dan Kelelahan dengan Efektif",
    description:
      "Vitamin kami membantu karyawan Anda mengatasi stres dan kelelahan, meningkatkan performa kerja dan kesejahteraan mereka.",
  },
  {
    imgSrc:
      "https://perawathomecare.id/wp-content/uploads/2024/09/Group-991-1.webp",
    altText: "The Busy Parent",
    title: "Absensi Menurun, Produktivitas Meningkat",
    description:
      "Dengan tubuh yang lebih sehat, karyawan akan lebih jarang sakit, menjaga produktivitas di tingkat optimal.",
  },
  {
    imgSrc:
      "https://perawathomecare.id/wp-content/uploads/2024/09/Group-992-1.webp",
    altText: "The Busy Parent",
    title: "Proses Cepat dan Efisien, Tanpa Mengganggu Pekerjaan",
    description:
      "Proses Cepat dan Efisien, Tanpa Mengganggu Pekerjaan Layanan infus vitamin kami dirancang agar cepat dan efisien, sehingga tidak mengganggu aktivitas kerja.",
  },
  {
    imgSrc:
      "https://perawathomecare.id/wp-content/uploads/2024/09/Group-993-1.webp",
    altText: "The Busy Parent",
    title: "Personalisasi Sesuai Kebutuhan Tim Anda",
    description:
      "Vitamin yang kami berikan disesuaikan dengan kebutuhan spesifik karyawan Anda, memastikan hasil yang optimal.",
  },
];

const FeatureListUnggulan = () => {
  return (
    <section
      style={{padding: "60px 0",  }}
      className="hero-bebas-section"
    >
      <Container>
        {/* Heading */}
        <Row className="text-center mb-5">
          <Col>
            <h2 className="fw-bold">Inilah Keunggulan Layanan Infus Vitamin dari Perawat Homecare yang Akan Membuat Anda Terkejut!</h2>
          </Col>
        </Row>

        {/* Looping through the data array to display each section */}
        {listDataUnggulan.map((item, index) => (
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

export default FeatureListUnggulan;
