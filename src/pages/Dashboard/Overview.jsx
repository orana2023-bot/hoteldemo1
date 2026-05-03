import { useState } from 'react';
import { 
  Users, Bed, CalendarCheck, TrendingUp, ArrowUpRight, ArrowDownRight,
  Clock, MoreHorizontal
} from 'lucide-react'
import { 
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer 
} from 'recharts';

const StatCard = ({ title, value, change, isPositive, icon: Icon }) => (
  <div className="bg-white p-4 sm:p-5 rounded-2xl border border-[#DDE5D0] shadow-md shadow-[#84A63C]/5 hover:shadow-lg hover:shadow-[#84A63C]/15 transition-all duration-500 group">
    <div className="flex justify-between items-start mb-4 sm:mb-5">
      <div className="p-2 sm:p-2.5 bg-[#F0F3E8] rounded-xl group-hover:bg-[#84A63C] group-hover:text-white transition-all duration-500 text-[#4A5E38] border border-[#DDE5D0] group-hover:border-transparent">
        <Icon size={16} className="sm:w-[18px] sm:h-[18px]" strokeWidth={2} />
      </div>
      <div className={`flex items-center gap-1 text-[10px] sm:text-xs font-bold px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full uppercase tracking-wider ${
        isPositive ? 'bg-emerald-50 text-emerald-600' : 'bg-red-50 text-red-500'
      }`}>
        {isPositive ? <ArrowUpRight size={10} className="sm:w-3 sm:h-3" /> : <ArrowDownRight size={10} className="sm:w-3 sm:h-3" />}
        {change}
      </div>
    </div>
    <div>
      <p className="text-[10px] sm:text-xs font-semibold text-[#7A8A6A] mb-0.5 sm:mb-1 uppercase tracking-wider">{title}</p>
      <p className="text-xl sm:text-2xl font-bold text-[#1A2E05] tracking-tight">{value}</p>
    </div>
  </div>
)

