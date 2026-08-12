import React, { useState } from 'react';
import { ScreenId, TransitionType, Movie } from '../types';
import { catalogMovies, trendingMovies, topRatedMovies } from '../data/movies';

interface CategoriesScreenProps {
  onNavigate: (screen: ScreenId, transition?: TransitionType) => void;
  onPlayMovie: (movie: Partial<Movie>) => void;
}

export interface CategoryInfo {
  id: string;
  name: string;
  icon: string;
  count: number;
  color: string;
  description: string;
}

const categoriesList: CategoryInfo[] = [
  { id: 'Sci-Fi', name: 'Ilmiy Fantastika', icon: 'rocket_launch', count: 42, color: 'from-blue-600 to-indigo-900', description: 'Kosmos, kiberpunk va kelajak texnologiyalari' },
  { id: 'Jangari', name: 'Jangari & Harakat', icon: 'sports_mma', count: 58, color: 'from-red-600 to-rose-950', description: 'Shiddatli quvlashmalar, janglar va xavfli poygalar' },
  { id: 'Triller', name: 'Triller & Detektiv', icon: 'visibility', count: 35, color: 'from-purple-700 to-slate-950', description: 'Sirli jinoyatlar, psixologik burilishlar' },
  { id: 'Drama', name: 'Drama', icon: 'theater_comedy', count: 64, color: 'from-amber-600 to-neutral-900', description: 'Lirik va hayotiy tuyg\'ularga boy hikoyalar' },
  { id: 'Fantasy', name: 'Fentezi & Sehr', icon: 'auto_awesome', count: 28, color: 'from-emerald-600 to-teal-950', description: 'Sehrli olamlar, afsonaviy maqluqotlar' },
  { id: 'Tarixiy', name: 'Tarixiy', icon: 'castle', count: 19, color: 'from-yellow-700 to-amber-950', description: 'O\'tmish buyuk voqealari va qahramonlik dostonlari' },
  { id: 'Animatsiya', name: 'Animatsiya', icon: 'animation', count: 31, color: 'from-cyan-500 to-blue-900', description: 'Barcha yoshdagilar uchun sarguzasht multifilmlar' },
  { id: 'Qorqinchli', name: 'Qo\'rqinchli', icon: 'skull', count: 22, color: 'from-stone-700 to-black', description: 'Vahimali va hayajonli qorong\'u sahnalar' },
];

const allMovies = [...catalogMovies, ...trendingMovies, ...topRatedMovies];

export const CategoriesScreen: React.FC<CategoriesScreenProps> = ({ onNavigate, onPlayMovie }) => {
  const [activeCategory, setActiveCategory] = useState<string>('Barchasi');

  const filteredMovies = activeCategory === 'Barchasi'
    ? allMovies
    : allMovies.filter(m => m.genre.toLowerCase().includes(activeCategory.toLowerCase()) || activeCategory.toLowerCase().includes(m.genre.toLowerCase()));

  return (
    <div className="w-full min-h-screen pt-[88px] px-4 sm:px-8 md:px-12 max-w-[1440px] mx-auto pb-16">
      {/* Page Header */}
      <section className="mb-10">
        <div className="flex items-center gap-2 mb-2">
          <span className="px-3 py-1 bg-red-600/20 text-red-500 font-extrabold text-[10px] rounded-md tracking-widest uppercase border border-red-600/30">
            Katalog To'plamlari
          </span>
        </div>
        <h1 className="font-['Manrope'] font-black text-3xl sm:text-5xl text-white tracking-tight">
          Kategoriyalar va Janrlar
        </h1>
        <p className="text-sm sm:text-base text-white/60 mt-1">
          O'zingizga yoqgan janrni tanlang va eng sara kontentlarni kashf eting.
        </p>
      </section>

      {/* Category Bento Cards Grid */}
      <section className="mb-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div
            onClick={() => setActiveCategory('Barchasi')}
            className={`p-6 rounded-[2rem] border transition-all cursor-pointer shadow-xl flex flex-col justify-between min-h-[160px] ${
              activeCategory === 'Barchasi'
                ? 'bg-red-600 border-red-500 text-white'
                : 'bg-[#121212] border-white/10 hover:border-red-600/50 text-white'
            }`}
          >
            <div className="flex justify-between items-start">
              <span className="material-symbols-outlined text-3xl">grid_view</span>
              <span className="font-['JetBrains_Mono'] text-xs font-bold px-3 py-1 rounded-full bg-black/30 border border-white/10">
                {allMovies.length}+ kontent
              </span>
            </div>
            <div>
              <h3 className="font-extrabold text-xl mb-1">Barcha janrlar</h3>
              <p className="text-xs opacity-70">To'liq to'plam va katalogni ko'rish</p>
            </div>
          </div>

          {categoriesList.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <div
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`relative overflow-hidden p-6 rounded-[2rem] border transition-all cursor-pointer shadow-xl flex flex-col justify-between min-h-[160px] group ${
                  isActive
                    ? 'border-red-500 ring-2 ring-red-600'
                    : 'border-white/10 hover:border-white/20'
                }`}
              >
                {/* Background Gradient */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${cat.color} opacity-80 group-hover:opacity-100 transition-opacity`}
                ></div>
                <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]"></div>

                <div className="relative z-10 flex justify-between items-start">
                  <div className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/10">
                    <span className="material-symbols-outlined text-white text-2xl">
                      {cat.icon}
                    </span>
                  </div>
                  <span className="font-['JetBrains_Mono'] text-xs font-bold px-3 py-1 rounded-full bg-black/40 text-white border border-white/10">
                    {cat.count} film
                  </span>
                </div>

                <div className="relative z-10">
                  <h3 className="font-extrabold text-xl text-white mb-1 group-hover:translate-x-1 transition-transform">
                    {cat.name}
                  </h3>
                  <p className="text-xs text-white/70 line-clamp-1">{cat.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Selected Category Movies */}
      <section>
        <div className="flex justify-between items-center mb-6">
          <h2 className="font-['Manrope'] font-black text-2xl text-white tracking-tight flex items-center gap-3">
            <span>
              {activeCategory === 'Barchasi'
                ? 'Barcha Kinolar'
                : categoriesList.find((c) => c.id === activeCategory)?.name || activeCategory}
            </span>
            <span className="text-xs font-['JetBrains_Mono'] font-bold text-red-500 bg-red-600/10 px-3 py-1 rounded-full border border-red-600/30">
              {filteredMovies.length} ta topildi
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-5">
          {filteredMovies.map((movie) => (
            <div
              key={movie.id}
              onClick={() => onPlayMovie(movie)}
              className="group relative aspect-[2/3] rounded-[2rem] overflow-hidden bg-[#121212] border border-white/10 hover:border-red-600/50 shadow-xl cursor-pointer transform transition-all duration-300 hover:scale-[1.03]"
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
                <div className="flex items-center justify-between font-['JetBrains_Mono'] text-xs text-white/60">
                  <span>{movie.year}</span>
                  <span className="text-red-500 font-bold flex items-center gap-0.5">
                    <span className="material-symbols-outlined text-[12px] filled">star</span>
                    {movie.rating}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
