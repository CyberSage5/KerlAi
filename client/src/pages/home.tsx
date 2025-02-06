import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import Hero from "@/components/sections/hero";
import Testimonials from "@/components/sections/testimonials";
import FAQ from "@/components/sections/faq";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main>
        <Hero />
        <Testimonials />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
