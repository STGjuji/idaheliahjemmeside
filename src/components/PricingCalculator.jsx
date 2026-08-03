import React, { useState } from 'react';
import { Calculator, Check, Sparkles, ArrowRight, ShieldCheck } from 'lucide-react';

export default function PricingCalculator({ onSelectPackage }) {
  const [selectedBase, setSelectedBase] = useState('full-wedding');
  const [extraHours, setExtraHours] = useState(0);
  const [addons, setAddons] = useState({
    secondShooter: true,
    droneCoverage: false,
    heirloomAlbum: true,
    expressDelivery: false
  });

  const basePackages = {
    'full-wedding': {
      name: "Luxury Full-Day Wedding",
      basePrice: 28000,
      hours: 10,
      description: "Complete signature coverage from morning preparations to late night celebration.",
      includes: ["10 Hours Continuous Coverage", "Online Private Client Gallery", "500+ Hand-edited High-Res Images", "Full Commercial Printing Rights"]
    },
    'half-wedding': {
      name: "Intimate Wedding & Ceremony",
      basePrice: 16000,
      hours: 5,
      description: "Ideal for intimate ceremonies, golden hour portraiture, and reception key moments.",
      includes: ["5 Hours Coverage", "250+ Hand-edited High-Res Images", "Online Private Gallery", "Printing License"]
    },
    'editorial': {
      name: "Editorial & Fashion Shoot",
      basePrice: 14000,
      hours: 4,
      description: "Tailored for designers, magazine spreads, lookbooks, and high-fashion branding.",
      includes: ["4 Hours Studio / Location", "Full High-End Skin Retouching", "Commercial Licensing", "Moodboard & Concept Prep"]
    },
    'portrait': {
      name: "Signature Portrait Session",
      basePrice: 6500,
      hours: 2,
      description: "Personal, artist, or editorial portraiture capturing authentic character.",
      includes: ["2 Hours Studio / Outdoor", "30 Hand-retouched Master Prints", "Online Gallery", "Personal Usage Rights"]
    }
  };

  const addonPrices = {
    secondShooter: 4500,
    droneCoverage: 3500,
    heirloomAlbum: 6000,
    expressDelivery: 3000
  };

  const currentPkg = basePackages[selectedBase];
  const hourlyRateExtra = 1800;

  const totalCalculated = 
    currentPkg.basePrice + 
    (extraHours * hourlyRateExtra) +
    (addons.secondShooter ? addonPrices.secondShooter : 0) +
    (addons.droneCoverage ? addonPrices.droneCoverage : 0) +
    (addons.heirloomAlbum ? addonPrices.heirloomAlbum : 0) +
    (addons.expressDelivery ? addonPrices.expressDelivery : 0);

  const toggleAddon = (key) => {
    setAddons(prev => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <section id="pricing" className="py-24 bg-[#F3EFEA] border-t border-[#E8D5C4]/40">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs tracking-[0.25em] uppercase text-brand-gold font-semibold mb-2 block">
            Transparent Investments
          </span>
          <h2 className="font-serif text-3xl md:text-5xl text-brand-charcoal font-normal tracking-tight mb-4">
            Custom Package & Pricing Estimator
          </h2>
          <p className="text-stone-600 text-sm md:text-base font-light">
            Customize your photography requirements for an instant tailored investment estimate.
          </p>
        </div>

        {/* Calculator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Controls Left Column */}
          <div className="lg:col-span-7 bg-white rounded-2xl p-8 border border-stone-200 shadow-sm space-y-8">
            
            {/* Step 1: Base Package Selection */}
            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-brand-charcoal mb-4 block">
                1. Select Base Experience
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {Object.entries(basePackages).map(([key, pkg]) => (
                  <button
                    key={key}
                    onClick={() => setSelectedBase(key)}
                    className={`p-5 rounded-xl border text-left transition-all ${
                      selectedBase === key
                        ? 'border-brand-gold bg-brand-paper/80 shadow-sm'
                        : 'border-stone-200 hover:border-stone-300'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-serif text-lg font-medium text-brand-charcoal">{pkg.name}</span>
                      {selectedBase === key && <Check className="w-4 h-4 text-brand-gold" />}
                    </div>
                    <p className="text-xs text-stone-500 line-clamp-2 font-light mb-3">{pkg.description}</p>
                    <span className="text-sm font-semibold text-brand-gold">
                      From {pkg.basePrice.toLocaleString('da-DK')} DKK
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Additional Coverage Hours */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-xs font-bold uppercase tracking-wider text-brand-charcoal">
                  2. Additional Coverage Hours (+1,800 DKK / hr)
                </label>
                <span className="text-sm font-semibold text-brand-charcoal">{extraHours} Extra Hours</span>
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
                <span>0 hrs</span>
                <span>+2 hrs</span>
                <span>+4 hrs</span>
                <span>+6 hrs</span>
              </div>
            </div>

            {/* Step 3: Bespoke Add-ons */}
            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-brand-charcoal mb-4 block">
                3. Elevate Your Experience (Add-ons)
              </label>
              <div className="space-y-3">
                <label
                  onClick={() => toggleAddon('secondShooter')}
                  className={`flex items-center justify-between p-4 rounded-xl border cursor-pointer transition-colors ${
                    addons.secondShooter ? 'border-brand-gold bg-brand-paper/50' : 'border-stone-200'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      checked={addons.secondShooter}
                      onChange={() => {}}
                      className="accent-brand-gold w-4 h-4 rounded"
                    />
                    <div>
                      <span className="text-xs font-medium text-brand-charcoal block">Associate Second Photographer</span>
                      <span className="text-[11px] text-stone-500 font-light">Captures candid guest angles simultaneously.</span>
                    </div>
                  </div>
                  <span className="text-xs font-semibold text-brand-stone">+4,500 DKK</span>
                </label>

                <label
                  onClick={() => toggleAddon('droneCoverage')}
                  className={`flex items-center justify-between p-4 rounded-xl border cursor-pointer transition-colors ${
                    addons.droneCoverage ? 'border-brand-gold bg-brand-paper/50' : 'border-stone-200'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      checked={addons.droneCoverage}
                      onChange={() => {}}
                      className="accent-brand-gold w-4 h-4 rounded"
                    />
                    <div>
                      <span className="text-xs font-medium text-brand-charcoal block">Aerial Drone Photography</span>
                      <span className="text-[11px] text-stone-500 font-light">High-altitude estate and coast shots.</span>
                    </div>
                  </div>
                  <span className="text-xs font-semibold text-brand-stone">+3,500 DKK</span>
                </label>

                <label
                  onClick={() => toggleAddon('heirloomAlbum')}
                  className={`flex items-center justify-between p-4 rounded-xl border cursor-pointer transition-colors ${
                    addons.heirloomAlbum ? 'border-brand-gold bg-brand-paper/50' : 'border-stone-200'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      checked={addons.heirloomAlbum}
                      onChange={() => {}}
                      className="accent-brand-gold w-4 h-4 rounded"
                    />
                    <div>
                      <span className="text-xs font-medium text-brand-charcoal block">Italian Fine Art Heirloom Album</span>
                      <span className="text-[11px] text-stone-500 font-light">Handcrafted leather luxury album (30x30 cm).</span>
                    </div>
                  </div>
                  <span className="text-xs font-semibold text-brand-stone">+6,000 DKK</span>
                </label>

                <label
                  onClick={() => toggleAddon('expressDelivery')}
                  className={`flex items-center justify-between p-4 rounded-xl border cursor-pointer transition-colors ${
                    addons.expressDelivery ? 'border-brand-gold bg-brand-paper/50' : 'border-stone-200'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      checked={addons.expressDelivery}
                      onChange={() => {}}
                      className="accent-brand-gold w-4 h-4 rounded"
                    />
                    <div>
                      <span className="text-xs font-medium text-brand-charcoal block">48-Hour Express Preview Delivery</span>
                      <span className="text-[11px] text-stone-500 font-light">50 sneak-peek retouched photos in 48 hours.</span>
                    </div>
                  </div>
                  <span className="text-xs font-semibold text-brand-stone">+3,000 DKK</span>
                </label>
              </div>
            </div>

          </div>

          {/* Summary Box Right Column */}
          <div className="lg:col-span-5 bg-brand-charcoal text-white rounded-2xl p-8 border border-stone-800 shadow-xl space-y-8 sticky top-28">
            <div>
              <span className="text-[11px] tracking-[0.2em] text-brand-goldLight uppercase font-semibold block mb-2">
                Estimated Investment
              </span>
              <div className="font-serif text-4xl lg:text-5xl font-normal text-white">
                {totalCalculated.toLocaleString('da-DK')} <span className="text-lg text-brand-gold font-sans font-medium">DKK</span>
              </div>
              <span className="text-xs text-stone-400 font-light mt-1 block">
                Includes VAT / Moms & Full High-Res Commercial License
              </span>
            </div>

            <div className="border-t border-stone-800 pt-6 space-y-3">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-brand-gold">Included In Selected Base</h4>
              {currentPkg.includes.map((inc, i) => (
                <div key={i} className="flex items-center gap-2.5 text-xs text-stone-300 font-light">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>{inc}</span>
                </div>
              ))}
            </div>

            <div className="bg-brand-darkSlate p-4 rounded-xl flex items-center gap-3 border border-white/5">
              <ShieldCheck className="w-5 h-5 text-brand-gold shrink-0" />
              <p className="text-[11px] text-stone-300 font-light">
                Dates secured with a signed contract and 25% deposit. Managed live via <span className="text-white font-medium">www.idahelia.dk</span>
              </p>
            </div>

            <button
              onClick={() => onSelectPackage(currentPkg.name, totalCalculated)}
              className="w-full py-4 bg-brand-gold hover:bg-[#b59871] text-white font-medium text-xs tracking-[0.2em] uppercase rounded-full transition-all flex items-center justify-center gap-2 shadow-lg"
            >
              <span>Lock In Date & Estimate</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
