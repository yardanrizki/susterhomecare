// src/app/page.tsx atau src/app/home/page.tsx

import CustomAccordion from "../component/accordion";
import CallToActionSection from "../component/CallToActionSection";
import ContactSection from "../component/ContactSection";
import FeatureListVitaminBoosters from "../component/componentVitamin/FeatureListVitaminBoosters";
import Hero from "../component/hero";
import LangkahPemesanan from "../component/LangkahPemesanan";
import MediaCoverage from "../component/mediacoverage";
import SlideComponent from "../component/mitra";
import PartnershipSection from "../component/PartnershipSection";
import PaymentSection from "../component/pembayaran";
import ServiceHighlightSection from "../component/ServiceHighlightSection";
import TargetAudience from "../component/TargetAudienceSection";
import TestimonialSlider from "../component/TestimonialSlider";
import VitaminCardSection from "../component/VitaminCardSection";
import VitaminPackagesSection from "../component/VitaminPackagesSection";
import { vitaminData } from "../data/VitaminData";

export default function HomePage() {
  return (
    <>
      <Hero imageSrc="https://perawathomecare.id/wp-content/uploads/2024/09/manusiaaa-removebg-preview-1-1.webp" />
      {/* konten lain */}
      <section className="container-sm w-75 justify-content-center">
        <MediaCoverage />
        <FeatureListVitaminBoosters />
      </section>
      <TargetAudience />
      <section>
        <div className="col-12 text-center">
          <h2 className="display-4">
            <span style={{ color: "#cc1925" }}>Jenis</span> Infus & Suntik
            Vitamin
          </h2>
          <p>Pilih jenis vitamin yang Anda cari</p>
        </div>
        {vitaminData.map((item, index) => (
          <VitaminCardSection
            key={index}
            data={item}
            badgePosition="right" // semua badge kanan
          />
        ))}
      </section>
      <ServiceHighlightSection />
      <section>
        <VitaminPackagesSection />
        <TestimonialSlider />
      </section>  
      <CallToActionSection />
      <section className="container-sm justify-content-center">        
        <div>
          <h2 className="text-center">
            FAQ <span className="text-danger">Perawat Homecare </span>
            <br />
            Dari Kalian Semua
          </h2>
          <CustomAccordion/>
          <SlideComponent/>
          <PaymentSection/>
          <LangkahPemesanan/>
          <ContactSection/>
          <PartnershipSection/>
        </div>
       </section>
    </>
  );
}
