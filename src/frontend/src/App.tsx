import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { About } from "@/sections/About";
import { Capacity } from "@/sections/Capacity";
import { Contact } from "@/sections/Contact";
import { Hero } from "@/sections/Hero";
import { Products } from "@/sections/Products";

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="content-offset">
        <Hero />
        <Products />
        <About />
        <Capacity />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
