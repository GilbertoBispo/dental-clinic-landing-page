import Header from "./components/sections/Header";
import Hero from "./components/sections/Hero";
import Services from "./components/sections/Services";
import WhyChooseUs from "./components/sections/WhyChooseUs";
import Reasons from "./components/sections/Reasons";

export default function Home() {
  return (
      <>
        <Header></Header>
        <main>
          <Hero></Hero>
          <Services></Services>
          <WhyChooseUs></WhyChooseUs>
          <Reasons></Reasons>
        </main>
      </>
  );
}
