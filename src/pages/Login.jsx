import React, { useState } from 'react';
import { User, Lock, Eye, EyeOff, Building } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    rememberMe: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-[#F5F7F0] p-4 sm:p-8 relative overflow-hidden">
      {/* Background Glow Effects - Adjusted for Light Theme */}
      <div className="absolute inset-0">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[60%] bg-[#84A63C]/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[60%] bg-[#5C7A1F]/5 rounded-full blur-[150px]" />
      </div>

      <div className="w-full max-w-[420px] z-10 animate-fade-in-up">
        {/* Glass Card */}
        <div className="bg-white/[0.97] backdrop-blur-xl border border-white/60 shadow-2xl shadow-black/20 rounded-3xl p-8 sm:p-12 transition-all duration-500">
          
          {/* Header */}
          <div className="text-center mb-10">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-[#84A63C] to-[#5C7A1F] shadow-lg shadow-[#84A63C]/30 mb-6">
              <Building className="w-8 h-8 text-white" strokeWidth={1.5} />
            </div>
            <h1 className="text-2xl font-black text-[#1A2E05] tracking-tight mb-1">
              HERITAGE
            </h1>
            <p className="text-[#7A8A6A] font-semibold tracking-[0.2em] text-[10px] uppercase">
              Management System
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="space-y-1.5">
              <label className="text-[11px] font-bold text-[#7A8A6A] uppercase tracking-wider ml-1" htmlFor="username">
                Username
              </label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-[#7A8A6A]/40 group-focus-within:text-[#84A63C] transition-colors">
                  <User size={17} strokeWidth={1.5} />
                </div>
                <input
                  id="username"
                  name="username"
                  type="text"
                  required
                  className="w-full pl-11 pr-4 py-3.5 bg-[#F0F3E8] border border-[#DDE5D0] rounded-xl text-[#1A2E05] text-sm placeholder-[#7A8A6A]/50 focus:outline-none focus:border-[#84A63C] focus:ring-2 focus:ring-[#84A63C]/15 focus:bg-white transition-all duration-200"
                  placeholder="admin_staff"
                  value={formData.username}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-[11px] font-bold text-[#7A8A6A] uppercase tracking-wider ml-1" htmlFor="password">
                Password
              </label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-[#7A8A6A]/40 group-focus-within:text-[#84A63C] transition-colors">
                  <Lock size={17} strokeWidth={1.5} />
                </div>
                <input
                  id="password"
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  required
                  className="w-full pl-11 pr-12 py-3.5 bg-[#F0F3E8] border border-[#DDE5D0] rounded-xl text-[#1A2E05] text-sm placeholder-[#7A8A6A]/50 focus:outline-none focus:border-[#84A63C] focus:ring-2 focus:ring-[#84A63C]/15 focus:bg-white transition-all duration-200"
                  placeholder="••••••••"
                  value={formData.password}
                  onChange={handleChange}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-4 flex items-center text-[#7A8A6A]/40 hover:text-[#1A2E05] transition-colors"
                >
                  {showPassword ? <EyeOff size={17} strokeWidth={1.5} /> : <Eye size={17} strokeWidth={1.5} />}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between pt-1">
              <div className="flex items-center">
                <input
                  id="rememberMe"
                  name="rememberMe"
                  type="checkbox"
                  className="h-4 w-4 border-[#DDE5D0] rounded accent-[#84A63C]"
                  checked={formData.rememberMe}
                  onChange={handleChange}
                />
                <label htmlFor="rememberMe" className="ml-2 block text-xs font-semibold text-[#7A8A6A] cursor-pointer select-none">
                  Keep me signed in
                </label>
              </div>
              <a href="#" className="text-xs font-semibold text-[#84A63C] hover:text-[#5C7A1F] transition-colors">
                Forgot?
              </a>
            </div>

            <button
              type="submit"
              className="w-full flex justify-center py-3.5 px-4 bg-gradient-to-r from-[#84A63C] to-[#6B8C3E] text-white rounded-xl text-sm font-bold uppercase tracking-wider hover:shadow-lg hover:shadow-[#84A63C]/25 transition-all transform active:scale-[0.98] mt-6"
            >
              Sign In
            </button>
          </form>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-10 text-[#7A8A6A]/40 text-[10px] font-semibold tracking-[0.3em] z-10 uppercase">
        © 2026 HotelSoft Solutions
      </div>
      
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}} />
    </div>
  );
};

export default Login;
