import React from 'react';
import { Globe, ShieldCheck, CheckCircle2, Server, ArrowRight, Copy, Terminal } from 'lucide-react';

export default function DomainDeployGuide() {
  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    alert(`Kopieret til udklipsholder: ${text}`);
  };

  return (
    <div className="bg-brand-darkSlate rounded-3xl p-8 border border-stone-800 space-y-8">
      
      <div className="space-y-2">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-gold/10 text-brand-gold text-xs font-semibold uppercase tracking-wider">
          <Globe className="w-3.5 h-3.5" />
          Domæneopsætning & Lanceringsprotokol
        </div>
        <h2 className="font-serif text-3xl font-normal text-white">
          Udrulning til www.idahelia.dk
        </h2>
        <p className="text-xs text-stone-300 font-light max-w-2xl">
          Denne hjemmeside er færdigbygget og forhåndskonfigureret til at gå live under <strong className="text-white">www.idahelia.dk</strong>, så snart domænet er købt. Følg disse 3 enkle trin, når domænet registreres.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Step 1 */}
        <div className="bg-black/40 p-6 rounded-2xl border border-stone-800 space-y-4">
          <div className="w-8 h-8 rounded-full bg-brand-gold text-white flex items-center justify-center font-bold text-sm">
            1
          </div>
          <h3 className="font-serif text-lg font-normal text-white">Domæneregistrering</h3>
          <p className="text-xs text-stone-400 font-light leading-relaxed">
            Køb og registrer domænet <strong className="text-stone-200">idahelia.dk</strong> hos en dansk domæneudbyder (f.eks. Simply.com, One.com eller Punktum.dk / DK Hostmaster).
          </p>
        </div>

        {/* Step 2 */}
        <div className="bg-black/40 p-6 rounded-2xl border border-stone-800 space-y-4">
          <div className="w-8 h-8 rounded-full bg-brand-gold text-white flex items-center justify-center font-bold text-sm">
            2
          </div>
          <h3 className="font-serif text-lg font-normal text-white">DNS-post Konfiguration</h3>
          <p className="text-xs text-stone-400 font-light leading-relaxed">
            I dit DNS-kontrolpanel tilføjes følgende to DNS-poster for at pege domænet til webhosten (f.eks. Vercel, Netlify eller Cloudflare):
          </p>
        </div>

        {/* Step 3 */}
        <div className="bg-black/40 p-6 rounded-2xl border border-stone-800 space-y-4">
          <div className="w-8 h-8 rounded-full bg-brand-gold text-white flex items-center justify-center font-bold text-sm">
            3
          </div>
          <h3 className="font-serif text-lg font-normal text-white">SSL & Gå Live</h3>
          <p className="text-xs text-stone-400 font-light leading-relaxed">
            Automatisk SSL-sikkerhedscertifikat (HTTPS) udstedes inden for få minutter for beskyttet og lynhurtig adgang.
          </p>
        </div>

      </div>

      {/* DNS Records Table */}
      <div className="bg-black/60 p-6 rounded-2xl border border-stone-800 space-y-4">
        <h4 className="text-xs font-bold uppercase tracking-wider text-brand-gold">DNS-poster Opsætningstabel</h4>
        
        <div className="overflow-x-auto text-xs font-mono">
          <table className="w-full text-left">
            <thead className="text-stone-400 uppercase text-[10px] border-b border-stone-800">
              <tr>
                <th className="pb-3">Type</th>
                <th className="pb-3">Vært / Navn</th>
                <th className="pb-3">Værdi / Pegning</th>
                <th className="pb-3 text-right">Handling</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-800 text-stone-300">
              <tr>
                <td className="py-3 text-amber-400 font-bold">A</td>
                <td className="py-3">@ (idahelia.dk)</td>
                <td className="py-3">76.76.21.21</td>
                <td className="py-3 text-right">
                  <button
                    onClick={() => copyToClipboard('76.76.21.21')}
                    className="p-1.5 rounded bg-white/10 hover:bg-white/20 text-white font-sans text-[11px]"
                  >
                    Kopier Værdi
                  </button>
                </td>
              </tr>
              <tr>
                <td className="py-3 text-emerald-400 font-bold">CNAME</td>
                <td className="py-3">www (www.idahelia.dk)</td>
                <td className="py-3">cname.vercel-dns.com</td>
                <td className="py-3 text-right">
                  <button
                    onClick={() => copyToClipboard('cname.vercel-dns.com')}
                    className="p-1.5 rounded bg-white/10 hover:bg-white/20 text-white font-sans text-[11px]"
                  >
                    Kopier Værdi
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* One-Command Deployment */}
      <div className="bg-brand-darkSlate p-6 rounded-2xl border border-brand-gold/30 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="space-y-1">
          <div className="flex items-center gap-2 text-xs font-bold text-white">
            <Terminal className="w-4 h-4 text-brand-gold" />
            <span>Klar til Et-klik Udrulning</span>
          </div>
          <p className="text-xs text-stone-400 font-light">
            Kildekoden kan udrulles gratis på Vercel eller Netlify på få sekunder med kommandoen <code className="bg-black px-2 py-0.5 rounded text-brand-gold">npx vercel</code>.
          </p>
        </div>

        <button
          onClick={() => copyToClipboard('npx vercel --prod')}
          className="px-5 py-2.5 rounded-full bg-brand-gold hover:bg-[#b59871] text-white text-xs font-semibold uppercase tracking-wider flex items-center gap-2 transition-colors shrink-0"
        >
          <Copy className="w-3.5 h-3.5" />
          <span>Kopier Udrulningskommando</span>
        </button>
      </div>

    </div>
  );
}
