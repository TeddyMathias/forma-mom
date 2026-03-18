import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Stats from "@/components/Stats";
import AboutLane from "@/components/AboutLane";
import Services from "@/components/Services";
import Approach from "@/components/Approach";
import Testimonials from "@/components/Testimonials";
import Banner from "@/components/Banner";
import Booking from "@/components/Booking";
import Matrescence from "@/components/Matrescence";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navigation />
      <Hero />
      <About />
      <Stats />
      <AboutLane />
      <Services />
      <Approach />
      <Testimonials />
      <Banner />
      <Booking />
      <Matrescence />
      <FAQ />
      <Footer />
    </main>
  );
}
