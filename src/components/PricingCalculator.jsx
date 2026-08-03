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
      name: "Eksklusivt Heldagsbryllup",
      basePrice: 3000,
      hours: 10,
      description: "Komplet signaturdækning fra morgenens forberedelser til brudevalsen.",
      includes: ["10 Timers Kontinuerlig Dækning", "Privat Online Klientgalleri", "500+ Håndredigerede Billeder i Høj Opløsning", "Fuld Tryk- og Brugsret"]
    },
    'half-wedding': {
      name: "Intimt Bryllup & Vielse",
      basePrice: 16000,
      hours: 5,
      description: "Ideelt til intime ceremonier, portrætter i den gyldne time og reception.",
      includes: ["5 Timers Dækning", "250+ Håndredigerede Højopløselige Billeder", "Privat Online Galleri", "Fuld Trykret"]
    },
    'editorial': {
      name: "Editorial & Modeoptagelse",
      basePrice: 14000,
      hours: 4,
      description: "Skræddersyet til designere, magasinopslag, lookbooks og brand-kampagner.",
      includes: ["4 Timers Studie / Lokation", "High-End Hudretouchering", "Kommerciel Licensaftale", "Moodboard & Konceptforberedelse"]
    },
    'portrait': {
      name: "Signatur Portrætsession",
      basePrice: 6500,
      hours: 2,
      description: "Personlig, kunstnerisk eller redaktionel portrætfotografering med ægte karakter.",
      includes: ["2 Timers Optagelse i Studie / Udendørs", "30 Håndretoucherede Master-prints", "Online Galleri", "Personlige Brugsrettigheder"]
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
            Gennemskuelige Investeringer
          </span>
          <h2 className="font-serif text-3xl md:text-5xl text-brand-charcoal font-normal tracking-tight mb-4">
            Skræddersyet Prisberegner
          </h2>
          <p className="text-stone-600 text-sm md:text-base font-light">
            Tilpas dine ønsker og få et øjeblikkeligt estimat på din fotografering.
          </p>
        </div>

        {/* Calculator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Controls Left Column */}
          <div className="lg:col-span-7 bg-white rounded-2xl p-8 border border-stone-200 shadow-sm space-y-8">
            
            {/* Step 1: Base Package Selection */}
            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-brand-charcoal mb-4 block">
                1. Vælg Basis-oplevelse
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
                      Fra {pkg.basePrice.toLocaleString('da-DK')} DKK
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Additional Coverage Hours */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-xs font-bold uppercase tracking-wider text-brand-charcoal">
                  2. Ekstra Dækningstimer (+1.800 DKK / time)
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

            {/* Step 3: Bespoke Add-ons */}
            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-brand-charcoal mb-4 block">
                3. Tilvalg & Ekstraudstyr
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
                      <span className="text-xs font-medium text-brand-charcoal block">Assisterende Fotograf #2</span>
                      <span className="text-[11px] text-stone-500 font-light">Fanger uforberedte gæsteøjeblikke samtidig.</span>
                    </div>
                  </div>
                  <span className="text-xs font-semibold text-brand-stone">+4.500 DKK</span>
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
                      <span className="text-xs font-medium text-brand-charcoal block">Luftfoto med Drone</span>
                      <span className="text-[11px] text-stone-500 font-light">Storslåede luftfotos af herregårde og kystlinjer.</span>
                    </div>
                  </div>
                  <span className="text-xs font-semibold text-brand-stone">+3.500 DKK</span>
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
                      <span className="text-xs font-medium text-brand-charcoal block">Italiensk Håndlavet Luksusalbum</span>
                      <span className="text-[11px] text-stone-500 font-light">Eksklusivt læderalbum med fine-art papir (30x30 cm).</span>
                    </div>
                  </div>
                  <span className="text-xs font-semibold text-brand-stone">+6.000 DKK</span>
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
                      <span className="text-xs font-medium text-brand-charcoal block">48-Timers Ekspreslevering</span>
                      <span className="text-[11px] text-stone-500 font-light">50 færdigredigerede billeder klar inden for 48 timer.</span>
                    </div>
                  </div>
                  <span className="text-xs font-semibold text-brand-stone">+3.000 DKK</span>
                </label>
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
              <span className="text-xs text-stone-400 font-light mt-1 block">
                Inkl. moms & fuld kommerciel brugsret
              </span>
            </div>

            <div className="border-t border-stone-800 pt-6 space-y-3">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-brand-gold">Inkluderet i Valgte Pakke</h4>
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
                Datoer sikres med underskrevet kontrakt og 25% depositum. Håndteres live på <span className="text-white font-medium">www.idahelia.dk</span>
              </p>
            </div>

            <button
              onClick={() => onSelectPackage(currentPkg.name, totalCalculated)}
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
