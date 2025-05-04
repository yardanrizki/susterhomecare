"use client";

import Link from "next/link";
import { Navbar, Nav, Container, Offcanvas } from "react-bootstrap";
import "./navbar.css";
import WhatsAppButton from "./buttonwhatsaap";
import Image from "next/image";

const Header = () => {
  return (
    <header id="header" className="sticky-top bg-white shadow-sm">
      <Navbar expand="lg" className="py-2" bg="light">
        <Container
          className="px-4 px-md-5 mx-auto"
          style={{ maxWidth: "1280px" }}
        >
          {" "}
          {/* Tambah sedikit padding */}
          {/* Logo */}
          <Navbar.Brand
            as={Link}
            href="/"
            className="d-flex align-items-center"
          >
            <Image
              src="/assets/image/logo.png"
              alt="Logo"
              width={65}
              height={65}
              className="d-inline-block align-top"
              priority
            />
          </Navbar.Brand>
          {/* Tombol WA & Collapse untuk Mobile */}
          <div className="d-flex align-items-center gap-4 d-lg-none">
            <WhatsAppButton
              phoneNumber="6285260724560"
              message="Halo Sahabat Perawathomecare, Saya mau pesan Jasa Perawat dong..."
              showText={false}
              showIcon={true}
              className="whatsapp-button"
              style={{
                backgroundColor: "#AA151F",
                width: "45px",
                height: "45px",
                borderRadius: "30%",
              }}
              buttonText=""
            />

            <Navbar.Toggle aria-controls="offcanvasNavbar" />
          </div>
          {/* Offcanvas Menu */}
          <Navbar.Offcanvas
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel">Menu</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="flex-grow-1 justify-content-center gap-2 fw-semibold">
                <Nav.Link as={Link} href="/Vitamin-Boosters">
                  Vitamin Booster
                </Nav.Link>
                <Nav.Link as={Link} href="/Beauty-Boosters">
                  Beauty Booster
                </Nav.Link>
                <Nav.Link as={Link} href="/Perawat-Medis">
                  Perawat Medis
                </Nav.Link>
                <Nav.Link as={Link} href="/corporate-Health-Solution">
                  Corporate Health Solution
                </Nav.Link>
                <Nav.Link href="#promo">Promo</Nav.Link>
                <Nav.Link href="#blog">Blog</Nav.Link>
              </Nav>

              {/* Tombol WhatsApp di Offcanvas (opsional bisa dihapus karena sudah ada di atas) */}
              {/* <div className="d-lg-none mt-3 text-center">
                <WhatsAppButton ... />
              </div> */}
            </Offcanvas.Body>
          </Navbar.Offcanvas>
          {/* Tombol WA Desktop */}
          <div className="d-none d-lg-block ms-2">
            <WhatsAppButton
              phoneNumber="6285260724560"
              message="Halo Sahabat Perawathomecare, Saya mau pesan Jasa Perawat dong..."
              showText={false}
              showIcon={true}
              className="whatsapp-button"
              style={{
                backgroundColor: "#AA151F",
                width: "45px",
                height: "45px",
                borderRadius: "30%",
              }}
              buttonText=""
            />
          </div>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
