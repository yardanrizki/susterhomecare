import React from "react";
import { Card} from "react-bootstrap";

interface VitaminBoosterCardProps {
  data: {
    title: string;
    subtitle: string;
    image: string;
    benefits: string[];
    oldPrice: string;
    newPrice: string;
    checklistColor: string;
  };
  index: number;
}

const VitaminBoosterCard: React.FC<VitaminBoosterCardProps> = ({ data, index }) => {
  if (!data) return null; // Mencegah error jika data undefined

  const { title, subtitle, image, benefits, oldPrice, newPrice, checklistColor } = data;
  const isBestSeller = title === "Super Move Booster";

  return (
    <Card className="border-0 shadow-lg h-100">
      <div className="position-relative">
        <Card.Img variant="top" src={image} alt={title} />
        {isBestSeller && (
          <span
            style={{
              position: "absolute",
              top: "10px",
              right: "10px",
              backgroundColor: "#ff0000",
              color: "white",
              padding: "5px 10px",
              borderRadius: "5px",
              fontSize: "0.75rem",
              fontWeight: "bold",
            }}
          >
            Best Seller
          </span>
        )}
      </div>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Subtitle className="mb-3 text-muted">{subtitle}</Card.Subtitle>
        <ul className="ps-3">
          {benefits.map((benefit, idx) => (
            <li key={idx} style={{ color: checklistColor }}>
              {benefit}
            </li>
          ))}
        </ul>
        <p className="text-muted text-decoration-line-through mb-0">{oldPrice}</p>
        <h5 className="text-danger">{newPrice}</h5>
      </Card.Body>
    </Card>
  );
};


export default VitaminBoosterCard;
