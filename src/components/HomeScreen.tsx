import React from 'react';
import { Movie, ScreenId, TransitionType } from '../types';
import { featuredHeroMovie, trendingMovies, topRatedMovies } from '../data/movies';

interface HomeScreenProps {
  onNavigate: (screen: ScreenId, transition?: TransitionType) => void;
  onPlayMovie: (movie: Movie) => void;
}

export const HomeScreen: React.FC<HomeScreenProps> = ({ onNavigate, onPlayMovie }) => {
  return (
    <div className="w-full min-h-screen pt-[88px] px-4 sm:px-8 md:px-12 max-w-[1440px] mx-auto pb-16">
      {/* Bento Grid Featured Showcase Section */}
      <section className="mt-4 mb-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 auto-rows-[minmax(180px,auto)]">
          {/* Featured Hero Card: Qochqin (Matching XPath //h3[text()='Qochqin']/ancestor::div[contains(@class, 'group')]) */}
          <div
            onClick={() => onNavigate('details', 'push')}
            className="group lg:col-span-8 lg:row-span-2 relative rounded-[2rem] min-h-[420px] sm:min-h-[480px] overflow-hidden border border-white/10 cursor-pointer shadow-2xl transition-all duration-300 hover:border-white/20 flex flex-col justify-end"
          >
            {/* Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
              style={{
                backgroundImage: `url('${trendingMovies[0].posterUrl}')`,
              }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-transparent z-10"></div>

            <div className="relative z-20 p-6 sm:p-10 w-full">
              <span className="inline-block px-3 py-1 bg-red-600 text-white text-[10px] font-extrabold rounded-md mb-3 tracking-widest uppercase shadow-md">
                Tavsiya etiladi
              </span>

              {/* Exact h3 matching XPath //h3[text()='Qochqin'] */}
              <h3 className="text-3xl sm:text-5xl font-black text-white mb-3 tracking-tight">
                {trendingMovies[0].title}
              </h3>

              <p className="text-white/70 max-w-xl text-xs sm:text-sm mb-6 line-clamp-2 sm:line-clamp-3 leading-relaxed">
                Sobiq maxsus xizmat xodimi adolatsiz ayblovdan so'ng haqiqatni izlab xavfli yo'lga chiqadi. Uning ortidan butun shahar quvmoqda.
              </p>

              <div className="flex flex-wrap items-center gap-3">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onPlayMovie(trendingMovies[0]);
                  }}
                  className="px-6 sm:px-8 py-3 bg-white text-black font-bold rounded-xl hover:bg-white/90 transition-transform active:scale-95 flex items-center gap-2 cursor-pointer shadow-lg text-sm sm:text-base"
                >
                  <span className="material-symbols-outlined text-xl filled">play_arrow</span>
                  Tomosha qilish
                </button>

                {/* Exact button matching XPath //button[contains(., "Batafsil ma'lumot")] */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onNavigate('details', 'push');
                  }}
                  className="px-6 sm:px-8 py-3 bg-white/10 backdrop-blur-md text-white font-bold rounded-xl border border-white/20 hover:bg-white/20 transition-transform active:scale-95 flex items-center gap-2 cursor-pointer text-sm sm:text-base"
                >
                  <span className="material-symbols-outlined text-xl">info</span>
                  Batafsil ma'lumot
                </button>
              </div>
            </div>
          </div>

          {/* Secondary Card: Qadimiy Qilich (Matching XPath //h3[text()='Qadimiy Qilich']/ancestor::div[contains(@class, 'group')]) */}
          <div
            onClick={() => onNavigate('details', 'push')}
            className="group lg:col-span-4 relative rounded-[2rem] min-h-[220px] overflow-hidden border border-white/10 cursor-pointer shadow-xl flex flex-col justify-end p-6"
          >
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
              style={{
                backgroundImage: `url('${trendingMovies[1].posterUrl}')`,
              }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-10"></div>

            <div className="relative z-20">
              <span className="inline-block px-2.5 py-0.5 bg-white/10 backdrop-blur-md text-white/90 text-[10px] font-bold rounded mb-2 tracking-wider uppercase border border-white/10">
                Fentezi • 2024
              </span>
              {/* Exact h3 matching XPath //h3[text()='Qadimiy Qilich'] */}
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                {trendingMovies[1].title}
              </h3>
            </div>
          </div>

          {/* Side Stats/Info Card */}
          <div className="lg:col-span-4 bg-[#121212] rounded-[2rem] p-6 sm:p-8 border border-white/10 flex flex-col justify-between shadow-xl">
            <div className="flex justify-between items-start">
              <span className="text-xs font-bold text-white/40 uppercase tracking-widest font-['JetBrains_Mono']">
                Haftalik top
              </span>
              <span className="text-red-500 font-black text-3xl">#1</span>
            </div>
            <div className="mt-6">
              <div className="flex items-end gap-2 mb-2">
                <span className="text-4xl sm:text-5xl font-black text-white">9.8</span>
                <span className="text-white/40 text-xs mb-1 font-bold uppercase tracking-wider font-['JetBrains_Mono']">
                  IMDB Ball
                </span>
              </div>
              <p className="text-xs text-white/50 leading-relaxed">
                Ushbu haftada 1.2 mln foydalanuvchi tomosha qildi
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Hero Secondary Showcase: Yulduzlar Aro Sukunat */}
      <section className="mb-12">
        <div className="p-8 sm:p-12 rounded-[2rem] bg-gradient-to-r from-[#121212] via-[#1a1a1a] to-[#0a0a0a] border border-white/10 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-xl z-10">
            <div className="flex items-center gap-3 mb-3">
              <span className="px-3 py-1 bg-red-600 text-white font-['JetBrains_Mono'] text-[10px] uppercase font-extrabold tracking-widest rounded-md">
                Premyera
              </span>
              <div className="flex items-center text-red-500 gap-1 bg-white/5 px-2.5 py-1 rounded-full text-xs font-bold">
                <span className="material-symbols-outlined text-sm filled">star</span> 9.2
              </div>
            </div>
            <h2 className="font-['Manrope'] font-black text-3xl sm:text-4xl text-white mb-3">
              {featuredHeroMovie.title}
            </h2>
            <p className="text-sm text-white/60 mb-6 leading-relaxed line-clamp-2">
              {featuredHeroMovie.synopsis}
            </p>
            <div className="flex items-center gap-4">
              <button
                onClick={() => onPlayMovie(featuredHeroMovie)}
                className="px-6 py-2.5 bg-red-600 hover:bg-red-700 text-white font-bold rounded-xl transition-all shadow-[0_0_15px_rgba(220,38,38,0.4)] cursor-pointer text-sm"
              >
                Ko'rish
              </button>
            </div>
          </div>
          <div className="w-full md:w-80 aspect-video rounded-2xl overflow-hidden border border-white/10 relative flex-shrink-0">
            <img
              src={featuredHeroMovie.backdropUrl}
              alt={featuredHeroMovie.title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Trending Now Horizontal Scroll / Bento Cards */}
      <section className="mb-12">
        <div className="flex justify-between items-end mb-6">
          <h2 className="font-['Manrope'] font-extrabold text-2xl sm:text-3xl text-white">
            Hozir urfda
          </h2>
          <button
            onClick={() => onNavigate('catalog', 'none')}
            className="text-red-500 hover:text-red-400 transition-colors font-['JetBrains_Mono'] text-xs font-bold flex items-center gap-1 uppercase tracking-wider cursor-pointer"
          >
            Barchasini ko'rish <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </button>
        </div>

        {/* Bento Grid Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {trendingMovies.map((movie) => (
            <div
              key={movie.id}
              onClick={() => onPlayMovie(movie)}
              className="group relative aspect-[2/3] rounded-[2rem] overflow-hidden bg-[#121212] cursor-pointer transform transition-all duration-300 hover:scale-[1.03] border border-white/10 hover:border-red-600/50 shadow-xl"
            >
              <img
                src={movie.posterUrl}
                alt={movie.title}
                className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-80"
              />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-20">
                <div className="w-12 h-12 rounded-full bg-red-600 text-white flex items-center justify-center shadow-[0_0_20px_rgba(220,38,38,0.8)] group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-2xl filled">play_arrow</span>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent z-10 flex flex-col justify-end p-5">
                <h3 className="font-bold text-sm sm:text-base text-white truncate mb-1">
                  {movie.title}
                </h3>
                <p className="font-['JetBrains_Mono'] text-[11px] text-white/50">
                  {movie.genre} • {movie.year}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Top Rated Section */}
      <section className="mb-12">
        <h2 className="font-['Manrope'] font-extrabold text-2xl sm:text-3xl text-white mb-6">
          Eng yuqori baholangan
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
          {/* Main Top Rated Card */}
          <div
            onClick={() => onPlayMovie(topRatedMovies[0])}
            className="lg:col-span-8 group relative aspect-video rounded-[2rem] overflow-hidden bg-[#121212] cursor-pointer shadow-xl border border-white/10"
          >
            <img
              src={topRatedMovies[0].backdropUrl}
              alt={topRatedMovies[0].title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-20">
              <div className="w-16 h-16 rounded-full bg-red-600 text-white flex items-center justify-center shadow-[0_0_30px_rgba(220,38,38,0.8)] group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-3xl filled">play_arrow</span>
              </div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent z-10 flex flex-col justify-end p-8">
              <span className="text-red-500 font-extrabold font-['JetBrains_Mono'] text-xs flex items-center gap-1 mb-2">
                <span className="material-symbols-outlined text-sm filled">star</span> 9.8 IMDB
              </span>
              <h3 className="font-['Manrope'] font-black text-2xl sm:text-4xl text-white mb-2">
                {topRatedMovies[0].title}
              </h3>
              <p className="text-xs sm:text-sm text-white/60 max-w-md line-clamp-2">
                {topRatedMovies[0].synopsis}
              </p>
            </div>
          </div>

          {/* Secondary Stack Cards */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            {topRatedMovies.slice(1).map((movie) => (
              <div
                key={movie.id}
                onClick={() => onPlayMovie(movie)}
                className="group relative flex-1 min-h-[140px] rounded-[2rem] overflow-hidden bg-[#121212] cursor-pointer shadow-lg border border-white/10 flex flex-col justify-end p-6"
              >
                <img
                  src={movie.posterUrl}
                  alt={movie.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-20">
                  <div className="w-10 h-10 rounded-full bg-red-600 text-white flex items-center justify-center shadow-[0_0_20px_rgba(220,38,38,0.8)]">
                    <span className="material-symbols-outlined text-xl filled">play_arrow</span>
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-10"></div>
                <div className="relative z-20">
                  <h3 className="font-bold text-base text-white">
                    {movie.title}
                  </h3>
                  <p className="text-xs text-white/50 font-['JetBrains_Mono']">
                    ★ {movie.rating}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
