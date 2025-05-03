"use client";

import { useState } from "react";
import { Collapse } from "react-bootstrap";

const LangkahData = [
  {
    title: "Langkah 1",
    subtitle: "Konsultasi Perawathomecare Gratis via WhatsApp",
    content:
      "Dengan mengisi formulir pendaftaran kurang lebih 10-15 menit agar kami mengetahui kondisi pasien dan bagaimana kami dapat membantu anda.",
  },
  {
    title: "Langkah 2",
    subtitle: "Konfirmasi Nama Perawat Yang Akan Datang",
    content:
      "Setelah anda mengisi tanggal dan jam visit Perawathomecare pada formulir pendaftaran pasien, mohon menunggu sekitar 5-10 menit untuk mendapat konfirmasi nama Perawat yang akan melakukan visit ke rumah Anda.",
  },
  {
    title: "Langkah 3",
    subtitle: "Konfirmasi Pemesanan Visit Perawathomecare",
    content:
      "Konsultasi dengan tim Perawathomecare Customer Care via Whatsapp dan mengisi formulir pendaftaran selama kurang lebih 10-15 menit agar kami mengetahui kondisi pasien dan bagaimana kami dapat membantu anda.",
  },
];

export default function LangkahPemesanan() {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <div className="container py-5">
      <div className="row">
        {LangkahData.map((item, index) => {
          const isOpen = openItems.includes(index);
          return (
            <div className="col-lg-4 mb-4" key={index}>
              <div className="text-center langkah-card">
                <h3 className="mb-3">{item.title}</h3>

                {/* NEW wrapper supaya subtitle, icon, content, garis rapi */}
                <div className="content-wrapper">
                  <button
                    className="accordion-button-custom"
                    onClick={() => toggleItem(index)}
                  >
                    <span className="subtitle">{item.subtitle}</span>
                    <div className={`icon-box ${isOpen ? "open" : ""}`}></div>
                  </button>
                  <Collapse in={isOpen}>
                    <div className="j">
                      <div className="content-text">{item.content}</div>
                    </div>
                  </Collapse>
                  <div className="custom-line" />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <style jsx>{`
        .container {
          padding: 0;
        }

        .row {
          margin-left: 0;
          margin-right: 0;
        }

        .langkah-card {
          padding: 0 20px;
        }

        .content-wrapper {
          width: 100%;
          margin: 0 auto; /* Memastikan konten berada di tengah secara horizontal */
          display: flex;
          flex-direction: column;
          justify-content: flex-start; /* Menjaga elemen tetap di atas */
          align-items: center; /* Membuat konten berada di tengah secara horizontal */
        }

        .col-md-4 {
          padding-left: 10px;
          padding-right: 10px;
          margin-bottom: 15px;
        }

        .accordion-item {
          margin-bottom: 5px;
        }

        .accordion-button-custom {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          width: 100%;
          background: none;
          border: none;
          font-weight: bold;
          font-size: 16px;
          color: black;
          cursor: pointer;
          padding: 10px 0;
        }

        .subtitle {
          color: black;
          font-size: 16px;
          text-align: center; /* Menjaga subtitle di tengah */
          max-width: 250px;
        }

        .icon-box {
          width: 20px;
          height: 20px;
          background-color: black;
          position: relative;
          transition: transform 0.2s ease-in-out;
          border-radius: 2px;
          text-align: center;
        }

        .icon-box::after {
          content: "";
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 0;
          height: 0;
          border-left: 4px solid transparent;
          border-right: 4px solid transparent;
          border-top: 5px solid white;
        }

        .icon-box.open::after {
          border-top: none;
          border-bottom: 5px solid white;
          border-left: 4px solid transparent;
          border-right: 4px solid transparent;
        }

        .custom-line {
          margin: 20px auto 0;
          width: 100%;
          height: 3px;
          background-color: black;
        }

        /* Content-text perlu diatur untuk tetap rata kiri dan center container */
        .content-text {
          color: #555;
          font-size: 14px;
          text-align: left; /* Teks tetap rata kiri */
          margin-top: 15px;
          width: 90%; /* Menjaga lebar konten */
          padding-bottom: 10px;
          display: block; /* Memastikan konten disusun secara block */
          min-height: 150px; /* Menjaga tinggi konten */
          margin-left: auto; /* Membuat konten berada di tengah secara horizontal */
          margin-right: auto; /* Membuat konten berada di tengah secara horizontal */
        }
      `}</style>
    </div>
  );
}
