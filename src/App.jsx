import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Top3Inspiration from './components/Top3Inspiration';
import Gallery from './components/Gallery';
import PricingCalculator from './components/PricingCalculator';
import PublicBookingForm from './components/PublicBookingForm';
import AboutContact from './components/AboutContact';
import Footer from './components/Footer';
import AdminDashboard from './components/admin/AdminDashboard';

import { initialPortfolio, initialBookings, initialHoursLog } from './data/initialData';

export default function App() {
  const [activeTab, setActiveTab] = useState('gallery');
  const [isAdminOpen, setIsAdminOpen] = useState(false);
  const [preselectedPackage, setPreselectedPackage] = useState('');

  // Persistent State via localStorage
  const [portfolio, setPortfolio] = useState(() => {
    const saved = localStorage.getItem('ida_portfolio');
    return saved ? JSON.parse(saved) : initialPortfolio;
  });

  const [bookings, setBookings] = useState(() => {
    const saved = localStorage.getItem('ida_bookings');
    return saved ? JSON.parse(saved) : initialBookings;
  });

  const [hoursLog, setHoursLog] = useState(() => {
    const saved = localStorage.getItem('ida_hours_log');
    return saved ? JSON.parse(saved) : initialHoursLog;
  });

  // Save to localStorage on change
  useEffect(() => {
    localStorage.setItem('ida_portfolio', JSON.stringify(portfolio));
  }, [portfolio]);

  useEffect(() => {
    localStorage.setItem('ida_bookings', JSON.stringify(bookings));
  }, [bookings]);

  useEffect(() => {
    localStorage.setItem('ida_hours_log', JSON.stringify(hoursLog));
  }, [hoursLog]);

  const handleSelectPackageFromCalculator = (packageName, totalDKK) => {
    setPreselectedPackage(`${packageName} (${totalDKK.toLocaleString('da-DK')} DKK)`);
    const el = document.getElementById('booking');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleNewPublicBooking = (newBooking) => {
    setBookings((prev) => [newBooking, ...prev]);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FBF9F5]">
      
      {/* Fixed Sticky Header */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        isAdminOpen={isAdminOpen}
        setIsAdminOpen={setIsAdminOpen}
        bookingCount={bookings.filter(b => b.status === 'Pending Inquiry').length}
      />

      {/* Main Content View Switcher */}
      {isAdminOpen ? (
        <main className="flex-grow">
          <AdminDashboard
            bookings={bookings}
            setBookings={setBookings}
            hoursLog={hoursLog}
            setHoursLog={setHoursLog}
            portfolio={portfolio}
            setPortfolio={setPortfolio}
            onCloseAdmin={() => setIsAdminOpen(false)}
          />
        </main>
      ) : (
        <main className="flex-grow">
          {/* Hero Section */}
          <Hero
            onBookClick={() => {
              const el = document.getElementById('booking');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            onPortfolioClick={() => {
              const el = document.getElementById('gallery');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
          />

          {/* Top 3 Photographer Website Design Inspiration & Analysis */}
          <Top3Inspiration />

          {/* Filterable Portfolio Gallery */}
          <Gallery items={portfolio} />

          {/* Interactive Pricing Calculator */}
          <PricingCalculator onSelectPackage={handleSelectPackageFromCalculator} />

          {/* Public Date Booking Request Form */}
          <PublicBookingForm
            onNewBookingSubmit={handleNewPublicBooking}
            preselectedPackage={preselectedPackage}
          />

          {/* About Ida Helia & Studio Location */}
          <AboutContact />
        </main>
      )}

      {/* Shared Footer */}
      <Footer onOpenAdmin={() => setIsAdminOpen(true)} />

    </div>
  );
}
