import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WhyTrustUs from './components/WhyTrustUs';
import Destinations from './components/Destinations';
import Services from './components/Services';
import Process from './components/Process';
import Faq from './components/Faq';
import Footer from './components/Footer';
import { useScrollReveal } from './hooks/useScrollReveal';

function App() {
  useScrollReveal();

  return (
    <>
      <a href="#main" className="skip-link">Skip to content</a>

      <Navbar />

      <main id="main">
        <Hero />

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
