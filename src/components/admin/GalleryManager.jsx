import React, { useState } from 'react';
import { Image as ImageIcon, Plus, Trash2, Star, Camera, MapPin, Check } from 'lucide-react';

export default function GalleryManager({ portfolio, setPortfolio }) {
  const [showAddForm, setShowAddForm] = useState(false);
  const [newItem, setNewItem] = useState({
    title: '',
    category: 'Weddings',
    location: 'Copenhagen, Denmark',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80',
    featured: true,
    camera: 'Leica SL2',
    lens: '50mm f/1.4 Summilux'
  });

  const handleAddPhoto = (e) => {
    e.preventDefault();
    if (!newItem.title || !newItem.image) return;

    const created = {
      ...newItem,
      id: Date.now(),
      aspectRatio: 'aspect-[3/4]'
    };

    setPortfolio([created, ...portfolio]);
    setShowAddForm(false);
    setNewItem({
      title: '',
      category: 'Weddings',
      location: 'Copenhagen, Denmark',
      image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80',
      featured: true,
      camera: 'Leica SL2',
      lens: '50mm f/1.4 Summilux'
    });
  };

  const toggleFeatured = (id) => {
    setPortfolio(portfolio.map(item => item.id === id ? { ...item, featured: !item.featured } : item));
  };

  const deletePhoto = (id) => {
    if (confirm('Delete this photo from portfolio?')) {
      setPortfolio(portfolio.filter(item => item.id !== id));
    }
  };

  return (
    <div className="space-y-6">
      
      <div className="bg-brand-darkSlate p-6 rounded-2xl border border-stone-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h2 className="font-serif text-2xl text-white font-normal">Ida's Portfolio Gallery Manager</h2>
          <p className="text-xs text-stone-400 font-light mt-1">
            Manage high-resolution showcase imagery displayed on www.idahelia.dk
          </p>
        </div>

        <button
          onClick={() => setShowAddForm(!showAddForm)}
          className="px-5 py-2.5 rounded-full bg-brand-gold hover:bg-[#b59871] text-white text-xs font-semibold uppercase tracking-wider flex items-center gap-2 transition-colors shrink-0 shadow-md"
        >
          <Plus className="w-4 h-4" />
          <span>{showAddForm ? 'Close Form' : 'Upload New Photo'}</span>
        </button>
      </div>

      {/* Add New Photo Form */}
      {showAddForm && (
        <form onSubmit={handleAddPhoto} className="bg-brand-darkSlate p-6 rounded-2xl border border-stone-800 space-y-4 text-xs">
          <h3 className="font-serif text-xl text-white font-normal mb-2">New Portfolio Image Entry</h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-stone-300 mb-1 font-semibold">Title *</label>
              <input
                type="text"
                required
                placeholder="e.g. Nordic Winter Nuptials"
                value={newItem.title}
                onChange={(e) => setNewItem({ ...newItem, title: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl bg-black/40 border border-stone-700 text-white focus:outline-none focus:border-brand-gold"
              />
            </div>

            <div>
              <label className="block text-stone-300 mb-1 font-semibold">Category</label>
              <select
                value={newItem.category}
                onChange={(e) => setNewItem({ ...newItem, category: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl bg-black/40 border border-stone-700 text-white focus:outline-none focus:border-brand-gold"
              >
                <option value="Weddings">Weddings</option>
                <option value="Editorial">Editorial</option>
                <option value="Portraits">Portraits</option>
                <option value="Commercial">Commercial</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-stone-300 mb-1 font-semibold">Image URL *</label>
              <input
                type="url"
                required
                value={newItem.image}
                onChange={(e) => setNewItem({ ...newItem, image: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl bg-black/40 border border-stone-700 text-white focus:outline-none focus:border-brand-gold"
              />
            </div>

            <div>
              <label className="block text-stone-300 mb-1 font-semibold">Location</label>
              <input
                type="text"
                value={newItem.location}
                onChange={(e) => setNewItem({ ...newItem, location: e.target.value })}
                placeholder="Kronborg Castle, Helsingør"
                className="w-full px-4 py-2.5 rounded-xl bg-black/40 border border-stone-700 text-white focus:outline-none focus:border-brand-gold"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-stone-300 mb-1 font-semibold">Camera Body</label>
              <input
                type="text"
                value={newItem.camera}
                onChange={(e) => setNewItem({ ...newItem, camera: e.target.value })}
                placeholder="Leica SL2"
                className="w-full px-4 py-2.5 rounded-xl bg-black/40 border border-stone-700 text-white focus:outline-none focus:border-brand-gold"
              />
            </div>

            <div>
              <label className="block text-stone-300 mb-1 font-semibold">Lens</label>
              <input
                type="text"
                value={newItem.lens}
                onChange={(e) => setNewItem({ ...newItem, lens: e.target.value })}
                placeholder="50mm f/1.4 Summilux"
                className="w-full px-4 py-2.5 rounded-xl bg-black/40 border border-stone-700 text-white focus:outline-none focus:border-brand-gold"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-3.5 bg-brand-gold hover:bg-[#b59871] text-white font-semibold uppercase tracking-wider rounded-full transition-all mt-2"
          >
            Add Image To Portfolio
          </button>
        </form>
      )}

      {/* Grid of Current Images */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {portfolio.map((item) => (
          <div key={item.id} className="bg-brand-darkSlate rounded-2xl overflow-hidden border border-stone-800 flex flex-col justify-between group">
            <div className="relative h-48 bg-black overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-md text-[10px] uppercase tracking-wider text-brand-gold font-semibold">
                {item.category}
              </div>
            </div>

            <div className="p-4 space-y-2">
              <h4 className="font-serif text-lg text-white font-normal">{item.title}</h4>
              <p className="text-[11px] text-stone-400 font-light">{item.location}</p>
              
              <div className="pt-3 border-t border-stone-800 flex items-center justify-between">
                <button
                  onClick={() => toggleFeatured(item.id)}
                  className={`flex items-center gap-1 text-[11px] font-medium ${
                    item.featured ? 'text-amber-400' : 'text-stone-500'
                  }`}
                >
                  <Star className={`w-3.5 h-3.5 ${item.featured ? 'fill-amber-400' : ''}`} />
                  <span>{item.featured ? 'Featured' : 'Standard'}</span>
                </button>

                <button
                  onClick={() => deletePhoto(item.id)}
                  className="p-1.5 rounded bg-rose-500/10 text-rose-400 hover:bg-rose-500/20 transition-colors"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
