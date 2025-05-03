"use client";

import React from "react";
import { Container, Card } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "../componentHome/swiper.css";
const cardDataPErawatMedis = [
  {
    title: "Terpercaya",
    desc: "Mengasuh bisa menjadi perjalanan yang menuntut fisik dan emosional, tetapi ingatlah bahawa anda tidak sendirian. Dengan menggunakan jasa Perawat Homecare. Mari ambil langkah ini.",
    img: "https://perawathomecare.id/wp-content/uploads/2023/09/AnyConv.com__Frame-3407-1.webp",
  },
  {
    title: "Membantu Dalam Banyak Hal",
    desc: "Perawat Homecare bisa membantu dan mengambil banyak peran. Menjadi asisten dokter pribadi, perawat pribadi, bendahara medis, teman berbicara pasien dan menjadi anggota keluarga sekaligus",
    img: "https://perawathomecare.id/wp-content/uploads/2023/09/AnyConv.com__frame-4-1-1.webp",
  },
  {
    title: "Profesional dan terlatih",
    desc: "Jangan pernah Anda merawat orang sakit dengan tenaga yang bukan professional. Hal ini dapat membuat dua orang yang Anda cintai menjadi stres.",
    img: "https://perawathomecare.id/wp-content/uploads/2023/09/profesional-dan-terlatih.webp",
  },
];

const CardSwiperPerawatMedis = () => {
  return (
    <Container>
      <div className="card-swiper-wrapper">
        <Swiper
          modules={[Pagination, Autoplay]}
          loop
          autoplay={{ delay: 3000 }}
          slidesPerView={3}
          spaceBetween={30}
          breakpoints={{
            0: { slidesPerView: 1 },
            576: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
          }}
          className="card-swiper"
          
        >
          {cardDataPErawatMedis.concat(cardDataPErawatMedis).map((item, idx) => (
            <SwiperSlide key={idx} style={{ height: 500 }} className="mt-5">
              <Card className="shadow rounded-4 p-4 h-100">
                <Card.Img variant="top" src={item.img} alt={`Card ${idx + 1}`} />
                <Card.Body>
                  <Card.Title className="fw-bolder">{item.title}</Card.Title>
                  <Card.Text>{item.desc}</Card.Text>
                </Card.Body>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </Container>
  );
};

export default CardSwiperPerawatMedis;
