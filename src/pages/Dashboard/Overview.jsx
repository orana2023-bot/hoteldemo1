import { useState } from 'react';
import { 
  Users, Bed, CalendarCheck, TrendingUp, ArrowUpRight, ArrowDownRight,
  Clock, MoreHorizontal
} from 'lucide-react'

const StatCard = ({ title, value, change, isPositive, icon: Icon }) => (
  <div className="bg-white p-5 rounded-2xl border border-[#DDE5D0] shadow-md shadow-[#84A63C]/5 hover:shadow-lg hover:shadow-[#84A63C]/15 transition-all duration-500 group">
    <div className="flex justify-between items-start mb-5">
      <div className="p-2.5 bg-[#F0F3E8] rounded-xl group-hover:bg-[#84A63C] group-hover:text-white transition-all duration-500 text-[#4A5E38] border border-[#DDE5D0] group-hover:border-transparent">
        <Icon size={18} strokeWidth={2} />
      </div>
      <div className={`flex items-center gap-1 text-xs font-bold px-2.5 py-1 rounded-full uppercase tracking-wider ${
        isPositive ? 'bg-emerald-50 text-emerald-600' : 'bg-red-50 text-red-500'
      }`}>
        {isPositive ? <ArrowUpRight size={12} /> : <ArrowDownRight size={12} />}
        {change}
      </div>
    </div>
    <div>
      <p className="text-xs font-semibold text-[#7A8A6A] mb-1 uppercase tracking-wider">{title}</p>
      <p className="text-2xl font-bold text-[#1A2E05] tracking-tight">{value}</p>
    </div>
  </div>
)

