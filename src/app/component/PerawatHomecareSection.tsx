"use client";

import React from "react";
import CardSwiper from "./componentHome/cardswiper";
import FeatureList from "./featurelist";

const PerawatHomecareSection = () => {
  return (
    <section>
      {/* Judul Atas */}

      {/* Swiper Card */}
      <CardSwiper />

      {/* Section Kenapa Harus */}
      <div className="col-12 text-center">
        <h2 className="display-6  fw-bold">
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
