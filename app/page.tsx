import SiteHeader from "@/components/SiteHeader";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import About from "@/components/About";
import Doctors from "@/components/Doctors";
import Treatments from "@/components/Treatments";
import Why from "@/components/Why";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Doctors />
        <Treatments />
        <Why />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <ScrollReveal />
    </>
  );
}
