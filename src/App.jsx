import React, { useState, useCallback } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Gallery from './components/Gallery';
import PortfolioPage from './components/PortfolioPage';
import PricingCalculator from './components/PricingCalculator';
import PublicBookingForm from './components/PublicBookingForm';
import AboutContact from './components/AboutContact';
import Footer from './components/Footer';
import { getPreviewItems } from './data/portfolioData';

export default function App() {
  const [view, setView] = useState('home');
  const [activeTab, setActiveTab] = useState('gallery');
  const [preselectedPackage, setPreselectedPackage] = useState('');

  const scrollTo = useCallback((id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  }, []);

  const handleNavigate = useCallback((id) => {
    if (id === 'gallery') {
      setActiveTab('gallery');
      setView('portfolio');
      window.scrollTo({ top: 0 });
      return;
    }

    if (view !== 'home') {
      setView('home');
      requestAnimationFrame(() => scrollTo(id));
    } else {
      scrollTo(id);
    }
    setActiveTab(id);
  }, [view, scrollTo]);

  const goHome = useCallback(() => {
    setView('home');
    setActiveTab('gallery');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const handleSelectPackageFromCalculator = (packageName, totalDKK) => {
    setPreselectedPackage(`${packageName} (${totalDKK.toLocaleString('da-DK')} DKK)`);
    scrollTo('booking');
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FBF9F5]">
      
      {/* Fixed Sticky Header */}
      <Navbar
        view={view}
        activeTab={activeTab}
        onNavigate={handleNavigate}
        onHome={goHome}
      />

      {/* Main Content View Switcher */}
      {view === 'portfolio' ? (
        <main className="flex-grow">
          <PortfolioPage onBack={goHome} />
        </main>
      ) : (
        <main className="flex-grow">
          {/* Hero Section */}
          <Hero
            onBookClick={() => scrollTo('booking')}
            onPortfolioClick={() => handleNavigate('gallery')}
          />

          {/* Filterable Portfolio Gallery Preview */}
          <Gallery
            items={getPreviewItems(6)}
            showFilters={false}
            onViewAll={() => handleNavigate('gallery')}
          />

          {/* Interactive Pricing Calculator */}
          <PricingCalculator onSelectPackage={handleSelectPackageFromCalculator} />

          {/* Public Date Booking Request Form */}
          <PublicBookingForm preselectedPackage={preselectedPackage} />

          {/* About Ida Helia & Studio Location */}
          <AboutContact />
        </main>
      )}

      {/* Shared Footer */}
      <Footer />

    </div>
  );
}
