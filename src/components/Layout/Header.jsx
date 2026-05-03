import { Bell, Search, Menu } from 'lucide-react'

const Header = ({ title, onMenuClick }) => {
  return (
    <header className="h-[72px] bg-white border-b border-[#DDE5D0] px-6 lg:px-10 flex items-center justify-between sticky top-0 z-40 shadow-sm shadow-black/[0.02]">
      <div className="flex items-center gap-4">
        <button 
          onClick={onMenuClick}
          className="p-2 hover:bg-[#F0F3E8] rounded-lg lg:hidden transition-colors text-[#4A5E38]"
        >
          <Menu size={22} />
        </button>
        <div>
          <h2 className="text-[15px] font-bold text-[#1A2E05] tracking-wide uppercase">{title}</h2>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <div className="hidden md:flex items-center bg-[#F5F7F0] border border-[#DDE5D0] rounded-xl px-4 py-2 w-72 focus-within:bg-white focus-within:border-[#84A63C] focus-within:ring-2 focus-within:ring-[#84A63C]/15 transition-all duration-500">
          <Search size={15} className="text-[#7A8A6A]" />
          <input 
            type="text" 
            placeholder="Search records..." 
            className="bg-transparent border-none focus:ring-0 text-sm font-medium ml-2.5 w-full text-[#1A2E05] placeholder-[#7A8A6A]/60"
          />
        </div>

        <div className="flex items-center gap-2">
          <button className="relative p-2.5 hover:bg-[#F0F3E8] rounded-xl transition-all text-[#4A5E38] hover:text-[#84A63C]">
            <Bell size={19} strokeWidth={1.5} />
            <span className="absolute top-2 right-2 w-2 h-2 bg-[#84A63C] border-2 border-white rounded-full"></span>
          </button>
          
          <div className="h-7 w-px bg-[#DDE5D0] mx-1 hidden sm:block"></div>

          <button className="flex items-center gap-2.5 pl-2 pr-1.5 py-1 rounded-xl hover:bg-[#F0F3E8] transition-all group">
            <div className="text-right hidden sm:block">
              <p className="text-[13px] font-semibold text-[#1A2E05] leading-tight">Aditya Jaiswal</p>
              <p className="text-xs text-[#7A8A6A] font-medium leading-tight">Administrator</p>
            </div>
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#84A63C] to-[#5C7A1F] flex items-center justify-center text-white text-xs font-bold shadow-md shadow-[#84A63C]/20">
              AJ
            </div>
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
