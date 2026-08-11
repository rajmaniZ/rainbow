import Hero from "../../components/home/Hero/Hero";
import CategoryGrid from "../../components/home/CategoryGrid/CategoryGrid";
import WhyChoose from "../../components/home/WhyChoose/WhyChoose";
import Industries from "../../components/home/Industries/Industries";
import ProductShowcase from "../../components/home/ProductShowcase/ProductShowcase";
import ServicesPreview from "../../components/home/ServicesPreview/ServicesPreview";
import ProjectHighlight from "../../components/home/ProjectHighlight/ProjectHighlight";
import Clients from "../../components/home/Clients/Clients";
import Certifications from "../../components/home/Certifications/Certifications";
import CTA from "../../components/home/CTA/CTA";
export default function Home() {
  return (
    <>
      <Hero />
      <CategoryGrid />
      <WhyChoose />
      <Industries />
      <ProductShowcase />
      <ServicesPreview />
      <ProjectHighlight />
      <Clients />
      <Certifications />
      <CTA />
    </>
  );
}
