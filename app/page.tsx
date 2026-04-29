import Cursor from "@/components/Cursor";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Stack from "@/components/Stack";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import AIChat from "@/components/AIChat";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <Cursor />
      <Header />
      <div className="relative z-10">
        <Hero />
        <Projects />
        <About />
        <Stack />
        <Contact />
        <Footer />
      </div>
      <AIChat />
    </main>
  );
}
