import React, { useState } from 'react';
import { Camera, MapPin, Maximize2, X, Info, Sparkles } from 'lucide-react';

export default function Gallery({ items }) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedImage, setSelectedImage] = useState(null);

  const categories = ['All', 'Weddings', 'Editorial', 'Portraits', 'Commercial'];

  const filteredItems = selectedCategory === 'All'
    ? items
    : items.filter(item => item.category === selectedCategory);

  return (
    <section id="gallery" className="py-24 bg-brand-paper">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Gallery Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-xs tracking-[0.25em] uppercase text-brand-gold font-semibold mb-2 block">
              Curated Body of Work
            </span>
            <h2 className="font-serif text-3xl md:text-5xl text-brand-charcoal font-normal tracking-tight">
              Selected Collections
            </h2>
          </div>

          {/* Filter Categories */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-5 py-2 rounded-full text-xs tracking-widest uppercase transition-all duration-300 ${
                  selectedCategory === cat
                    ? 'bg-brand-charcoal text-white shadow-md'
                    : 'bg-stone-200/60 text-stone-700 hover:bg-stone-300/80'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedImage(item)}
              className="group relative bg-stone-100 rounded-xl overflow-hidden cursor-pointer shadow-sm hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1 animate-fade-in"
            >
              {/* Image */}
              <div className="w-full h-[420px] overflow-hidden relative">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-6 text-white" />
              </div>

              {/* Hover Badge Info */}
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="w-9 h-9 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white">
                  <Maximize2 className="w-4 h-4" />
                </span>
              </div>

              {/* Title & Metadata Overlay on Hover */}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <span className="text-[10px] tracking-[0.2em] text-brand-goldLight uppercase font-semibold block mb-1">
                  {item.category}
                </span>
                <h3 className="font-serif text-2xl font-normal leading-snug mb-2">
                  {item.title}
                </h3>
                <div className="flex items-center gap-4 text-xs text-stone-300 font-light">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-brand-gold" />
                    {item.location}
                  </span>
                  <span className="flex items-center gap-1">
                    <Camera className="w-3 h-3 text-brand-gold" />
                    {item.camera}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedImage && (
          <div
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex items-center justify-center p-4 md:p-8 animate-fade-in"
            onClick={() => setSelectedImage(null)}
          >
            <div
              className="relative max-w-5xl w-full max-h-[90vh] bg-brand-charcoal text-white rounded-2xl overflow-hidden flex flex-col lg:flex-row shadow-2xl border border-stone-800"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-white/20 transition-colors"
                aria-label="Close Preview"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Large Image */}
              <div className="w-full lg:w-2/3 max-h-[60vh] lg:max-h-full bg-black flex items-center justify-center p-4">
                <img
                  src={selectedImage.image}
                  alt={selectedImage.title}
                  className="max-w-full max-h-[75vh] object-contain rounded-lg"
                />
              </div>

              {/* Photo Detail Sidebar */}
              <div className="w-full lg:w-1/3 p-8 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-stone-800 bg-brand-darkSlate">
                <div>
                  <span className="text-xs tracking-widest text-brand-gold uppercase font-semibold block mb-2">
                    {selectedImage.category} Collection
                  </span>
                  <h3 className="font-serif text-3xl font-normal mb-4 text-white">
                    {selectedImage.title}
                  </h3>

                  <div className="space-y-4 text-xs text-stone-300 font-light border-y border-stone-800 py-6 my-6">
                    <div className="flex items-center justify-between">
                      <span className="text-stone-400">Location:</span>
                      <span className="font-medium text-white flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-brand-gold" />
                        {selectedImage.location}
                      </span>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-stone-400">Camera Body:</span>
                      <span className="font-medium text-white flex items-center gap-1">
                        <Camera className="w-3.5 h-3.5 text-brand-gold" />
                        {selectedImage.camera}
                      </span>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-stone-400">Lens Optics:</span>
                      <span className="font-medium text-white">{selectedImage.lens}</span>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-stone-400">Rights & Domain:</span>
                      <span className="font-medium text-brand-gold">www.idahelia.dk</span>
                    </div>
                  </div>
                </div>

                <a
                  href="#booking"
                  onClick={() => setSelectedImage(null)}
                  className="w-full py-3 bg-brand-gold hover:bg-[#b59871] text-white text-xs uppercase tracking-widest rounded-full text-center font-medium transition-colors"
                >
                  Book Similar Shoot
                </a>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
