"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "bootstrap/dist/css/bootstrap.min.css";
import Image from "next/image";

const testimonialImages = [
  "https://perawathomecare.id/wp-content/uploads/2024/12/Gambar-testimoni-JKT48-Feni-1.webp",
  "https://perawathomecare.id/wp-content/uploads/2024/12/Gambar-Testimoni-JKT48-Zee-2.webp",
  "https://perawathomecare.id/wp-content/uploads/2024/12/Gambar-Testimoni-JKT48-Aurellia-1.webp",
  "https://perawathomecare.id/wp-content/uploads/2024/12/Gambar-testimoni-JKT48-Jessi-1.webp",
  "https://perawathomecare.id/wp-content/uploads/2024/12/Gambar-testimoni-JKT48-Raisha-1.webp",
  "https://perawathomecare.id/wp-content/uploads/2024/12/Gambar-testimoni-Sundari-Indah-1.webp",
  "https://perawathomecare.id/wp-content/uploads/2024/12/Gambar-Testimoni-JKT48-Aurellia-1.webp",
  "https://perawathomecare.id/wp-content/uploads/2024/12/Gambar-testimoni-JKT48-Feni-1.webp",
  "https://perawathomecare.id/wp-content/uploads/2024/12/Gambar-Testimoni-JKT48-Zee-2.webp",
  "https://perawathomecare.id/wp-content/uploads/2024/12/Gambar-testimoni-JKT48-Feni-1.webp", // CTA atau duplikat
];

const TestimonialSlider = () => {
  return (
    <section className="container my-5">
      <div className="text-center mb-4">
        <h3>
          <strong>
            Kata Mereka Tentang{" "}
            <span className="text-danger">Perawathomecare</span>
          </strong>
        </h3>
        <p>
          Pengalaman Penuh Empati dari Pasien dan Keluarga Terhadap Perawat
          Homecare
        </p>
      </div>

      <Swiper
        modules={[Pagination]}
        loop={true}
        spaceBetween={20}
        grabCursor={true}
        pagination={{ clickable: true }}
        breakpoints={{
          0: {
            slidesPerView: 1,
            slidesPerGroup: 1,
          },
          768: {
            slidesPerView: 2,
            slidesPerGroup: 2,
          },
          992: {
            slidesPerView: 3,
            slidesPerGroup: 3,
          },
        }}
      >
        {testimonialImages.map((src, index) => (
          <SwiperSlide
            key={index}
            className="d-flex justify-content-center text-center"
          >
            <Image
              src={src}
              className="img-fluid rounded-4"
              width = {308} 
              height = {203}             
              alt={`Testimoni ${index + 1}`}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default TestimonialSlider;
