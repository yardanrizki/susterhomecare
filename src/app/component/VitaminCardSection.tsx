import Image from "next/image";
import React from "react";
import { Col } from "react-bootstrap";
import { Container, Row } from "react-bootstrap";

interface VitaminItem {
  title: string;
  subtitle: string;
  image: string;
  benefits: string[];
  oldPrice: string;
  newPrice: string;
  checklistColor: string;
  bestSeller?: boolean;
  badgePosition?: "left" | "right";
}

const VitaminCardSection: React.FC<{
  data: VitaminItem;
  badgePosition?: "left" | "right";
}> = ({ data, badgePosition = "right" }) => {
  return (
    <section className="my-5" style={{ padding: "20px 0" }}>
      <Container>
        {/* Judul & Gambar */}
        <Row className="justify-content-center g-0">
          <Col
            md={7}
            className="px-4 py-5"
            style={{
              width: "370px",
              backgroundColor: "#660C12",
              borderBottomRightRadius: "80px",
            }}
          >
            <h2
              style={{
                color: "#fff",
                fontSize: "26px",
                fontFamily: "sans-serif",
              }}
              className="fw-bolder"
            >
              {data.title}
            </h2>
            <h2
              style={{
                color: "#fff",
                fontSize: "32px",
                fontFamily: "sans-serif",
              }}
              className="fw-semibold"
            >
              {data.subtitle}
            </h2>
          </Col>
          {/* Judul */}
          
          {/* Gambar + Badge */}
          <div className="col-md-3 position-relative d-flex justify-content-center align-items-center">
            <Image
              src={data.image}
              alt={data.title}
              width={250}
              height={250}
              className="img-fluid image position-relative z-1"
            />
            {data.bestSeller && (
              <Image
                src="https://perawathomecare.id/wp-content/uploads/2024/08/Group-920-1.webp"
                alt="Best Seller"
                width={150}
                height={150}
                className="img-fluid position-absolute z-2"
                style={{
                  ...(badgePosition === "left"
                    ? {
                        top: "-7%",
                        left: "60%",
                        margin: "10px",
                      }
                    : {
                        top: "50%",
                        right: "-50px",
                        transform: "translateY(-50%)",
                      }),
                  width: "150px",
                }}
              />
            )}
          </div>
        </Row>

        {/* Manfaat dan Harga */}
        <div className="row justify-content-center mt-4">
          {/* Manfaat */}
          <div className="col-md-4" style={{ marginLeft: "5%" }}>
            <p className="fw-bold mb-3" style={{ color: "#2f2f2f" }}>
              Cocok buat kamu yang:
            </p>
            <ul className="list-unstyled mb-4">
              {data.benefits.map((benefit, index) => (
                <li key={index} className="mb-2">
                  <i
                    className="bi bi-check-circle-fill me-2"
                    style={{ color: data.checklistColor }}
                  ></i>
                  {benefit}
                </li>
              ))}
            </ul>
          </div>

          {/* Harga */}
          <div className="col-md-3 p-3">
            <h3 className="fw-bold text-decoration-line-through text-start">
              {data.oldPrice}
            </h3>
            <h2 className="fw-bold text-start">{data.newPrice}</h2>
          </div>
        </div>

        {/* Catatan */}
        <div className="text-center col-lg-12">
          <p>
            *Gambar ini merupakan ilustrasi dan dapat berbeda dari produk yang
            sebenarnya
          </p>
        </div>
      </Container>
    </section>
  );
};

export default VitaminCardSection;
