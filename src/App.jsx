import NavBar from "./Components/NavBar";
import Hero from "./Sections/Hero";
import ShowcaseSection from "./Sections/ShowcaseSection";
import FeatureCards from "./Sections/FeatureCards";
import TechStack from "./Sections/TechStack";
import Contact from "./Sections/Contact";
import Footer from "./Sections/Footer";


const App = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <ShowcaseSection />
      <FeatureCards/>
      <TechStack/>
      <Contact/>
      <Footer/>
    </>
  );
};

export default App;
