"use client";
import React from "react";
import { Row, Col, Container, Card, Image } from "react-bootstrap"; // Ensure these are correctly imported

const ProfileSection = () => {
  const profiles = [
    {
      name: "Nurdiawati",
      age: "26 Tahun",
      expertise: ["Perinatal/NICU", "Intensif"],
      experience: "4 Tahun",
      education: "D3 Keperawatan",
      area: "JABODETABEK",
      imageUrl:
        "https://perawathomecare.id/wp-content/uploads/2023/10/Frame-3420-1.webp",
    },
    {
      name: "Muhammad Nashirudin",
      age: "33 Tahun",
      expertise: ["Keperawatan Medical Bedah"],
      experience: "5 Tahun",
      education: "Profesi Ners",
      area: "Bekasi",
      imageUrl:
        "https://perawathomecare.id/wp-content/uploads/2023/10/Frame-3420-_2_-_2_.webp",
    },
    {
      name: "Febrian Saputra",
      age: "29 Tahun",
      expertise: ["Pemasangan NGT", "Kateter Folley & Pemasangan Infus"],
      experience: "2 Tahun",
      education: "Profesi Ners",
      area: "Jakarta",
      imageUrl:
        "https://perawathomecare.id/wp-content/uploads/2023/10/Frame-3420-_3_-_1_.webp",
    },
  ];

  return (
    <section className="profile-section">
      <Container>
        <Row className="text-center mb-4">
          <Col>
            <h2>
              Profil <span style={{ color: "#cc1925" }}>Perawat Medis</span>
            </h2>
          </Col>
        </Row>

        <Row>
          {profiles.map((profile, index) => (
            <Col key={index} sm={12} md={4} className="mb-4">
              <Card className="text-center">
                <Card.Body>
                  <Image
                    src={profile.imageUrl}
                    alt={profile.name}
                    fluid
                    rounded
                    className="mb-3"
                  />
                  <Card.Title>{profile.name}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    {profile.age}
                  </Card.Subtitle>
                  <Card.Text>
                    <strong>Expertise:</strong>
                    <ul>
                      {profile.expertise.map((expert, idx) => (
                        <li key={idx}>{expert}</li>
                      ))}
                    </ul>
                  </Card.Text>
                  <Card.Text>
                    <strong>Pengalaman Bekerja:</strong> {profile.experience}
                  </Card.Text>
                  <Card.Text>
                    <strong>Lulusan:</strong> {profile.education}
                  </Card.Text>
                  <Card.Text>
                    <strong>Area Layanan:</strong> {profile.area}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default ProfileSection;
