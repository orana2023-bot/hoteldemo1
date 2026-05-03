import React, { useState } from 'react';
import { 
  DollarSign, TrendingUp, PieChart, Receipt, Search, Filter, Download,
  CreditCard, Building2, Globe, ArrowUpRight, MoreVertical, ChevronRight, X, FileText, User, Wallet
} from 'lucide-react';

const StatCard = ({ label, value, subtext, icon: Icon, color, trend }) => (
  <div className="bg-white p-5 sm:p-7 rounded-2xl border border-[#DDE5D0] shadow-md shadow-[#84A63C]/5 flex flex-col justify-between h-auto sm:h-44 min-h-[120px] sm:min-h-0 group hover:shadow-md transition-all duration-500">
    <div className="flex justify-between items-start">
      <div className={`p-2 sm:p-3 bg-[#F0F3E8] rounded-xl ${color} group-hover:scale-110 transition-transform`}><Icon size={18} className="sm:w-5 sm:h-5" strokeWidth={2} /></div>
      {trend && (<div className="flex items-center gap-1 px-2 py-0.5 sm:px-2.5 sm:py-1 bg-green-50 text-green-600 rounded-lg text-[11px] sm:text-xs font-bold tracking-wider"><ArrowUpRight size={12} /> {trend}</div>)}
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

const InvoiceModal = ({ isOpen, onClose, bill }) => {
  if (!bill || !isOpen) return null;
  return (
    <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 sm:p-8 animate-fade-in overflow-hidden">
      <div className="bg-white w-full sm:max-w-2xl rounded-2xl shadow-2xl overflow-hidden flex flex-col animate-slide-up relative">
        <div className="p-6 sm:p-8 border-b border-[#DDE5D0] flex items-center justify-between bg-[#1C2B12] text-white">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight uppercase">Invoice Preview</h2>
            <p className="text-xs font-medium text-[#7A8A6A] uppercase tracking-widest mt-1">Heritage Hotel & Resort</p>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-white/10 rounded-lg transition-all"><X size={20} /></button>
        </div>
        <div className="p-6 sm:p-10 space-y-8 overflow-y-auto max-h-[60vh] no-scrollbar">
          <div className="flex justify-between items-start border-b border-[#DDE5D0] pb-6">
            <div className="space-y-1">
              <p className="text-xs font-bold text-[#7A8A6A] uppercase tracking-wider">Bill To</p>
              <h4 className="text-lg font-bold text-[#1A2E05]">{bill.guest}</h4>
              <p className="text-xs font-medium text-[#7A8A6A]">Room {bill.room}</p>
            </div>
            <div className="text-right space-y-1">
              <p className="text-xs font-bold text-[#7A8A6A] uppercase tracking-wider">Date</p>
              <h4 className="text-sm font-bold text-[#1A2E05]">{bill.date}</h4>
            </div>
          </div>
          <div className="space-y-6">
            <p className="text-xs font-bold text-[#7A8A6A] uppercase tracking-wider">Summary</p>
            <div className="space-y-4">
              <div className="flex justify-between text-sm"><span className="font-medium text-[#4A5E38]">Total Amount</span><span className="font-bold text-[#1A2E05]">{bill.amount}</span></div>
              <div className="flex justify-between text-sm"><span className="font-medium text-[#4A5E38]">Method</span><span className="font-bold text-[#1A2E05]">{bill.method}</span></div>
              <div className="h-px bg-[#DDE5D0]"></div>
              <div className="flex justify-between text-xl"><span className="font-bold text-[#1A2E05] uppercase tracking-tight">Grand Total</span><span className="font-bold text-[#5C7A1F]">{bill.amount}</span></div>
            </div>
          </div>
        </div>
        <div className="p-6 bg-[#F0F3E8] border-t border-[#DDE5D0] flex gap-4">
          <button onClick={onClose} className="flex-1 py-3 text-sm font-semibold text-[#7A8A6A] hover:text-[#1A2E05] transition-colors">Close</button>
          <button className="flex-[2] py-3 bg-[#84A63C] text-white rounded-xl text-sm font-semibold hover:opacity-90 shadow-md flex items-center justify-center gap-2">Download PDF <ChevronRight size={16} /></button>
        </div>
      </div>
    </div>
  );
};

const Billing = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedBill, setSelectedBill] = useState(null);
  const [isInvoiceOpen, setIsInvoiceOpen] = useState(false);
  const billingData = [
    { room: '101', guest: 'John Doe', amount: '₹12,450', method: 'Card', status: 'Paid', date: 'Oct 24, 2023' },
    { room: '203', guest: 'Ellen Ripley', amount: '₹8,900', method: 'UPI', status: 'Paid', date: 'Oct 24, 2023' },
    { room: '104', guest: 'Michael Scott', amount: '₹15,200', method: 'Cash', status: 'Pending', date: 'Oct 23, 2023' },
    { room: '302', guest: 'Sarah Connor', amount: '₹22,000', method: 'Card', status: 'Paid', date: 'Oct 22, 2023' },
    { room: '205', guest: 'Thomas Anderson', amount: '₹5,600', method: 'UPI', status: 'Partial', date: 'Oct 22, 2023' },
  ];
  const otaRevenue = [
    { channel: 'Booking.com', amount: '₹4,52,000', percentage: 45 },
    { channel: 'Expedia', amount: '₹2,80,000', percentage: 28 },
    { channel: 'Airbnb', amount: '₹1,20,000', percentage: 12 },
    { channel: 'Direct / Others', amount: '₹1,50,000', percentage: 15 },
  ];
  const gstSummary = { taxable: '₹10,02,450', cgst: '₹90,220', sgst: '₹90,220', total: '₹1,80,440' };

  return (
    <div className="space-y-8 pb-12">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div>
          <h1 className="text-2xl font-bold text-[#1A2E05] tracking-tight">Billing & Revenue</h1>
          <p className="text-xs font-medium text-[#7A8A6A] mt-0.5 flex items-center gap-2">Financial Overview • <span className="text-[#5C7A1F] underline underline-offset-4 decoration-2">This Month</span></p>
        </div>
        <div className="flex items-center gap-4 w-full sm:w-auto">
          <button className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-6 py-3.5 bg-[#1C2B12] text-white rounded-xl text-sm font-semibold hover:opacity-90 shadow-md transition-all"><Download size={18} /> Export Report</button>
        </div>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard label="Total Revenue" value="₹12.4L" subtext="INR" icon={DollarSign} color="text-[#1A2E05]" trend="+12%" />
        <StatCard label="OTA Revenue" value="₹8.5L" subtext="INR" icon={Globe} color="text-blue-500" trend="+8%" />
        <StatCard label="GST Summary" value="₹1.8L" subtext="Collected" icon={Receipt} color="text-green-600" />
        <StatCard label="Pending" value="₹42K" subtext="Due" icon={CreditCard} color="text-orange-500" />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div className="lg:col-span-1 bg-white p-8 rounded-2xl border border-[#DDE5D0] shadow-md shadow-[#84A63C]/5 flex flex-col h-full">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-xs font-bold text-[#1A2E05] uppercase tracking-wider flex items-center gap-2"><PieChart size={18} className="text-[#7A8A6A]" /> OTA Revenue</h3>
            <button className="text-xs font-bold text-[#7A8A6A] uppercase tracking-widest hover:text-[#5C7A1F] transition-colors">Details</button>
          </div>
          <div className="space-y-6 flex-1">
            {otaRevenue.map((item, idx) => (
              <div key={idx} className="space-y-2">
                <div className="flex justify-between items-center text-xs font-bold uppercase tracking-wider"><span className="text-[#1A2E05]">{item.channel}</span><span className="text-[#7A8A6A]">{item.amount}</span></div>
                <div className="h-2 bg-[#F0F3E8] rounded-full overflow-hidden"><div className="h-full bg-[#84A63C] rounded-full transition-all duration-1000" style={{ width: `${item.percentage}%` }}></div></div>
              </div>
            ))}
          </div>
        </div>
        <div className="lg:col-span-2 bg-[#1C2B12] p-8 rounded-2xl shadow-xl relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -mr-32 -mt-32 group-hover:bg-white/10 transition-colors"></div>
          <div className="relative z-10">
            <h3 className="text-xs font-bold text-white uppercase tracking-wider mb-8 flex items-center gap-2"><Receipt size={18} className="text-white/40" /> Tax & GST Summary</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-b border-white/10 pb-8">
              <div className="space-y-1"><p className="text-xs font-semibold text-white/40 uppercase tracking-wider">Taxable Amount</p><p className="text-2xl font-bold text-white">{gstSummary.taxable}</p></div>
              <div className="space-y-1"><p className="text-xs font-semibold text-white/40 uppercase tracking-wider">CGST (9%)</p><p className="text-2xl font-bold text-white">{gstSummary.cgst}</p></div>
              <div className="space-y-1"><p className="text-xs font-semibold text-white/40 uppercase tracking-wider">SGST (9%)</p><p className="text-2xl font-bold text-white">{gstSummary.sgst}</p></div>
            </div>
            <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-6">
              <div><p className="text-xs font-semibold text-white/40 uppercase tracking-wider">Total Tax Liability</p><p className="text-3xl font-bold text-[#84A63C] mt-1">{gstSummary.total}</p></div>
              <button className="w-full sm:w-auto px-8 py-3.5 bg-white text-[#1C2B12] rounded-xl text-sm font-semibold hover:bg-[#F0F3E8] transition-all flex items-center justify-center gap-2">Download GST Report <ChevronRight size={16} /></button>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white rounded-2xl border border-[#DDE5D0] shadow-sm overflow-hidden">
        <div className="p-6 sm:p-8 border-b border-[#DDE5D0] flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="relative group w-full sm:w-96">
            <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#7A8A6A] group-focus-within:text-[#84A63C] transition-colors" />
            <input type="text" placeholder="Search Room or Guest..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className="w-full pl-12 pr-4 py-3 bg-[#F0F3E8] border border-[#DDE5D0] rounded-xl text-sm font-medium focus:outline-none focus:bg-white focus:border-[#84A63C] focus:ring-2 focus:ring-[#84A63C]/10 transition-all" />
          </div>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button className="flex-1 sm:flex-none p-3 bg-[#F0F3E8] text-[#7A8A6A] rounded-lg hover:text-[#1A2E05] border border-[#DDE5D0] transition-all"><Filter size={18} /></button>
            <p className="hidden sm:block text-xs font-bold text-[#7A8A6A] uppercase tracking-wider">Last 30 Days</p>
          </div>
        </div>
        <div className="p-6 sm:p-8">
          <div className="hidden md:grid grid-cols-6 gap-6 px-4 pb-6 border-b border-[#DDE5D0] mb-6">
            {['Room / Guest', 'Check-out', 'Amount', 'Method', 'Status', ''].map((h, i) => (
              <p key={i} className={`text-xs font-semibold text-[#7A8A6A] uppercase tracking-wider ${i === 5 ? 'text-right' : ''}`}>{h || 'Actions'}</p>
            ))}
          </div>
          <div className="space-y-6">
            {billingData.map((bill, idx) => (
              <div key={idx} className="flex flex-col md:grid md:grid-cols-6 gap-4 md:gap-6 p-4 rounded-xl border border-[#DDE5D0] bg-white hover:border-[#84A63C]/30 hover:shadow-md transition-all items-center">
                <div className="flex items-center gap-4 w-full md:w-auto">
                  <div className="w-10 h-10 bg-[#F0F3E8] rounded-xl flex items-center justify-center shrink-0 border border-[#DDE5D0]"><span className="text-sm font-bold tracking-tight">{bill.room}</span></div>
                  <div><p className="text-sm font-bold text-[#1A2E05] tracking-tight">{bill.guest}</p><p className="text-xs font-semibold text-[#7A8A6A] uppercase tracking-wider mt-0.5">Verified</p></div>
                </div>
                <div className="w-full md:w-auto"><p className="md:hidden text-xs font-semibold text-[#7A8A6A] uppercase tracking-wider mb-1">Check-out</p><p className="text-xs font-bold text-[#4A5E38]">{bill.date}</p></div>
                <div className="w-full md:w-auto"><p className="md:hidden text-xs font-semibold text-[#7A8A6A] uppercase tracking-wider mb-1">Amount</p><p className="text-sm font-bold text-[#1A2E05]">{bill.amount}</p></div>
                <div className="w-full md:w-auto"><p className="md:hidden text-xs font-semibold text-[#7A8A6A] uppercase tracking-wider mb-1">Method</p><p className="text-xs font-bold text-[#7A8A6A] uppercase tracking-wider">{bill.method}</p></div>
                <div className="w-full md:w-auto"><p className="md:hidden text-xs font-semibold text-[#7A8A6A] uppercase tracking-wider mb-1">Status</p><span className={`px-2.5 py-1 rounded-lg text-xs font-bold uppercase tracking-wider ${bill.status === 'Paid' ? 'bg-green-50 text-green-600' : 'bg-orange-50 text-orange-600'}`}>{bill.status}</span></div>
                <div className="w-full md:w-auto flex justify-end gap-2">
                  <button onClick={() => { setSelectedBill(bill); setIsInvoiceOpen(true); }} className="p-2 text-[#7A8A6A] hover:text-[#1A2E05] bg-[#F0F3E8] hover:bg-white rounded-lg transition-all border border-transparent hover:border-[#DDE5D0] shadow-sm"><Search size={16} /></button>
                  <button className="p-2 text-[#7A8A6A] hover:text-[#1A2E05] bg-[#F0F3E8] hover:bg-white rounded-lg transition-all border border-transparent hover:border-[#DDE5D0] shadow-sm"><Download size={16} /></button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <InvoiceModal isOpen={isInvoiceOpen} onClose={() => setIsInvoiceOpen(false)} bill={selectedBill} />
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes slideUp { from { opacity: 0; transform: translateY(40px); } to { opacity: 1; transform: translateY(0); } }
        .animate-fade-in { animation: fadeIn 0.4s ease-out forwards; }
        .animate-slide-up { animation: slideUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
      `}} />
    </div>
  );
};

export default Billing;
