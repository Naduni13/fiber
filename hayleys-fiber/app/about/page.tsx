import About from "@/component/About/Hero";
import AboutSection from "@/component/About/AboutSection";
import Sustainability from "@/component/About/Sustainability";
import Strengths from "@/component/About/Strengths";
import History from "@/component/About/History";
import Footer from "@/components/Footer";
import Navbar from "@/components/Nav";

export default function main() {
  return (
    <main>

      {/* GLOBAL BACKGROUND */}
      <Navbar/>
      <About/>
      <AboutSection/>
      <History/>
      <Sustainability/>  
      <Strengths/>
      <Footer/>
    </main>
  );
}