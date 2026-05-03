import React, { useState } from 'react';
import { 
  Users, UserPlus, Calendar, MapPin, CreditCard, Search, Filter, X, 
  CheckCircle2, Clock, ChevronRight, MoreVertical, Mail, Phone, Globe, DoorOpen
} from 'lucide-react';

const StatCard = ({ label, value, subtext, icon: Icon, color, bgClass }) => (
  <div className="bg-white p-4 sm:p-5 rounded-2xl border border-[#DDE5D0] shadow-md shadow-[#84A63C]/5 flex flex-col justify-between h-auto sm:h-40 min-h-[110px] sm:min-h-0 group hover:shadow-md transition-all duration-500">
    <div className="flex justify-between items-start">
      <div className={`p-2 sm:p-2.5 ${bgClass} rounded-xl ${color} group-hover:scale-110 transition-transform`}>
        <Icon size={16} className="sm:w-5 sm:h-5" strokeWidth={2} />
      </div>
    </div>
    <div className="mt-3 sm:mt-0">
      <p className="text-[10px] sm:text-xs font-semibold text-[#7A8A6A] uppercase tracking-wider mb-0.5 sm:mb-1">{label}</p>
      <div className="flex items-baseline gap-1.5 sm:gap-2">
        <p className="text-xl sm:text-2xl font-bold text-[#1A2E05] tracking-tight">{value}</p>
        <p className="text-[10px] sm:text-xs font-medium text-[#7A8A6A] uppercase">{subtext}</p>
      </div>
    </div>
  </div>
);

const AddGuestModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8 animate-fade-in overflow-hidden">
      <div className="bg-white w-full sm:max-w-4xl max-h-[90vh] rounded-2xl shadow-2xl overflow-hidden flex flex-col animate-slide-up relative">
        <div className="p-6 sm:p-8 border-b border-[#DDE5D0] flex items-center justify-between shrink-0">
          <div>
            <h2 className="text-2xl font-bold text-[#1A2E05] tracking-tight">Register New Guest</h2>
            <p className="text-xs font-medium text-[#7A8A6A] mt-1 uppercase tracking-wide">Complete the onboarding form below</p>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-[#F0F3E8] rounded-lg transition-all"><X size={20} className="text-[#7A8A6A]" /></button>
        </div>
        <div className="flex-1 overflow-y-auto p-6 sm:p-12 space-y-8 sm:space-y-12 no-scrollbar">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <Users size={18} className="text-[#5C7A1F]" />
              <h3 className="text-sm font-semibold text-[#1A2E05] uppercase tracking-wider">Guest Information</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-semibold text-[#7A8A6A] uppercase tracking-wider ml-1">Guest Name *</label>
                <input type="text" placeholder="Full Name" className="w-full px-5 py-3 bg-[#F0F3E8] border border-[#DDE5D0] rounded-xl text-sm font-medium focus:outline-none focus:bg-white focus:border-[#84A63C] focus:ring-2 focus:ring-[#84A63C]/10 transition-all" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-semibold text-[#7A8A6A] uppercase tracking-wider ml-1">Phone Number *</label>
                <input type="tel" placeholder="+91 00000 00000" className="w-full px-5 py-3 bg-[#F0F3E8] border border-[#DDE5D0] rounded-xl text-sm font-medium focus:outline-none focus:bg-white focus:border-[#84A63C] focus:ring-2 focus:ring-[#84A63C]/10 transition-all" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-semibold text-[#7A8A6A] uppercase tracking-wider ml-1">Email</label>
                <input type="email" placeholder="email@example.com" className="w-full px-5 py-3 bg-[#F0F3E8] border border-[#DDE5D0] rounded-xl text-sm font-medium focus:outline-none focus:bg-white focus:border-[#84A63C] focus:ring-2 focus:ring-[#84A63C]/10 transition-all" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-semibold text-[#7A8A6A] uppercase tracking-wider ml-1">Nationality</label>
                <select className="w-full px-5 py-3 bg-[#F0F3E8] border border-[#DDE5D0] rounded-xl text-sm font-medium appearance-none focus:outline-none focus:bg-white focus:border-[#84A63C] focus:ring-2 focus:ring-[#84A63C]/10 transition-all">
                  <option>Indian</option><option>International</option>
                </select>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-semibold text-[#7A8A6A] uppercase tracking-wider ml-1">ID Type *</label>
                <select className="w-full px-5 py-3 bg-[#F0F3E8] border border-[#DDE5D0] rounded-xl text-sm font-medium appearance-none focus:outline-none focus:bg-white focus:border-[#84A63C] focus:ring-2 focus:ring-[#84A63C]/10 transition-all">
                  <option>Aadhar Card</option><option>Passport</option><option>Driving License</option><option>Voter ID</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-semibold text-[#7A8A6A] uppercase tracking-wider ml-1">ID Number *</label>
                <input type="text" placeholder="Enter ID Number" className="w-full px-5 py-3 bg-[#F0F3E8] border border-[#DDE5D0] rounded-xl text-sm font-medium focus:outline-none focus:bg-white focus:border-[#84A63C] focus:ring-2 focus:ring-[#84A63C]/10 transition-all" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-semibold text-[#7A8A6A] uppercase tracking-wider ml-1">Number of Guests</label>
                <input type="number" defaultValue={1} className="w-full px-5 py-3 bg-[#F0F3E8] border border-[#DDE5D0] rounded-xl text-sm font-medium focus:outline-none focus:bg-white focus:border-[#84A63C] focus:ring-2 focus:ring-[#84A63C]/10 transition-all" />
              </div>
            </div>
          </div>
          <div className="space-y-8">
            <div className="flex items-center gap-3">
              <Calendar size={18} className="text-[#7A8A6A]" />
              <h3 className="text-[12px] font-extrabold text-[#1A2E05] uppercase tracking-[0.25em]">Booking Details</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-extrabold text-[#7A8A6A] uppercase tracking-widest ml-1">Check-in Date *</label>
                <input type="date" className="w-full px-6 py-4 bg-[#F0F3E8] border border-[#DDE5D0] rounded-3xl text-sm font-bold focus:outline-none focus:bg-white focus:border-[#84A63C]/20 transition-all" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-extrabold text-[#7A8A6A] uppercase tracking-widest ml-1">Check-out Date *</label>
                <input type="date" className="w-full px-6 py-4 bg-[#F0F3E8] border border-[#DDE5D0] rounded-3xl text-sm font-bold focus:outline-none focus:bg-white focus:border-[#84A63C]/20 transition-all" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-extrabold text-[#7A8A6A] uppercase tracking-widest ml-1">Booking Type</label>
                <select className="w-full px-6 py-4 bg-[#F0F3E8] border border-[#DDE5D0] rounded-3xl text-sm font-bold appearance-none focus:outline-none focus:bg-white focus:border-[#84A63C]/20 transition-all">
                  <option>Walk-in</option><option>Online</option><option>OTA</option>
                </select>
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-extrabold text-[#7A8A6A] uppercase tracking-widest ml-1">Select Room * (Showing Availability)</label>
              <select className="w-full px-6 py-4 bg-[#F0F3E8] border border-[#DDE5D0] rounded-3xl text-sm font-bold appearance-none focus:outline-none focus:bg-white focus:border-[#84A63C]/20 transition-all">
                <option disabled>-- Select a Room --</option>
                <optgroup label="Floor 1"><option>Room 101 - Deluxe (Available)</option><option>Room 102 - Suite (Available)</option></optgroup>
                <optgroup label="Floor 2"><option>Room 205 - Single (Available)</option></optgroup>
              </select>
            </div>
          </div>
        </div>
        <div className="p-6 bg-[#F0F3E8] border-t border-[#DDE5D0] flex gap-4 shrink-0">
          <button onClick={onClose} className="flex-1 py-3 text-sm font-semibold text-[#7A8A6A] hover:text-[#1A2E05] transition-colors">Cancel</button>
          <button className="flex-[2] py-3 bg-[#84A63C] text-white rounded-xl text-sm font-semibold hover:opacity-90 transition-all shadow-md">Confirm Registration</button>
        </div>
      </div>
    </div>
  );
};

const GuestManagement = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState('All');
  const guests = [
    { name: 'John Doe', phone: '+91 98765 43210', email: 'john@example.com', room: '101', type: 'Deluxe', status: 'Checked In', payment: 'Paid', checkIn: 'Oct 24', checkOut: 'Oct 26' },
    { name: 'Ellen Ripley', phone: '+91 88888 77777', email: 'ripley@weyland.com', room: '203', type: 'Suite', status: 'Confirmed', payment: 'Pending', checkIn: 'Oct 25', checkOut: 'Oct 30' },
  ];

  return (
    <div className="space-y-8 pb-12">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-6">
        <div>
          <h1 className="text-xl sm:text-2xl font-bold text-[#1A2E05] tracking-tight">Guest Registry</h1>
          <p className="text-[10px] sm:text-xs font-medium text-[#7A8A6A] mt-0.5">Onboarding & Occupancy Control</p>
        </div>
        <button onClick={() => setIsModalOpen(true)} className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 sm:py-3.5 bg-[#84A63C] text-white rounded-xl text-xs sm:text-sm font-semibold hover:opacity-90 shadow-md transition-all">
          <UserPlus size={16} className="sm:w-[18px] sm:h-[18px]" /> New Reservation
        </button>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard label="Total Bookings" value="15" subtext="Units" icon={Users} color="text-[#1A2E05]" bgClass="bg-[#F0F3E8]" />
        <StatCard label="Upcoming" value="08" subtext="Arrivals" icon={Clock} color="text-blue-500" bgClass="bg-blue-50" />
        <StatCard label="In-House" value="05" subtext="Occupied" icon={DoorOpen} color="text-green-500" bgClass="bg-green-50" />
        <StatCard label="Confirmed" value="05" subtext="Booked" icon={CheckCircle2} color="text-indigo-500" bgClass="bg-indigo-50" />
      </div>
      <div className="space-y-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="flex flex-wrap items-center gap-1.5 p-1.5 bg-[#F0F3E8] rounded-xl w-full lg:w-auto border border-[#DDE5D0]">
            {['All', 'Upcoming', 'Confirmed', 'Checked In'].map(filter => (
              <button key={filter} onClick={() => setActiveFilter(filter)} className={`px-5 py-2.5 rounded-lg text-xs font-semibold transition-all ${activeFilter === filter ? 'bg-white text-[#5C7A1F] shadow-sm' : 'text-[#7A8A6A] hover:text-[#4A5E38]'}`}>{filter}</button>
            ))}
          </div>
          <div className="relative group w-full lg:w-96">
            <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#7A8A6A] group-focus-within:text-[#84A63C] transition-colors" />
            <input type="text" placeholder="Search guests, rooms..." className="w-full pl-12 pr-4 py-3 bg-white border border-[#DDE5D0] rounded-xl text-sm font-medium focus:outline-none focus:border-[#84A63C] focus:ring-2 focus:ring-[#84A63C]/10 shadow-sm transition-all" />
          </div>
        </div>
        {guests.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {guests.map((guest, idx) => (
              <div key={idx} className="bg-white p-5 sm:p-7 rounded-2xl border border-[#DDE5D0] shadow-md shadow-[#84A63C]/5 hover:shadow-lg hover:shadow-[#84A63C]/15 transition-all duration-500 group flex flex-col justify-between">
                <div className="flex justify-between items-start mb-4 sm:mb-6">
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className="w-10 h-10 sm:w-14 sm:h-14 bg-[#F0F3E8] rounded-xl flex items-center justify-center text-[#1A2E05] border border-[#DDE5D0] group-hover:bg-[#84A63C] group-hover:text-white group-hover:border-[#84A63C] transition-all">
                      <span className="text-sm sm:text-lg font-bold">{guest.room}</span>
                    </div>
                    <div>
                      <h3 className="text-sm sm:text-lg font-bold text-[#1A2E05] tracking-tight leading-tight">{guest.name}</h3>
                      <p className="text-xs sm:text-xs font-medium text-[#7A8A6A] mt-0.5">{guest.type} • {guest.phone}</p>
                    </div>
                  </div>
                  <div className="flex flex-col items-end gap-1.5">
                    <span className={`px-3 py-1 rounded-lg text-xs font-semibold uppercase tracking-wider ${guest.status === 'Checked In' ? 'bg-green-50 text-green-600' : 'bg-blue-50 text-blue-600'}`}>{guest.status}</span>
                    <span className={`px-2.5 py-1 rounded-md text-xs font-bold uppercase tracking-wider ${guest.payment === 'Paid' ? 'bg-[#F0F3E8] text-[#1A2E05]' : 'bg-orange-50 text-orange-600'}`}>{guest.payment}</span>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4 border-t border-[#F0F3E8] pt-5 mt-2">
                  <div className="space-y-0.5">
                    <p className="text-[10px] font-bold text-[#7A8A6A] uppercase tracking-widest">Check-in</p>
                    <p className="text-xs sm:text-sm font-bold text-[#1A2E05]">{guest.checkIn}</p>
                  </div>
                  <div className="space-y-0.5 text-right">
                    <p className="text-[10px] font-bold text-[#7A8A6A] uppercase tracking-widest">Check-out</p>
                    <p className="text-xs sm:text-sm font-bold text-[#1A2E05]">{guest.checkOut}</p>
                  </div>
                </div>
                <div className="flex flex-wrap items-center gap-3 mt-8">
                  <button className="flex-1 py-3 bg-[#F0F3E8] text-[#1A2E05] rounded-xl text-xs font-bold uppercase tracking-wider hover:bg-[#DDE5D0] transition-all flex items-center justify-center gap-2"><Mail size={14} /> Send PDF</button>
                  {guest.status === 'Checked In' && (
                    <button className="flex-1 py-3 bg-red-50 text-red-600 rounded-xl text-xs font-bold uppercase tracking-wider hover:bg-red-100 transition-all flex items-center justify-center gap-2 border border-red-50">Check-Out</button>
                  )}
                  <button className="flex-1 py-3 bg-[#84A63C] text-white rounded-xl text-xs font-bold uppercase tracking-wider hover:opacity-90 transition-all flex items-center justify-center gap-2 shadow-sm">Manage <ChevronRight size={14} /></button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="py-24 text-center bg-white rounded-2xl border border-[#DDE5D0] shadow-sm">
            <div className="w-20 h-20 bg-[#F0F3E8] rounded-full flex items-center justify-center mx-auto mb-6"><Users size={32} className="text-[#7A8A6A]" /></div>
            <h3 className="text-xl font-bold text-[#1A2E05] tracking-tight">No reservations found</h3>
            <p className="text-xs font-semibold text-[#7A8A6A] uppercase tracking-wider mt-2">Create a new reservation to get started</p>
          </div>
        )}
      </div>
      <AddGuestModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes slideUp { from { opacity: 0; transform: translateY(60px); } to { opacity: 1; transform: translateY(0); } }
        .animate-fade-in { animation: fadeIn 0.4s ease-out forwards; }
        .animate-slide-up { animation: slideUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
      `}} />
    </div>
  );
};

export default GuestManagement;
