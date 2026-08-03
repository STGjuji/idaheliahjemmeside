import React from 'react';
import { Globe, ShieldCheck, CheckCircle2, Server, ArrowRight, Copy, Terminal } from 'lucide-react';

export default function DomainDeployGuide() {
  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    alert(`Copied to clipboard: ${text}`);
  };

  return (
    <div className="bg-brand-darkSlate rounded-3xl p-8 border border-stone-800 space-y-8">
      
      <div className="space-y-2">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-gold/10 text-brand-gold text-xs font-semibold uppercase tracking-wider">
          <Globe className="w-3.5 h-3.5" />
          Domain Setup & Launch Protocol
        </div>
        <h2 className="font-serif text-3xl font-normal text-white">
          Deploying to www.idahelia.dk
        </h2>
        <p className="text-xs text-stone-300 font-light max-w-2xl">
          This website is built and pre-configured to go live under <strong className="text-white">www.idahelia.dk</strong> as soon as the domain is registered. Follow these 3 simple steps when you purchase the domain.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Step 1 */}
        <div className="bg-black/40 p-6 rounded-2xl border border-stone-800 space-y-4">
          <div className="w-8 h-8 rounded-full bg-brand-gold text-white flex items-center justify-center font-bold text-sm">
            1
          </div>
          <h3 className="font-serif text-lg font-normal text-white">Domain Registration</h3>
          <p className="text-xs text-stone-400 font-light leading-relaxed">
            Register <strong className="text-stone-200">idahelia.dk</strong> via a Danish domain registrar (such as Simply.com, One.com, or DK Hostmaster / Punktum.dk).
          </p>
        </div>

        {/* Step 2 */}
        <div className="bg-black/40 p-6 rounded-2xl border border-stone-800 space-y-4">
          <div className="w-8 h-8 rounded-full bg-brand-gold text-white flex items-center justify-center font-bold text-sm">
            2
          </div>
          <h3 className="font-serif text-lg font-normal text-white">DNS Records Config</h3>
          <p className="text-xs text-stone-400 font-light leading-relaxed">
            In your DNS settings dashboard, add the following two records to direct traffic to your website host (Vercel / Netlify / Cloudflare):
          </p>
        </div>

        {/* Step 3 */}
        <div className="bg-black/40 p-6 rounded-2xl border border-stone-800 space-y-4">
          <div className="w-8 h-8 rounded-full bg-brand-gold text-white flex items-center justify-center font-bold text-sm">
            3
          </div>
          <h3 className="font-serif text-lg font-normal text-white">SSL & Go Live</h3>
          <p className="text-xs text-stone-400 font-light leading-relaxed">
            Automatic HTTPS / SSL security certificates will issue within minutes, establishing encrypted high-speed access globally.
          </p>
        </div>

      </div>

      {/* DNS Records Table */}
      <div className="bg-black/60 p-6 rounded-2xl border border-stone-800 space-y-4">
        <h4 className="text-xs font-bold uppercase tracking-wider text-brand-gold">DNS Records Setup Table</h4>
        
        <div className="overflow-x-auto text-xs font-mono">
          <table className="w-full text-left">
            <thead className="text-stone-400 uppercase text-[10px] border-b border-stone-800">
              <tr>
                <th className="pb-3">Type</th>
                <th className="pb-3">Host / Name</th>
                <th className="pb-3">Target / Value</th>
                <th className="pb-3 text-right">Action</th>
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
                    Copy Value
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
                    Copy Value
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
            <span>Ready for One-Click Deployment</span>
          </div>
          <p className="text-xs text-stone-400 font-light">
            You can deploy this codebase for free on Vercel or Netlify instantly using <code className="bg-black px-2 py-0.5 rounded text-brand-gold">npx vercel</code>.
          </p>
        </div>

        <button
          onClick={() => copyToClipboard('npx vercel --prod')}
          className="px-5 py-2.5 rounded-full bg-brand-gold hover:bg-[#b59871] text-white text-xs font-semibold uppercase tracking-wider flex items-center gap-2 transition-colors shrink-0"
        >
          <Copy className="w-3.5 h-3.5" />
          <span>Copy Deploy Command</span>
        </button>
      </div>

    </div>
  );
}
