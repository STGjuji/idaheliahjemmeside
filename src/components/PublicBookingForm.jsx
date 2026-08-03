import React, { useState } from 'react';
import { Calendar as CalendarIcon, CheckCircle2, Send, Clock, User, Mail, Phone, MapPin, Sparkles } from 'lucide-react';

export default function PublicBookingForm({ onNewBookingSubmit, preselectedPackage }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    serviceType: preselectedPackage || 'Eksklusivt Heldagsbryllup',
    location: '',
    notes: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.date) return;

    const newBooking = {
      id: `BKG-WEB-${Math.floor(1000 + Math.random() * 9000)}`,
      clientName: formData.name,
      clientEmail: formData.email,
      clientPhone: formData.phone || '+45 00 00 00 00',
      serviceType: formData.serviceType,
      date: formData.date,
      timeSlot: 'Aftales ved konsultation',
      location: formData.location || 'Danmark',
      priceDKK: 24000,
      status: 'Afventer Forespørgsel',
      notes: formData.notes,
      paidDeposit: false
    };

    onNewBookingSubmit(newBooking);
    setSubmitted(true);
  };

  return (
    <section id="booking" className="py-24 bg-brand-paper">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        
        {/* Card Frame */}
        <div className="bg-white rounded-3xl p-8 md:p-12 border border-stone-200 shadow-xl relative overflow-hidden">
          
          <div className="absolute top-0 right-0 w-48 h-48 bg-brand-gold/10 rounded-full blur-3xl pointer-events-none" />

          {submitted ? (
            <div className="text-center py-12 space-y-6 animate-fade-in">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h3 className="font-serif text-3xl text-brand-charcoal font-normal">
                Mange tak! Forespørgsel Modtaget
              </h3>
              <p className="text-stone-600 text-sm max-w-md mx-auto font-light leading-relaxed">
                Tak <span className="font-medium text-brand-charcoal">{formData.name}</span>. Din datoforespørgsel til <span className="font-medium text-brand-charcoal">{formData.date}</span> er nu registreret direkte i Idas kalenderportal på <span className="text-brand-gold font-medium">www.idahelia.dk</span>.
              </p>
              <p className="text-xs text-stone-500 font-light">
                Ida vil gennemgå oplysningerne og vende tilbage inden for 24 timer.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="px-6 py-2.5 rounded-full border border-stone-300 text-xs tracking-widest uppercase font-medium hover:bg-stone-100 transition-colors"
              >
                Send Endnu en Forespørgsel
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              
              <div className="text-center max-w-xl mx-auto mb-8">
                <span className="text-xs tracking-[0.25em] uppercase text-brand-gold font-semibold mb-2 block">
                  Reserver Din Dato
                </span>
                <h2 className="font-serif text-3xl md:text-4xl text-brand-charcoal font-normal tracking-tight mb-2">
                  Direkte Bookingforespørgsel
                </h2>
                <p className="text-stone-500 text-xs md:text-sm font-light">
                  Book dit 2026/2027 bryllup, din moderedaktion eller portrætsession i Danmark eller udlandet.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* Full Name */}
                <div>
                  <label className="text-xs font-semibold uppercase tracking-wider text-brand-charcoal mb-2 flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5 text-brand-gold" />
                    Fulde Navn *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="f.eks. Freja Møller"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-stone-200 text-xs focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-all"
                  />
                </div>

                {/* Email Address */}
                <div>
                  <label className="text-xs font-semibold uppercase tracking-wider text-brand-charcoal mb-2 flex items-center gap-1.5">
                    <Mail className="w-3.5 h-3.5 text-brand-gold" />
                    E-mailadresse *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="freja@example.dk"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-stone-200 text-xs focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-all"
                  />
                </div>

                {/* Phone Number */}
                <div>
                  <label className="text-xs font-semibold uppercase tracking-wider text-brand-charcoal mb-2 flex items-center gap-1.5">
                    <Phone className="w-3.5 h-3.5 text-brand-gold" />
                    Telefonnummer
                  </label>
                  <input
                    type="tel"
                    placeholder="+45 28 00 00 00"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-stone-200 text-xs focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-all"
                  />
                </div>

                {/* Date */}
                <div>
                  <label className="text-xs font-semibold uppercase tracking-wider text-brand-charcoal mb-2 flex items-center gap-1.5">
                    <CalendarIcon className="w-3.5 h-3.5 text-brand-gold" />
                    Ønsket Dato *
                  </label>
                  <input
                    type="date"
                    required
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-stone-200 text-xs focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-all"
                  />
                </div>

                {/* Service Type */}
                <div>
                  <label className="text-xs font-semibold uppercase tracking-wider text-brand-charcoal mb-2 block">
                    Oplevelse / Pakke
                  </label>
                  <select
                    value={formData.serviceType}
                    onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-stone-200 text-xs focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-all bg-white"
                  >
                    <option value="Eksklusivt Heldagsbryllup">Eksklusivt Heldagsbryllup (10h+)</option>
                    <option value="Intimt Bryllup & Vielse">Intimt Bryllup & Vielse (5h)</option>
                    <option value="Editorial Modeoptagelse">Editorial Modeoptagelse</option>
                    <option value="Signatur Portrætsession">Signatur Portrætsession</option>
                    <option value="Erhvervskampagne">Erhvervskampagne</option>
                  </select>
                </div>

                {/* Location */}
                <div>
                  <label className="text-xs font-semibold uppercase tracking-wider text-brand-charcoal mb-2 flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-brand-gold" />
                    Sted / Lokation
                  </label>
                  <input
                    type="text"
                    placeholder="f.eks. Kokkedal Slot / Danmark"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-stone-200 text-xs focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-all"
                  />
                </div>

              </div>

              {/* Special Requests / Notes */}
              <div>
                <label className="text-xs font-semibold uppercase tracking-wider text-brand-charcoal mb-2 block">
                  Specielle Ønsker & Eventvision
                </label>
                <textarea
                  rows="4"
                  placeholder="Fortæl Ida om jeres historie, æstetiske ønsker, tidsplan eller gæster..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-stone-200 text-xs focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-all"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-brand-charcoal hover:bg-brand-darkSlate text-white text-xs font-medium uppercase tracking-[0.2em] rounded-full transition-all flex items-center justify-center gap-2 shadow-lg"
              >
                <Send className="w-4 h-4 text-brand-gold" />
                <span>Send Forespørgsel til Ida Helia</span>
              </button>

            </form>
          )}

        </div>
      </div>
    </section>
  );
}
