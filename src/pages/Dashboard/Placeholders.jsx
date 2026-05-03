import { Construction } from 'lucide-react'

const PlaceholderPage = ({ title }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] text-center p-12 bg-white border border-[#DDE5D0] rounded-3xl shadow-sm">
      <div className="p-10 bg-[#F0F3E8] rounded-3xl mb-10 border border-[#DDE5D0]">
        <Construction size={64} className="text-[#7A8A6A]" strokeWidth={1} />
      </div>
      <h1 className="text-xs font-bold text-[#C8D4B4] uppercase tracking-[0.5em] mb-4">In Development</h1>
      <h2 className="text-2xl font-bold text-[#1A2E05] tracking-tight mb-6">{title} Module</h2>
      <p className="text-[#7A8A6A] max-w-md mx-auto text-sm leading-relaxed">
        We are engineering the {title} interface with precision. Our architects are currently refining the final touches.
      </p>
      
      <div className="mt-14 flex items-center gap-5">
        <div className="w-2 h-2 rounded-full bg-[#DDE5D0]"></div>
        <div className="w-2 h-2 rounded-full bg-[#84A63C] animate-pulse shadow-lg shadow-[#84A63C]/40"></div>
        <div className="w-2 h-2 rounded-full bg-[#DDE5D0]"></div>
      </div>
    </div>
  )
}

export const FrontOffice = ({ title }) => <PlaceholderPage title={title || "Front Office"} />
export const Store = () => <PlaceholderPage title="Store" />
export const ChannelManager = () => <PlaceholderPage title="Channel Manager" />
export const KitchenPOS = () => <PlaceholderPage title="Kitchen & POS" />
