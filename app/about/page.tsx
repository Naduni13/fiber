import About from "@/components/About/Hero";
import AboutSection from "@/components/About/AboutSection";
import Sustainability from "@/components/About/Sustainability";
import Strengths from "@/components/About/Strengths";
import History from "@/components/About/History";
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