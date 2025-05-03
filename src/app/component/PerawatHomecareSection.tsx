"use client";

import React from "react";
import CardSwiper from "./componentHome/cardswiper";
import FeatureList from "./featurelist";

const PerawatHomecareSection = () => {
  return (
    <section>
      {/* Judul Atas */}
      <div className="text-center mb-5 pt-5">
        <h2
          style={{
            fontFamily: "sans-serif",
            fontSize: "45px",
            lineHeight: "58.5px",
          }}
        >
          <span style={{ color: "#0a0a0a" }}>Apa Itu</span>{" "}
          <span style={{ color: "#cc1925" }}>Perawathomecare?</span>
        </h2>
        <p className="mt-3">
          Perawathomecare adalah layanan booster vitamin, booster kecantikan dan
          perawat medis, yang siap{" "}
          <span style={{ color: "#cc1925" }}>
            melakukan kunjungan ke rumah para pasien
          </span>{" "}
          yang membutuhkan sehingga kini calon pasien{" "}
          <span style={{ color: "#cc1925" }}>tidak perlu lagi lelah</span>{" "}
          <span style={{ color: "#cc1925" }}>mengantre</span> di klinik ataupun
          rumah sakit.
        </p>
      </div>

      {/* Swiper Card */}
      <CardSwiper />

      {/* Section Kenapa Harus */}
      <div className="text-center my-3">
        <h2
          className="semi-bold"
          style={{ fontFamily: "sans-serif", fontSize: 45 }}
        >
          <span style={{ color: "#0a0a0a" }}>Kenapa Harus</span>
          <br />
          <span style={{ color: "#cc1925" }}>Perawathomecare?</span>
        </h2>
        <p>Karena Perawathomecare telah hadir untuk Anda!</p>
      </div>

      {/* Feature List */}
      <FeatureList />
    </section>
  );
};

export default PerawatHomecareSection;
