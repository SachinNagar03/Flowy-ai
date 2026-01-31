import CTA from "./components/CTA";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Features from "./Features/page";
import PricingPage from "./pricing/page";
import TestimonialsPage from "./testimonials/page";


export default function Home() {
  return (
    <div >
      {/* <Navbar/> */}
      <Hero/>
      <Features/>
      <PricingPage/>
      <TestimonialsPage/>
      <CTA/>
    </div>
  );
}
