import React, { useState } from 'react';
import { ScreenId, TransitionType } from '../types';

interface HeaderProps {
  activeScreen: ScreenId;
  onNavigate: (screen: ScreenId, transition?: TransitionType) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeScreen,
  onNavigate,
  searchQuery,
  setSearchQuery,
}) => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#0a0a0a]/80 backdrop-blur-xl border-b border-white/10 transition-all duration-200 ease-in-out">
      <div className="flex justify-between items-center px-4 sm:px-8 md:px-12 py-4 max-w-[1440px] mx-auto w-full">
        {/* Left Side: Brand Logo + Nav Links */}
        <div className="flex items-center gap-8 lg:gap-12">
          {/* Brand Logo matching XPath //a[contains(text(), 'CINESTREAM')] */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              onNavigate('home', 'none');
            }}
            className="font-['Manrope'] font-black text-2xl sm:text-3xl text-red-600 tracking-tighter hover:opacity-80 transition-opacity cursor-pointer select-none"
          >
            CINESTREAM
          </a>

          {/* Desktop Navigation Links */}
          <ul className="hidden md:flex items-center gap-6 lg:gap-8 text-sm font-medium">
            <li>
              <a
                href="#catalog"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate('catalog', 'none');
                }}
                className={`flex items-center gap-2 transition-colors duration-200 cursor-pointer ${
                  activeScreen === 'catalog'
                    ? 'text-white font-bold'
                    : 'text-white/60 hover:text-white'
                }`}
              >
                <span
                  className={`w-1.5 h-1.5 rounded-full ${
                    activeScreen === 'catalog' ? 'bg-red-600' : 'bg-transparent'
                  }`}
                ></span>
                Movies
              </a>
            </li>
            <li>
              <a
                href="#tvshows"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate('tvshows', 'none');
                }}
                className={`flex items-center gap-2 transition-colors duration-200 cursor-pointer ${
                  activeScreen === 'tvshows'
                    ? 'text-white font-bold'
                    : 'text-white/60 hover:text-white'
                }`}
              >
                <span
                  className={`w-1.5 h-1.5 rounded-full ${
                    activeScreen === 'tvshows' ? 'bg-red-600' : 'bg-transparent'
                  }`}
                ></span>
                TV Shows
              </a>
            </li>
            <li>
              <a
                href="#originals"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate('originals', 'none');
                }}
                className={`flex items-center gap-2 transition-colors duration-200 cursor-pointer ${
                  activeScreen === 'originals'
                    ? 'text-white font-bold'
                    : 'text-white/60 hover:text-white'
                }`}
              >
                <span
                  className={`w-1.5 h-1.5 rounded-full ${
                    activeScreen === 'originals' ? 'bg-red-600' : 'bg-transparent'
                  }`}
                ></span>
                Originals
              </a>
            </li>
            <li>
              <a
                href="#categories"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate('categories', 'none');
                }}
                className={`flex items-center gap-2 transition-colors duration-200 cursor-pointer ${
                  activeScreen === 'categories'
                    ? 'text-white font-bold'
                    : 'text-white/60 hover:text-white'
                }`}
              >
                <span
                  className={`w-1.5 h-1.5 rounded-full ${
                    activeScreen === 'categories' ? 'bg-red-600' : 'bg-transparent'
                  }`}
                ></span>
                Categories
              </a>
            </li>
            <li>
              <a
                href="#profile"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate('profile', 'none');
                }}
                className={`flex items-center gap-2 transition-colors duration-200 cursor-pointer ${
                  activeScreen === 'profile'
                    ? 'text-white font-bold'
                    : 'text-white/60 hover:text-white'
                }`}
              >
                <span
                  className={`w-1.5 h-1.5 rounded-full ${
                    activeScreen === 'profile' ? 'bg-red-600' : 'bg-transparent'
                  }`}
                ></span>
                My List
              </a>
            </li>
          </ul>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-3 sm:gap-5">
          {/* Search Bar */}
          <div className="relative flex items-center">
            {isSearchOpen ? (
              <div className="flex items-center bg-white/5 rounded-full px-4 py-2 border border-white/10 focus-within:border-red-600/50 transition-all w-48 sm:w-64">
                <span className="material-symbols-outlined text-white/40 text-lg mr-2">
                  search
                </span>
                <input
                  type="text"
                  placeholder="Film yoki janr..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  autoFocus
                  className="bg-transparent border-none outline-none text-xs text-white placeholder-white/30 w-full"
                />
                <button
                  onClick={() => setIsSearchOpen(false)}
                  className="text-white/50 hover:text-white ml-1 text-xs"
                >
                  ✕
                </button>
              </div>
            ) : (
              <button
                onClick={() => setIsSearchOpen(true)}
                className="text-white/70 hover:text-white transition-colors p-2.5 rounded-full bg-white/5 border border-white/10 hover:bg-white/10"
                title="Qidiruv"
              >
                <span className="material-symbols-outlined text-lg">
                  search
                </span>
              </button>
            )}
          </div>

          {/* Notifications Button */}
          <div className="relative">
            <button
              onClick={() => setShowNotifications(!showNotifications)}
              className="text-white/70 hover:text-white transition-colors p-2.5 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 relative"
              title="Bildirishnomalar"
            >
              <span className="material-symbols-outlined text-lg">
                notifications
              </span>
              <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-red-600"></span>
            </button>

            {showNotifications && (
              <div className="absolute right-0 mt-3 w-72 bg-[#0d0d0d] border border-white/10 rounded-2xl shadow-2xl p-4 z-50">
                <div className="text-[10px] font-bold text-red-500 uppercase tracking-widest mb-3">
                  Bildirishnomalar
                </div>
                <div className="space-y-2 text-xs text-white/80">
                  <div className="p-3 bg-white/5 rounded-xl border border-white/5">
                    🎬 <span className="font-semibold text-white">Yulduzlar Aro Sukunat</span> bugun premyera qilindi!
                  </div>
                  <div className="p-3 bg-white/5 rounded-xl border border-white/5">
                    ⭐ Sevimli ro'yxatingizga yangi filmlar qo'shildi.
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* User Profile Avatar */}
          <button
            onClick={() => onNavigate('profile', 'none')}
            className="w-10 h-10 rounded-full overflow-hidden p-0.5 bg-gradient-to-tr from-red-600 to-orange-500 hover:scale-105 transition-transform cursor-pointer focus:outline-none"
            title="Profil"
          >
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCFKCl9_xzxP0xiQOMS27Tpc_2zD62gYoH4UD3rNqzo9u7Oluay__IeeWDtOlnTVkJoKNGTDH3IwND8htrH-lRXTUumurHNhZS90sWiutEVwmX6SGZNgmlS0M93yvZKP0A7FDb-b4HmNq3rj8lM7CW_M-YLo0Rz-yHS-jepLh53AiAzpSZzGkO0JV9GQIPQ4Q1JpO1S-AkOWBZHfOC0wR34JKqJSPrWjmCX1xlyTEOw3eW6FQV0DqWfZw"
              alt="User Profile Avatar"
              className="w-full h-full object-cover rounded-full"
            />
          </button>
        </div>
      </div>

      {/* Mobile Submenu Bar */}
      <div className="md:hidden flex overflow-x-auto gap-2 px-4 bg-[#0a0a0a]/90 py-2 border-t border-white/5 text-xs no-scrollbar">
        <a
          href="#catalog"
          onClick={(e) => {
            e.preventDefault();
            onNavigate('catalog', 'none');
          }}
          className={`px-3.5 py-1.5 rounded-full whitespace-nowrap ${
            activeScreen === 'catalog' ? 'text-white font-bold bg-red-600' : 'text-white/60'
          }`}
        >
          Movies
        </a>
        <a
          href="#tvshows"
          onClick={(e) => {
            e.preventDefault();
            onNavigate('tvshows', 'none');
          }}
          className={`px-3.5 py-1.5 rounded-full whitespace-nowrap ${
            activeScreen === 'tvshows' ? 'text-white font-bold bg-red-600' : 'text-white/60'
          }`}
        >
          TV Shows
        </a>
        <a
          href="#originals"
          onClick={(e) => {
            e.preventDefault();
            onNavigate('originals', 'none');
          }}
          className={`px-3.5 py-1.5 rounded-full whitespace-nowrap ${
            activeScreen === 'originals' ? 'text-white font-bold bg-red-600' : 'text-white/60'
          }`}
        >
          Originals
        </a>
        <a
          href="#categories"
          onClick={(e) => {
            e.preventDefault();
            onNavigate('categories', 'none');
          }}
          className={`px-3.5 py-1.5 rounded-full whitespace-nowrap ${
            activeScreen === 'categories' ? 'text-white font-bold bg-red-600' : 'text-white/60'
          }`}
        >
          Categories
        </a>
        <a
          href="#profile"
          onClick={(e) => {
            e.preventDefault();
            onNavigate('profile', 'none');
          }}
          className={`px-3.5 py-1.5 rounded-full whitespace-nowrap ${
            activeScreen === 'profile' ? 'text-white font-bold bg-red-600' : 'text-white/60'
          }`}
        >
          My List
        </a>
      </div>
    </nav>
  );
};
