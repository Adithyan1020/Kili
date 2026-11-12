import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WhyTrustUs from './components/WhyTrustUs';
import Destinations from './components/Destinations';
import Services from './components/Services';
import Process from './components/Process';
import Faq from './components/Faq';
import Footer from './components/Footer';
import SectionIndex from './components/SectionIndex';
import ScrollVelocity from './components/ScrollVelocity';
import { useScrollProgress } from './hooks/useScrollProgress';
import { useScrollReveal } from './hooks/useScrollReveal';

function App() {
  useScrollProgress();
  useScrollReveal();

  return (
    <>
      <div className="grain-overlay" aria-hidden="true"></div>
      <div className="scroll-progress" id="scrollProgress" aria-hidden="true"></div>
      <SectionIndex />

      <Navbar />

      <main id="top">
        <Hero />

        <ScrollVelocity
          texts={['GLOBAL OPPORTUNITIES', 'EXPERT IMMIGRATION']}
          velocity={60}
          className="custom-scroll-text"
        />

        <WhyTrustUs />
        <Services />
        <Process />
        <Destinations />
        <Faq />
      </main>

      <Footer />
    </>
  );
}

export default App;
