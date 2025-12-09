
import React from 'react';
import { Search, Bell, User, Menu } from 'lucide-react';

interface NavbarProps {
  onLogoClick?: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onLogoClick }) => {
  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-slate-200 h-16">
      <div className="flex items-center justify-between h-full px-4 max-w-[1600px] mx-auto">
        
        {/* Left: Logo & Menu */}
        <div className="flex items-center gap-4">
          <button className="p-2 hover:bg-slate-100 rounded-full text-slate-600">
            <Menu className="w-6 h-6" />
          </button>
          <div className="flex items-center gap-2 cursor-pointer" onClick={onLogoClick}>
             <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-lg shadow-sm">
                IC
             </div>
             <span className="font-bold text-xl text-slate-800 tracking-tight hidden md:block">
               IntelliCorpus
             </span>
          </div>
        </div>

        {/* Center: Search Bar */}
        <div className="flex-1 max-w-2xl px-8 hidden md:block">
            <div className="relative">
                <input 
                    type="text" 
                    placeholder="Search for courses, accents, or terms..." 
                    className="w-full bg-slate-100 border border-transparent focus:bg-white focus:border-blue-500 rounded-full py-2 pl-4 pr-12 outline-none transition-all"
                />
                <button className="absolute right-0 top-0 h-full px-4 text-slate-500 hover:text-blue-600">
                    <Search className="w-5 h-5" />
                </button>
            </div>
        </div>

        {/* Right: Actions */}
        <div className="flex items-center gap-2 sm:gap-4">
            <button className="p-2 hover:bg-slate-100 rounded-full text-slate-600 relative">
                <Bell className="w-6 h-6" />
                <span className="absolute top-1.5 right-2 w-2 h-2 bg-red-500 rounded-full border border-white"></span>
            </button>
            <div className="w-9 h-9 bg-slate-200 rounded-full flex items-center justify-center text-slate-600 cursor-pointer hover:ring-2 hover:ring-blue-500 hover:ring-offset-2 transition-all">
                <User className="w-5 h-5" />
            </div>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;

