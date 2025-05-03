// File: ContactSection.tsx
"use client";
import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Image from 'next/image';
import WhatsAppButton from './buttonwhatsaap';

const ContactSection: React.FC = () => {
  return (
    <section
      className="contact-section rounded-5"
      style={{ backgroundColor: "#F5D1D3" }}
    >
      <div className="container py-2">
        {/* First Row */}
        <Row className="align-items-center">
          <Col lg={6}>
            <h2 className="text-start">
              Ingin tahu lebih lanjut atau hendak memesan layanan
              Perawathomecare?
            </h2>
            <p className="text-start mt-5 pt-5 mb-3">
              Tekan tombol di bawah untuk informasi selanjutnya
            </p>
            <div className="text-start">
              <WhatsAppButton
                phoneNumber="6282166829882"
                message="Tanya tentang Layanan B"
                buttonText="Saya Berminat"
                showText={true}
                showIcon={true}
                className="rounded-pill px-3 py-1 mt-3 fw-semibold text-light d-inline-block "
                style={{ backgroundColor: "#AA151F" }}
              />
            </div>
          </Col>
          <Col lg={6}>
            <div className="image-container text-center">
              <Image
                src="https://perawathomecare.id/wp-content/uploads/2023/09/AnyConv.com__wepik-export-20230815094428filt-1-1.webp"
                alt="Layanan Perawathomecare"
                width={421}
                height={380}
                layout="intrinsic"
                loading="lazy"
              />
            </div>
          </Col>
        </Row>
      </div>

      <style jsx>{`
        .contact-section {
          padding: 0 15px;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
        }

        .spacer {
          height: 30px;
        }

        .image-container img {
          max-width: 100%;
          height: auto;
          border-radius: 8px;
        }

        h2 {
          font-size: 1.75rem;
          font-weight: bold;
          margin-bottom: 1rem;
        }

        p {
          font-size: 1rem;
          color: #555;
          margin-bottom: 2rem;
        }

        .text-center {
          text-align: center;
        }
      `}</style>
    </section>
  );
};

export default ContactSection;
