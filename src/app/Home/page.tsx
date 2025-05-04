// src/app/page.tsx atau src/app/home/page.tsx

import CustomAccordion from "../component/accordion";
import CallToActionSection from "../component/CallToActionSection";
import ContactSection from "../component/ContactSection";
import FeatureCardSection from "../component/componentHome/FeatureCardSection";
import Hero from "../component/hero";
import LangkahPemesanan from "../component/LangkahPemesanan";
import MapComponent from "../component/mapindonesia";
import MediaCoverage from "../component/mediacoverage";
import SlideComponent from "../component/mitra";
import PartnershipSection from "../component/PartnershipSection";
import PaymentSection from "../component/pembayaran";
import PerawatHomecareSection from "../component/PerawatHomecareSection";
import TestimonialSlider from "../component/TestimonialSlider";
import VitaminCardSection from "../component/VitaminCardSection";
import { vitaminData } from "../data/VitaminData";
import "../style/globals.css"; 
import "leaflet/dist/leaflet.css";



export default function HomePage() {
  return (
    <>
      <Hero />
      {/* konten lain */}
      <section className="container-sm w-75 justify-content-center">
        <MediaCoverage />
        <PerawatHomecareSection />
        <div className="container my-5 w-auto">
          <div className="col-12 text-center">
            <h2 className="display-5 fw-bold">
              <span style={{ color: "#cc1925" }}>Jenis</span> Infus & Suntik
              Vitamin
            </h2>
            <p className="">Pilih jenis vitamin yang Anda cari</p>
          </div>
          {vitaminData.map((item, index) => (
            <VitaminCardSection
              key={index}
              data={item}
              badgePosition="left" // semua badge kanan
            />
          ))}

          <FeatureCardSection />
        </div>
        <TestimonialSlider />
      </section>
      <CallToActionSection />
      <section className="container-sm justify-content-center">
        <MapComponent />
        <div>
          <h2 className="text-center">
            FAQ <span className="text-danger">Perawat Homecare </span>
            <br />
            Dari Kalian Semua
          </h2>
          <CustomAccordion />
        </div>
        <div className="justify-content-center">
          <SlideComponent />
          <PaymentSection />
          <LangkahPemesanan />
          <ContactSection />
          <PartnershipSection />
        </div>
      </section>

      {/* konten lain */}
    </>
  );  
}
