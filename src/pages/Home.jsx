import Navbar from "../components/common/Navbar";
import Hero from "../components/home/Hero";
import Specialists from "../components/home/Specialists";
import AboutPreview from "../components/home/AboutPreview";
import Stats from "../components/home/Stats";
import ServicesPreview from "../components/home/ServicesPreview";
import Doctors from "../components/home/Doctors";
import Appointment from "../components/home/Appointment";
import Testimonials from "../components/home/Testimonials";
import FAQ from "../components/home/FAQ";
import Footer from "../components/common/Footer";

function Home() {
  return (
    <>
      <Navbar />

      <Hero />

      <Specialists />

      <AboutPreview />

      <Stats />

      <ServicesPreview />

      <Doctors />

      <Appointment />

      <Testimonials />

      <FAQ />

      <Footer />
    </>
  );
}

export default Home;