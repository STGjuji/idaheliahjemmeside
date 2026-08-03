import React, { useState } from 'react';
import { Calendar as CalendarIcon, Plus, CheckCircle2, Clock, MapPin, User, Trash2, Edit3, X, AlertCircle } from 'lucide-react';

export default function CalendarManager({ bookings, setBookings }) {
  const [showAddModal, setShowAddModal] = useState(false);
  const [filterStatus, setFilterStatus] = useState('Alle');
  
  const [newBooking, setNewBooking] = useState({
    clientName: '',
    clientEmail: '',
    clientPhone: '',
    serviceType: 'Eksklusivt Heldagsbryllup',
    date: new Date().toISOString().split('T')[0],
    timeSlot: '10:00 - 22:00',
    location: 'København, Danmark',
    priceDKK: 28000,
    status: 'Bekræftet',
    notes: ''
  });

  const handleAddBooking = (e) => {
    e.preventDefault();
    if (!newBooking.clientName || !newBooking.date) return;

    const created = {
      ...newBooking,
      id: `BKG-${Date.now()}`,
      paidDeposit: true
    };

    setBookings([created, ...bookings]);
    setShowAddModal(false);
    setNewBooking({
      clientName: '',
      clientEmail: '',
      clientPhone: '',
      serviceType: 'Eksklusivt Heldagsbryllup',
      date: new Date().toISOString().split('T')[0],
      timeSlot: '10:00 - 22:00',
      location: 'København, Danmark',
      priceDKK: 28000,
      status: 'Bekræftet',
      notes: ''
    });
  };

  const updateStatus = (id, newStatus) => {
    setBookings(bookings.map(b => b.id === id ? { ...b, status: newStatus } : b));
  };

  const deleteBooking = (id) => {
    if (confirm('Er du sikker på, at du vil fjerne denne aftale fra din kalender?')) {
      setBookings(bookings.filter(b => b.id !== id));
    }
  };

  const filteredBookings = filterStatus === 'Alle'
    ? bookings
    : bookings.filter(b => b.status === filterStatus);

  const getStatusBadge = (status) => {
    switch (status) {
      case 'Bekræftet':
        return <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-[11px] font-semibold uppercase tracking-wider flex items-center gap-1"><CheckCircle2 className="w-3 h-3" /> Bekræftet</span>;
      case 'Afventer Forespørgsel':
        return <span className="px-3 py-1 rounded-full bg-amber-500/20 text-amber-400 border border-amber-500/30 text-[11px] font-semibold uppercase tracking-wider flex items-center gap-1"><Clock className="w-3 h-3" /> Afventer Forespørgsel</span>;
      case 'Gennemført':
        return <span className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-400 border border-blue-500/30 text-[11px] font-semibold uppercase tracking-wider flex items-center gap-1"><CheckCircle2 className="w-3 h-3" /> Gennemført</span>;
      case 'Blokeret Dato':
        return <span className="px-3 py-1 rounded-full bg-rose-500/20 text-rose-400 border border-rose-500/30 text-[11px] font-semibold uppercase tracking-wider flex items-center gap-1"><AlertCircle className="w-3 h-3" /> Blokeret Dato / Ferie</span>;
      default:
        return null;
    }
  };

  return (
    <div className="space-y-6">
      
      {/* Action Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-brand-darkSlate p-6 rounded-2xl border border-stone-800">
        <div>
          <h2 className="font-serif text-2xl text-white font-normal">Idas Optagelses- & Kalenderoversigt</h2>
          <p className="text-xs text-stone-400 font-light mt-1">
            Administrer fotograferingsaftaler, godkend hjemmesideforespørgsler og marker blokerede feriedatoer.
          </p>
        </div>

        <div className="flex items-center gap-3 w-full sm:w-auto">
          {/* Status Filter */}
          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className="px-4 py-2.5 rounded-full bg-black/40 border border-stone-700 text-stone-300 text-xs focus:outline-none focus:border-brand-gold"
          >
            <option value="Alle">Alle Statusser</option>
            <option value="Bekræftet">Bekræftet</option>
            <option value="Afventer Forespørgsel">Afventer Forespørgsel</option>
            <option value="Gennemført">Gennemført</option>
            <option value="Blokeret Dato">Blokeret Dato</option>
          </select>

          <button
            onClick={() => setShowAddModal(true)}
            className="px-5 py-2.5 rounded-full bg-brand-gold hover:bg-[#b59871] text-white text-xs font-semibold uppercase tracking-wider flex items-center gap-2 transition-colors shrink-0 shadow-md"
          >
            <Plus className="w-4 h-4" />
            <span>Tilføj Ny Session</span>
          </button>
        </div>
      </div>

      {/* Bookings List Cards */}
      <div className="grid grid-cols-1 gap-4">
        {filteredBookings.map((b) => (
          <div
            key={b.id}
            className="bg-brand-darkSlate rounded-2xl p-6 border border-stone-800 shadow-sm hover:border-stone-700 transition-all flex flex-col lg:flex-row lg:items-center justify-between gap-6"
          >
            <div className="space-y-3">
              <div className="flex flex-wrap items-center gap-3">
                <span className="font-mono text-xs text-stone-500 font-semibold">{b.id}</span>
                {getStatusBadge(b.status)}
                <span className="text-xs font-semibold text-brand-gold bg-brand-gold/10 px-2.5 py-0.5 rounded-md">
                  {b.serviceType}
                </span>
              </div>

              <div>
                <h3 className="font-serif text-2xl text-white font-normal">{b.clientName}</h3>
                <p className="text-xs text-stone-300 font-light mt-1 flex flex-wrap items-center gap-4">
                  <span className="flex items-center gap-1.5 text-stone-300">
                    <CalendarIcon className="w-3.5 h-3.5 text-brand-gold" />
                    <strong className="text-white">{b.date}</strong> ({b.timeSlot})
                  </span>
                  <span className="flex items-center gap-1.5 text-stone-300">
                    <MapPin className="w-3.5 h-3.5 text-brand-gold" />
                    {b.location}
                  </span>
                  <span className="flex items-center gap-1.5 text-stone-300">
                    <User className="w-3.5 h-3.5 text-brand-gold" />
                    {b.clientEmail} • {b.clientPhone}
                  </span>
                </p>
              </div>

              {b.notes && (
                <p className="text-xs text-stone-400 font-light italic bg-black/30 p-3 rounded-xl border border-white/5 max-w-3xl">
                  "{b.notes}"
                </p>
              )}
            </div>

            {/* Price & Quick Controls */}
            <div className="flex flex-col sm:flex-row lg:flex-col items-start lg:items-end justify-between gap-4 border-t lg:border-t-0 pt-4 lg:pt-0 border-stone-800">
              <div className="text-left lg:text-right">
                <span className="text-[10px] text-stone-400 uppercase tracking-widest block">Kontraktværdi</span>
                <span className="font-serif text-2xl text-emerald-400 font-medium">
                  {b.priceDKK.toLocaleString('da-DK')} DKK
                </span>
              </div>

              <div className="flex items-center gap-2">
                <select
                  value={b.status}
                  onChange={(e) => updateStatus(b.id, e.target.value)}
                  className="px-3 py-1.5 rounded-lg bg-black/60 border border-stone-700 text-stone-300 text-xs focus:outline-none focus:border-brand-gold"
                >
                  <option value="Bekræftet">Marker Bekræftet</option>
                  <option value="Afventer Forespørgsel">Marker Afventende</option>
                  <option value="Gennemført">Marker Gennemført</option>
                  <option value="Blokeret Dato">Marker Blokeret</option>
                </select>

                <button
                  onClick={() => deleteBooking(b.id)}
                  className="p-2 rounded-lg bg-rose-500/10 text-rose-400 hover:bg-rose-500/20 transition-colors"
                  title="Slet aftale"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>

          </div>
        ))}
      </div>

      {/* Modal Add New Booking */}
      {showAddModal && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-brand-darkSlate text-white rounded-3xl max-w-xl w-full p-8 border border-stone-800 shadow-2xl relative">
            <button
              onClick={() => setShowAddModal(false)}
              className="absolute top-6 right-6 text-stone-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            <h3 className="font-serif text-2xl font-normal text-white mb-6">Planlæg Ny Optagelse / Bloker Dato</h3>

            <form onSubmit={handleAddBooking} className="space-y-4 text-xs">
              <div>
                <label className="block text-stone-300 mb-1 font-semibold">Kundenavn / Begivenhedstitel *</label>
                <input
                  type="text"
                  required
                  value={newBooking.clientName}
                  onChange={(e) => setNewBooking({ ...newBooking, clientName: e.target.value })}
                  placeholder="f.eks. Vogue Denmark Optagelse"
                  className="w-full px-4 py-3 rounded-xl bg-black/40 border border-stone-700 text-white focus:outline-none focus:border-brand-gold"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-stone-300 mb-1 font-semibold">E-mailadresse</label>
                  <input
                    type="email"
                    value={newBooking.clientEmail}
                    onChange={(e) => setNewBooking({ ...newBooking, clientEmail: e.target.value })}
                    placeholder="klient@example.dk"
                    className="w-full px-4 py-3 rounded-xl bg-black/40 border border-stone-700 text-white focus:outline-none focus:border-brand-gold"
                  />
                </div>

                <div>
                  <label className="block text-stone-300 mb-1 font-semibold">Telefonnummer</label>
                  <input
                    type="tel"
                    value={newBooking.clientPhone}
                    onChange={(e) => setNewBooking({ ...newBooking, clientPhone: e.target.value })}
                    placeholder="+45 28 00 00 00"
                    className="w-full px-4 py-3 rounded-xl bg-black/40 border border-stone-700 text-white focus:outline-none focus:border-brand-gold"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-stone-300 mb-1 font-semibold">Skuddato *</label>
                  <input
                    type="date"
                    required
                    value={newBooking.date}
                    onChange={(e) => setNewBooking({ ...newBooking, date: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-black/40 border border-stone-700 text-white focus:outline-none focus:border-brand-gold"
                  />
                </div>

                <div>
                  <label className="block text-stone-300 mb-1 font-semibold">Tidsrum</label>
                  <input
                    type="text"
                    value={newBooking.timeSlot}
                    onChange={(e) => setNewBooking({ ...newBooking, timeSlot: e.target.value })}
                    placeholder="10:00 - 18:00"
                    className="w-full px-4 py-3 rounded-xl bg-black/40 border border-stone-700 text-white focus:outline-none focus:border-brand-gold"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-stone-300 mb-1 font-semibold">Ydelsestype</label>
                  <input
                    type="text"
                    value={newBooking.serviceType}
                    onChange={(e) => setNewBooking({ ...newBooking, serviceType: e.target.value })}
                    placeholder="f.eks. Editorial Modeoptagelse"
                    className="w-full px-4 py-3 rounded-xl bg-black/40 border border-stone-700 text-white focus:outline-none focus:border-brand-gold"
                  />
                </div>

                <div>
                  <label className="block text-stone-300 mb-1 font-semibold">Samlet Pris (DKK)</label>
                  <input
                    type="number"
                    value={newBooking.priceDKK}
                    onChange={(e) => setNewBooking({ ...newBooking, priceDKK: parseInt(e.target.value) || 0 })}
                    className="w-full px-4 py-3 rounded-xl bg-black/40 border border-stone-700 text-white focus:outline-none focus:border-brand-gold"
                  />
                </div>
              </div>

              <div>
                <label className="block text-stone-300 mb-1 font-semibold">Lokation / Sted</label>
                <input
                  type="text"
                  value={newBooking.location}
                  onChange={(e) => setNewBooking({ ...newBooking, location: e.target.value })}
                  placeholder="Kokkedal Slot, København"
                  className="w-full px-4 py-3 rounded-xl bg-black/40 border border-stone-700 text-white focus:outline-none focus:border-brand-gold"
                />
              </div>

              <div>
                <label className="block text-stone-300 mb-1 font-semibold">Initial Status</label>
                <select
                  value={newBooking.status}
                  onChange={(e) => setNewBooking({ ...newBooking, status: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-black/40 border border-stone-700 text-white focus:outline-none focus:border-brand-gold"
                >
                  <option value="Bekræftet">Bekræftet</option>
                  <option value="Afventer Forespørgsel">Afventer Forespørgsel</option>
                  <option value="Blokeret Dato">Blokeret Dato / Ferie</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-brand-gold hover:bg-[#b59871] text-white text-xs font-semibold uppercase tracking-widest rounded-full transition-all mt-4"
              >
                Gem i Kalender
              </button>
            </form>
          </div>
        </div>
      )}

    </div>
  );
}
