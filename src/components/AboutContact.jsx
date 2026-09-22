import React from 'react';

export default function AboutContact() {
  return (
    <section id="about" className="py-24 bg-[#F3EFEA] border-t border-[#E8D5C4]/40">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* About Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24">

          {/* Portrait Photo Left */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
              <img
                src="/dist/assets/headshot.jpeg"
                alt="Ida Helia Fotograf"
                className="w-full h-[540px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <h3 className="font-serif text-2xl font-normal">Ida Helia</h3>
               
              </div>
            </div>
          </div>

          {/* Bio Text Right */}
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs tracking-[0.25em] uppercase text-brand-gold font-semibold block">
              Bag Kameralinsen
            </span>

            <h2 className="font-serif text-3xl md:text-5xl text-brand-charcoal font-normal tracking-tight leading-tight">
              Smukke, ægte øjeblikke – foreviget med nærvær, ro og kærlighed
            </h2>

            <p className="text-stone-600 text-sm md:text-base font-light leading-relaxed">
              Mit navn er <span className="font-medium text-brand-charcoal">Ida Helia</span>. Jeg er fotograf med base i Slagelse og fotograferer graviditet, familie, nyfødte, børn og bryllupper på hele Sjælland. Mit arbejde er præget af nærvær, ro og ægte øjeblikke – billeder, der føles som jer, og som I vil elske at huske.
            </p>

            <p className="text-stone-600 text-sm font-light leading-relaxed">
              Hos mig handler fotografering ikke om at stå perfekt foran kameraet. Det handler om at skabe billeder, der føles som jer – naturlige, varme og fulde af de små øjeblikke, I gerne vil huske. Jeg guider jer hele vejen, så I kan slappe af og være i øjeblikket, mens de ægte smil kommer frem.
            </p>

            <p className="text-stone-600 text-sm font-light leading-relaxed italic">
              Fotografering med nærvær · ægte øjeblikke · minder for livet
            </p>

            {/* Accolades & Press */}
            <div className="pt-6 border-t border-stone-200 grid grid-cols-2 sm:grid-cols-3 gap-6">
              <div>
                <span className="block font-serif text-2xl text-brand-charcoal font-normal">8+ År</span>
                <span className="text-xs text-stone-500 font-light">Brancheerfaring</span>
              </div>
              <div>
                <span className="block font-serif text-2xl text-brand-charcoal font-normal">140+</span>
                <span className="text-xs text-stone-500 font-light">Gennemførte Fotograferinger</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
