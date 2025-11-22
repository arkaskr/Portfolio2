import NavBar from "./Components/NavBar";
import Hero from "./Sections/Hero";
import ShowcaseSection from "./Sections/ShowcaseSection";
import FeatureCards from "./Sections/FeatureCards";
import TechStack from "./Sections/TechStack";
import Contact from "./Sections/Contact";
import Footer from "./Sections/Footer";
import Experience from "./Sections/Experience";


const App = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <ShowcaseSection />
      <FeatureCards />
      <Experience/>
      <TechStack/>
      <Contact/>
      <Footer/>
    </>
  );
};

export default App;
