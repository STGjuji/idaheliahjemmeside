import React, { useState, useEffect } from 'react';
import { Clock, Play, Pause, RotateCcw, Plus, DollarSign, Download, Trash2, FileText, CheckCircle, Sparkles } from 'lucide-react';

export default function HoursTracker({ hoursLog, setHoursLog }) {
  // Live Timer State
  const [timerRunning, setTimerRunning] = useState(false);
  const [timerSeconds, setTimerSeconds] = useState(0);
  const [timerProject, setTimerProject] = useState('Aktiv Skud- / Redigeringssession');
  const [timerCategory, setTimerCategory] = useState('Farveredigering & Retouchering');
  const [timerRate, setTimerRate] = useState(950);

  // Manual Log Form State
  const [formData, setFormData] = useState({
    date: new Date().toISOString().split('T')[0],
    projectName: '',
    category: 'Fotografering / Skud',
    hours: '',
    ratePerHourDKK: 1200,
    description: '',
    billable: true
  });

  const [selectedFilter, setSelectedFilter] = useState('Alle');

  // Timer Tick Effect
  useEffect(() => {
    let interval = null;
    if (timerRunning) {
      interval = setInterval(() => {
        setTimerSeconds((prev) => prev + 1);
      }, 1000);
    } else if (!timerRunning && timerSeconds !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [timerRunning, timerSeconds]);

  // Format seconds to HH:MM:SS
  const formatTime = (totalSecs) => {
    const hrs = Math.floor(totalSecs / 3600);
    const mins = Math.floor((totalSecs % 3600) / 60);
    const secs = totalSecs % 60;
    return `${hrs.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  // Save live timer to hours log
  const handleSaveTimer = () => {
    if (timerSeconds < 60) {
      alert('Registreret tid skal være mindst 1 minut.');
      return;
    }
    const calculatedHours = parseFloat((timerSeconds / 3600).toFixed(2));
    const newEntry = {
      id: `LOG-${Date.now()}`,
      date: new Date().toISOString().split('T')[0],
      projectName: timerProject || 'Aktiv Session',
      category: timerCategory,
      hours: calculatedHours,
      ratePerHourDKK: timerRate,
      description: `Live tidssession (${formatTime(timerSeconds)})`,
      billable: true
    };

    setHoursLog([newEntry, ...hoursLog]);
    setTimerRunning(false);
    setTimerSeconds(0);
    alert(`Gemte ${calculatedHours} timer (${(calculatedHours * timerRate).toLocaleString('da-DK')} DKK) i din timeregistrering!`);
  };

  // Manual Form Submission
  const handleManualSubmit = (e) => {
    e.preventDefault();
    if (!formData.projectName || !formData.hours) return;

    const newEntry = {
      id: `LOG-${Date.now()}`,
      date: formData.date,
      projectName: formData.projectName,
      category: formData.category,
      hours: parseFloat(formData.hours),
      ratePerHourDKK: parseInt(formData.ratePerHourDKK) || 0,
      description: formData.description,
      billable: formData.billable
    };

    setHoursLog([newEntry, ...hoursLog]);
    setFormData({
      date: new Date().toISOString().split('T')[0],
      projectName: '',
      category: 'Fotografering / Skud',
      hours: '',
      ratePerHourDKK: 1200,
      description: '',
      billable: true
    });
  };

  const deleteEntry = (id) => {
    if (confirm('Vil du slette denne timeregistrering?')) {
      setHoursLog(hoursLog.filter(item => item.id !== id));
    }
  };

  // Export CSV Action
  const exportCSV = () => {
    const headers = ['Log ID', 'Dato', 'Projektnavn', 'Kategori', 'Timer', 'Timetarif DKK', 'I alt DKK', 'Fakturerbar', 'Beskrivelse'];
    const rows = hoursLog.map(item => [
      item.id,
      item.date,
      `"${item.projectName}"`,
      `"${item.category}"`,
      item.hours,
      item.ratePerHourDKK,
      item.hours * item.ratePerHourDKK,
      item.billable ? 'Ja' : 'Nej',
      `"${item.description || ''}"`
    ]);

    const csvContent = "data:text/csv;charset=utf-8," + [headers.join(','), ...rows.map(e => e.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `Ida_Helia_Timeregistrering_${new Date().toISOString().split('T')[0]}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const filteredLogs = selectedFilter === 'Alle'
    ? hoursLog
    : hoursLog.filter(item => item.category === selectedFilter);

  const totalBillableDKK = hoursLog
    .filter(item => item.billable)
    .reduce((sum, item) => sum + (item.hours * item.ratePerHourDKK), 0);

  const totalHoursSum = hoursLog.reduce((sum, item) => sum + item.hours, 0);

  return (
    <div className="space-y-8">
      
      {/* Top Stopwatch & Timer Panel */}
      <div className="bg-gradient-to-r from-brand-darkSlate via-[#2D2A26] to-brand-darkSlate rounded-3xl p-8 border border-brand-gold/30 shadow-2xl relative overflow-hidden">
        
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          
          <div className="space-y-2 text-center lg:text-left">
            <span className="text-xs tracking-[0.25em] text-brand-gold uppercase font-semibold flex items-center justify-center lg:justify-start gap-2">
              <Sparkles className="w-4 h-4" />
              Live Studie-Stopur
            </span>
            <h2 className="font-serif text-3xl font-normal text-white">
              Registrer Real-time Skud- & Redigeringstimer
            </h2>
            <p className="text-xs text-stone-300 font-light max-w-md">
              Start stopuret under fotografering eller farveredigering for automatisk beregning af timer og honorar i DKK.
            </p>

            {/* Config inputs for timer */}
            <div className="pt-3 grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
              <input
                type="text"
                value={timerProject}
                onChange={(e) => setTimerProject(e.target.value)}
                placeholder="Projekt / Kundenavn"
                className="px-3 py-2 rounded-xl bg-black/40 border border-stone-700 text-white focus:outline-none focus:border-brand-gold"
              />
              <select
                value={timerCategory}
                onChange={(e) => setTimerCategory(e.target.value)}
                className="px-3 py-2 rounded-xl bg-black/40 border border-stone-700 text-white focus:outline-none focus:border-brand-gold"
              >
                <option value="Fotografering / Skud">Fotografering / Skud</option>
                <option value="Farveredigering & Retouchering">Farveredigering & Retouchering</option>
                <option value="Før-bryllup Rådgivning">Før-bryllup Rådgivning</option>
                <option value="Kommerciel Retouchering">Kommerciel Retouchering</option>
              </select>
              <input
                type="number"
                value={timerRate}
                onChange={(e) => setTimerRate(parseInt(e.target.value) || 0)}
                placeholder="Takst DKK/t"
                className="px-3 py-2 rounded-xl bg-black/40 border border-stone-700 text-white focus:outline-none focus:border-brand-gold"
              />
            </div>
          </div>

          {/* Stopwatch Digital Display */}
          <div className="flex flex-col items-center justify-center bg-black/60 p-6 rounded-2xl border border-stone-800 shadow-inner w-full lg:w-auto">
            <div className="font-mono text-5xl md:text-6xl font-bold tracking-widest text-brand-gold mb-4">
              {formatTime(timerSeconds)}
            </div>

            <div className="flex items-center gap-3">
              {!timerRunning ? (
                <button
                  onClick={() => setTimerRunning(true)}
                  className="px-6 py-3 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white text-xs font-semibold uppercase tracking-wider flex items-center gap-2 transition-colors shadow-lg"
                >
                  <Play className="w-4 h-4" />
                  <span>Start Stopur</span>
                </button>
              ) : (
                <button
                  onClick={() => setTimerRunning(false)}
                  className="px-6 py-3 rounded-full bg-amber-500 hover:bg-amber-600 text-white text-xs font-semibold uppercase tracking-wider flex items-center gap-2 transition-colors shadow-lg"
                >
                  <Pause className="w-4 h-4" />
                  <span>Pause Stopur</span>
                </button>
              )}

              <button
                onClick={() => {
                  setTimerRunning(false);
                  setTimerSeconds(0);
                }}
                className="p-3 rounded-full bg-stone-800 text-stone-300 hover:text-white transition-colors"
                title="Nulstil Stopur"
              >
                <RotateCcw className="w-4 h-4" />
              </button>

              <button
                onClick={handleSaveTimer}
                disabled={timerSeconds === 0}
                className="px-5 py-3 rounded-full bg-brand-gold hover:bg-[#b59871] text-white text-xs font-semibold uppercase tracking-wider flex items-center gap-2 transition-colors disabled:opacity-40"
              >
                <CheckCircle className="w-4 h-4" />
                <span>Gem Registrering</span>
              </button>
            </div>
          </div>

        </div>

      </div>

      {/* Manual Hour Log Form & Summary */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Form Column */}
        <div className="lg:col-span-5 bg-brand-darkSlate rounded-2xl p-6 border border-stone-800 space-y-4">
          <h3 className="font-serif text-xl text-white font-normal">Manuel Timeregistrering</h3>

          <form onSubmit={handleManualSubmit} className="space-y-4 text-xs">
            <div>
              <label className="block text-stone-300 mb-1 font-semibold">Skud / Projekt / Kunde *</label>
              <input
                type="text"
                required
                placeholder="f.eks. Kokkedal Slot Bryllupsredigering"
                value={formData.projectName}
                onChange={(e) => setFormData({ ...formData, projectName: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl bg-black/40 border border-stone-700 text-white focus:outline-none focus:border-brand-gold"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-stone-300 mb-1 font-semibold">Dato</label>
                <input
                  type="date"
                  required
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-black/40 border border-stone-700 text-white focus:outline-none focus:border-brand-gold"
                />
              </div>

              <div>
                <label className="block text-stone-300 mb-1 font-semibold">Kategori</label>
                <select
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-black/40 border border-stone-700 text-white focus:outline-none focus:border-brand-gold"
                >
                  <option value="Fotografering / Skud">Fotografering / Skud</option>
                  <option value="Farveredigering & Retouchering">Farveredigering & Retouchering</option>
                  <option value="Før-bryllup Rådgivning">Før-bryllup Rådgivning</option>
                  <option value="Kommerciel Retouchering">Kommerciel Retouchering</option>
                  <option value="Administration">Administration / Studie</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-stone-300 mb-1 font-semibold">Timer (f.eks. 4.5) *</label>
                <input
                  type="number"
                  step="0.5"
                  required
                  placeholder="4.5"
                  value={formData.hours}
                  onChange={(e) => setFormData({ ...formData, hours: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-black/40 border border-stone-700 text-white focus:outline-none focus:border-brand-gold"
                />
              </div>

              <div>
                <label className="block text-stone-300 mb-1 font-semibold">Takst (DKK / t)</label>
                <input
                  type="number"
                  placeholder="1200"
                  value={formData.ratePerHourDKK}
                  onChange={(e) => setFormData({ ...formData, ratePerHourDKK: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-black/40 border border-stone-700 text-white focus:outline-none focus:border-brand-gold"
                />
              </div>
            </div>

            <div>
              <label className="block text-stone-300 mb-1 font-semibold">Beskrivelse / Noter</label>
              <textarea
                rows="2"
                placeholder="Udvælgelse af 600 RAW-filer, forsidebillede redigering..."
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl bg-black/40 border border-stone-700 text-white focus:outline-none focus:border-brand-gold"
              />
            </div>

            <div className="flex items-center gap-2 pt-2">
              <input
                type="checkbox"
                id="billable"
                checked={formData.billable}
                onChange={(e) => setFormData({ ...formData, billable: e.target.checked })}
                className="accent-brand-gold w-4 h-4 rounded cursor-pointer"
              />
              <label htmlFor="billable" className="text-stone-300 cursor-pointer font-medium">
                Marker som Fakturerbar Klienttid
              </label>
            </div>

            <button
              type="submit"
              className="w-full py-3.5 bg-brand-gold hover:bg-[#b59871] text-white font-semibold uppercase tracking-wider rounded-full transition-all mt-2"
            >
              Gem Timeregistrering
            </button>
          </form>
        </div>

        {/* History Table & Export */}
        <div className="lg:col-span-7 space-y-4">
          <div className="bg-brand-darkSlate p-6 rounded-2xl border border-stone-800 flex items-center justify-between">
            <div>
              <h3 className="font-serif text-xl text-white font-normal">Registreret Timehistorik</h3>
              <p className="text-xs text-stone-400 font-light">
                I alt: <strong className="text-white">{totalHoursSum.toFixed(1)} timer</strong> • Fakturerbar Værdi: <strong className="text-emerald-400">{totalBillableDKK.toLocaleString('da-DK')} DKK</strong>
              </p>
            </div>

            <button
              onClick={exportCSV}
              className="px-4 py-2 rounded-full bg-black/40 border border-stone-700 hover:border-brand-gold text-stone-300 hover:text-white text-xs tracking-wider uppercase font-medium transition-colors flex items-center gap-2"
            >
              <Download className="w-3.5 h-3.5 text-brand-gold" />
              <span>Eksporter CSV</span>
            </button>
          </div>

          {/* Table */}
          <div className="bg-brand-darkSlate rounded-2xl border border-stone-800 overflow-x-auto">
            <table className="w-full text-left text-xs text-stone-300">
              <thead className="bg-black/40 text-stone-400 uppercase text-[10px] tracking-wider border-b border-stone-800">
                <tr>
                  <th className="p-4">Dato</th>
                  <th className="p-4">Projekt & Kategori</th>
                  <th className="p-4">Timer</th>
                  <th className="p-4">Takst</th>
                  <th className="p-4">I alt DKK</th>
                  <th className="p-4 text-right">Handlinger</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-800">
                {hoursLog.map((log) => {
                  const lineSum = log.hours * log.ratePerHourDKK;
                  return (
                    <tr key={log.id} className="hover:bg-black/20 transition-colors">
                      <td className="p-4 font-mono text-stone-400">{log.date}</td>
                      <td className="p-4">
                        <span className="font-medium text-white block">{log.projectName}</span>
                        <span className="text-[11px] text-stone-400 font-light">{log.category}</span>
                      </td>
                      <td className="p-4 font-semibold text-white">{log.hours} t</td>
                      <td className="p-4 text-stone-400">{log.ratePerHourDKK.toLocaleString('da-DK')} DKK</td>
                      <td className="p-4 font-medium text-emerald-400">
                        {log.billable ? `${lineSum.toLocaleString('da-DK')} DKK` : 'Ikke-fakturerbar'}
                      </td>
                      <td className="p-4 text-right">
                        <button
                          onClick={() => deleteEntry(log.id)}
                          className="p-1.5 rounded bg-rose-500/10 text-rose-400 hover:bg-rose-500/20 transition-colors"
                          title="Slet registrering"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

        </div>

      </div>

    </div>
  );
}
