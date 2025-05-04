import { FaWhatsapp } from "react-icons/fa"; // Menggunakan ikon WhatsApp dari React Icons
import Button from "react-bootstrap/Button";
import React from "react";

type WhatsAppButtonProps = {
  phoneNumber: string;
  message: string;
  buttonText: string;
  showText?: boolean;
  showIcon?: boolean;
  style?: React.CSSProperties;
  className?: string;
};

function WhatsAppButton({
  phoneNumber,
  message,
  buttonText,
  showText = true,
  showIcon = true,
  style = {},
  className = "",
}: WhatsAppButtonProps) {
  const link = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <Button
      variant="success"
      href={link}
      target="_blank"
      className={className}
      style={{ display: "flex", alignItems: "center", ...style }}
    >
      {showIcon && (
        <FaWhatsapp
          style={{
            marginRight: showText ? "8px" : "0", // Menambahkan margin hanya jika showText = true
            marginBottom: "3px", // Menyesuaikan posisi vertikal ikon
          }}
        />
      )}
      {showText && buttonText}
    </Button>
  );
}

export default WhatsAppButton;
