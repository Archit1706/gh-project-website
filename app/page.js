// import Image from "next/image";
import Navbar from "@/components/Navbar";
import Hero2 from "@/components/Hero2";
import Hero from "@/components/Hero";
import Cards from "@/components/Cards";
import Footer from "@/components/Footer";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <main className="bg-white">
      <Navbar />
      <Hero2 />
      <hr />
      <Hero />
      <hr />
      <Cards />
      <hr />
      <Projects />
      <Footer />
    </main>
  );
}
