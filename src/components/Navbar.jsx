import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar({ view, activeTab, onNavigate, onHome }) {
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
    { id: 'pricing', label: 'Pakker & Priser' },
    { id: 'booking', label: 'Book Session' },
    { id: 'about', label: 'Om Ida' },
  ];

  const isActive = (id) => {
    if (id === 'gallery') return view === 'portfolio';
    return view === 'home' && activeTab === id;
  };

  const handleClick = (id) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
      scrolled ? 'glass-panel shadow-sm py-4 border-b border-[#E8D5C4]/30' : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        
        {/* Brand Logo */}
        <a
          href="#hero"
          onClick={(e) => {
            e.preventDefault();
            onHome();
            setMobileMenuOpen(false);
          }}
          className="flex items-center gap-3 group"
        >
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
              onClick={() => handleClick(link.id)}
              className={`text-xs tracking-[0.15em] uppercase transition-colors relative py-1 ${
                isActive(link.id)
                  ? 'text-brand-charcoal font-semibold'
                  : 'text-brand-stone hover:text-brand-charcoal'
              }`}
            >
              {link.label}
              {isActive(link.id) && (
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-brand-gold animate-fade-in" />
              )}
            </button>
          ))}
        </nav>

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
                onClick={() => handleClick(link.id)}
                className={`text-left text-sm tracking-widest uppercase py-2 border-b border-stone-200/50 ${
                  isActive(link.id) ? 'text-brand-gold font-medium' : 'text-brand-charcoal'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
