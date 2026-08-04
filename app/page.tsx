import Header from "./components/sections/Header";
import Hero from "./components/sections/Hero";
import Services from "./components/sections/Services";

export default function Home() {
  return (
      <>
        <Header></Header>
        <main>
          <Hero></Hero>
          <Services></Services>
        </main>
      </>
  );
}
