// src/app/page.tsx atau src/app/home/page.tsx
import CardSwiperPerawatMedis from "../component/componetPerawatMedis/cardswiper";
import FeatureListPerawtMedis from "../component/componetPerawatMedis/FeatureListPerawatMedis";
import ProfileSection from "../component/componetPerawatMedis/profileSection";
import ContactSection from "../component/ContactSection";
import Hero from "../component/hero";
import PartnershipSection from "../component/PartnershipSection";
import ServiceHighlightSection from "../component/ServiceHighlightSection";

export default function HomePage() {
  return (
    <>
      <Hero imageSrc="https://perawathomecare.id/wp-content/uploads/2023/12/Group-475-1.webp" />
      {/* konten lain */}
      <section className="container-sm justify-content-center text-center">
        <h2>
          Perawat Medis homecare berkualitas{" "}
          <span style={{ color: "#cc1925" }}>
            infus & <br />
            Merawat dengan keahlian, kasih sayang dan pengalaman
          </span>
        </h2>
        <p className="my-5">
          Perawat medis homecare bukan sekadar penolong medis, kami adalah teman
          sejati yang mengerti bahwa setiap individu memiliki cerita unik dalam
          perjalanan penyembuhan. Dengan keahlian medis yang mendalam dan kasih
          sayang yang tulus, Perawat Medis Homecare hadir untuk memastikan bahwa
          Anda tidak perlu merasa sendirian dalam menghadapi tantangan
          kesehatan.
        </p>
        <CardSwiperPerawatMedis />
        <FeatureListPerawtMedis />
        <ServiceHighlightSection />
        <ProfileSection />
        <ContactSection />
        <PartnershipSection />
      </section>
    </>
  );
}
