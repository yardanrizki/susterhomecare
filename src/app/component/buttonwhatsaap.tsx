import { FaWhatsapp } from "react-icons/fa"; // Menggunakan ikon WhatsApp dari React Icons
import Button from "react-bootstrap/Button";

function WhatsAppButton({
  phoneNumber,
  message,
  buttonText,
  showText = true, // Menentukan apakah teks akan ditampilkan
  showIcon = true, // Menentukan apakah ikon WhatsApp akan ditampilkan
  style = {}, // Custom style jika ada
  className = "", // Custom className jika ada
}) {
  const link = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <Button
      variant="success"
      href={link}
      target="_blank"
      className={className}
      style={{ display: "flex", alignItems: "center", ...style }} // Styling default dan custom
    >
      {showIcon && <FaWhatsapp style={{ marginRight: "8px" }} />}{" "}
      {/* Menampilkan ikon hanya jika showIcon=true */}
      {showText && buttonText} {/* Menampilkan teks hanya jika showText=true */}
    </Button>
  );
}

export default WhatsAppButton;
