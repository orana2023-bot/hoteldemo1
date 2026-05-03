import React, { useState } from 'react';
import { 
  Globe, RefreshCw, AlertCircle, CheckCircle2, Zap, Settings2, Link2,
  Calendar, ArrowRight, ShieldCheck, Plus
} from 'lucide-react';

const StatCard = ({ label, value, subtext, icon: Icon, color, bgClass }) => (
  <div className="bg-white p-5 sm:p-7 rounded-2xl border border-[#DDE5D0] shadow-md shadow-[#84A63C]/5 flex flex-col justify-between h-auto sm:h-40 min-h-[120px] sm:min-h-0 group hover:shadow-md transition-all duration-500">
    <div className="flex justify-between items-start">
      <div className={`p-2 sm:p-3 ${bgClass} rounded-xl ${color} group-hover:scale-110 transition-transform`}>
        <Icon size={18} className="sm:w-5 sm:h-5" strokeWidth={2} />
      </div>
    </div>
    <div className="mt-4 sm:mt-0">
      <p className="text-[11px] sm:text-xs font-semibold text-[#7A8A6A] uppercase tracking-wider mb-0.5 sm:mb-1">{label}</p>
      <div className="flex items-baseline gap-1.5 sm:gap-2">
        <p className="text-xl sm:text-2xl font-bold text-[#1A2E05] tracking-tight">{value}</p>
        <p className="text-[11px] sm:text-xs font-bold text-[#7A8A6A] uppercase tracking-widest">{subtext}</p>
      </div>
    </div>
  </div>
);

