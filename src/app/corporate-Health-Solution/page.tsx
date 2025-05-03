// src/app/page.tsx atau src/app/home/page.tsx

import { Container } from "react-bootstrap/lib/Tab";
import Hero from "../component/hero";
import MediaCoverage from "../component/mediacoverage";
import "../style/globals.css"; 
import "leaflet/dist/leaflet.css";
import SolusiKEsehatanPerusahaan from "../component/SolusiKesehatanPerusahaan";
import FeatureListUnggulan from "../component/componentcorporateHealthSolution/FeatureCardSection";



export default function HomePage() {
  return (
    <>
      <Hero />
      {/* konten lain */}
      <MediaCoverage/>
      <SolusiKEsehatanPerusahaan/>
      <FeatureListUnggulan/>
      {/* konten lain */}
    </>
  );  
}
