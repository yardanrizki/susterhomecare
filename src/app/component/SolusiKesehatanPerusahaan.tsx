import { Container, Row, Col, Image } from "react-bootstrap";

const SolusiKEsehatanPerusahaan = () => {
  return (
    <Container fluid className="mt-5" style={{ backgroundColor: "#F2F3F0" }}>
      <Row className="mb-4">
        <Col lg={12}>
          <h2 className="text-center">
            Karyawan Sakit, Produktivitas Menurun? Saatnya Ambil Tindakan!
          </h2>
        </Col>
      </Row>

      <Row className="mb-4 text-center justify-content-center">
        <Col lg={6}>
          <p>
            Banyak yang tidak menyadari bahwa stres dan kelelahan bisa berdampak
            serius pada kesehatan karyawan. Jika tidak diatasi, ini dapat
            menurunkan performa, menghambat pencapaian target, dan akhirnya
            berdampak negatif pada profit perusahaan.
          </p>
        </Col>
      </Row>

      <Row className="mb-4">
        <Col lg={12} className="text-center">
          <Image
            src="https://perawathomecare.id/wp-content/uploads/2024/09/Mask-group-3-2-1-1024x384.webp"
            alt="Vitamin Infusion"
            fluid
          />
        </Col>
      </Row>

      <Row className="mb-4 justify-content-center">
        <Col lg={6}>
          <h2 className="text-center">
            Berikan Energi dan Semangat Baru <br />
            untuk Tim Anda dengan Layanan <br />
            Infus Vitamin dari Perawat Homecare
          </h2>
        </Col>
      </Row>

      <Row className="mb-4 justify-content-center">
        <Col lg={6}>
          <p className="text-center">
            Tanpa Repot, Tanpa Keluar Kantor! Layanan Infus Vitamin dari Perawat
            Homecare Hadir untuk Anda. Nikmati kemudahan layanan infus vitamin
            di tempat kerja tanpa perlu meninggalkan kantor. Perawat Homecare
            datang langsung ke lokasi Anda dengan layanan cepat, praktis, dan
            efektif, memastikan karyawan Anda kembali bersemangat dan produktif.
            Tim perawat kami telah teruji dan bersertifikat Kemenkes, memberikan
            Anda ketenangan pikiran bahwa kesehatan dan kesejahteraan tim Anda
            berada di tangan yang tepat.
          </p>
        </Col>
      </Row>

      <Row className="mb-4">
        <Col lg={12} className="text-center">
          <Image
            src="https://perawathomecare.id/wp-content/uploads/2024/09/women-have-needle-injection-vitamins-minerals-directly-into-bloodstream-clinic-2-1-1024x384.webp"
            alt="Vitamin Infusion"
            fluid
          />
        </Col>
      </Row>

      <Row className="text-center"></Row>
    </Container>
  );
};

export default SolusiKEsehatanPerusahaan;
