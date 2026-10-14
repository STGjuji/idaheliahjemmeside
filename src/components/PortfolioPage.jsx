import React from 'react';
import { ArrowLeft } from 'lucide-react';
import Gallery from './Gallery';

export default function PortfolioPage({ onBack }) {
  return (
    <div className="pt-24 md:pt-28 bg-brand-paper">
      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-8">
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 text-xs tracking-widest uppercase text-brand-stone hover:text-brand-charcoal transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Tilbage til forsiden</span>
        </button>
      </div>

      <Gallery title="Den Fulde Portefølje" subtitle="Alle Billedsamlinger" />
    </div>
  );
}
