import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { 
  LayoutDashboard, 
  Hotel, 
  Store, 
  CreditCard, 
  Settings2, 
  ChefHat, 
  ChevronDown, 
  ChevronRight,
  LogOut,
  ChevronLeft
} from 'lucide-react'

const SidebarItem = ({ item, isActive, isExpanded, onToggle, isCollapsed, onClose }) => {
  const Icon = item.icon
  const hasSubItems = item.subItems && item.subItems.length > 0

  return (
    <div className="mb-0.5">
      <Link
        to={item.path || '#'}
        onClick={(e) => {
          if (hasSubItems) {
            e.preventDefault()
            onToggle()
          } else if (onClose) {
            onClose()
          }
        }}
        className={`flex items-center transition-all duration-200 group relative ${
          isCollapsed ? 'justify-center px-0 py-3' : 'justify-between px-4 py-2.5'
        } rounded-xl ${
          isActive 
            ? 'bg-white/15 text-white' 
            : 'text-white/50 hover:text-white/90 hover:bg-white/8'
        }`}
      >
        <div className={`flex items-center gap-3.5 ${isCollapsed ? 'justify-center' : ''}`}>
          <Icon size={19} strokeWidth={isActive ? 2 : 1.5} />
          {!isCollapsed && (
            <span className={`text-[13px] font-medium ${isActive ? 'text-white' : 'text-white/60 group-hover:text-white/90'}`}>
              {item.title}
            </span>
          )}
        </div>

        {!isCollapsed && hasSubItems && (
          <div className={`${isActive ? 'text-white/70' : 'text-white/30'}`}>
            {isExpanded ? <ChevronDown size={14} /> : <ChevronRight size={14} />}
          </div>
        )}

        {/* Tooltip for Collapsed State */}
        {isCollapsed && (
          <div className="absolute left-full ml-4 px-3 py-2 bg-[#1C2B12] text-white text-xs font-medium rounded-lg opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity shadow-xl z-[100] whitespace-nowrap border border-white/10">
            {item.title}
          </div>
        )}
      </Link>

      {!isCollapsed && hasSubItems && isExpanded && (
        <div className="ml-9 mt-1 mb-2 flex flex-col gap-0.5 border-l border-white/10 pl-4">
          {item.subItems.map((sub) => {
            const isSubActive = location.pathname === sub.path;
            return (
              <Link
                key={sub.path}
                to={sub.path}
                onClick={onClose}
                className={`relative px-3 py-2 text-[13px] font-medium rounded-lg transition-all flex items-center gap-2 ${
                  isSubActive 
                    ? 'text-[#9BBF42] bg-white/8' 
                    : 'text-white/40 hover:text-white/80 hover:bg-white/5'
                }`}
              >
                {isSubActive && <div className="w-1.5 h-1.5 rounded-full bg-[#9BBF42]"></div>}
                {sub.title}
              </Link>
            );
          })}
        </div>
      )}
    </div>
  )
}

const Sidebar = ({ isCollapsed, setIsCollapsed, onClose }) => {
  const location = useLocation()
  const [expandedItems, setExpandedItems] = useState(['Front Office', 'Store'])

  const menuItems = [
    { title: 'Overview', icon: LayoutDashboard, path: '/dashboard/overview' },
    { 
      title: 'Front Office', 
      icon: Hotel, 
      subItems: [
        { title: 'Guest Registry', path: '/dashboard/front-office/user' },
        { title: 'Stay Overview', path: '/dashboard/front-office/stay' },
        { title: 'Reservations', path: '/dashboard/front-office/reservations' },
        { title: 'Billing', path: '/dashboard/front-office/billing' },
      ]
    },
    { 
      title: 'Store', 
      icon: Store, 
      subItems: [
        { title: 'Inventory', path: '/dashboard/store/inventory' },
      ]
    },
    { title: 'Subscription', icon: CreditCard, path: '/dashboard/subscription' },
    { title: 'Channel Manager', icon: Settings2, path: '/dashboard/channel-manager' },
    { title: 'Kitchen & POS', icon: ChefHat, path: '/dashboard/kitchen-pos' },
  ]

  const toggleExpand = (title) => {
    setExpandedItems(prev => 
      prev.includes(title) ? prev.filter(t => t !== title) : [...prev, title]
    )
  }

  return (
    <aside className="h-full w-full bg-gradient-to-b from-[#1C2B12] to-[#15220D] flex flex-col transition-all duration-500 shadow-2xl">
      
      {/* Header / Logo */}
      <div className={`flex items-center ${isCollapsed ? 'justify-center p-5' : 'justify-between px-6 py-7'}`}>
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-[#84A63C] to-[#6B8C3E] rounded-xl flex items-center justify-center shrink-0 shadow-lg shadow-[#84A63C]/20">
            <Hotel size={20} className="text-white" strokeWidth={2} />
          </div>
          {!isCollapsed && (
            <div>
              <span className="text-lg font-bold text-white tracking-wide block leading-tight">Heritage</span>
              <span className="text-[11px] font-semibold text-white/30 uppercase tracking-[0.25em]">Hotel & Resort</span>
            </div>
          )}
        </div>
      </div>

      {/* Divider */}
      <div className={`mx-5 h-px bg-white/8 mb-4`}></div>

      {/* Collapse Toggle Button (Desktop Only) */}
      <button 
        onClick={() => setIsCollapsed(!isCollapsed)}
        className="hidden lg:flex absolute top-10 -right-3 w-6 h-6 bg-[#1C2B12] rounded-full items-center justify-center shadow-lg border border-white/10 hover:scale-110 transition-transform z-[60] text-white/50 hover:text-[#9BBF42]"
      >
        {isCollapsed ? <ChevronRight size={14} strokeWidth={2.5} /> : <ChevronLeft size={14} strokeWidth={2.5} />}
      </button>

      <nav className={`flex-1 overflow-y-auto no-scrollbar ${isCollapsed ? 'px-3' : 'px-4'}`}>
        {!isCollapsed && (
          <p className="px-4 mb-3 text-xs font-bold text-white/20 uppercase tracking-[0.2em]">Navigation</p>
        )}
        {menuItems.map((item) => (
          <SidebarItem 
            key={item.title} 
            item={item} 
            isCollapsed={isCollapsed}
            isActive={location.pathname === item.path || (item.subItems?.some(s => location.pathname === s.path))}
            isExpanded={expandedItems.includes(item.title)}
            onToggle={() => toggleExpand(item.title)}
            onClose={onClose}
          />
        ))}
      </nav>

      {/* Footer / Sign Out */}
      <div className={`border-t border-white/8 ${isCollapsed ? 'p-3 flex justify-center' : 'p-4'}`}>
        <Link 
          to="/login" 
          onClick={onClose}
          className={`flex items-center gap-3 rounded-xl text-white/40 hover:text-red-400 hover:bg-red-500/10 transition-all group ${
            isCollapsed ? 'p-3 justify-center' : 'px-4 py-2.5'
          }`}
        >
          <LogOut size={19} strokeWidth={1.5} />
          {!isCollapsed && (
            <span className="text-[13px] font-medium transition-colors">Sign Out</span>
          )}
        </Link>
      </div>
    </aside>
  )
}

export default Sidebar
