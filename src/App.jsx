import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WhyTrustUs from './components/WhyTrustUs';
import Destinations from './components/Destinations';
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
        <Destinations />
        <Process />
        <WhyTrustUs />
        <Faq />
      </main>

      <Footer />
    </>
  );
}

export default App;
