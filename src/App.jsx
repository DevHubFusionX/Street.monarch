import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WhatWeOffer from './components/WhatWeOffer';
import WhyChooseUs from './components/WhyChooseUs';
import FeaturedDesigns from './components/FeaturedDesigns';
import Testimonials from './components/Testimonials';
import About from './components/About';
import CTA from './components/CTA';
import LoadingScreen from './components/LoadingScreen';

function App() {
  const [loading, setLoading] = useState(true);

  if (loading) {
    return <LoadingScreen onLoadingComplete={() => setLoading(false)} />;
  }

  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<><Hero /><WhatWeOffer /><WhyChooseUs /><FeaturedDesigns /><Testimonials /><About /><CTA /></>} />
            <Route path="/shop" element={<div className="text-center py-20">Shop Page</div>} />
            <Route path="/custom" element={<div className="text-center py-20">Custom Design Page</div>} />
            <Route path="/bulk" element={<div className="text-center py-20">Bulk Orders Page</div>} />
            <Route path="/about" element={<div className="text-center py-20">About Page</div>} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
