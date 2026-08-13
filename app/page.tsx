import Header from "./components/sections/Header";
import Hero from "./components/sections/Hero";
import Services from "./components/sections/Services";
import WhyChooseUs from "./components/sections/WhyChooseUs";
import Reasons from "./components/sections/Reasons";
import TestimonialsHeader from "./components/sections/TestimonialsHeader";
import Testimonials from "./components/sections/Testimonials";
import FAQ from "./components/sections/FAQ";
import FAQList from "./components/sections/FAQList";
import Appointment from "./components/sections/Appointment";
import ContactAndLocation from "./components/sections/ContactAndLocation";
import Footer from "./components/sections/Footer";

export default function Home() {
  return (
      <>
        <header>
          <Header></Header>
        </header>

        <main>
          <Hero></Hero>
          <Services></Services>
          <WhyChooseUs></WhyChooseUs>
          <Reasons></Reasons>
          <TestimonialsHeader></TestimonialsHeader>
          <Testimonials></Testimonials>
          <FAQ></FAQ>
          <FAQList></FAQList>
          <Appointment></Appointment>
        </main>

        <footer>
          <ContactAndLocation></ContactAndLocation>
          <Footer></Footer>
        </footer>
      </>
  );
}
