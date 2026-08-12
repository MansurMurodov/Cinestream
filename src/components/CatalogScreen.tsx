import React, { useState } from 'react';
import { Movie, ScreenId, TransitionType } from '../types';
import { catalogMovies } from '../data/movies';

interface CatalogScreenProps {
  onNavigate: (screen: ScreenId, transition?: TransitionType) => void;
  searchQuery: string;
  onPlayMovie?: (movie: Partial<Movie>) => void;
}

export const CatalogScreen: React.FC<CatalogScreenProps> = ({ onNavigate, searchQuery, onPlayMovie }) => {
  const [selectedGenre, setSelectedGenre] = useState<string>('Barchasi');
  const [selectedYear, setSelectedYear] = useState<string>('Barchasi');
  const [selectedRating, setSelectedRating] = useState<string>('Barchasi');
  const [visibleCount, setVisibleCount] = useState<number>(12);

  // Filter movies based on search query & selectors
  const filteredMovies = catalogMovies.filter((movie) => {
    const matchesSearch =
      movie.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      movie.genre.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesGenre =
      selectedGenre === 'Barchasi' || movie.genre.toLowerCase().includes(selectedGenre.toLowerCase());

    const matchesYear =
      selectedYear === 'Barchasi' || movie.year.toString() === selectedYear;

    const matchesRating =
      selectedRating === 'Barchasi' ||
      (selectedRating === '8+' && movie.rating >= 8.0) ||
      (selectedRating === '9+' && movie.rating >= 9.0);

    return matchesSearch && matchesGenre && matchesYear && matchesRating;
  });

  return (
    <main className="flex-grow pt-[104px] px-4 sm:px-8 md:px-12 max-w-[1440px] mx-auto w-full pb-16 min-h-screen">
      {/* Page Header & Filters */}
      <section className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <h1 className="font-['Manrope'] font-black text-3xl sm:text-5xl text-white mb-2 tracking-tight">
            Filmlar katalogi
          </h1>
          <p className="text-sm sm:text-base text-white/60">
            Eng so'nggi va sara filmlar to'plami.
          </p>
        </div>

        {/* Glassmorphic Filters Area */}
        <div className="flex flex-wrap gap-3 items-center bg-[#121212] p-4 rounded-[2rem] border border-white/10 backdrop-blur-md">
          {/* Genre Filter */}
          <div className="relative">
            <select
              value={selectedGenre}
              onChange={(e) => setSelectedGenre(e.target.value)}
              className="bg-[#1a1a1a] text-white px-4 py-2.5 rounded-xl font-['JetBrains_Mono'] text-xs border border-white/10 focus:border-red-600 outline-none cursor-pointer appearance-none pr-8"
            >
              <option value="Barchasi">Janr: Barchasi</option>
              <option value="Sci-Fi">Sci-Fi</option>
              <option value="Triller">Triller</option>
              <option value="Fantasy">Fantasy</option>
              <option value="Drama">Drama</option>
              <option value="Jangari">Jangari</option>
            </select>
            <span className="material-symbols-outlined text-sm text-white/50 absolute right-2.5 top-3 pointer-events-none">
              arrow_drop_down
            </span>
          </div>

          {/* Year Filter */}
          <div className="relative">
            <select
              value={selectedYear}
              onChange={(e) => setSelectedYear(e.target.value)}
              className="bg-[#1a1a1a] text-white px-4 py-2.5 rounded-xl font-['JetBrains_Mono'] text-xs border border-white/10 focus:border-red-600 outline-none cursor-pointer appearance-none pr-8"
            >
              <option value="Barchasi">Yil: Eng yangi</option>
              <option value="2024">2024</option>
              <option value="2023">2023</option>
              <option value="2022">2022</option>
            </select>
            <span className="material-symbols-outlined text-sm text-white/50 absolute right-2.5 top-3 pointer-events-none">
              arrow_drop_down
            </span>
          </div>

          {/* Rating Filter */}
          <div className="relative">
            <select
              value={selectedRating}
              onChange={(e) => setSelectedRating(e.target.value)}
              className="bg-[#1a1a1a] text-white px-4 py-2.5 rounded-xl font-['JetBrains_Mono'] text-xs border border-white/10 focus:border-red-600 outline-none cursor-pointer appearance-none pr-8"
            >
              <option value="Barchasi">Reyting: Barchasi</option>
              <option value="8+">8.0 +</option>
              <option value="9+">9.0 +</option>
            </select>
            <span className="material-symbols-outlined text-sm text-white/50 absolute right-2.5 top-3 pointer-events-none">
              arrow_drop_down
            </span>
          </div>

          {/* Reset Filters */}
          <button
            onClick={() => {
              setSelectedGenre('Barchasi');
              setSelectedYear('Barchasi');
              setSelectedRating('Barchasi');
            }}
            title="Filterlarni tozalash"
            className="p-2.5 rounded-xl bg-[#1a1a1a] hover:bg-white/10 text-white/70 hover:text-red-500 transition-colors border border-white/10 cursor-pointer ml-auto md:ml-0"
          >
            <span className="material-symbols-outlined text-lg">filter_list_off</span>
          </button>
        </div>
      </section>

      {/* Movie Grid */}
      <section className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-5">
        {filteredMovies.slice(0, visibleCount).map((movie) => (
          <div
            key={movie.id}
            onClick={() => {
              if (onPlayMovie) {
                onPlayMovie(movie);
              } else {
                onNavigate('details', 'push');
              }
            }}
            className="group relative aspect-[2/3] rounded-[2rem] overflow-hidden bg-[#121212] transform transition-all duration-300 hover:scale-[1.03] hover:z-10 border border-white/10 hover:border-red-600/50 shadow-xl cursor-pointer block"
          >
            <img
              src={movie.posterUrl}
              alt={movie.title}
              className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-80"
            />
            {/* Play Button Overlay */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-20">
              <div className="w-12 h-12 rounded-full bg-red-600 text-white flex items-center justify-center shadow-[0_0_20px_rgba(220,38,38,0.8)] group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-2xl filled">play_arrow</span>
              </div>
            </div>

            {/* Hover Info Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5 z-10">
              <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                {/* Must contain <h3> matching exact text like Yulduzlararo Sayohat */}
                <h3 className="font-bold text-sm sm:text-base text-white line-clamp-2 leading-tight mb-1">
                  {movie.title}
                </h3>
                <div className="flex items-center gap-2 font-['JetBrains_Mono'] text-xs text-red-500">
                  <span>{movie.year}</span>
                  <span className="w-1 h-1 rounded-full bg-white/30"></span>
                  <div className="flex items-center gap-0.5">
                    <span className="material-symbols-outlined text-[12px] filled">star</span>
                    {movie.rating}
                  </div>
                </div>
              </div>
            </div>

            {/* Top Genre Tag */}
            <div className="absolute top-3 left-3 flex gap-1 z-20">
              <span className="px-2.5 py-0.5 bg-black/60 backdrop-blur-md rounded-md font-['JetBrains_Mono'] text-[10px] text-white/80 tracking-wider uppercase border border-white/10">
                {movie.genre}
              </span>
            </div>
          </div>
        ))}
      </section>

      {/* Load More Button */}
      {visibleCount < filteredMovies.length && (
        <div className="mt-12 flex justify-center">
          <button
            onClick={() => setVisibleCount((prev) => prev + 6)}
            className="bg-white/5 border border-white/20 text-white hover:bg-red-600 hover:border-red-600 px-8 py-3 rounded-2xl font-bold transition-all duration-300 cursor-pointer shadow-xl text-sm"
          >
            Ko'proq ko'rsatish
          </button>
        </div>
      )}
    </main>
  );
};
