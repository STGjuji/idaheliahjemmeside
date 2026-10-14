import React from 'react';
import { Camera, Lock, Heart, Globe, ArrowUp } from 'lucide-react';

export default function Footer({ onOpenAdmin }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-brand-charcoal text-white pt-16 pb-12 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Top Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16 pb-12 border-b border-stone-800">
          
          {/* Brand */}
          <div className="space-y-4 md:col-span-2">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-brand-gold text-white flex items-center justify-center font-serif text-lg font-bold">
                IH
              </div>
              <span className="font-serif text-2xl tracking-widest text-white uppercase">
                IDA HELIA
              </span>
            </div>
            <p className="text-xs text-stone-400 font-light max-w-md leading-relaxed">
              Fotografering med nærvær – graviditet, familie, børn, nyfødte og bryllupper i Slagelse og på hele Sjælland. Ægte øjeblikke og minder for livet.
            </p>
            <div className="text-xs text-brand-gold font-medium flex items-center gap-2">
              <Globe className="w-4 h-4" />
              <span>Officielt Domæne: www.idahelia.dk</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-brand-gold">Navigation</h4>
            <ul className="space-y-2 text-xs text-stone-300 font-light">
              <li><a href="#gallery" className="hover:text-brand-gold transition-colors">Portefølje</a></li>
              <li><a href="#inspiration" className="hover:text-brand-gold transition-colors">Design & Stil-analyse</a></li>
              <li><a href="#pricing" className="hover:text-brand-gold transition-colors">Pakker & Priser</a></li>
              <li><a href="#booking" className="hover:text-brand-gold transition-colors">Book Session</a></li>
              <li><a href="#about" className="hover:text-brand-gold transition-colors">Om Ida Helia</a></li>
            </ul>
          </div>

          {/* Admin & Rights */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-brand-gold">Studieadministrationsportal</h4>
            <p className="text-xs text-stone-400 font-light">
              Kalenderstyring, time- og faktureregistrering samt domæneopsætning.
            </p>
            <button
              onClick={onOpenAdmin}
              className="px-4 py-2.5 rounded-full bg-brand-darkSlate hover:bg-stone-800 border border-stone-700 text-white text-xs font-medium uppercase tracking-wider flex items-center gap-2 transition-colors"
            >
              <Lock className="w-3.5 h-3.5 text-brand-gold" />
              <span>Idas Admin Studie</span>
            </button>
          </div>

        </div>

        {/* Bottom Rights Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500 font-light">
          <div>
            © {new Date().getFullYear()} Ida Helia Fotografi (www.idahelia.dk). Alle rettigheder forbeholdes. CVR: DK39182490.
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-stone-400 hover:text-white transition-colors"
          >
            <span>Til toppen</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}
