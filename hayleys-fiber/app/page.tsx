import Navbar from "@/components/Nav";
import HomeHero from "@/components/home/HomeHero";
import WhoWeAre from "@/components/home/WhoWeAre";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import CoconutFeatures from "@/components/home/CoconutFeatures";
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <main>
      {/* NAVBAR */}
      <Navbar />
      <HomeHero/>
      <WhoWeAre/>
      <WhyChooseUs/>
      <CoconutFeatures/>
      <Footer/>
    </main>
  );
}