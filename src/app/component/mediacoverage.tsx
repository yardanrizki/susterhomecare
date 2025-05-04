"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import Image from "next/image";
import "./componentHome/swiper.css";

const images = [
  "/assets/media/Gambar-1-1.webp",
  "/assets/media/Gambar-2-1.webp",
  "/assets/media/Gambar-3-1.webp",
  "/assets/media/Gambar-4-1.webp",
  "/assets/media/Gambar-5-1.webp",
  "/assets/media/gambar-6-1.webp",
  "/assets/media/Gambar-7-1.webp",
];

export default function MediaCoverage() {
  return (
    <section id="clients" className="py-10 pb-lg-4">
      <div className="text-center mb-4 mt-4 pb-3">
        <h2
          className="text-[45px] leading-[45px] fw-bold"
          style={{ fontFamily: "sans-serif", fontSize: "45px" }}
        >
          <span className="text-black">Telah</span>{" "}
          <span className="text-danger">Diliput Oleh</span>
        </h2>
      </div>
      <div className="container mx-auto my-3 mt-3">
        <Swiper
          modules={[Autoplay]}
          loop={true}
          speed={600}
          autoplay={{ delay: 5000 }}
          breakpoints={{
            320: { slidesPerView: 1, spaceBetween: 20 },
            480: { slidesPerView: 2, spaceBetween: 30 },
            640: { slidesPerView: 3, spaceBetween: 40 },
            768: { slidesPerView: 4, spaceBetween: 50 }, // Tampilkan lebih banyak pada layar lebih besar
          }}
        >
          {images.map((src, index) => (
            <SwiperSlide
              key={index}
              className="flex justify-center items-center"
            >
              <Image
                src={src}
                alt={`Media ${index + 1}`}
                width={200}
                height={50}
                className="img-fluid" // Gunakan kelas bootstrap img-fluid agar gambar responsif
                style={{ objectFit: "contain", width: "100%" }} // Pastikan gambar tidak terpotong dan responsif
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <div
          className="swiper-pagination"
          style={{
            marginTop: "2rem",
            position: "relative",
            zIndex: 10,
            textAlign: "center",
          }}
        ></div>
      </div>
    </section>
  );
}
