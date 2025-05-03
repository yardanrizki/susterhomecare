// src/components/Header.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import "./navbar.css"; // jika class `btn-animated` kamu simpan di file ini
import WhatsAppButton from "./buttonwhatsaap";

const Header = () => {
  return (
    <header id="header" style={{ height: "100px" }}>
      <Navbar bg="light" expand="lg" className="py-3 shadow-sm">
        <Container className="container-xl d-flex align-items-center justify-content-between">
          {/* Logo */}
          <Navbar.Brand as={Link} href=".." className="me-3">
            <Image
              src="/assets/image.png"
              alt="Logo"
              width={105}
              height={105}
              className="d-inline-block align-top ms-5 gy-4 gx-lg-2"
            />
          </Navbar.Brand>

          {/* Navigation Menu */}
          <Nav className="mx-auto d-none d-lg-flex gap-4 fw-semibold">
            <Nav.Link href="./Vitamin-Boosters">Vitamin Booster</Nav.Link>
            <Nav.Link href="./Beauty-Boosters">Beauty Booster</Nav.Link>
            <Nav.Link href="./Perawat-Medis">Perawat Medis</Nav.Link>
            <Nav.Link href="./corporate-Health-Solution">Corporate Health Solution</Nav.Link>
            <Nav.Link href="#promo">Promo</Nav.Link>
            <Nav.Link href="#blog">Blog</Nav.Link>
          </Nav>

          {/* WhatsApp Button */}
          <WhatsAppButton
            phoneNumber="6285260724560"
            message="Halo Sahabat Perawathomecare � Saya mau pesan Jasa Perawat dong..."
            buttonText="Saya Berminat"
            showText={false}
            showIcon={true}
            className="rounded-pill px-4 py-2 mt-3 fw-semibold text-light d-flex justify-content-end"
            style={{ backgroundColor: "#AA151F" }}
          />

          {/* Mobile Toggle */}
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            className="d-lg-none"
          />
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
