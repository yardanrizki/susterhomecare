// src/app/page.tsx atau src/app/home/page.tsx
import CustomAccordion from "../component/accordion";
import CallToActionSection from "../component/CallToActionSection";
import ContactSection from "../component/ContactSection";
import FeatureListBeautyBoosters from "../component/componentbeauty/FeatureListBeautyBoosters";
import Hero from "../component/hero";
import LangkahPemesanan from "../component/LangkahPemesanan";
import MediaCoverage from "../component/mediacoverage";
import SlideComponent from "../component/mitra";
import PartnershipSection from "../component/PartnershipSection";
import PaymentSection from "../component/pembayaran";
import ServiceHighlightSection from "../component/ServiceHighlightSection";
import TestimonialSlider from "../component/TestimonialSlider";
export default function HomePage() {
  return (
    <>
      <Hero imageSrc="https://perawathomecare.id/wp-content/uploads/2024/09/terbaru_1-removebg-preview-1-1.webp" />
      {/* konten lain */}
      <section>
        <MediaCoverage />
        <FeatureListBeautyBoosters />
      </section>
      <ServiceHighlightSection />
      <section>
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
          <CustomAccordion />
          <SlideComponent />
          <PaymentSection />
          <LangkahPemesanan />
          <ContactSection />
          <PartnershipSection />
        </div>
      </section>
    </>
  );
}
