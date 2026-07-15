import Navbar from "../components/common/Navbar";
import Hero from "../components/home/Hero";
import Specialists from "../components/home/Specialists";
import AboutPreview from "../components/home/AboutPreview";
import ServicesPreview from "../components/home/ServicesPreview";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Specialists />
      <AboutPreview />
      <ServicesPreview />
    </>
  );
}

export default Home;