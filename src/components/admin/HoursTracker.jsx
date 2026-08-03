import React, { useState, useEffect } from 'react';
import { Clock, Play, Pause, RotateCcw, Plus, DollarSign, Download, Trash2, FileText, CheckCircle, Sparkles } from 'lucide-react';

export default function HoursTracker({ hoursLog, setHoursLog }) {
  // Live Timer State
  const [timerRunning, setTimerRunning] = useState(false);
  const [timerSeconds, setTimerSeconds] = useState(0);
  const [timerProject, setTimerProject] = useState('Active Shoot / Retouch Session');
  const [timerCategory, setTimerCategory] = useState('Color Grading & Retouching');
  const [timerRate, setTimerRate] = useState(950);

  // Manual Log Form State
  const [formData, setFormData] = useState({
    date: new Date().toISOString().split('T')[0],
    projectName: '',
    category: 'Shooting',
    hours: '',
    ratePerHourDKK: 1200,
    description: '',
    billable: true
  });

  const [selectedFilter, setSelectedFilter] = useState('All');

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
      alert('Logged time must be at least 1 minute.');
      return;
    }
    const calculatedHours = parseFloat((timerSeconds / 3600).toFixed(2));
    const newEntry = {
      id: `LOG-${Date.now()}`,
      date: new Date().toISOString().split('T')[0],
      projectName: timerProject || 'Active Session',
      category: timerCategory,
      hours: calculatedHours,
      ratePerHourDKK: timerRate,
      description: `Live timed session (${formatTime(timerSeconds)})`,
      billable: true
    };

    setHoursLog([newEntry, ...hoursLog]);
    setTimerRunning(false);
    setTimerSeconds(0);
    alert(`Logged ${calculatedHours} hours (${(calculatedHours * timerRate).toLocaleString('da-DK')} DKK) into your hours log!`);
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
      category: 'Shooting',
      hours: '',
      ratePerHourDKK: 1200,
      description: '',
      billable: true
    });
  };

  const deleteEntry = (id) => {
    if (confirm('Delete this hour log entry?')) {
      setHoursLog(hoursLog.filter(item => item.id !== id));
    }
  };

  // Export CSV Action
  const exportCSV = () => {
    const headers = ['Log ID', 'Date', 'Project Name', 'Category', 'Hours', 'Rate DKK/hr', 'Total Sum DKK', 'Billable', 'Description'];
    const rows = hoursLog.map(item => [
      item.id,
      item.date,
      `"${item.projectName}"`,
      `"${item.category}"`,
      item.hours,
      item.ratePerHourDKK,
      item.hours * item.ratePerHourDKK,
      item.billable ? 'Yes' : 'No',
      `"${item.description || ''}"`
    ]);

    const csvContent = "data:text/csv;charset=utf-8," + [headers.join(','), ...rows.map(e => e.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `Ida_Helia_Hours_Log_${new Date().toISOString().split('T')[0]}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const filteredLogs = selectedFilter === 'All'
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
              Live Studio Stopwatch
            </span>
            <h2 className="font-serif text-3xl font-normal text-white">
              Log Real-Time Shoot & Retouching Hours
            </h2>
            <p className="text-xs text-stone-300 font-light max-w-md">
              Start the stopwatch while shooting or color grading to automatically compute billable hours and revenue in DKK.
            </p>

            {/* Config inputs for timer */}
            <div className="pt-3 grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
              <input
                type="text"
                value={timerProject}
                onChange={(e) => setTimerProject(e.target.value)}
                placeholder="Project / Client Name"
                className="px-3 py-2 rounded-xl bg-black/40 border border-stone-700 text-white focus:outline-none focus:border-brand-gold"
              />
              <select
                value={timerCategory}
                onChange={(e) => setTimerCategory(e.target.value)}
                className="px-3 py-2 rounded-xl bg-black/40 border border-stone-700 text-white focus:outline-none focus:border-brand-gold"
              >
                <option value="Shooting">Shooting Session</option>
                <option value="Color Grading & Retouching">Color Grading & Retouching</option>
                <option value="Client Consultation">Client Consultation</option>
                <option value="Travel & Preparation">Travel & Preparation</option>
              </select>
              <input
                type="number"
                value={timerRate}
                onChange={(e) => setTimerRate(parseInt(e.target.value) || 0)}
                placeholder="Rate DKK/hr"
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
                  <span>Start Timer</span>
                </button>
              ) : (
                <button
                  onClick={() => setTimerRunning(false)}
                  className="px-6 py-3 rounded-full bg-amber-500 hover:bg-amber-600 text-white text-xs font-semibold uppercase tracking-wider flex items-center gap-2 transition-colors shadow-lg"
                >
                  <Pause className="w-4 h-4" />
                  <span>Pause Timer</span>
                </button>
              )}

              <button
                onClick={() => {
                  setTimerRunning(false);
                  setTimerSeconds(0);
                }}
                className="p-3 rounded-full bg-stone-800 text-stone-300 hover:text-white transition-colors"
                title="Reset Timer"
              >
                <RotateCcw className="w-4 h-4" />
              </button>

              <button
                onClick={handleSaveTimer}
                disabled={timerSeconds === 0}
                className="px-5 py-3 rounded-full bg-brand-gold hover:bg-[#b59871] text-white text-xs font-semibold uppercase tracking-wider flex items-center gap-2 transition-colors disabled:opacity-40"
              >
                <CheckCircle className="w-4 h-4" />
                <span>Save Entry</span>
              </button>
            </div>
          </div>

        </div>

      </div>

      {/* Manual Hour Log Form & Summary */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Form Column */}
        <div className="lg:col-span-5 bg-brand-darkSlate rounded-2xl p-6 border border-stone-800 space-y-4">
          <h3 className="font-serif text-xl text-white font-normal">Manual Hour Log Entry</h3>

          <form onSubmit={handleManualSubmit} className="space-y-4 text-xs">
            <div>
              <label className="block text-stone-300 mb-1 font-semibold">Shoot / Project Title *</label>
              <input
                type="text"
                required
                placeholder="e.g. Kokkedal Castle Wedding Editing"
                value={formData.projectName}
                onChange={(e) => setFormData({ ...formData, projectName: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl bg-black/40 border border-stone-700 text-white focus:outline-none focus:border-brand-gold"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-stone-300 mb-1 font-semibold">Date</label>
                <input
                  type="date"
                  required
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-black/40 border border-stone-700 text-white focus:outline-none focus:border-brand-gold"
                />
              </div>

              <div>
                <label className="block text-stone-300 mb-1 font-semibold">Category</label>
                <select
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-black/40 border border-stone-700 text-white focus:outline-none focus:border-brand-gold"
                >
                  <option value="Shooting">Shooting</option>
                  <option value="Color Grading & Retouching">Color Grading & Retouching</option>
                  <option value="Pre-wedding Consultation">Pre-wedding Consultation</option>
                  <option value="Commercial Retouching">Commercial Retouching</option>
                  <option value="Administrative">Administrative / Studio</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-stone-300 mb-1 font-semibold">Hours (e.g. 4.5) *</label>
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
                <label className="block text-stone-300 mb-1 font-semibold">Rate (DKK / hr)</label>
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
              <label className="block text-stone-300 mb-1 font-semibold">Description / Notes</label>
              <textarea
                rows="2"
                placeholder="Culling 600 RAW files, selecting cover photos..."
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
                Mark as Billable Client Time
              </label>
            </div>

            <button
              type="submit"
              className="w-full py-3.5 bg-brand-gold hover:bg-[#b59871] text-white font-semibold uppercase tracking-wider rounded-full transition-all mt-2"
            >
              Log Hours Entry
            </button>
          </form>
        </div>

        {/* History Table & Export */}
        <div className="lg:col-span-7 space-y-4">
          <div className="bg-brand-darkSlate p-6 rounded-2xl border border-stone-800 flex items-center justify-between">
            <div>
              <h3 className="font-serif text-xl text-white font-normal">Logged Time History</h3>
              <p className="text-xs text-stone-400 font-light">
                Total: <strong className="text-white">{totalHoursSum.toFixed(1)} hrs</strong> • Billable Revenue: <strong className="text-emerald-400">{totalBillableDKK.toLocaleString('da-DK')} DKK</strong>
              </p>
            </div>

            <button
              onClick={exportCSV}
              className="px-4 py-2 rounded-full bg-black/40 border border-stone-700 hover:border-brand-gold text-stone-300 hover:text-white text-xs tracking-wider uppercase font-medium transition-colors flex items-center gap-2"
            >
              <Download className="w-3.5 h-3.5 text-brand-gold" />
              <span>Export CSV</span>
            </button>
          </div>

          {/* Table */}
          <div className="bg-brand-darkSlate rounded-2xl border border-stone-800 overflow-x-auto">
            <table className="w-full text-left text-xs text-stone-300">
              <thead className="bg-black/40 text-stone-400 uppercase text-[10px] tracking-wider border-b border-stone-800">
                <tr>
                  <th className="p-4">Date</th>
                  <th className="p-4">Project & Category</th>
                  <th className="p-4">Hours</th>
                  <th className="p-4">Rate</th>
                  <th className="p-4">Total DKK</th>
                  <th className="p-4 text-right">Actions</th>
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
                      <td className="p-4 font-semibold text-white">{log.hours} h</td>
                      <td className="p-4 text-stone-400">{log.ratePerHourDKK.toLocaleString('da-DK')} DKK</td>
                      <td className="p-4 font-medium text-emerald-400">
                        {log.billable ? `${lineSum.toLocaleString('da-DK')} DKK` : 'Non-billable'}
                      </td>
                      <td className="p-4 text-right">
                        <button
                          onClick={() => deleteEntry(log.id)}
                          className="p-1.5 rounded bg-rose-500/10 text-rose-400 hover:bg-rose-500/20 transition-colors"
                          title="Delete entry"
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
