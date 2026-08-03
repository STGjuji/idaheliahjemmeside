import React from 'react';
import { MapPin, Instagram, Mail, Phone, Award, Camera, Heart } from 'lucide-react';

export default function AboutContact() {
  const instagramPosts = [
    { id: 1, image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=500&q=80", likes: "1,240" },
    { id: 2, image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=500&q=80", likes: "2,890" },
    { id: 3, image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=500&q=80", likes: "940" },
    { id: 4, image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=500&q=80", likes: "3,110" }
  ];

  return (
    <section id="about" className="py-24 bg-[#F3EFEA] border-t border-[#E8D5C4]/40">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* About Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24">
          
          {/* Portrait Photo Left */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1000&q=85"
                alt="Ida Helia Photographer"
                className="w-full h-[540px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="text-xs tracking-widest text-brand-gold uppercase font-semibold block mb-1">
                  Principal Photographer
                </span>
                <h3 className="font-serif text-2xl font-normal">Ida Helia</h3>
                <p className="text-xs text-stone-300 font-light">Based in Copenhagen • Available Worldwide</p>
              </div>
            </div>

            {/* Experience Badge Floating */}
            <div className="absolute -bottom-6 -right-6 bg-brand-charcoal text-white rounded-2xl p-5 shadow-xl border border-stone-800 hidden sm:flex items-center gap-3 max-w-xs">
              <Award className="w-8 h-8 text-brand-gold shrink-0" />
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-brand-gold block">Award Winning</span>
                <span className="text-[11px] text-stone-300 font-light">Featured in Vogue Scandinavia & Eurowoman</span>
              </div>
            </div>
          </div>

          {/* Bio Text Right */}
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs tracking-[0.25em] uppercase text-brand-gold font-semibold block">
              Behind The Lens
            </span>
            
            <h2 className="font-serif text-3xl md:text-5xl text-brand-charcoal font-normal tracking-tight leading-tight">
              Quiet Luxury, Raw Emotion, and Intentional Light
            </h2>

            <p className="text-stone-600 text-sm md:text-base font-light leading-relaxed">
              My name is <span className="font-medium text-brand-charcoal">Ida Helia</span>. I am a Copenhagen-based editorial, portrait, and luxury wedding photographer. My work is defined by Scandinavian minimalism: clean compositions, natural Northern light, and genuine emotional intimacy.
            </p>

            <p className="text-stone-600 text-sm font-light leading-relaxed">
              Whether documenting a 3-day wedding celebration at a Nordic estate or shooting an editorial campaign for Scandinavian design houses, I approach every project with painterly attention to detail and unhurried calm.
            </p>

            {/* Accolades & Press */}
            <div className="pt-6 border-t border-stone-200 grid grid-cols-2 sm:grid-cols-3 gap-6">
              <div>
                <span className="block font-serif text-2xl text-brand-charcoal font-normal">8+ Years</span>
                <span className="text-xs text-stone-500 font-light">Industry Experience</span>
              </div>
              <div>
                <span className="block font-serif text-2xl text-brand-charcoal font-normal">140+</span>
                <span className="text-xs text-stone-500 font-light">Weddings & Editorials</span>
              </div>
              <div>
                <span className="block font-serif text-2xl text-brand-charcoal font-normal">Copenhagen</span>
                <span className="text-xs text-stone-500 font-light">Studio & Atelier</span>
              </div>
            </div>

            {/* Studio Info */}
            <div className="bg-white p-6 rounded-xl border border-stone-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-xs font-semibold text-brand-charcoal">
                  <MapPin className="w-4 h-4 text-brand-gold" />
                  <span>Ida Helia Studio Copenhagen</span>
                </div>
                <p className="text-xs text-stone-500 font-light">Store Kongensgade 42, 1264 København K</p>
              </div>

              <div className="flex items-center gap-4 text-xs">
                <a href="mailto:ida@idahelia.dk" className="text-brand-charcoal hover:text-brand-gold font-medium flex items-center gap-1">
                  <Mail className="w-3.5 h-3.5" />
                  ida@idahelia.dk
                </a>
              </div>
            </div>

          </div>

        </div>

        {/* Live Instagram Feed Simulation */}
        <div className="border-t border-stone-200/80 pt-16">
          <div className="flex flex-col sm:flex-row items-center justify-between mb-8">
            <div>
              <span className="text-xs tracking-widest text-brand-gold uppercase font-semibold block">Follow Along</span>
              <h3 className="font-serif text-2xl text-brand-charcoal font-normal">@idahelia.photography</h3>
            </div>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 sm:mt-0 flex items-center gap-2 text-xs tracking-wider uppercase px-5 py-2.5 rounded-full border border-stone-300 hover:border-brand-gold text-brand-charcoal transition-colors"
            >
              <Instagram className="w-4 h-4 text-brand-gold" />
              <span>Follow on Instagram</span>
            </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {instagramPosts.map((post) => (
              <div key={post.id} className="group relative rounded-xl overflow-hidden shadow-sm h-64 bg-stone-200 cursor-pointer">
                <img
                  src={post.image}
                  alt="Instagram post"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white gap-2 font-medium text-xs">
                  <Heart className="w-4 h-4 text-rose-400 fill-rose-400" />
                  <span>{post.likes}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
