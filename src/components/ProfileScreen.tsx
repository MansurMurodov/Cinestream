import React from 'react';
import { Movie, ScreenId, TransitionType } from '../types';
import { userProfile, continueWatchingList, userFavoriteMovies } from '../data/movies';

interface ProfileScreenProps {
  onNavigate: (screen: ScreenId, transition?: TransitionType) => void;
  onPlayMovie: (movie: Partial<Movie>) => void;
}

export const ProfileScreen: React.FC<ProfileScreenProps> = ({ onNavigate, onPlayMovie }) => {
  return (
    <main className="flex-grow w-full max-w-[1440px] mx-auto px-4 sm:px-8 md:px-12 pt-[104px] pb-16 min-h-screen">
      {/* Profile Header */}
      <section className="flex flex-col md:flex-row items-center gap-6 sm:gap-8 mb-12 sm:mb-16 bg-[#121212] p-6 sm:p-10 rounded-[2rem] border border-white/10 backdrop-blur-md shadow-2xl">
        <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-full overflow-hidden p-1 bg-gradient-to-tr from-red-600 to-orange-500 shadow-2xl relative group flex-shrink-0">
          <img
            src={userProfile.avatarUrl}
            alt={userProfile.name}
            className="w-full h-full object-cover rounded-full"
          />
          <div className="absolute inset-0 bg-black/60 rounded-full opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center cursor-pointer">
            <span className="material-symbols-outlined text-white text-2xl">edit</span>
          </div>
        </div>

        <div className="text-center md:text-left">
          <h1 className="font-['Manrope'] font-black text-2xl sm:text-4xl text-white mb-2 tracking-tight">
            {userProfile.name}
          </h1>
          <p className="text-sm sm:text-base text-white/60 mb-4 font-medium">
            {userProfile.status}
          </p>
          <div className="flex flex-wrap gap-2 justify-center md:justify-start">
            {userProfile.genres.map((genre) => (
              <span
                key={genre}
                className="px-3.5 py-1 bg-white/5 rounded-full font-['JetBrains_Mono'] text-xs text-white/80 border border-white/10"
              >
                {genre}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Continue Watching Section */}
      <section className="mb-12 sm:mb-16">
        <h2 className="font-['Manrope'] font-extrabold text-xl sm:text-2xl text-white mb-6 flex items-center gap-2">
          <span className="material-symbols-outlined text-red-600 filled">play_circle</span>
          Tomoshani davom ettirish
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {continueWatchingList.map((item) => (
            <div
              key={item.id}
              className="relative aspect-video rounded-[2rem] overflow-hidden bg-[#121212] border border-white/10 group shadow-xl"
            >
              <img
                src={item.backdropUrl}
                alt={item.title}
                className="w-full h-full object-cover absolute inset-0 z-0 opacity-80 group-hover:opacity-100 transition-opacity duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-10 flex flex-col justify-end p-6">
                <div className="flex justify-between items-end">
                  <div>
                    <h3 className="font-bold text-base sm:text-lg text-white">
                      {item.title}
                    </h3>
                    <p className="font-['JetBrains_Mono'] text-xs text-white/60">
                      {item.subtitle}
                    </p>
                  </div>
                  <button
                    onClick={() =>
                      onPlayMovie({
                        id: item.id,
                        title: item.title,
                        synopsis: item.subtitle,
                      })
                    }
                    className="w-12 h-12 rounded-full bg-red-600 hover:bg-red-700 text-white flex items-center justify-center transition-transform hover:scale-110 shadow-lg cursor-pointer"
                  >
                    <span className="material-symbols-outlined filled text-2xl">play_arrow</span>
                  </button>
                </div>

                {/* Progress Bar */}
                <div className="w-full h-1.5 bg-white/20 rounded-full mt-4 overflow-hidden">
                  <div
                    className="h-full bg-red-600 rounded-full shadow-[0_0_8px_rgba(220,38,38,0.8)]"
                    style={{ width: `${item.progress}%` }}
                  ></div>
                </div>
                <p className="font-['JetBrains_Mono'] text-[11px] text-white/50 mt-1.5 text-right">
                  {item.remaining}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* My Favorite Movies (Bento Grid) */}
      <section>
        <h2 className="font-['Manrope'] font-extrabold text-xl sm:text-2xl text-white mb-6 flex items-center gap-2">
          <span className="material-symbols-outlined text-red-600 filled">bookmark</span>
          Sevimli filmlarim
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5">
          {userFavoriteMovies.map((movie) => (
            // Must have class "movie-card" and contain <h4> element for exact XPath matching
            <div
              key={movie.id}
              onClick={() => onPlayMovie(movie)}
              className="movie-card group relative aspect-[2/3] rounded-[2rem] overflow-hidden bg-[#121212] border border-white/10 cursor-pointer transform transition-all duration-300 hover:scale-[1.03] hover:border-red-600/50 shadow-xl"
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
              <div className="info absolute bottom-0 inset-x-0 p-5 z-10 bg-gradient-to-t from-black via-black/40 to-transparent">
                {/* h4 matching XPath //h4[text()='Qonli oy']/ancestor::div[contains(@class, 'movie-card')] */}
                <h4 className="font-bold text-sm sm:text-base text-white leading-tight">
                  {movie.title}
                </h4>
                <p className="font-['JetBrains_Mono'] text-xs text-red-500 mt-1">
                  {movie.year} • {movie.genre}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};
