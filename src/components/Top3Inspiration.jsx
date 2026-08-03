import React from 'react';
import { Award, CheckCircle2, Globe, Sparkles, ExternalLink } from 'lucide-react';
import { topPhotographersInspiration } from '../data/initialData';

export default function Top3Inspiration() {
  return (
    <section id="inspiration" className="py-24 bg-[#F3EFEA] border-y border-[#E8D5C4]/50">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-gold/10 text-brand-gold text-xs tracking-widest uppercase font-semibold mb-4">
            <Award className="w-3.5 h-3.5" />
            Curated Industry Benchmarks
          </div>
          <h2 className="font-serif text-3xl md:text-5xl text-brand-charcoal font-normal tracking-tight mb-4">
            Inspired by World-Class Photography Platforms
          </h2>
          <p className="text-stone-600 text-sm md:text-base font-light leading-relaxed">
            To ensure <span className="font-medium text-brand-charcoal">www.idahelia.dk</span> stands out at the pinnacle of luxury photography, we researched the top 3 award-winning photographer website design standards globally.
          </p>
        </div>

        {/* 3 Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {topPhotographersInspiration.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl p-8 border border-stone-200/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <span className="text-[10px] tracking-[0.2em] text-brand-gold uppercase font-bold">
                      Benchmark #{item.id}
                    </span>
                    <h3 className="font-serif text-2xl text-brand-charcoal font-medium mt-1">
                      {item.name}
                    </h3>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-brand-paper flex items-center justify-center text-brand-stone group-hover:text-brand-gold group-hover:bg-brand-paper/80 transition-colors">
                    <Globe className="w-5 h-5" />
                  </div>
                </div>

                <div className="text-xs text-stone-500 font-medium mb-6 flex items-center gap-2">
                  <span className="px-2.5 py-1 bg-stone-100 rounded-md text-stone-700">{item.specialty}</span>
                  <span>• {item.location}</span>
                </div>

                {/* Key Strengths */}
                <div className="space-y-3 mb-8">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-brand-stone">Key Website Strengths</h4>
                  {item.keyStrengths.map((strength, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-stone-600 leading-normal">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{strength}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* How Ida Appliesto this site */}
              <div className="pt-6 border-t border-stone-100 bg-brand-paper/50 -mx-8 -mb-8 p-6 rounded-b-2xl">
                <div className="flex items-center gap-2 text-xs font-bold text-brand-charcoal uppercase tracking-wider mb-2">
                  <Sparkles className="w-3.5 h-3.5 text-brand-gold" />
                  <span>Implemented for Ida Helia</span>
                </div>
                <p className="text-xs text-stone-600 font-light italic leading-relaxed">
                  "{item.howIdaAppliesThis}"
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Synthesis Banner */}
        <div className="mt-16 bg-brand-charcoal text-white rounded-2xl p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-2 text-center md:text-left">
            <h4 className="font-serif text-2xl text-brand-goldLight font-normal">
              Ready for Domain Launch: www.idahelia.dk
            </h4>
            <p className="text-xs md:text-sm text-stone-300 max-w-2xl font-light">
              Combining Levon Biss' editorial photography clarity, Sander Vill's Scandinavian emotional warmth, and The Wed's frictionless booking management.
            </p>
          </div>
          <a
            href="#booking"
            className="px-6 py-3 bg-brand-gold hover:bg-[#b59871] text-white text-xs font-medium uppercase tracking-widest rounded-full transition-all shrink-0"
          >
            Explore Client Booking Workflow
          </a>
        </div>

      </div>
    </section>
  );
}
