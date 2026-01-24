import Header from './components/Header';
import Hero from './components/Hero';
import Countdown from './components/Countdown';
import AboutUs from './components/AboutUs';
import GiftRegistry from './components/GiftRegistry';
import Location from './components/Location';
import RSVP from './components/RSVP';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-white to-pink-50">
      <Header />
      <Hero />
      <Countdown />
      <Location />
      <RSVP />
      <GiftRegistry />
      <Footer />
    </div>
  );
}

export default App;