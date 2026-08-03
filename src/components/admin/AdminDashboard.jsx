import React, { useState } from 'react';
import { Calendar, Clock, DollarSign, Image, Lock, ShieldCheck, Sparkles, CheckCircle2, AlertCircle, Plus, LogOut } from 'lucide-react';
import CalendarManager from './CalendarManager';
import HoursTracker from './HoursTracker';
import GalleryManager from './GalleryManager';
import DomainDeployGuide from './DomainDeployGuide';

export default function AdminDashboard({
  bookings,
  setBookings,
  hoursLog,
  setHoursLog,
  portfolio,
  setPortfolio,
  onCloseAdmin
}) {
  const [passcode, setPasscode] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(true); // Default true for instant preview, passcode 1234
  const [adminTab, setAdminTab] = useState('calendar'); // 'calendar', 'hours', 'gallery', 'domain'

  const handleLogin = (e) => {
    e.preventDefault();
    if (passcode === '1234' || passcode === 'ida2026') {
      setIsAuthenticated(true);
    } else {
      alert('Incorrect passcode. Try default passcode: 1234');
    }
  };

  // Compute Metrics
  const totalEarningsDKK = hoursLog
    .filter(item => item.billable)
    .reduce((sum, item) => sum + (item.hours * item.ratePerHourDKK), 0);

  const totalHoursLogged = hoursLog.reduce((sum, item) => sum + item.hours, 0);

  const pendingInquiriesCount = bookings.filter(b => b.status === 'Pending Inquiry').length;
  const confirmedBookingsCount = bookings.filter(b => b.status === 'Confirmed').length;

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-brand-charcoal text-white flex items-center justify-center p-6">
        <div className="max-w-md w-full bg-brand-darkSlate rounded-3xl p-8 border border-stone-800 shadow-2xl space-y-6 text-center animate-fade-in">
          <div className="w-14 h-14 rounded-full bg-brand-gold/10 text-brand-gold mx-auto flex items-center justify-center border border-brand-gold/20">
            <Lock className="w-7 h-7" />
          </div>
          <div>
            <h2 className="font-serif text-3xl font-normal text-white">Ida's Admin Studio</h2>
            <p className="text-xs text-stone-400 font-light mt-1">
              Private portal for www.idahelia.dk
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4 text-left">
            <div>
              <label className="text-xs font-semibold uppercase tracking-wider text-stone-300 mb-2 block">
                Enter Passcode
              </label>
              <input
                type="password"
                placeholder="Default Passcode: 1234"
                value={passcode}
                onChange={(e) => setPasscode(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-black/40 border border-stone-700 text-white text-xs focus:outline-none focus:border-brand-gold transition-all"
              />
            </div>
            <button
              type="submit"
              className="w-full py-3.5 bg-brand-gold hover:bg-[#b59871] text-white text-xs font-medium uppercase tracking-widest rounded-full transition-all"
            >
              Unlock Management Studio
            </button>
          </form>

          <div className="pt-4 border-t border-stone-800">
            <button
              onClick={() => setIsAuthenticated(true)}
              className="text-xs text-stone-400 hover:text-brand-gold underline font-light"
            >
              Quick One-Click Demo Access
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#18181A] text-white pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-8">
        
        {/* Top Header Bar */}
        <div className="bg-brand-darkSlate rounded-2xl p-6 md:p-8 border border-stone-800 shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-brand-gold text-white font-serif text-2xl flex items-center justify-center shadow-lg">
              IH
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="font-serif text-2xl md:text-3xl font-normal text-white">Ida Helia Admin Workspace</h1>
                <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 text-[10px] uppercase tracking-wider font-semibold border border-emerald-500/30">
                  Live Sync
                </span>
              </div>
              <p className="text-xs text-stone-400 font-light mt-0.5">
                Managing calendar, billable shoot hours, and domain readiness for <span className="text-brand-gold font-medium">www.idahelia.dk</span>
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onCloseAdmin}
              className="px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs tracking-wider uppercase font-medium transition-colors flex items-center gap-2"
            >
              <LogOut className="w-4 h-4 text-stone-400" />
              <span>Back to Client Website</span>
            </button>
          </div>
        </div>

        {/* Metric Cards Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Card 1: Total Hours Logged */}
          <div className="bg-brand-darkSlate p-6 rounded-2xl border border-stone-800 shadow-sm space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs text-stone-400 font-medium uppercase tracking-wider">Logged Hours</span>
              <div className="w-8 h-8 rounded-lg bg-amber-500/10 text-amber-400 flex items-center justify-center">
                <Clock className="w-4 h-4" />
              </div>
            </div>
            <div className="font-serif text-3xl font-normal text-white">
              {totalHoursLogged.toFixed(1)} <span className="text-sm font-sans text-stone-400">hrs</span>
            </div>
            <p className="text-[11px] text-stone-400 font-light">Shoot & retouching time logged</p>
          </div>

          {/* Card 2: Total Billable Earnings */}
          <div className="bg-brand-darkSlate p-6 rounded-2xl border border-stone-800 shadow-sm space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs text-stone-400 font-medium uppercase tracking-wider">Logged Billable Sum</span>
              <div className="w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center">
                <DollarSign className="w-4 h-4" />
              </div>
            </div>
            <div className="font-serif text-3xl font-normal text-emerald-400">
              {totalEarningsDKK.toLocaleString('da-DK')} <span className="text-sm font-sans text-stone-400">DKK</span>
            </div>
            <p className="text-[11px] text-stone-400 font-light">Based on hourly rates logged</p>
          </div>

          {/* Card 3: Confirmed Bookings */}
          <div className="bg-brand-darkSlate p-6 rounded-2xl border border-stone-800 shadow-sm space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs text-stone-400 font-medium uppercase tracking-wider">Confirmed Shoots</span>
              <div className="w-8 h-8 rounded-lg bg-sky-500/10 text-sky-400 flex items-center justify-center">
                <Calendar className="w-4 h-4" />
              </div>
            </div>
            <div className="font-serif text-3xl font-normal text-white">
              {confirmedBookingsCount} <span className="text-sm font-sans text-stone-400">Sessions</span>
            </div>
            <p className="text-[11px] text-stone-400 font-light">On active calendar schedule</p>
          </div>

          {/* Card 4: Pending Inquiries */}
          <div className="bg-brand-darkSlate p-6 rounded-2xl border border-stone-800 shadow-sm space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs text-stone-400 font-medium uppercase tracking-wider">Pending Inquiries</span>
              <div className="w-8 h-8 rounded-lg bg-purple-500/10 text-purple-400 flex items-center justify-center">
                <AlertCircle className="w-4 h-4" />
              </div>
            </div>
            <div className="font-serif text-3xl font-normal text-purple-300">
              {pendingInquiriesCount} <span className="text-sm font-sans text-stone-400">Requests</span>
            </div>
            <p className="text-[11px] text-stone-400 font-light">Submitted via www.idahelia.dk</p>
          </div>

        </div>

        {/* Tab Selection Navigation */}
        <div className="flex items-center gap-3 border-b border-stone-800 pb-4 overflow-x-auto">
          <button
            onClick={() => setAdminTab('calendar')}
            className={`flex items-center gap-2 px-6 py-3 rounded-full text-xs font-semibold tracking-wider uppercase transition-all shrink-0 ${
              adminTab === 'calendar'
                ? 'bg-brand-gold text-white shadow-md'
                : 'bg-brand-darkSlate text-stone-400 hover:text-white hover:bg-stone-800'
            }`}
          >
            <Calendar className="w-4 h-4" />
            <span>Calendar & Bookings ({bookings.length})</span>
          </button>

          <button
            onClick={() => setAdminTab('hours')}
            className={`flex items-center gap-2 px-6 py-3 rounded-full text-xs font-semibold tracking-wider uppercase transition-all shrink-0 ${
              adminTab === 'hours'
                ? 'bg-brand-gold text-white shadow-md'
                : 'bg-brand-darkSlate text-stone-400 hover:text-white hover:bg-stone-800'
            }`}
          >
            <Clock className="w-4 h-4" />
            <span>Hours & Time Tracker ({hoursLog.length})</span>
          </button>

          <button
            onClick={() => setAdminTab('gallery')}
            className={`flex items-center gap-2 px-6 py-3 rounded-full text-xs font-semibold tracking-wider uppercase transition-all shrink-0 ${
              adminTab === 'gallery'
                ? 'bg-brand-gold text-white shadow-md'
                : 'bg-brand-darkSlate text-stone-400 hover:text-white hover:bg-stone-800'
            }`}
          >
            <Image className="w-4 h-4" />
            <span>Portfolio Manager</span>
          </button>

          <button
            onClick={() => setAdminTab('domain')}
            className={`flex items-center gap-2 px-6 py-3 rounded-full text-xs font-semibold tracking-wider uppercase transition-all shrink-0 ${
              adminTab === 'domain'
                ? 'bg-brand-gold text-white shadow-md'
                : 'bg-brand-darkSlate text-stone-400 hover:text-white hover:bg-stone-800'
            }`}
          >
            <ShieldCheck className="w-4 h-4" />
            <span>Domain Setup (www.idahelia.dk)</span>
          </button>
        </div>

        {/* Tab Content Rendering */}
        <div>
          {adminTab === 'calendar' && (
            <CalendarManager bookings={bookings} setBookings={setBookings} />
          )}

          {adminTab === 'hours' && (
            <HoursTracker hoursLog={hoursLog} setHoursLog={setHoursLog} />
          )}

          {adminTab === 'gallery' && (
            <GalleryManager portfolio={portfolio} setPortfolio={setPortfolio} />
          )}

          {adminTab === 'domain' && (
            <DomainDeployGuide />
          )}
        </div>

      </div>
    </div>
  );
}
