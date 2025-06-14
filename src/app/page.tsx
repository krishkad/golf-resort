import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Golf from '@/components/Golf';
import Hotel from '@/components/Hotel';
import Events from '@/components/Events';
import GolfGallery from '@/components/GolfGallery';
import Reservation from '@/components/Reservation';
import Gallery from '@/components/Gallery';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
     <div className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Golf />
      <Hotel />
      <Events />
      <GolfGallery />
      <Reservation />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
}
