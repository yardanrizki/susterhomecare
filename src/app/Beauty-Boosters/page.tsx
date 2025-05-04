import Head from "next/head";
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
      {/* SEO metadata */}
      <Head>
        <title>Perawat Homecare - Layanan Kesehatan di Rumah</title>
        <meta
          name="description"
          content="Layanan perawatan kesehatan terbaik di rumah. Dapatkan perawatan terbaik dari perawat terlatih di rumah Anda."
        />
        <link rel="icon" href="/favicon.png" sizes="16x16" />
      </Head>

      {/* Hero Section */}
      <Hero imageSrc="https://perawathomecare.id/wp-content/uploads/2024/09/terbaru_1-removebg-preview-1-1.webp" />

      {/* Konten Utama */}
      <section>
        <MediaCoverage />
        <FeatureListBeautyBoosters />
      </section>

      <ServiceHighlightSection />
      <section>
        <TestimonialSlider />
      </section>

      <CallToActionSection />

      {/* FAQ dan Komponen Lain */}
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
