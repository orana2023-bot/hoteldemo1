import React, { useState, useEffect } from 'react';
import { 
  ChefHat, Clock, UtensilsCrossed, DollarSign, Plus, Timer, 
  CheckCircle2, AlertCircle, Coffee, Pizza, Wine, MoreVertical, ChevronRight
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

const OrderCard = ({ order, onUpdate }) => {
  const [timer, setTimer] = useState(order.elapsed);
  useEffect(() => {
    const interval = setInterval(() => { setTimer(prev => prev + 1); }, 60000);
    return () => clearInterval(interval);
  }, []);
  const getStatusStyles = (status, urgent) => {
    if (urgent) return { border: 'border-red-200', bg: 'bg-red-50', text: 'text-red-600' };
    switch (status) {
      case 'New': return { border: 'border-blue-200', bg: 'bg-blue-50', text: 'text-blue-600' };
      case 'Preparing': return { border: 'border-[#C8D4B4]', bg: 'bg-[#F0F3E8]', text: 'text-[#4A5E38]' };
      case 'Ready': return { border: 'border-green-200', bg: 'bg-green-50', text: 'text-green-600' };
      default: return { border: 'border-[#DDE5D0]', bg: 'bg-[#F0F3E8]', text: 'text-[#4A5E38]' };
    }
  };
  const styles = getStatusStyles(order.status, order.urgent);
  return (
    <div className={`bg-white p-5 sm:p-7 rounded-2xl border-2 shadow-sm transition-all relative overflow-hidden group ${styles.border} ${order.urgent ? 'ring-2 ring-red-500 ring-offset-2' : ''}`}>
      <div className="flex justify-between items-start mb-4 sm:mb-6">
        <div>
          <div className="flex items-center gap-2">
            <h3 className="text-base sm:text-lg font-bold text-[#1A2E05] tracking-tight">{order.source}</h3>
            {order.urgent && <span className="p-1 bg-red-100 text-red-600 rounded-full animate-pulse"><AlertCircle size={10} /></span>}
          </div>
          <p className="text-[11px] sm:text-xs font-semibold text-[#7A8A6A] uppercase tracking-wider mt-0.5">{order.type} • #{order.id}</p>
        </div>
        <div className={`px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-lg text-[11px] sm:text-xs font-bold uppercase tracking-wider ${styles.bg} ${styles.text}`}>{order.status}</div>
      </div>
      <div className="space-y-3 sm:space-y-4 mb-6">
        {order.items.map((item, idx) => (
          <div key={idx} className="flex items-start gap-3">
            <span className="w-5 h-5 sm:w-6 sm:h-6 rounded-lg bg-[#F0F3E8] border border-[#DDE5D0] flex items-center justify-center text-xs sm:text-xs font-bold text-[#1A2E05] shrink-0">{item.qty}</span>
            <div>
              <p className="text-xs sm:text-sm font-bold text-[#1A2E05] leading-tight">{item.name}</p>
              {item.notes && <p className="text-[11px] sm:text-xs text-orange-500 font-medium italic mt-0.5">Note: {item.notes}</p>}
            </div>
          </div>
        ))}
      </div>
      <div className="flex gap-3">
        {order.status === 'New' && (
          <button onClick={() => onUpdate(order.id, 'Preparing')} className="flex-1 py-3 bg-[#1C2B12] text-white rounded-xl text-xs font-bold uppercase tracking-wider hover:opacity-90 transition-all shadow-md">Start Prep</button>
        )}
        {order.status === 'Preparing' && (
          <button onClick={() => onUpdate(order.id, 'Ready')} className="flex-1 py-4 bg-green-600 text-white rounded-2xl text-[11px] font-extrabold uppercase tracking-widest hover:opacity-90 transition-all shadow-lg">Mark Ready</button>
        )}
        {order.status === 'Ready' && (
          <button onClick={() => onUpdate(order.id, 'Served')} className="flex-1 py-4 bg-[#F0F3E8] text-[#1A2E05] rounded-2xl text-[11px] font-extrabold uppercase tracking-widest hover:bg-[#DDE5D0] transition-all">Served</button>
        )}
        <button onClick={() => onUpdate(order.id, 'toggleUrgent')} className={`p-4 rounded-2xl transition-all ${order.urgent ? 'bg-red-50 text-red-600' : 'bg-[#F0F3E8] text-[#7A8A6A] hover:text-[#1A2E05]'}`}>
          <AlertCircle size={18} />
        </button>
      </div>
    </div>
  );
};

const KitchenPOS = () => {
  const [activeTab, setActiveTab] = useState('All');
  const [orders, setOrders] = useState([
    { id: '1024', source: 'Room 302', type: 'Room Service', status: 'New', elapsed: 2, items: [{ qty: 2, name: 'Club Sandwich', notes: 'No Mayo' }, { qty: 1, name: 'Orange Juice', notes: 'Fresh' }]},
    { id: '1025', source: 'Table 4', type: 'Dining', status: 'Preparing', elapsed: 12, items: [{ qty: 1, name: 'Classic Margherita', notes: 'Extra Cheese' }, { qty: 2, name: 'Coke Zero', notes: '' }]},
    { id: '1026', source: 'Table 7', type: 'Dining', status: 'Ready', elapsed: 24, items: [{ qty: 1, name: 'Grilled Salmon', notes: '' }, { qty: 1, name: 'Chardonnay', notes: '' }]},
    { id: '1027', source: 'Poolside', type: 'Dining', status: 'New', elapsed: 5, items: [{ qty: 3, name: 'Virgin Mojito', notes: 'Extra Mint' }]},
  ]);
  const updateOrderStatus = (id, action) => {
    if (action === 'Served') { setOrders(prev => prev.filter(o => o.id !== id)); }
    else if (action === 'toggleUrgent') { setOrders(prev => prev.map(o => o.id === id ? { ...o, urgent: !o.urgent } : o)); }
    else { setOrders(prev => prev.map(o => o.id === id ? { ...o, status: action } : o)); }
  };
  const filteredOrders = orders.filter(o => activeTab === 'All' || o.type === activeTab);

  return (
    <div className="space-y-8 pb-12">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div>
          <h1 className="text-2xl font-bold text-[#1A2E05] tracking-tight">Kitchen & POS</h1>
          <p className="text-xs font-medium text-[#7A8A6A] mt-0.5 flex items-center gap-2">
            Service Board <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse"></span> <span className="text-[#1A2E05]">Real-time Operations</span>
          </p>
        </div>
        <button className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3.5 bg-[#84A63C] text-white rounded-xl text-sm font-semibold hover:opacity-90 shadow-md transition-all">
          <Plus size={18} /> New POS Order
        </button>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard label="Active Orders" value={orders.length} subtext="Live" icon={ChefHat} color="text-[#1A2E05]" bgClass="bg-[#F0F3E8]" />
        <StatCard label="Total Sales" value="₹12.4K" subtext="Today" icon={DollarSign} color="text-green-500" bgClass="bg-green-50" />
        <StatCard label="Avg. Prep" value="18m" subtext="Target 15m" icon={Clock} color="text-[#5C7A1F]" bgClass="bg-[#EEF4E0]" />
        <StatCard label="Kitchen Load" value="Normal" subtext="Optimal" icon={UtensilsCrossed} color="text-orange-500" bgClass="bg-orange-50" />
      </div>
      <div className="space-y-8">
        <div className="flex flex-wrap items-center gap-2 p-1.5 bg-[#F0F3E8] rounded-xl w-full sm:w-auto border border-[#DDE5D0]">
          {['All', 'Dining', 'Room Service'].map(tab => (
            <button key={tab} onClick={() => setActiveTab(tab)} className={`px-6 py-2.5 rounded-lg text-xs font-semibold transition-all ${activeTab === tab ? 'bg-white text-[#5C7A1F] shadow-sm' : 'text-[#7A8A6A] hover:text-[#4A5E38]'}`}>{tab}</button>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredOrders.length > 0 ? (
            filteredOrders.map(order => (<OrderCard key={order.id} order={order} onUpdate={updateOrderStatus} />))
          ) : (
            <div className="col-span-full py-20 text-center bg-white rounded-2xl border border-[#DDE5D0]">
              <div className="w-16 h-16 bg-[#F0F3E8] rounded-full flex items-center justify-center mx-auto mb-6"><UtensilsCrossed size={28} className="text-[#C8D4B4]" /></div>
              <h3 className="text-lg font-bold text-[#1A2E05]">All Clear</h3>
              <p className="text-xs font-medium text-[#7A8A6A] mt-2 uppercase tracking-wider">No active orders in the queue.</p>
            </div>
          )}
        </div>
      </div>
      <div className="bg-[#1C2B12] p-8 sm:p-10 rounded-2xl shadow-xl relative overflow-hidden group">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -mr-48 -mt-48 group-hover:bg-white/10 transition-colors"></div>
        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-10">
            <div className="hidden sm:flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-white"><Coffee size={18} /></div>
              <div className="text-white"><p className="text-xs font-bold text-white/40 uppercase tracking-wider">Coffee Bar</p><p className="text-xl font-bold">₹4.2K</p></div>
            </div>
            <div className="hidden sm:flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-white"><Pizza size={18} /></div>
              <div className="text-white"><p className="text-xs font-bold text-white/40 uppercase tracking-wider">Main Kitchen</p><p className="text-xl font-bold">₹6.8K</p></div>
            </div>
            <div className="hidden sm:flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-white"><Wine size={18} /></div>
              <div className="text-white"><p className="text-xs font-bold text-white/40 uppercase tracking-wider">Lounge</p><p className="text-xl font-bold">₹1.4K</p></div>
            </div>
          </div>
          <button className="w-full lg:w-auto px-8 py-3.5 bg-white text-[#1C2B12] rounded-xl text-sm font-semibold hover:bg-[#F0F3E8] transition-all flex items-center justify-center gap-2">
            Full Sales Analytics <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default KitchenPOS;