const RecentActivity = () => (
  <div className="bg-white rounded-2xl border border-[#DDE5D0] shadow-sm p-6">
    <div className="flex items-center justify-between mb-6">
      <div>
        <h3 className="text-[15px] font-bold text-[#1A2E05]">Resident Status</h3>
        <p className="text-xs font-semibold text-[#7A8A6A] uppercase tracking-wider mt-0.5">Live Occupancy</p>
      </div>
      <button className="p-1.5 hover:bg-[#F0F3E8] rounded-lg transition-colors">
        <MoreHorizontal size={18} className="text-[#7A8A6A]" />
      </button>
    </div>
    <div className="space-y-3">
      {[
        { user: 'Sarah Connor', room: 'Suite 402', status: 'Check-in', time: '10:30 AM', active: true },
        { user: 'John Doe', room: 'Deluxe 105', status: 'Check-out', time: '11:15 AM', active: false },
        { user: 'Ellen Ripley', room: 'Standard 203', status: 'In-Stay', time: 'Yesterday', active: true },
        { user: 'Thomas Muller', room: 'Suite 401', status: 'Pending', time: '12:00 PM', active: false },
      ].map((item, i) => (
        <div key={i} className="flex items-center justify-between group cursor-pointer p-2.5 hover:bg-[#F5F7F0] rounded-xl transition-all">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-[#F0F3E8] border border-[#DDE5D0] flex items-center justify-center font-bold text-[#1A2E05] text-xs group-hover:bg-[#84A63C] group-hover:text-white group-hover:border-transparent transition-all">
              {item.user.split(' ').map(n => n[0]).join('')}
            </div>
            <div>
              <p className="text-sm font-semibold text-[#1A2E05]">{item.user}</p>
              <p className="text-xs font-medium text-[#7A8A6A] uppercase tracking-wider">{item.room}</p>
            </div>
          </div>
          <div className="text-right">
            <div className={`text-xs font-bold px-2.5 py-0.5 rounded-full mb-0.5 inline-block uppercase tracking-wider ${
              item.active ? 'bg-[#EEF4E0] text-[#5C7A1F]' : 'bg-[#F0F3E8] text-[#4A5E38]'
            }`}>
              {item.status}
            </div>
            <p className="text-xs text-[#7A8A6A]">{item.time}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
)

const Overview = () => {
  const [dateFilter, setDateFilter] = useState('Daily');

  return (
    <div className="space-y-8 pb-16">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-[#1A2E05] tracking-tight">Executive Overview</h1>
          <p className="text-xs font-medium text-[#7A8A6A] mt-0.5">Property Performance Snapshot</p>
        </div>
        <div className="flex bg-[#F0F3E8] p-1 rounded-xl border border-[#DDE5D0]">
          {['Daily', 'Weekly', 'Monthly'].map(tab => (
            <button 
              key={tab}
              onClick={() => setDateFilter(tab)}
              className={`px-4 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                dateFilter === tab ? 'bg-white text-[#5C7A1F] shadow-sm' : 'text-[#7A8A6A] hover:text-[#4A5E38]'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* KPI Section */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard title="TOTAL BOOKINGS" value="1,284" change="+12.5%" isPositive icon={CalendarCheck} />
        <StatCard title="AVAILABLE ROOMS" value="42 / 120" change="-2.4%" isPositive={false} icon={Bed} />
        <StatCard title="ACTIVE GUESTS" value="86" change="+4.3%" isPositive icon={Users} />
        <StatCard title="REVENUE (MTD)" value="₹4.25L" change="+18.2%" isPositive icon={TrendingUp} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white rounded-2xl border border-[#DDE5D0] shadow-sm p-6 min-h-[420px] flex flex-col">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-[15px] font-bold text-[#1A2E05]">Analytic Insights</h3>
              <p className="text-xs font-semibold text-[#7A8A6A] uppercase tracking-wider mt-0.5">Revenue & Occupancy Metrics</p>
            </div>
          </div>
          
          <div className="flex-1 flex items-end gap-3 sm:gap-5 px-2 sm:px-4 mt-6">
            {[
              { id: 'MON', val: 35 }, { id: 'TUE', val: 60 }, { id: 'WED', val: 40 }, 
              { id: 'THU', val: 75 }, { id: 'FRI', val: 90 }, { id: 'SAT', val: 50 }, { id: 'SUN', val: 70 }
            ].map((bar, i) => (
              <div key={i} className="flex-1 flex flex-col items-center gap-3 group relative">
                <div className="absolute -top-8 bg-[#1C2B12] text-white text-xs font-bold px-2 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10 shadow-xl">
                  {bar.val}%
                </div>
                <div 
                  className="w-full bg-gradient-to-t from-[#84A63C]/20 to-[#84A63C]/5 rounded-xl relative overflow-hidden transition-all duration-500 group-hover:from-[#84A63C] group-hover:to-[#9BBF42] group-hover:shadow-lg cursor-pointer border border-[#DDE5D0]/50 group-hover:border-transparent" 
                  style={{ height: `${bar.val}%` }}
                >
                </div>
                <span className="text-xs font-bold text-[#7A8A6A] group-hover:text-[#1A2E05] transition-colors uppercase">{bar.id}</span>
              </div>
            ))}
          </div>
        </div>

        <RecentActivity />
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {[
          { title: 'New Reservation', subtitle: 'Open a new guest record', icon: CalendarCheck },
          { title: 'Guest Management', subtitle: 'View resident directory', icon: Users },
          { title: 'Room Service', subtitle: 'Housekeeping & tasks', icon: Clock },
        ].map((action, i) => (
          <button key={i} className="flex items-center gap-4 p-5 bg-white border border-[#DDE5D0] rounded-2xl text-left hover:shadow-md hover:border-[#84A63C]/20 transition-all group">
            <div className="p-3 bg-[#F0F3E8] rounded-xl group-hover:bg-[#1C2B12] group-hover:text-white transition-all duration-500 text-[#4A5E38] border border-[#DDE5D0] group-hover:border-transparent">
              <action.icon size={20} strokeWidth={2} />
            </div>
            <div>
              <h4 className="text-sm font-bold text-[#1A2E05] mb-0.5">{action.title}</h4>
              <p className="text-xs text-[#7A8A6A]">{action.subtitle}</p>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Overview;