const ChannelCard = ({ channel, onToggle }) => (
  <div className="bg-white p-5 sm:p-7 rounded-2xl border border-[#DDE5D0] shadow-md shadow-[#84A63C]/5 hover:shadow-lg hover:shadow-[#84A63C]/15 transition-all duration-500 group relative overflow-hidden">
    {channel.status === 'Error' && (<div className="absolute top-0 left-0 w-full h-1 bg-red-500"></div>)}
    <div className="flex justify-between items-start mb-4 sm:mb-6">
      <div className="flex items-center gap-3 sm:gap-4">
        <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center transition-all duration-500 ${channel.active ? 'bg-[#F0F3E8]' : 'bg-[#DDE5D0] opacity-50'}`}>
          <Globe size={20} className={channel.active ? 'text-[#1A2E05] sm:w-6 sm:h-6' : 'text-[#7A8A6A] sm:w-6 sm:h-6'} />
        </div>
        <div>
          <h3 className="text-base sm:text-lg font-bold text-[#1A2E05] tracking-tight">{channel.name}</h3>
          <p className="text-[11px] sm:text-xs font-semibold text-[#7A8A6A] uppercase tracking-wider">{channel.mode}</p>
        </div>
      </div>
      <button onClick={() => onToggle(channel.id)} className={`relative w-10 h-5 rounded-full transition-all duration-500 ${channel.active ? 'bg-[#84A63C]' : 'bg-[#C8D4B4]'}`}>
        <div className={`absolute top-0.5 w-4 h-4 bg-white rounded-full transition-all duration-500 ${channel.active ? 'left-5.5' : 'left-0.5'}`}></div>
      </button>
    </div>
    <div className="grid grid-cols-2 gap-4 mb-6">
      <div className="space-y-0.5">
        <p className="text-xs font-semibold text-[#7A8A6A] uppercase tracking-wider">Last Sync</p>
        <p className="text-xs font-bold text-[#1A2E05] uppercase">{channel.lastSync}</p>
      </div>
      <div className="space-y-0.5 text-right">
        <p className="text-xs font-semibold text-[#7A8A6A] uppercase tracking-wider">Health</p>
        <p className={`text-xs font-bold ${channel.quality > 95 ? 'text-green-500' : 'text-orange-500'}`}>{channel.quality}%</p>
      </div>
    </div>
    <div className="mb-6 p-3 bg-[#F0F3E8] border border-[#DDE5D0] rounded-xl flex items-center justify-between">
      <span className="text-xs font-semibold text-[#7A8A6A] uppercase tracking-wider italic">Markup Rule</span>
      <span className="text-xs font-bold text-[#5C7A1F]">{channel.markup}</span>
    </div>
    <div className="flex items-center gap-2 pt-5 border-t border-[#F0F3E8]">
      <button className="flex-1 py-2.5 bg-[#1C2B12] text-white rounded-lg hover:opacity-90 transition-all text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2">
        <Settings2 size={14} /> Configure
      </button>
      <button className="p-2.5 bg-[#F0F3E8] text-[#7A8A6A] rounded-lg hover:bg-[#DDE5D0] transition-all border border-[#DDE5D0]">
        <RefreshCw size={14} />
      </button>
    </div>
  </div>
);

const ChannelManager = () => {
  const [isSyncing, setIsSyncing] = useState(false);
  const [channels, setChannels] = useState([
    { id: 1, name: 'Booking.com', mode: 'Full Sync', active: true, lastSync: '2 min ago', quality: 99.8, status: 'Healthy', markup: '+15%' },
    { id: 2, name: 'Expedia', mode: 'Inventory Only', active: true, lastSync: '5 min ago', quality: 98.4, status: 'Healthy', markup: '+12%' },
    { id: 3, name: 'Airbnb', mode: 'iCal + API', active: true, lastSync: '12 min ago', quality: 92.1, status: 'Healthy', markup: '+10%' },
    { id: 4, name: 'Agoda', mode: 'Full Sync', active: false, lastSync: '--', quality: 0, status: 'Inactive', markup: '+18%' },
    { id: 5, name: 'HotelBeds', mode: 'XML', active: true, lastSync: '1 hour ago', quality: 85.0, status: 'Error', markup: '+15%' },
  ]);
  const toggleChannel = (id) => { setChannels(prev => prev.map(ch => ch.id === id ? { ...ch, active: !ch.active, status: !ch.active ? 'Healthy' : 'Inactive' } : ch)); };
  const syncAll = () => { setIsSyncing(true); setTimeout(() => setIsSyncing(false), 3000); };

  return (
    <div className="space-y-8 pb-12">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div>
          <h1 className="text-2xl font-bold text-[#1A2E05] tracking-tight">Channel Manager</h1>
          <p className="text-xs font-medium text-[#7A8A6A] mt-0.5 flex items-center gap-2">
            OTA Connectivity <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span> <span className="text-[#1A2E05]">Global Parity Active</span>
          </p>
        </div>
        <div className="flex items-center gap-3 w-full sm:w-auto">
          <button onClick={syncAll} disabled={isSyncing} className={`flex-1 sm:flex-none flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold transition-all shadow-sm ${isSyncing ? 'bg-[#DDE5D0] text-[#7A8A6A]' : 'bg-[#84A63C] text-white hover:opacity-90'}`}>
            <RefreshCw size={18} className={isSyncing ? 'animate-spin' : ''} /> {isSyncing ? 'Syncing...' : 'Sync All Channels'}
          </button>
          <button className="hidden sm:flex items-center justify-center p-3 bg-white border border-[#DDE5D0] rounded-xl hover:bg-[#F0F3E8] transition-all text-[#1A2E05]"><Plus size={20} /></button>
        </div>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard label="Connected" value="04" subtext="Channels" icon={Link2} color="text-[#1A2E05]" bgClass="bg-[#F0F3E8]" />
        <StatCard label="Sync Health" value="98%" subtext="Parity" icon={Zap} color="text-[#5C7A1F]" bgClass="bg-[#EEF4E0]" />
        <StatCard label="Live Syncs" value="03" subtext="Active" icon={RefreshCw} color="text-blue-500" bgClass="bg-blue-50" />
        <StatCard label="Security" value="SSL" subtext="Verified" icon={ShieldCheck} color="text-green-500" bgClass="bg-green-50" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {channels.map((channel) => (<ChannelCard key={channel.id} channel={channel} onToggle={toggleChannel} />))}
        <button className="group bg-[#F0F3E8] border-2 border-dashed border-[#C8D4B4] rounded-2xl p-8 flex flex-col items-center justify-center gap-4 text-[#7A8A6A] hover:text-[#1A2E05] hover:border-[#84A63C]/40 transition-all h-full min-h-[250px]">
          <div className="w-12 h-12 rounded-full border-2 border-dashed border-[#C8D4B4] flex items-center justify-center group-hover:scale-110 transition-transform"><Plus size={24} /></div>
          <span className="text-xs font-bold uppercase tracking-widest">Connect New Channel</span>
        </button>
      </div>
      <div className="bg-[#1C2B12] p-8 sm:p-10 rounded-2xl shadow-xl relative overflow-hidden group">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -mr-48 -mt-48 group-hover:bg-white/10 transition-colors"></div>
        <div className="relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-10">
            <div className="space-y-2">
              <h3 className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-2">
                <Calendar size={18} className="text-white/40" /> 7-Day Parity Snapshot
              </h3>
              <p className="text-xs text-white/50 font-medium">Real-time inventory currently being broadcasted to all active OTAs.</p>
            </div>
            <button className="w-full md:w-auto px-8 py-3.5 bg-white text-[#1C2B12] rounded-xl text-sm font-semibold hover:bg-[#F0F3E8] transition-all flex items-center justify-center gap-2">
              Full Inventory Grid <ArrowRight size={18} />
            </button>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-4">
            {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day) => (
              <div key={day} className="bg-white/5 border border-white/10 p-5 rounded-xl text-center group/day hover:bg-white/10 transition-colors">
                <p className="text-xs font-semibold text-white/40 uppercase tracking-wider mb-2">{day}</p>
                <p className="text-xl font-bold text-white">14</p>
                <p className="text-[11px] font-bold text-green-400 uppercase tracking-wider mt-1">In Sync</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChannelManager;
