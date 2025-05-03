"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import "./calltoaction.css";

const CallToActionSection = () => {
  useEffect(() => {
    import("@srexi/purecounterjs").then((module) => {
      new module.default();
    });

    const adjustBackgroundZoom = () => {
      const section = document.getElementById("ctaSection");
      const img = section?.querySelector("img") as HTMLImageElement;

      if (img) {
        img.style.objectFit = "cover";
        img.style.objectPosition = "top";
      }
    };

    window.addEventListener("resize", adjustBackgroundZoom);
    window.addEventListener("load", adjustBackgroundZoom);

    return () => {
      window.removeEventListener("resize", adjustBackgroundZoom);
      window.removeEventListener("load", adjustBackgroundZoom);
    };
  }, []);

  return (
    <section
      className="call-to-action bebas-section position-relative"
      id="ctaSection"
    >
      <Image
        src="/assets/image/BACGROUND MERAH.png"
        alt="Background Image"
        fill
        priority
        style={{
          objectFit: "cover",
          objectPosition: "top",
          zIndex: -1,
        }}
      />

      <div className="content container-fluid h-100 text-white py-5 position-relative">
        <div className="row justify-content-center">
          <div className="col-12 text-center">
            <h2 style={{ fontSize: "45px" }} className="fw-bold">
              Mengapa Harus Percaya
              <br />
              Kepada Kami
            </h2>
            <p style={{ color: "#F5F5F5" }}>
              Perawathomecare berdiri di bawah naungan PT. Revolusi Kesehatan
              Indonesia mempunyai beberapa brand kesehatan yaitu Fisiohome,
              Wicaraku, PerawatHomecare, dan Pusat Okupasi.
            </p>
          </div>
        </div>

        <div className="row text-center my-4">
          <div className="col-md-6">
            <h3>
              +
              <span
                data-purecounter-start="0"
                data-purecounter-end="10000"
                data-purecounter-duration="1"
                className="purecounter"
              ></span>{" "}
              Pasien
            </h3>
          </div>
          <div className="col-md-6">
            <h3>
              +
              <span
                data-purecounter-start="0"
                data-purecounter-end="13"
                data-purecounter-duration="1"
                className="purecounter"
              ></span>{" "}
              Kota
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToActionSection;
