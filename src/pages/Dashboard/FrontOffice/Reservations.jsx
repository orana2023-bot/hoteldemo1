import React, { useState } from 'react';
import { 
  Search, Plus, Calendar, User, Phone, Clock, MoreHorizontal,
  X, ChevronRight, CheckCircle2, AlertCircle, XCircle, Clock4
} from 'lucide-react';

const StatCard = ({ label, value, icon: Icon, color, bgClass }) => (
  <div className="bg-white p-5 sm:p-7 rounded-2xl border border-[#DDE5D0] shadow-md shadow-[#84A63C]/5 flex flex-col gap-2 sm:gap-3 group hover:shadow-md transition-all duration-500">
    <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center ${bgClass} ${color}`}>
      <Icon size={18} className="sm:w-5 sm:h-5" strokeWidth={2} />
    </div>
    <div>
      <p className="text-[11px] sm:text-xs font-semibold text-[#7A8A6A] uppercase tracking-wider">{label}</p>
      <p className="text-lg sm:text-2xl font-bold text-[#1A2E05] mt-0.5">{value}</p>
    </div>
  </div>
);

const StatusBadge = ({ status }) => {
  const styles = { Confirmed: 'bg-green-50 text-green-700', Pending: 'bg-orange-50 text-orange-700', Cancelled: 'bg-[#F0F3E8] text-[#4A5E38]' };
  return (<span className={`px-2.5 py-1 rounded-lg text-xs font-bold uppercase tracking-wider ${styles[status]}`}>{status}</span>);
};

const PreReservationModal = ({ isOpen, onClose, onConfirm }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8 animate-fade-in">
      <div className="bg-white w-full sm:max-w-3xl max-h-[90vh] rounded-2xl shadow-2xl overflow-hidden flex flex-col animate-slide-up">
        <div className="sm:hidden flex justify-end p-4 bg-white"><button onClick={onClose} className="p-2 bg-[#F0F3E8] rounded-lg"><X size={20} className="text-[#7A8A6A]" /></button></div>
        <div className="p-6 sm:p-8 border-b border-[#DDE5D0] flex items-center justify-between shrink-0 bg-white">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-[#1A2E05] tracking-tight">New Pre-Reservation</h2>
            <p className="text-xs font-medium text-[#7A8A6A] uppercase tracking-wide mt-1">Hold accommodation without immediate payment</p>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-[#F0F3E8] rounded-lg transition-all hidden sm:block"><X size={20} className="text-[#7A8A6A]" /></button>
        </div>
        <div className="flex-1 overflow-y-auto p-6 sm:p-10 space-y-10 no-scrollbar bg-white">
          <div>
            <h3 className="text-xs font-semibold text-[#1A2E05] uppercase tracking-wider mb-6 flex items-center gap-2"><span className="w-6 h-px bg-[#DDE5D0]"></span> Guest Profile</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-semibold text-[#7A8A6A] uppercase tracking-wider ml-1">Full Name</label>
                <div className="relative group">
                  <User size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#7A8A6A] group-focus-within:text-[#84A63C] transition-colors" />
                  <input type="text" placeholder="John Doe" className="w-full pl-11 pr-4 py-3 bg-[#F0F3E8] border border-[#DDE5D0] rounded-xl text-sm font-medium focus:outline-none focus:bg-white focus:border-[#84A63C] focus:ring-2 focus:ring-[#84A63C]/10 transition-all" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-semibold text-[#7A8A6A] uppercase tracking-wider ml-1">Contact Number</label>
                <div className="relative group">
                  <Phone size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#7A8A6A] group-focus-within:text-[#84A63C] transition-colors" />
                  <input type="tel" placeholder="+1 234 567 890" className="w-full pl-11 pr-4 py-3 bg-[#F0F3E8] border border-[#DDE5D0] rounded-xl text-sm font-medium focus:outline-none focus:bg-white focus:border-[#84A63C] focus:ring-2 focus:ring-[#84A63C]/10 transition-all" />
                </div>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-xs font-semibold text-[#1A2E05] uppercase tracking-wider mb-6 flex items-center gap-2"><span className="w-6 h-px bg-[#DDE5D0]"></span> Stay Parameters</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-semibold text-[#7A8A6A] uppercase tracking-wider ml-1">Check-in Date</label>
                <div className="relative group">
                  <Calendar size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#7A8A6A] group-focus-within:text-[#84A63C] transition-colors" />
                  <input type="date" className="w-full pl-11 pr-4 py-3 bg-[#F0F3E8] border border-[#DDE5D0] rounded-xl text-sm font-medium focus:outline-none focus:bg-white focus:border-[#84A63C] focus:ring-2 focus:ring-[#84A63C]/10 transition-all" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-semibold text-[#7A8A6A] uppercase tracking-wider ml-1">Check-out Date</label>
                <div className="relative group">
                  <Calendar size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#7A8A6A] group-focus-within:text-[#84A63C] transition-colors" />
                  <input type="date" className="w-full pl-11 pr-4 py-3 bg-[#F0F3E8] border border-[#DDE5D0] rounded-xl text-sm font-medium focus:outline-none focus:bg-white focus:border-[#84A63C] focus:ring-2 focus:ring-[#84A63C]/10 transition-all" />
                </div>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-xs font-semibold text-[#1A2E05] uppercase tracking-wider mb-6 flex items-center gap-2"><span className="w-6 h-px bg-[#DDE5D0]"></span> Accommodation</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-semibold text-[#7A8A6A] uppercase tracking-wider ml-1">Room Preference</label>
                <select className="w-full px-5 py-3 bg-[#F0F3E8] border border-[#DDE5D0] rounded-xl text-sm font-medium appearance-none focus:outline-none focus:bg-white focus:border-[#84A63C] focus:ring-2 focus:ring-[#84A63C]/10 transition-all">
                  <option>Any Available</option><option>Deluxe Suite</option><option>Premium Double</option><option>Executive Single</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-semibold text-[#7A8A6A] uppercase tracking-wider ml-1">Total Guests</label>
                <select className="w-full px-5 py-3 bg-[#F0F3E8] border border-[#DDE5D0] rounded-xl text-sm font-medium appearance-none focus:outline-none focus:bg-white focus:border-[#84A63C] focus:ring-2 focus:ring-[#84A63C]/10 transition-all">
                  <option>1 Adult</option><option>2 Adults</option><option>2 Adults, 1 Child</option><option>Group (3+)</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div className="p-6 bg-[#F0F3E8] border-t border-[#DDE5D0] flex gap-4 shrink-0">
          <button onClick={onClose} className="flex-1 py-3 text-sm font-semibold text-[#7A8A6A] hover:text-[#1A2E05] transition-colors">Cancel</button>
          <button onClick={onConfirm} className="flex-[2] py-3 bg-[#84A63C] text-white rounded-xl text-sm font-semibold hover:opacity-90 shadow-md transition-all">Create Pre-Reservation</button>
        </div>
      </div>
    </div>
  );
};

const Reservations = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [reservations] = useState([
    { id: 'RES-1042', guest: 'Michael Chen', dates: 'Oct 24 - Oct 28', type: 'Deluxe Suite', status: 'Confirmed', added: '2 hours ago' },
    { id: 'RES-1043', guest: 'Emma Watson', dates: 'Oct 25 - Oct 27', type: 'Premium Double', status: 'Pending', added: '5 hours ago' },
    { id: 'RES-1044', guest: 'Robert Davis', dates: 'Oct 26 - Oct 30', type: 'Executive Single', status: 'Confirmed', added: '1 day ago' },
    { id: 'RES-1045', guest: 'Sophia Taylor', dates: 'Oct 28 - Nov 02', type: 'Any Available', status: 'Pending', added: '1 day ago' },
    { id: 'RES-1046', guest: 'James Wilson', dates: 'Oct 22 - Oct 24', type: 'Deluxe Suite', status: 'Cancelled', added: '2 days ago' },
  ]);
  const filteredReservations = reservations.filter(res => res.guest.toLowerCase().includes(searchQuery.toLowerCase()) || res.id.toLowerCase().includes(searchQuery.toLowerCase()));
  const handleConfirm = () => { setIsModalOpen(false); };

  return (
    <div className="space-y-8">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div>
          <h1 className="text-2xl font-bold text-[#1A2E05] tracking-tight">Reservations</h1>
          <p className="text-xs font-medium text-[#7A8A6A] mt-0.5">Inventory Locks & Pre-Check-ins</p>
        </div>
        <div className="flex w-full sm:w-auto items-center gap-4">
          <button onClick={() => setIsModalOpen(true)} className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3.5 bg-[#84A63C] text-white rounded-xl text-sm font-semibold hover:opacity-90 shadow-md transition-all active:scale-[0.98]">
            <Plus size={18} /> New Pre-Reservation
          </button>
        </div>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard label="Total Upcoming" value="142" icon={Calendar} color="text-[#1A2E05]" bgClass="bg-[#F0F3E8]" />
        <StatCard label="Pending" value="18" icon={Clock4} color="text-orange-500" bgClass="bg-orange-50" />
        <StatCard label="Confirmed" value="121" icon={CheckCircle2} color="text-green-500" bgClass="bg-green-50" />
        <StatCard label="Cancelled" value="3" icon={XCircle} color="text-[#7A8A6A]" bgClass="bg-[#F0F3E8]" />
      </div>
      <div className="bg-white rounded-2xl border border-[#DDE5D0] shadow-sm overflow-hidden">
        <div className="p-6 sm:p-8 border-b border-[#DDE5D0] flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="relative group w-full sm:w-96">
            <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#7A8A6A] group-focus-within:text-[#84A63C] transition-colors" />
            <input type="text" placeholder="Search by name or ID..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className="w-full pl-12 pr-4 py-3 bg-[#F0F3E8] border border-[#DDE5D0] rounded-xl text-sm font-medium focus:outline-none focus:bg-white focus:border-[#84A63C] focus:ring-2 focus:ring-[#84A63C]/10 transition-all" />
          </div>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button className="flex-1 sm:flex-none px-6 py-2.5 bg-[#F0F3E8] text-[#4A5E38] rounded-lg text-xs font-semibold uppercase tracking-wider hover:text-[#1A2E05] hover:bg-[#DDE5D0] transition-all border border-[#DDE5D0]">Filter</button>
            <button className="flex-1 sm:flex-none px-6 py-2.5 bg-[#F0F3E8] text-[#4A5E38] rounded-lg text-xs font-semibold uppercase tracking-wider hover:text-[#1A2E05] hover:bg-[#DDE5D0] transition-all border border-[#DDE5D0]">Export</button>
          </div>
        </div>
        <div className="p-6 sm:p-10">
          <div className="hidden md:grid grid-cols-6 gap-6 px-4 pb-6 border-b border-[#DDE5D0] mb-6">
            <p className="col-span-2 text-xs font-semibold text-[#7A8A6A] uppercase tracking-wider">Guest Details</p>
            <p className="text-xs font-semibold text-[#7A8A6A] uppercase tracking-wider">Stay Dates</p>
            <p className="text-xs font-semibold text-[#7A8A6A] uppercase tracking-wider">Room Type</p>
            <p className="text-xs font-semibold text-[#7A8A6A] uppercase tracking-wider">Status</p>
            <p className="text-right text-xs font-semibold text-[#7A8A6A] uppercase tracking-wider">Actions</p>
          </div>
          {filteredReservations.length > 0 ? (
            <div className="space-y-4">
              {filteredReservations.map((res, index) => (
                <div key={index} className="flex flex-col md:grid md:grid-cols-6 gap-4 md:gap-6 p-4 rounded-xl border border-[#DDE5D0] hover:border-[#84A63C]/30 hover:shadow-md transition-all items-start md:items-center group bg-white">
                  <div className="col-span-2 flex items-center gap-3 sm:gap-4 w-full">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#F0F3E8] border border-[#DDE5D0] flex items-center justify-center shrink-0">
                      <span className="text-xs sm:text-sm font-bold text-[#1A2E05]">{res.guest.charAt(0)}</span>
                    </div>
                    <div>
                      <p className="text-xs sm:text-sm font-bold text-[#1A2E05]">{res.guest}</p>
                      <p className="text-[11px] sm:text-xs font-semibold text-[#7A8A6A] uppercase tracking-wider mt-0.5">{res.id}</p>
                    </div>
                  </div>
                  <div className="w-full md:w-auto">
                    <p className="md:hidden text-[11px] sm:text-xs font-semibold text-[#7A8A6A] uppercase tracking-wider mb-1">Dates</p>
                    <p className="text-xs sm:text-xs font-bold text-[#4A5E38]">{res.dates}</p>
                  </div>
                  <div className="w-full md:w-auto">
                    <p className="md:hidden text-[11px] sm:text-xs font-semibold text-[#7A8A6A] uppercase tracking-wider mb-1">Room Type</p>
                    <p className="text-xs sm:text-xs font-bold text-[#4A5E38]">{res.type}</p>
                  </div>
                  <div className="w-full md:w-auto">
                    <p className="md:hidden text-[11px] sm:text-xs font-semibold text-[#7A8A6A] uppercase tracking-wider mb-1">Status</p>
                    <StatusBadge status={res.status} />
                  </div>
                  <div className="w-full md:w-auto flex justify-end md:justify-end mt-1 sm:mt-2 md:mt-0 pt-2 sm:pt-3 md:pt-0 border-t md:border-t-0 border-[#F0F3E8]">
                    <button className="p-1.5 sm:p-2 text-[#7A8A6A] hover:text-[#1A2E05] hover:bg-[#F0F3E8] rounded-lg transition-all"><MoreHorizontal size={16} className="sm:w-[18px] sm:h-[18px]" /></button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="py-20 flex flex-col items-center justify-center text-center">
              <div className="w-20 h-20 bg-[#F0F3E8] rounded-full flex items-center justify-center mb-6"><Search size={32} className="text-[#7A8A6A]" /></div>
              <h3 className="text-xl font-bold text-[#1A2E05] tracking-tight">No Reservations Found</h3>
              <p className="text-sm font-medium text-[#7A8A6A] mt-2 uppercase tracking-wide max-w-sm">We couldn't find any reservations matching your search criteria.</p>
            </div>
          )}
        </div>
      </div>
      <PreReservationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} onConfirm={handleConfirm} />
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes slideUp { from { opacity: 0; transform: translateY(60px); } to { opacity: 1; transform: translateY(0); } }
        .animate-fade-in { animation: fadeIn 0.4s ease-out forwards; }
        .animate-slide-up { animation: slideUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
      `}} />
    </div>
  );
};

export default Reservations;
