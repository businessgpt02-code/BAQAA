import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Featured from './components/Featured';
import BaqaaUniverse from './components/BaqaaUniverse';
import LoveStories from './components/LoveStories';
import Founder from './components/Founder';
import CinematicMemories from './components/CinematicMemories';
import BrandMilestones from './components/BrandMilestones';
import SignatureCelebrations from './components/SignatureCelebrations';
import Destinations from './components/Destinations';
import Journal from './components/Journal';
import MediaPress from './components/MediaPress';
import CTA from './components/CTA';
import Footer from './components/Footer';
import About from './pages/About';
import Contact from './pages/Contact';
import Blog from './pages/Blog';

const Home = () => (
  <main>
    <Hero />
    <BaqaaUniverse />
    <Featured />
    <LoveStories />
    <Founder />
    <CinematicMemories />
    <BrandMilestones />
    <SignatureCelebrations />
    <Destinations />
    <Journal />
    <CTA />
    <MediaPress />
  </main>
);

const ScrollToHash = () => {
  const { pathname, hash } = useLocation();

  React.useEffect(() => {
    if (!hash) return;

    window.requestAnimationFrame(() => {
      document.querySelector(hash)?.scrollIntoView({ behavior: 'smooth' });
    });
  }, [pathname, hash]);

  return null;
};

function App() {
  return (
    <Router>
      <ScrollToHash />
      <div className="app-container">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
