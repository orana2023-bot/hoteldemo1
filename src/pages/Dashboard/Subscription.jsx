import React, { useState } from 'react';
import { 
  ShieldCheck, Wifi, Droplets, Zap, FileText, AlertCircle, 
  Calendar, CreditCard, Plus, Search, ChevronRight,
  MoreVertical, X, ArrowRight
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

const AddEntryModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8 bg-[#1C2B12]/40 backdrop-blur-sm animate-fade-in">
      <div className="bg-white w-full sm:max-w-2xl max-h-[90vh] rounded-2xl shadow-2xl overflow-hidden flex flex-col animate-slide-up">
        <div className="p-6 sm:p-8 border-b border-[#DDE5D0] flex items-center justify-between shrink-0">
          <div>
            <h2 className="text-2xl font-bold text-[#1A2E05] tracking-tight">Add New Registry</h2>
            <p className="text-xs font-medium text-[#7A8A6A] mt-1 uppercase tracking-wider">Track a service or legal document</p>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-[#F0F3E8] rounded-lg transition-all">
            <X size={20} className="text-[#7A8A6A]" />
          </button>
        </div>
        <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-6">
          <div className="space-y-3">
            <label className="text-xs font-semibold text-[#7A8A6A] uppercase tracking-wider ml-1">Registry Type</label>
            <div className="grid grid-cols-2 gap-2 p-1 bg-[#F0F3E8] rounded-xl border border-[#DDE5D0]">
              <button className="py-2.5 bg-white text-[#1A2E05] shadow-sm rounded-lg text-xs font-bold uppercase tracking-wider">Service</button>
              <button className="py-2.5 text-[#7A8A6A] rounded-lg text-xs font-bold uppercase tracking-wider hover:text-[#1A2E05]">Legal Paper</button>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-xs font-semibold text-[#7A8A6A] uppercase tracking-wider ml-1">Name</label>
              <input type="text" placeholder="e.g. WiFi Fiber Optic" className="w-full px-4 py-3 bg-[#F0F3E8] border border-[#DDE5D0] rounded-xl text-sm font-medium focus:outline-none focus:bg-white focus:border-[#84A63C] transition-all" />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-semibold text-[#7A8A6A] uppercase tracking-wider ml-1">Provider/Authority</label>
              <input type="text" placeholder="e.g. Fire Dept / ISP" className="w-full px-4 py-3 bg-[#F0F3E8] border border-[#DDE5D0] rounded-xl text-sm font-medium focus:outline-none focus:bg-white focus:border-[#84A63C] transition-all" />
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-xs font-semibold text-[#7A8A6A] uppercase tracking-wider ml-1">Renewal/Expiry Date</label>
              <div className="relative">
                <Calendar size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#7A8A6A]" />
                <input type="date" className="w-full pl-12 pr-4 py-3 bg-[#F0F3E8] border border-[#DDE5D0] rounded-xl text-sm font-medium focus:outline-none focus:bg-white focus:border-[#84A63C] transition-all" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-semibold text-[#7A8A6A] uppercase tracking-wider ml-1">Annual Cost (₹)</label>
              <div className="relative">
                <CreditCard size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#7A8A6A]" />
                <input type="number" placeholder="12,000" className="w-full pl-12 pr-4 py-3 bg-[#F0F3E8] border border-[#DDE5D0] rounded-xl text-sm font-medium focus:outline-none focus:bg-white focus:border-[#84A63C] transition-all" />
              </div>
            </div>
          </div>
        </div>
        <div className="p-6 sm:p-8 bg-[#F0F3E8] border-t border-[#DDE5D0] flex gap-4 shrink-0">
          <button onClick={onClose} className="flex-1 py-3.5 text-sm font-semibold text-[#7A8A6A] hover:text-[#1A2E05] transition-all">Cancel</button>
          <button className="flex-[2] py-3.5 bg-[#1C2B12] text-white rounded-xl text-sm font-bold uppercase tracking-wider hover:opacity-90 transition-all shadow-md">Add Registry</button>
        </div>
      </div>
    </div>
  );
};

const Subscription = () => {
  const [activeTab, setActiveTab] = useState('Service');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [services] = useState([
    { id: 1, name: 'Fiber Internet (High Speed)', provider: 'Jio Business', cost: '₹2,499', freq: 'Monthly', expiry: 'Nov 12, 2023', status: 'Active', icon: Wifi, autoRenew: true },
    { id: 2, name: 'Water Supply (Commercial)', provider: 'Municipal Corp', cost: '₹8,500', freq: 'Monthly', expiry: 'Oct 30, 2023', status: 'Expiring Soon', icon: Droplets, autoRenew: false },
    { id: 3, name: 'Power Grid (Industrial)', provider: 'State Electricity', cost: '₹45,000', freq: 'Monthly', expiry: 'Nov 05, 2023', status: 'Active', icon: Zap, autoRenew: true },
  ]);
  const legalDocs = [
    { id: 101, name: 'Liquor License Renewal', provider: 'Excise Dept', cost: '₹2,50,000', freq: 'Yearly', expiry: 'Nov 02, 2023', status: 'Critical', days: 8 },
    { id: 102, name: 'Fire Safety Certificate', provider: 'Fire Authority', cost: '₹12,000', freq: 'Yearly', expiry: 'Dec 15, 2023', status: 'Active', days: 52 },
    { id: 103, name: 'Trade License', provider: 'MNC', cost: '₹5,000', freq: 'Yearly', expiry: 'Oct 28, 2023', status: 'Critical', days: 2 },
  ];

  return (
    <div className="space-y-8 pb-12">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-6">
        <div>
          <h1 className="text-xl sm:text-2xl font-bold text-[#1A2E05] tracking-tight">Subscriptions & Legal</h1>
          <p className="text-[10px] sm:text-xs font-medium text-[#7A8A6A] mt-0.5">Compliance & Service Registry</p>
        </div>
        <button onClick={() => setIsModalOpen(true)} className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 sm:py-3.5 bg-[#84A63C] text-white rounded-xl text-xs sm:text-sm font-semibold hover:opacity-90 shadow-md transition-all">
          <Plus size={16} className="sm:w-[18px] sm:h-[18px]" /> Add Registry
        </button>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-red-50 border border-red-100 p-6 rounded-2xl flex items-center justify-between group hover:shadow-md transition-all">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-white rounded-xl shadow-md shadow-[#84A63C]/5 flex items-center justify-center text-red-500 border border-red-50"><FileText size={22} /></div>
            <div>
              <p className="text-xs font-bold text-red-400 uppercase tracking-wider">Legal Expiry</p>
              <h4 className="text-base font-bold text-[#1A2E05] mt-0.5">Trade License</h4>
            </div>
          </div>
          <div className="text-right">
            <p className="text-xl font-bold text-red-500 tracking-tight">02 Days</p>
            <p className="text-xs font-bold text-red-400 uppercase tracking-wider">Left</p>
          </div>
        </div>
        <div className="bg-orange-50 border border-orange-100 p-6 rounded-2xl flex items-center justify-between group hover:shadow-md transition-all">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-white rounded-xl shadow-md shadow-[#84A63C]/5 flex items-center justify-center text-orange-500 border border-orange-50"><Zap size={22} /></div>
            <div>
              <p className="text-xs font-bold text-orange-400 uppercase tracking-wider">Service Due</p>
              <h4 className="text-base font-bold text-[#1A2E05] mt-0.5">Maintenance Unit</h4>
            </div>
          </div>
          <div className="text-right">
            <p className="text-xl font-bold text-orange-500 tracking-tight">05 Days</p>
            <p className="text-xs font-bold text-orange-400 uppercase tracking-wider">Left</p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
        <StatCard label="Active Service" value="12" subtext="Units" icon={Zap} color="text-[#1A2E05]" bgClass="bg-[#F0F3E8]" />
        <StatCard label="Compliance" value="94%" subtext="Verified" icon={ShieldCheck} color="text-green-500" bgClass="bg-green-50" />
        <StatCard label="Monthly Cost" value="₹62K" subtext="Est." icon={CreditCard} color="text-blue-500" bgClass="bg-blue-50" />
        <StatCard label="Critical" value="02" subtext="Alerts" icon={AlertCircle} color="text-red-500" bgClass="bg-red-50" />
      </div>
      <div className="space-y-8">
        <div className="flex items-center gap-6 border-b border-[#DDE5D0]">
          {['Service', 'Legal'].map(tab => (
            <button key={tab} onClick={() => setActiveTab(tab)} className={`pb-4 text-xs font-bold uppercase tracking-wider transition-all relative ${activeTab === tab ? 'text-[#5C7A1F]' : 'text-[#7A8A6A] hover:text-[#4A5E38]'}`}>
              {tab === 'Service' ? 'Service Subscriptions' : 'Legal Documents'}
              {activeTab === tab && <div className="absolute bottom-0 left-0 w-full h-0.5 bg-[#5C7A1F] rounded-full"></div>}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {(activeTab === 'Service' ? services : legalDocs).map((item) => (
            <div key={item.id} className="bg-white p-5 sm:p-7 rounded-2xl border border-[#DDE5D0] shadow-md shadow-[#84A63C]/5 hover:shadow-lg hover:shadow-[#84A63C]/15 transition-all group flex flex-col justify-between min-h-[260px] sm:min-h-[300px]">
              <div className="space-y-4 sm:space-y-6">
                <div className="flex justify-between items-start">
                  <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center transition-all ${item.status === 'Critical' ? 'bg-red-50 text-red-500' : 'bg-[#F0F3E8] text-[#7A8A6A]'} border border-[#DDE5D0] group-hover:bg-[#84A63C] group-hover:text-white`}>
                    {activeTab === 'Service' ? <item.icon size={20} className="sm:w-[22px] sm:h-[22px]" /> : <FileText size={20} className="sm:w-[22px] sm:h-[22px]" />}
                  </div>
                  <button className="p-1.5 sm:p-2 text-[#7A8A6A] hover:text-[#1A2E05] rounded-lg transition-all border border-transparent hover:border-[#DDE5D0]"><MoreVertical size={16} /></button>
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-[#1A2E05] tracking-tight">{item.name}</h3>
                  <p className="text-[11px] sm:text-xs font-semibold text-[#7A8A6A] uppercase tracking-wider mt-0.5">{item.provider}</p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-0.5">
                    <p className="text-[11px] sm:text-xs font-semibold text-[#7A8A6A] uppercase tracking-wider">Cost</p>
                    <p className="text-xs sm:text-sm font-bold text-[#1A2E05]">{item.cost}</p>
                  </div>
                  <div className="space-y-0.5 text-right">
                    <p className="text-[11px] sm:text-xs font-semibold text-[#7A8A6A] uppercase tracking-wider">Expiry</p>
                    <p className="text-xs sm:text-sm font-bold text-[#1A2E05]">{item.expiry}</p>
                  </div>
                </div>
              </div>
              <div className="pt-4 sm:pt-6 mt-4 sm:mt-6 border-t border-[#F0F3E8] flex items-center justify-between">
                <span className={`px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-lg text-[11px] sm:text-xs font-bold uppercase tracking-wider ${item.status === 'Critical' ? 'bg-red-50 text-red-600' : item.status === 'Expiring Soon' ? 'bg-orange-50 text-orange-600' : 'bg-green-50 text-green-600'}`}>{item.status}</span>
                <button className="flex items-center gap-1.5 text-[11px] sm:text-xs font-bold text-[#5C7A1F] uppercase tracking-wider hover:gap-2.5 transition-all">Manage <ArrowRight size={14} /></button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <AddEntryModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes slideUp { from { opacity: 0; transform: translateY(60px); } to { opacity: 1; transform: translateY(0); } }
        .animate-fade-in { animation: fadeIn 0.4s ease-out forwards; }
        .animate-slide-up { animation: slideUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
      `}} />
    </div>
  );
};

export default Subscription;
