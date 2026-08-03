import React, { useState, useEffect } from 'react';
import { ArrowDown, Calendar, Camera, Sparkles } from 'lucide-react';

const heroSlides = [
  {
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=2000&q=85",
    subtitle: "BRYLLUPS- OG EDITORIAL FOTOGRAFERING",
    title: "Tidsløst Lys & Afdæmpet Skandinavisk Elegance",
    location: "Danmark & Bryllupper i Hele Verden"
  },
  {
    image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=2000&q=85",
    subtitle: "VOGUE & FASHION KAMPAGNER",
    title: "Rå Elegance & Høj Kunstnerisk Æstetik",
    location: "Studie & Lokationsprojekter"
  },
  {
    image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=2000&q=85",
    subtitle: "PORTRÆTTER & ARKITEKTUR",
    title: "Autentisk Nærvær, Karakter & Form",
    location: "Skandinavien • Europa"
  }
];

export default function Hero({ onBookClick, onPortfolioClick }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const slide = heroSlides[currentSlide];

  return (
    <section id="hero" className="relative h-screen w-full overflow-hidden bg-brand-charcoal text-white flex items-center justify-center">
      {/* Background Image Slideshow with Overlay */}
      {heroSlides.map((item, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? 'opacity-100 scale-105' : 'opacity-0 scale-100'
          }`}
          style={{ transition: 'opacity 1.2s ease-in-out, transform 8s ease-out' }}
        >
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal via-brand-charcoal/40 to-black/30" />
        </div>
      ))}

      {/* Domain Badge */}
      <div className="absolute top-28 left-6 md:left-12 z-10 glass-panel border border-white/20 text-brand-charcoal text-[11px] font-medium tracking-[0.2em] uppercase px-3.5 py-1.5 rounded-full flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
        Officiel Hjemmeside • www.idahelia.dk
      </div>

      {/* Main Content Overlay */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center flex flex-col items-center">
        <span className="text-xs md:text-sm tracking-[0.3em] uppercase text-brand-goldLight font-medium mb-4 animate-fade-in">
          {slide.subtitle}
        </span>

        <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-normal tracking-tight text-white leading-[1.1] mb-6 max-w-4xl">
          {slide.title}
        </h1>

        <p className="text-sm md:text-base text-stone-300 font-light tracking-wide mb-10 max-w-2xl">
          Skaber stemningsfulde, eksklusive visuelle fortællinger for luksusbryllupper, moderedaktioner og arkitektoniske portrætter.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <button
            onClick={onBookClick}
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-brand-gold text-white font-medium text-xs tracking-[0.2em] uppercase hover:bg-[#b59871] transition-all transform hover:-translate-y-0.5 shadow-lg flex items-center justify-center gap-2"
          >
            <Calendar className="w-4 h-4" />
            <span>Reserver Dato For 2026 / 2027</span>
          </button>
          
          <button
            onClick={onPortfolioClick}
            className="w-full sm:w-auto px-8 py-4 rounded-full border border-white/40 text-white font-medium text-xs tracking-[0.2em] uppercase hover:bg-white/10 transition-all flex items-center justify-center gap-2"
          >
            <Camera className="w-4 h-4 text-brand-goldLight" />
            <span>Udforsk Portefølje</span>
          </button>
        </div>
      </div>

      {/* Slide Indicators & Location */}
      <div className="absolute bottom-10 left-6 md:left-12 right-6 md:right-12 z-10 flex items-center justify-between">
        <div className="text-xs tracking-widest text-stone-300 uppercase hidden sm:block">
          {slide.location}
        </div>

        {/* Dots */}
        <div className="flex items-center gap-3 mx-auto sm:mx-0">
          {heroSlides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                i === currentSlide ? 'w-8 bg-brand-gold' : 'w-2 bg-white/40'
              }`}
              aria-label={`Gå til dias ${i + 1}`}
            />
          ))}
        </div>

        {/* Scroll Down */}
        <a
          href="#gallery"
          className="text-white/70 hover:text-white flex items-center gap-2 text-xs tracking-widest uppercase transition-colors hidden sm:flex"
        >
          <span>Rul ned</span>
          <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
        </a>
      </div>
    </section>
  );
}
