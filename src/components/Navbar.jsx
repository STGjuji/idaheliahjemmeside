import React, { useState, useEffect } from 'react';
import { Camera, Calendar, Clock, Lock, Sparkles, Menu, X } from 'lucide-react';

export default function Navbar({ activeTab, setActiveTab, isAdminOpen, setIsAdminOpen, bookingCount }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'gallery', label: 'Portefølje' },
    { id: 'inspiration', label: 'Inspiration & Stil' },
    { id: 'pricing', label: 'Pakker & Priser' },
    { id: 'booking', label: 'Book Session' },
    { id: 'about', label: 'Om Ida' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
      scrolled ? 'glass-panel shadow-sm py-4 border-b border-[#E8D5C4]/30' : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        
        {/* Brand Logo */}
        <a href="#hero" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-full bg-brand-charcoal text-brand-paper flex items-center justify-center font-serif text-xl tracking-wider transition-transform duration-500 group-hover:scale-105 group-hover:bg-brand-gold">
            IH
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-xl tracking-[0.2em] font-medium uppercase text-brand-charcoal">
              IDA HELIA
            </span>
            <span className="text-[10px] tracking-[0.25em] text-brand-stone uppercase">
              Fotografi • Danmark
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => {
                setActiveTab(link.id);
                setIsAdminOpen(false);
                const el = document.getElementById(link.id);
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className={`text-xs tracking-[0.15em] uppercase transition-colors relative py-1 ${
                activeTab === link.id && !isAdminOpen
                  ? 'text-brand-charcoal font-semibold'
                  : 'text-brand-stone hover:text-brand-charcoal'
              }`}
            >
              {link.label}
              {activeTab === link.id && !isAdminOpen && (
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-brand-gold animate-fade-in" />
              )}
            </button>
          ))}
        </nav>

        {/* Action Buttons: Admin Toggle */}
        <div className="hidden lg:flex items-center gap-4">
          <button
            onClick={() => setIsAdminOpen(!isAdminOpen)}
            className={`flex items-center gap-2 text-xs tracking-wider uppercase px-4 py-2.5 rounded-full transition-all duration-300 ${
              isAdminOpen
                ? 'bg-brand-gold text-white shadow-md'
                : 'bg-brand-charcoal text-white hover:bg-brand-darkSlate shadow hover:shadow-lg'
            }`}
          >
            {isAdminOpen ? <Sparkles className="w-3.5 h-3.5" /> : <Lock className="w-3.5 h-3.5 text-brand-goldLight" />}
            <span>{isAdminOpen ? 'Klientvisning' : "Idas Admin Studie"}</span>
            {bookingCount > 0 && !isAdminOpen && (
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping ml-1" />
            )}
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-brand-charcoal hover:text-brand-gold transition-colors"
          aria-label="Åbn Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden glass-panel border-b border-brand-goldLight/40 px-6 py-6 animate-fade-in">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => {
                  setActiveTab(link.id);
                  setIsAdminOpen(false);
                  setMobileMenuOpen(false);
                  const el = document.getElementById(link.id);
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className={`text-left text-sm tracking-widest uppercase py-2 border-b border-stone-200/50 ${
                  activeTab === link.id && !isAdminOpen ? 'text-brand-gold font-medium' : 'text-brand-charcoal'
                }`}
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => {
                setIsAdminOpen(!isAdminOpen);
                setMobileMenuOpen(false);
              }}
              className="flex items-center justify-center gap-2 text-xs tracking-wider uppercase px-4 py-3 rounded-full bg-brand-charcoal text-white mt-2"
            >
              <Lock className="w-4 h-4 text-brand-goldLight" />
              <span>{isAdminOpen ? 'Luk Adminvisning' : "Åbn Idas Admin Studie"}</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
