"use client";
import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./footer.css";

const Footer = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email }),
      });
      const data = await res.json();
      alert(data.message);
    } catch (err) {
      console.error("Error submitting form:", err);
      alert("Gagal mengirim. Coba lagi nanti.");
    }
  };

  return (
    <footer
      id="colophon"
      role="contentinfo"
      className="text-white"
      style={{ backgroundColor: "#660C12" }}
    >
      <Container fluid className="footer-section py-5">
        <Container>
          <Row>
            <Col lg={4} md={12}>
              <h5 className="mb-3">INFORMASI KAMI</h5>
              <div className="d-flex align-items-center gap-2 mb-2">
                <p className="mb-0 fs-6">+62 856-5790-1160</p>
                <a
                  href="tel:+6285657901160"
                  className="text-white text-decoration-none"
                >
                  | Telepon klik di sini
                </a>
              </div>
              <div className="d-flex align-items-center gap-3 mb-3">
                <p className="mb-0">Senin - Minggu</p>
                <p className="mb-0">| Rp 458.000</p>
              </div>

              <div className="social-icons d-flex flex-column gap-2">
                <a
                  href="https://wa.me/6289503800997?text=Halo%20Sahabat%20Perawathomecare%20%EF%BF%BD%20Saya%20mau%20pesan%20Jasa%20Perawat%C2%A0dong..."
                  target="_blank"
                  className="text-white text-decoration-none"
                >
                  <i className="bi bi-whatsapp me-2"></i> +62 895-03800-997
                </a>
                <a
                  href="mailto:info@perawathomecare.id"
                  className="text-white text-decoration-none"
                >
                  <i className="bi bi-envelope me-2"></i>{" "}
                  info@perawathomecare.id
                </a>
                <a
                  href="https://www.instagram.com/perawathomecareid/"
                  target="_blank"
                  className="text-white text-decoration-none"
                >
                  <i className="bi bi-instagram me-2"></i> @perawathomecareid
                </a>
                <a
                  href="https://youtube.com/@perawathomecareid"
                  target="_blank"
                  className="text-white text-decoration-none"
                >
                  <i className="bi bi-youtube me-2"></i> YouTube Channel
                </a>
              </div>

              <p className="mt-3 small">
                <strong>Alamat:</strong>
                <br />
                Menara 165, Jl. TB Simatupang, RT.3/RW.3, Cilandak Tim., Ps.
                Minggu, Kota Jakarta Selatan, DKI Jakarta 12560, Indonesia
              </p>
            </Col>

            <Col lg={2} md={4}>
              <h5 className="mb-3">HALAMAN KAMI</h5>
              <div className="d-flex flex-column gap-2">
                <a
                  href="https://perawathomecare.id/"
                  target="_blank"
                  className="text-white text-decoration-none"
                >
                  Home
                </a>
                <a
                  href="https://perawathomecare.id/vitamin-booster/"
                  target="_blank"
                  className="text-white text-decoration-none"
                >
                  Vitamin Booster
                </a>
                <a
                  href="https://perawathomecare.id/beauty-booster/"
                  target="_blank"
                  className="text-white text-decoration-none"
                >
                  Beauty Booster
                </a>
                <a
                  href="https://perawathomecare.id/perawat-medis/"
                  target="_blank"
                  className="text-white text-decoration-none"
                >
                  Perawat Medis
                </a>
                <a
                  href="https://perawathomecare.id/corporate-health-solution/"
                  target="_blank"
                  className="text-white text-decoration-none"
                >
                  Corporate Health
                </a>
                <a
                  href="https://perawathomecare.id/contact-us/"
                  target="_blank"
                  className="text-white text-decoration-none"
                >
                  Contact Us
                </a>
              </div>
            </Col>
            <Col lg={3} md={4}>
              <h5 className="mb-3">IKUTI KAMI</h5>
              <div className="d-flex flex-wrap gap-3">
                <a
                  href="https://www.facebook.com/profile.php?id=100095077326746"
                  target="_blank"
                  className="social-square"
                >
                  <i className="bi bi-facebook"></i>
                </a>
                <a
                  href="https://www.instagram.com/perawathomecareid/"
                  target="_blank"
                  className="social-square"
                >
                  <i className="bi bi-instagram"></i>
                </a>
                <a
                  href="https://www.linkedin.com/company/perawathomecareid"
                  target="_blank"
                  className="social-square"
                >
                  <i className="bi bi-linkedin"></i>
                </a>
                <a
                  href="https://youtube.com/@perawathomecareid"
                  target="_blank"
                  className="social-square"
                >
                  <i className="bi bi-youtube"></i>
                </a>
              </div>
            </Col>
            <Col lg={3} md={12}>
              <h5>BULETIN MINGGUAN</h5>
              <p>
                Dapatkan info promo & layanan terbaru dari kami langsung di
                email kamu.
              </p>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Nama Lengkap"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email kamu"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <button type="submit" className="btn btn-primary w-100">
                  Langganan
                </button>
              </form>
            </Col>
          </Row>
        </Container>
      </Container>
    </footer>
  );
};

export default Footer;