const RecentActivity = () => (
  <div className="bg-white rounded-2xl border border-[#DDE5D0] shadow-sm p-4 sm:p-6">
    <div className="flex items-center justify-between mb-5 sm:mb-6">
      <div>
        <h3 className="text-sm sm:text-[15px] font-bold text-[#1A2E05]">Resident Status</h3>
        <p className="text-[10px] sm:text-xs font-semibold text-[#7A8A6A] uppercase tracking-wider mt-0.5">Live Occupancy</p>
      </div>
      <button className="p-1.5 hover:bg-[#F0F3E8] rounded-lg transition-colors">
        <MoreHorizontal size={16} className="sm:w-[18px] sm:h-[18px] text-[#7A8A6A]" />
      </button>
    </div>
    <div className="space-y-2 sm:space-y-3">
      {[
        { user: 'Sarah Connor', room: 'Suite 402', status: 'Check-in', time: '10:30 AM', active: true },
        { user: 'John Doe', room: 'Deluxe 105', status: 'Check-out', time: '11:15 AM', active: false },
        { user: 'Ellen Ripley', room: 'Standard 203', status: 'In-Stay', time: 'Yesterday', active: true },
        { user: 'Thomas Muller', room: 'Suite 401', status: 'Pending', time: '12:00 PM', active: false },
      ].map((item, i) => (
        <div key={i} className="flex items-center justify-between group cursor-pointer p-2 sm:p-2.5 hover:bg-[#F5F7F0] rounded-xl transition-all">
          <div className="flex items-center gap-2.5 sm:gap-3">
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#F0F3E8] border border-[#DDE5D0] flex items-center justify-center font-bold text-[#1A2E05] text-[10px] sm:text-xs group-hover:bg-[#84A63C] group-hover:text-white group-hover:border-transparent transition-all">
              {item.user.split(' ').map(n => n[0]).join('')}
            </div>
            <div>
              <p className="text-xs sm:text-sm font-semibold text-[#1A2E05]">{item.user}</p>
              <p className="text-[10px] sm:text-xs font-medium text-[#7A8A6A] uppercase tracking-wider">{item.room}</p>
            </div>
          </div>
          <div className="text-right">
            <div className={`text-[10px] font-bold px-2 py-0.5 rounded-full mb-0.5 inline-block uppercase tracking-wider ${
              item.active ? 'bg-[#EEF4E0] text-[#5C7A1F]' : 'bg-[#F0F3E8] text-[#4A5E38]'
            }`}>
              {item.status}
            </div>
            <p className="text-[10px] text-[#7A8A6A]">{item.time}</p>
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
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-6">
        <div>
          <h1 className="text-xl sm:text-2xl font-bold text-[#1A2E05] tracking-tight">Executive Overview</h1>
          <p className="text-[10px] sm:text-xs font-medium text-[#7A8A6A] mt-0.5">Property Performance Snapshot</p>
        </div>
        <div className="flex bg-[#F0F3E8] p-1 rounded-xl border border-[#DDE5D0] w-full sm:w-auto">
          {['Daily', 'Weekly', 'Monthly'].map(tab => (
            <button 
              key={tab}
              onClick={() => setDateFilter(tab)}
              className={`flex-1 sm:flex-none px-3 sm:px-4 py-1.5 rounded-lg text-[10px] sm:text-xs font-semibold transition-all ${
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
        <div className="lg:col-span-2 bg-white rounded-2xl border border-[#DDE5D0] shadow-sm p-4 sm:p-6 min-h-[350px] sm:min-h-[420px] flex flex-col">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div>
              <h3 className="text-sm sm:text-[15px] font-bold text-[#1A2E05]">Analytic Insights</h3>
              <p className="text-[10px] sm:text-xs font-semibold text-[#7A8A6A] uppercase tracking-wider mt-0.5">Revenue & Occupancy Metrics</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-[#84A63C]"></div>
                <span className="text-[9px] sm:text-[10px] font-bold text-[#7A8A6A] uppercase tracking-wider">Revenue</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-[#DDE5D0]"></div>
                <span className="text-[9px] sm:text-[10px] font-bold text-[#7A8A6A] uppercase tracking-wider">Occupancy</span>
              </div>
            </div>
          </div>
          
          <div className="flex-1 w-full h-[300px] mt-2">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart
                data={[
                  { name: 'Mon', revenue: 4000, occupancy: 2400 },
                  { name: 'Tue', revenue: 3000, occupancy: 1398 },
                  { name: 'Wed', revenue: 2000, occupancy: 9800 },
                  { name: 'Thu', revenue: 2780, occupancy: 3908 },
                  { name: 'Fri', revenue: 1890, occupancy: 4800 },
                  { name: 'Sat', revenue: 2390, occupancy: 3800 },
                  { name: 'Sun', revenue: 3490, occupancy: 4300 },
                ]}
                margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
              >
                <defs>
                  <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#84A63C" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#84A63C" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#F0F3E8" />
                <XAxis 
                  dataKey="name" 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fill: '#7A8A6A', fontSize: 10, fontWeight: 600 }}
                  dy={10}
                />
                <YAxis 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fill: '#7A8A6A', fontSize: 10, fontWeight: 600 }}
                />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#1C2B12', 
                    border: 'none', 
                    borderRadius: '12px',
                    color: '#fff',
                    fontSize: '12px',
                    fontWeight: 'bold',
                    boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
                  }}
                  itemStyle={{ color: '#fff' }}
                  cursor={{ stroke: '#84A63C', strokeWidth: 2 }}
                />
                <Area 
                  type="monotone" 
                  dataKey="revenue" 
                  stroke="#84A63C" 
                  strokeWidth={3}
                  fillOpacity={1} 
                  fill="url(#colorRevenue)" 
                />
                <Area 
                  type="monotone" 
                  dataKey="occupancy" 
                  stroke="#DDE5D0" 
                  strokeWidth={2}
                  fill="transparent" 
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <RecentActivity />
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {[
          { title: 'New Reservation', subtitle: 'Open a new record', icon: CalendarCheck },
          { title: 'Guest Management', subtitle: 'Resident directory', icon: Users },
          { title: 'Room Service', subtitle: 'Housekeeping tasks', icon: Clock },
        ].map((action, i) => (
          <button key={i} className="flex items-center gap-3 sm:gap-4 p-4 sm:p-5 bg-white border border-[#DDE5D0] rounded-2xl text-left hover:shadow-md hover:border-[#84A63C]/20 transition-all group">
            <div className="p-2.5 sm:p-3 bg-[#F0F3E8] rounded-xl group-hover:bg-[#1C2B12] group-hover:text-white transition-all duration-500 text-[#4A5E38] border border-[#DDE5D0] group-hover:border-transparent shrink-0">
              <action.icon size={18} className="sm:w-5 sm:h-5" strokeWidth={2} />
            </div>
            <div className="min-w-0">
              <h4 className="text-xs sm:text-sm font-bold text-[#1A2E05] mb-0.5 truncate">{action.title}</h4>
              <p className="text-[10px] sm:text-xs text-[#7A8A6A] truncate">{action.subtitle}</p>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Overview;
