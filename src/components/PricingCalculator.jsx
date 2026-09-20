import React, { useState } from 'react';
import { Check, ArrowRight, Car, Heart } from 'lucide-react';
import {
  pricingIntro,
  deliveryNote,
  travelNote,
  extraHourPrice,
  pricingCategories,
  addonOptions
} from '../data/pricingData';

export default function PricingCalculator({ onSelectPackage }) {
  const [selectedPackageId, setSelectedPackageId] = useState(pricingCategories[0].packages[0].id);
  const [extraHours, setExtraHours] = useState(0);
  const [addons, setAddons] = useState(
    addonOptions.reduce((acc, opt) => ({ ...acc, [opt.id]: false }), {})
  );

  const selectedPkg = pricingCategories
    .flatMap((cat) => cat.packages)
    .find((pkg) => pkg.id === selectedPackageId);

  const totalCalculated =
    selectedPkg.price +
    extraHours * extraHourPrice +
    addonOptions.reduce((sum, opt) => (addons[opt.id] ? sum + opt.price : sum), 0);

  const toggleAddon = (key) => {
    setAddons((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <section id="pricing" className="py-24 bg-[#F3EFEA] border-t border-[#E8D5C4]/40">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs tracking-[0.25em] uppercase text-brand-gold font-semibold mb-2 block">
            {pricingIntro.label}
          </span>
          <h2 className="font-serif text-3xl md:text-5xl text-brand-charcoal font-normal tracking-tight mb-4">
            {pricingIntro.title}
          </h2>
          <p className="text-stone-600 text-sm md:text-base font-light">
            {pricingIntro.subtitle}
          </p>
        </div>

        {/* Calculator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

          {/* Controls Left Column */}
          <div className="lg:col-span-7 bg-white rounded-2xl p-8 border border-stone-200 shadow-sm space-y-8">

            {/* Step 1: Base Package Selection (full pricelist grouped by category) */}
            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-brand-charcoal mb-4 block">
                1. Vælg Fotosession & Pakke
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-6">
                {pricingCategories.map((category) => (
                  <div key={category.id} className={category.packages.length > 1 ? 'sm:col-span-2' : ''}>
                    <div className="flex items-center gap-2 mb-3">
                      <span aria-hidden="true">{category.emoji}</span>
                      <h3 className="text-sm font-semibold uppercase tracking-wider text-brand-stone">
                        {category.name}
                      </h3>
                    </div>
                    <div className={category.packages.length > 1 ? 'grid grid-cols-1 sm:grid-cols-2 gap-4' : ''}>
                      {category.packages.map((pkg) => (
                        <button
                          key={pkg.id}
                          onClick={() => setSelectedPackageId(pkg.id)}
                          className={`text-left p-5 rounded-xl border transition-all ${
                            selectedPackageId === pkg.id
                              ? 'border-brand-gold bg-brand-paper/80 shadow-sm'
                              : 'border-stone-200 hover:border-stone-300'
                          }`}
                        >
                          <div className="flex items-center justify-between mb-2">
                            <span className="font-serif text-base font-medium text-brand-charcoal">{pkg.name}</span>
                            {selectedPackageId === pkg.id && <Check className="w-4 h-4 text-brand-gold" />}
                          </div>
                          <p className="text-xs text-stone-500 font-light mb-3 leading-relaxed">{pkg.short}</p>
                          <span className="text-sm font-semibold text-brand-gold">
                            {pkg.price.toLocaleString('da-DK')} DKK
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Step 2: Additional Coverage Hours */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-xs font-bold uppercase tracking-wider text-brand-charcoal">
                  2. Ekstra Timer (+{extraHourPrice.toLocaleString('da-DK')} DKK / time)
                </label>
                <span className="text-sm font-semibold text-brand-charcoal">{extraHours} Ekstra Timer</span>
              </div>
              <input
                type="range"
                min="0"
                max="6"
                value={extraHours}
                onChange={(e) => setExtraHours(parseInt(e.target.value))}
                className="w-full accent-brand-gold cursor-pointer"
              />
              <div className="flex justify-between text-[11px] text-stone-400 mt-1">
                <span>0 timer</span>
                <span>+2 timer</span>
                <span>+4 timer</span>
                <span>+6 timer</span>
              </div>
            </div>

            {/* Step 3: Bespoke Add-ons (Tilkøb) */}
            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-brand-charcoal mb-4 block">
                3. Tilkøb & Ekstra Billeder
              </label>
              <div className="space-y-3">
                {addonOptions.map((opt) => (
                  <label
                    key={opt.id}
                    onClick={() => toggleAddon(opt.id)}
                    className={`flex items-center justify-between p-4 rounded-xl border cursor-pointer transition-colors ${
                      addons[opt.id] ? 'border-brand-gold bg-brand-paper/50' : 'border-stone-200'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <input
                        type="checkbox"
                        checked={addons[opt.id]}
                        onChange={() => {}}
                        className="accent-brand-gold w-4 h-4 rounded"
                      />
                      <div>
                        <span className="text-xs font-medium text-brand-charcoal block">{opt.label}</span>
                        <span className="text-[11px] text-stone-500 font-light">{opt.description}</span>
                      </div>
                    </div>
                    <span className="text-xs font-semibold text-brand-stone">+{opt.price.toLocaleString('da-DK')} DKK</span>
                  </label>
                ))}
              </div>
            </div>

          </div>

          {/* Summary Box Right Column */}
          <div className="lg:col-span-5 bg-brand-charcoal text-white rounded-2xl p-8 border border-stone-800 shadow-xl space-y-8 sticky top-28">
            <div>
              <span className="text-[11px] tracking-[0.2em] text-brand-goldLight uppercase font-semibold block mb-2">
                Beregnet Investering
              </span>
              <div className="font-serif text-4xl lg:text-5xl font-normal text-white">
                {totalCalculated.toLocaleString('da-DK')} <span className="text-lg text-brand-gold font-sans font-medium">DKK</span>
              </div>
              <span className="text-xs text-stone-400 font-light mt-1 block">{deliveryNote}</span>
            </div>

            <div className="border-t border-stone-800 pt-6 space-y-3">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-brand-gold">
                Inkluderet i {selectedPkg.name}
              </h4>
              {selectedPkg.includes.map((inc, i) => (
                <div key={i} className="flex items-center gap-2.5 text-xs text-stone-300 font-light">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>{inc}</span>
                </div>
              ))}
            </div>

            <div className="bg-brand-darkSlate p-4 rounded-xl flex items-center gap-3 border border-white/5">
              <Car className="w-5 h-5 text-brand-gold shrink-0" />
              <p className="text-[11px] text-stone-300 font-light">{travelNote}</p>
            </div>

            <div className="bg-brand-darkSlate p-4 rounded-xl flex items-center gap-3 border border-white/5">
              <Heart className="w-5 h-5 text-brand-gold shrink-0" />
              <p className="text-[11px] text-stone-300 font-light">
                Har du en særlig idé eller ønsker en anden type fotografering? Skriv til mig – sammen finder vi en løsning.
              </p>
            </div>

            <button
              onClick={() => onSelectPackage(selectedPkg.name, totalCalculated)}
              className="w-full py-4 bg-brand-gold hover:bg-[#b59871] text-white font-medium text-xs tracking-[0.2em] uppercase rounded-full transition-all flex items-center justify-center gap-2 shadow-lg"
            >
              <span>Reserver Dato med dette Tilbud</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}