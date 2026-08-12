import React, { useState } from 'react';
import { Movie, ScreenId, TransitionType } from '../types';
import { mainDetailsMovie, relatedMovies } from '../data/movies';

interface MovieDetailsScreenProps {
  onNavigate: (screen: ScreenId, transition?: TransitionType) => void;
  onPlayMovie: (movie: Movie) => void;
}

export const MovieDetailsScreen: React.FC<MovieDetailsScreenProps> = ({
  onNavigate,
  onPlayMovie,
}) => {
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [bookmarkFeedback, setBookmarkFeedback] = useState<string | null>(null);

  const handleToggleBookmark = () => {
    setIsBookmarked(!isBookmarked);
    setBookmarkFeedback(
      !isBookmarked
        ? "Film 'Sevimli filmlarim' ro'yxatiga qo'shildi!"
        : "Film ro'yxatdan olib tashlandi."
    );
    setTimeout(() => setBookmarkFeedback(null), 3000);
  };

  return (
    <div className="w-full min-h-screen pt-[72px]">
      {/* Toast Notification */}
      {bookmarkFeedback && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#121212] text-red-500 border border-red-600/30 px-6 py-4 rounded-2xl shadow-2xl flex items-center gap-3 animate-bounce">
          <span className="material-symbols-outlined filled text-xl">check_circle</span>
          <span className="text-xs font-bold">{bookmarkFeedback}</span>
        </div>
      )}

      {/* Hero Backdrop Section */}
      <header className="relative w-full h-[650px] sm:h-[750px] md:h-[870px] min-h-[500px] flex items-end pb-16 sm:pb-24">
        {/* Background Image */}
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center"
          style={{ backgroundImage: `url('${mainDetailsMovie.backdropUrl}')` }}
        ></div>

        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/70 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#050505]/95 to-transparent w-full md:w-3/4"></div>

        {/* Content Container */}
        <div className="relative z-10 w-full max-w-[1440px] mx-auto px-4 sm:px-8 md:px-12 grid grid-cols-1 md:grid-cols-12 gap-6">
          <div className="md:col-span-8 lg:col-span-7 flex flex-col items-start">
            {/* Meta Chips */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-4">
              <span className="font-['JetBrains_Mono'] text-xs text-white/80 bg-white/10 backdrop-blur-md px-3.5 py-1 rounded-full border border-white/10">
                {mainDetailsMovie.year}
              </span>
              <span className="w-1 h-1 rounded-full bg-white/30"></span>
              <span className="font-['JetBrains_Mono'] text-xs text-white/80 bg-white/10 backdrop-blur-md px-3.5 py-1 rounded-full border border-white/10">
                {mainDetailsMovie.duration}
              </span>
              <span className="w-1 h-1 rounded-full bg-white/30"></span>
              <span className="font-['JetBrains_Mono'] text-xs text-red-500 bg-red-600/10 backdrop-blur-md px-3.5 py-1 rounded-full border border-red-600/30 font-bold">
                {mainDetailsMovie.ageRating}
              </span>

              {/* Rating */}
              <div className="flex items-center gap-1 ml-2 bg-white/10 backdrop-blur-md px-3 py-1 rounded-xl border border-white/10">
                <span className="material-symbols-outlined text-red-500 text-sm filled">
                  star
                </span>
                <span className="font-['JetBrains_Mono'] text-xs font-bold text-white">
                  {mainDetailsMovie.rating}
                </span>
              </div>
            </div>

            {/* Title */}
            <h1 className="font-['Manrope'] font-black text-3xl sm:text-5xl md:text-6xl text-white mb-2 tracking-tight drop-shadow-lg">
              {mainDetailsMovie.title}
            </h1>

            {/* Genres */}
            <div className="flex flex-wrap items-center gap-2 mb-6 text-xs sm:text-sm">
              {mainDetailsMovie.tags?.map((tag, idx) => (
                <React.Fragment key={tag}>
                  <span className="font-['JetBrains_Mono'] text-red-500 tracking-widest uppercase font-bold">
                    {tag}
                  </span>
                  {idx < (mainDetailsMovie.tags?.length || 0) - 1 && (
                    <span className="w-1 h-1 rounded-full bg-white/30"></span>
                  )}
                </React.Fragment>
              ))}
            </div>

            {/* Synopsis */}
            <p className="text-sm sm:text-base text-white/70 mb-8 max-w-2xl leading-relaxed">
              {mainDetailsMovie.synopsis}
            </p>

            {/* Director / Cast */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8 w-full max-w-xl text-xs sm:text-sm bg-white/5 p-6 rounded-2xl border border-white/10 backdrop-blur-md">
              <div>
                <p className="font-['JetBrains_Mono'] text-white/40 mb-1 font-bold uppercase tracking-wider text-[10px]">
                  Rejissyor
                </p>
                <p className="font-bold text-white">
                  {mainDetailsMovie.director}
                </p>
              </div>
              <div>
                <p className="font-['JetBrains_Mono'] text-white/40 mb-1 font-bold uppercase tracking-wider text-[10px]">
                  Asosiy Rollarda
                </p>
                <p className="font-bold text-white">
                  {mainDetailsMovie.cast?.join(', ')}
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
              <button
                onClick={() => onPlayMovie(mainDetailsMovie)}
                className="w-full sm:w-auto bg-red-600 hover:bg-red-700 text-white px-8 py-3.5 rounded-2xl font-bold text-base transition-all duration-200 flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(220,38,38,0.4)] hover:scale-[1.02] cursor-pointer"
              >
                <span className="material-symbols-outlined filled">play_arrow</span>
                Hozir ko'rish
              </button>

              <button
                onClick={handleToggleBookmark}
                className={`w-full sm:w-auto border px-8 py-3.5 rounded-2xl font-bold text-base transition-all duration-200 flex items-center justify-center gap-2 glass-panel cursor-pointer hover:scale-[1.02] ${
                  isBookmarked
                    ? 'border-red-600 text-red-500 bg-red-600/10'
                    : 'border-white/20 text-white hover:bg-white/10'
                }`}
              >
                <span className="material-symbols-outlined">
                  {isBookmarked ? 'bookmark_added' : 'add'}
                </span>
                {isBookmarked ? "Ro'yxatga qo'shildi" : "Ro'yxatga qo'shish"}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Related Movies Section */}
      <main className="w-full max-w-[1440px] mx-auto px-4 sm:px-8 md:px-12 py-12 sm:py-16">
        <section>
          <div className="flex items-center justify-between mb-8">
            <h2 className="font-['Manrope'] font-black text-2xl sm:text-3xl text-white tracking-tight">
              O'xshash filmlar
            </h2>
            <button
              onClick={() => onNavigate('home', 'push')}
              className="font-['JetBrains_Mono'] text-xs text-red-500 hover:text-red-400 font-bold transition-colors flex items-center gap-1 uppercase tracking-widest cursor-pointer"
            >
              BARCHASINI KO'RISH
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </button>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
            {relatedMovies.map((movie) => {
              return (
                <div
                  key={movie.id}
                  onClick={() => onPlayMovie(movie)}
                  className="group relative aspect-[2/3] rounded-[2rem] overflow-hidden cursor-pointer bg-[#121212] shadow-xl border border-white/10 transform transition-all duration-300 hover:scale-[1.03] hover:border-red-600/50"
                >
                  <img
                    src={movie.posterUrl}
                    alt={movie.title}
                    className="w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-80"
                  />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-20">
                    <div className="w-12 h-12 rounded-full bg-red-600 text-white flex items-center justify-center shadow-[0_0_20px_rgba(220,38,38,0.8)] group-hover:scale-110 transition-transform">
                      <span className="material-symbols-outlined text-2xl filled">play_arrow</span>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5 z-10">
                    {/* h3 matching XPath //h3[text()='Yulduzlar Aro']/ancestor::div[contains(@class, 'group')] */}
                    <h3 className="font-bold text-sm sm:text-base text-white mb-1">
                      {movie.title}
                    </h3>
                    <p className="font-['JetBrains_Mono'] text-xs text-red-500">
                      {movie.genre}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </main>
    </div>
  );
};
