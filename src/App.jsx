import React from 'react';
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

function App() {
  return (
    <div className="app-container">
      <Navbar />
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
      <Footer />
    </div>
  );
}

export default App;
