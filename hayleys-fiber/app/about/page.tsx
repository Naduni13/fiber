import About from "@/component/About/Hero";
import AboutSection from "@/component/About/AboutSection";
import Sustainability from "@/component/About/Sustainability";
import Strengths from "@/component/About/Strengths";

export default function main() {
  return (
    <main className="min-h-screen bg-white text-gray relative overflow-hidden">

      {/* GLOBAL BACKGROUND */}
      <About/>
      <AboutSection/>
      <Sustainability/>  
      <Strengths/>
    </main>
  );
}