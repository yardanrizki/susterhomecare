"use client"; // untuk Next.js app router

import { Container, Row, Col } from "react-bootstrap";
import { FaClock, FaUserFriends } from "react-icons/fa"; // Pakai react-icons
import React from "react";

const packagesData = [
  {
    title: "Paket Vitamin Couple",
    subtitle: "(2 orang)",
    bgColor: "#387AEC",
    items: [
      { name: "Daily Fit Booster", price: "Rp. 489.000" },
      { name: "Daily Fit Booster", price: "Rp. 489.000" },
      { name: "Daily Fit Booster", price: "Rp. 489.000" },
      { name: "Daily Fit Booster", price: "Rp. 489.000" },
      { name: "Daily Fit Booster", price: "Rp. 489.000" },
    ],
    details: [
      { icon: <FaClock />, text: "45 - 60 menit" },
      { icon: <FaUserFriends />, text: "2 Orang" },
    ],
  },
  {
    title: "Paket Vitamin Family",
    subtitle: "(3 - 5 orang)",
    bgColor: "#C91722",
    items: [
      { name: "Daily Fit Booster", price: "Rp. 489.000" },
      { name: "Daily Fit Booster", price: "Rp. 489.000" },
      { name: "Daily Fit Booster", price: "Rp. 489.000" },
      { name: "Daily Fit Booster", price: "Rp. 489.000" },
      { name: "Daily Fit Booster", price: "Rp. 489.000" },
    ],
    details: [
      { icon: <FaClock />, text: "45 - 60 menit" },
      { icon: <FaUserFriends />, text: "3-5 Orang" },
    ],
  },
  {
    title: "Paket Vitamin Group",
    subtitle: "(6 - 10 orang)",
    bgColor: "#E3813E",
    items: [
      { name: "Daily Fit Booster", price: "Rp. 489.000" },
      { name: "Daily Fit Booster", price: "Rp. 489.000" },
      { name: "Daily Fit Booster", price: "Rp. 489.000" },
      { name: "Daily Fit Booster", price: "Rp. 489.000" },
      { name: "Daily Fit Booster", price: "Rp. 489.000" },
    ],
    details: [
      { icon: <FaClock />, text: "45 - 60 menit" },
      { icon: <FaUserFriends />, text: "6-10 Orang" },
    ],
  },
];

function VitaminPackagesSection() {
  return (
    <section className="justify-content-center text-center py-5">
      <h2>Jenis Infus & Suntik Vitamin</h2>
      <p className="mb-5">Pilih Jenis Vitamin Yang Anda Cari</p>

      <Container>
        <Row className="justify-content-center g-4">
          {packagesData.map((pkg, idx) => (
            <Col key={idx} md={3}>
              <div
                className="text-center text-white rounded-5 py-4 px-3"
                style={{ backgroundColor: pkg.bgColor }}
              >
                <h2 className="fs-5" style={{ fontSize: "45px" }}>
                  {pkg.title}
                </h2>
                <p>{pkg.subtitle}</p>
              </div>

              <div className="px-2">
                {pkg.items.map((item, itemIdx) => (
                  <div
                    key={itemIdx}
                    className="border-bottom border-dark mb-2 pb-2"
                  >
                    <p className="m-0">{item.name}</p>
                    <p className="fw-bold m-0">{item.price}</p>
                  </div>
                ))}

                <div className="mt-3">
                  {pkg.details.map((detail, detailIdx) => (
                    <p
                      key={detailIdx}
                      className="d-flex align-items-center justify-content-center text-light rounded-2 py-1 mb-2"
                      style={{ backgroundColor: pkg.bgColor }}
                    >
                      <span className="me-2">{detail.icon}</span> {detail.text}
                    </p>
                  ))}
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default VitaminPackagesSection;
