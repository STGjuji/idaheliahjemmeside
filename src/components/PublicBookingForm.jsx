import React, { useState } from 'react';
import { Calendar as CalendarIcon, CheckCircle2, Send, User, Mail, Phone, MapPin, AlertCircle } from 'lucide-react';
import { allPackageNames } from '../data/pricingData';

const FORM_ENDPOINT = 'https://formsubmit.co/ajax/947d8c20cf81c13ae64d91035a52ba40';

export default function PublicBookingForm({ preselectedPackage }) {
  const packageOptions = preselectedPackage && !allPackageNames.includes(preselectedPackage)
    ? [...allPackageNames, preselectedPackage]
    : allPackageNames;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    serviceType: preselectedPackage || allPackageNames[0],
    location: '',
    notes: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [status, setStatus] = useState('idle'); // 'idle' | 'sending' | 'error'

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.date) return;

    setStatus('sending');

    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify({
          Navn: formData.name,
          Email: formData.email,
          Telefon: formData.phone || 'Ikke angivet',
          Dato: formData.date,
          Pakke: formData.serviceType,
          Lokation: formData.location || 'Ikke angivet',
          Besked: formData.notes || 'Ingen yderligere bemærkninger',
          _subject: `Ny bookingforespørgsel fra ${formData.name}`,
          _template: 'table',
          _captcha: 'false',
          _replyto: formData.email
        })
      });

      if (!response.ok) throw new Error('Request failed');

      setStatus('idle');
      setSubmitted(true);
    } catch (err) {
      setStatus('error');
    }
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
                Tak <span className="font-medium text-brand-charcoal">{formData.name}</span>. Din datoforespørgsel til <span className="font-medium text-brand-charcoal">{formData.date}</span> er nu sendt til Ida.
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
                  Book din gravidfotografering, børnesession, dit bryllup eller din portrætfotografering – i Slagelse eller på hele Sjælland.
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
                    {packageOptions.map((name) => (
                      <option key={name} value={name}>
                        {name}
                      </option>
                    ))}
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
                    placeholder="f.eks. Slagelse / Sjælland"
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

              {status === 'error' && (
                <div className="flex items-start gap-3 p-4 rounded-xl border border-red-200 bg-red-50 text-red-700 text-xs font-light">
                  <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                  <span>
                    Der skete en fejl under afsendelsen. Prøv igen om lidt, eller kontakt Ida direkte.
                  </span>
                </div>
              )}

              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full py-4 bg-brand-charcoal hover:bg-brand-darkSlate text-white text-xs font-medium uppercase tracking-[0.2em] rounded-full transition-all flex items-center justify-center gap-2 shadow-lg disabled:opacity-60 disabled:cursor-not-allowed"
              >
                <Send className="w-4 h-4 text-brand-gold" />
                <span>{status === 'sending' ? 'Sender...' : 'Send Forespørgsel til Ida Helia'}</span>
              </button>

            </form>
          )}

        </div>
      </div>
    </section>
  );
}
