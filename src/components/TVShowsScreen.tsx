import React, { useState } from 'react';
import { ScreenId, TransitionType, Movie } from '../types';

interface TVShowsScreenProps {
  onNavigate: (screen: ScreenId, transition?: TransitionType) => void;
  onPlayMovie: (movie: Partial<Movie>) => void;
}

export interface TVShow {
  id: string;
  title: string;
  genre: string;
  seasons: number;
  episodesCount: number;
  rating: number;
  year: number;
  posterUrl: string;
  backdropUrl: string;
  synopsis: string;
  status: string; // e.g. "Premyera", "Yangi fasl", "Yakunlangan"
  currentEpisode?: string;
}

const tvShowsData: TVShow[] = [
  {
    id: 'kosmos-chegarasi',
    title: 'Kosmos Chegarasi',
    genre: 'Sci-Fi',
    seasons: 2,
    episodesCount: 24,
    rating: 9.4,
    year: 2024,
    posterUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDVQOnCT5_2YuWm0TxLQxBdU_3A7CNsSvREinuT8BJfxLe2bNlF1DM8U_oRepmmDKokeCERg56iwIlk4javTl9wl4nXTNyaAEzULEjbLiPXCBNUMkydP0ClacNrE5V6du8DBTflEolx02241gNTtkt3o8bXPF5NU_tNBrn_Cp5DM9zudNjQoqh061lUO-TcZmmEVIOohuKJok-qoGW5JB-B_9oUblsXUxKrohgxTtBuYQAEsV88tVXMNg',
    backdropUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDVQOnCT5_2YuWm0TxLQxBdU_3A7CNsSvREinuT8BJfxLe2bNlF1DM8U_oRepmmDKokeCERg56iwIlk4javTl9wl4nXTNyaAEzULEjbLiPXCBNUMkydP0ClacNrE5V6du8DBTflEolx02241gNTtkt3o8bXPF5NU_tNBrn_Cp5DM9zudNjQoqh061lUO-TcZmmEVIOohuKJok-qoGW5JB-B_9oUblsXUxKrohgxTtBuYQAEsV88tVXMNg',
    synopsis: "Insoniyat galaktika chegaralariga chiqqach, qora tuynuklar ortida yangi sivilizatsiya va noma'lum xavflarga duch keladi. Ekipajning har bir qarori Yer taqdirini hal qiladi.",
    status: 'Yangi fasl',
    currentEpisode: '2-fasl, 4-qism: Qora Tuynuk'
  },
  {
    id: 'tungi-shahar-serial',
    title: 'Tungi Shahar',
    genre: 'Triller',
    seasons: 3,
    episodesCount: 30,
    rating: 9.1,
    year: 2023,
    posterUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBj2ZY7FTxv3uyFjRqP_n1EKnlpRuuQCXHINTIUQuqQQD6W0Y6DfFWd7PZK-J7TjLLOKFpJ4IHU1qSMseBk4V4WW713-WrbhIGGMIJu5RNOH13s9FLahNI3H5fiXa_BqU4QPeXe_F2aMcaX4Lyr1sW9KfT3u9ZTlb7hMFH2sPxmOMyyelzd9niInoCU6uWjY2M6GyNL-krRNCL1YUICHUf7MG-bDdopFEdj233Fs2wRRYuPbOAyqYk4SQ',
    backdropUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBj2ZY7FTxv3uyFjRqP_n1EKnlpRuuQCXHINTIUQuqQQD6W0Y6DfFWd7PZK-J7TjLLOKFpJ4IHU1qSMseBk4V4WW713-WrbhIGGMIJu5RNOH13s9FLahNI3H5fiXa_BqU4QPeXe_F2aMcaX4Lyr1sW9KfT3u9ZTlb7hMFH2sPxmOMyyelzd9niInoCU6uWjY2M6GyNL-krRNCL1YUICHUf7MG-bDdopFEdj233Fs2wRRYuPbOAyqYk4SQ',
    synopsis: "Kiberpunk megapolisining neon ko'chalarida yashiringan sirli jinoyat sindikatiga qarshi kurashayotgan detektiv va uning jamoasi haqida shiddatli serial.",
    status: 'Premyera'
  },
  {
    id: 'kiber-hujum',
    title: 'Kiber Hujum',
    genre: 'Jangari',
    seasons: 1,
    episodesCount: 10,
    rating: 8.8,
    year: 2024,
    posterUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBWxVJnHSe8XQo6erEIhdk0hpejTrkhg_6QGMfu9mzFXhpitDEtBUYICcjM3k4SBF0VfPZmc7xUNbnipxcH5aiAYjUVXx7tIu0cveXxU03CIGGwdju0JS55rO7jQbemcC_EgH-diggx4ayCR8J9cJi60MP4fEi-l4VstCEcJyvGakfg9TUBnQNNohtAlBwCDa5rmbLXfU0UyOggNPA4hfdQwc1BTHpAxtIRUM1279Yz_4mqRoP-pKRlrA',
    backdropUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBWxVJnHSe8XQo6erEIhdk0hpejTrkhg_6QGMfu9mzFXhpitDEtBUYICcjM3k4SBF0VfPZmc7xUNbnipxcH5aiAYjUVXx7tIu0cveXxU03CIGGwdju0JS55rO7jQbemcC_EgH-diggx4ayCR8J9cJi60MP4fEi-l4VstCEcJyvGakfg9TUBnQNNohtAlBwCDa5rmbLXfU0UyOggNPA4hfdQwc1BTHpAxtIRUM1279Yz_4mqRoP-pKRlrA',
    synopsis: "Xalqaro kiber-xavfsizlik agentlari dunyo moliya tizimini izdan chiqarishga urinayotgan xakerlar guruhini fosh etish uchun maxfiy operatsiya boshlaydi.",
    status: 'Top serial'
  },
  {
    id: 'soya-saltanati',
    title: 'Soya Saltanati',
    genre: 'Drama',
    seasons: 4,
    episodesCount: 48,
    rating: 9.3,
    year: 2022,
    posterUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBhuDsP6MjbzVqAyfBhyvKwNMkz_v7TYBH5jUcNsykPUwDDPGGdI8-6nrmtSaffS_AKUSHoVSEae45EvrlyqPaw98REF_IeH7CLHvwNMC2RLzUvUpO5GPMWcrvGUqrc8Bh1xJB9n4WloIl0LqOypbnaBm1lr6Gvnbpo62tIUUdpKhO8i3ikcpqMKTbkQ_WgyeMx97Y5Pcy0mBtPW8dQVBFplGbBWcOZ4AfshPNS6HgFgzwJkzIDbZipTw',
    backdropUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBhuDsP6MjbzVqAyfBhyvKwNMkz_v7TYBH5jUcNsykPUwDDPGGdI8-6nrmtSaffS_AKUSHoVSEae45EvrlyqPaw98REF_IeH7CLHvwNMC2RLzUvUpO5GPMWcrvGUqrc8Bh1xJB9n4WloIl0LqOypbnaBm1lr6Gvnbpo62tIUUdpKhO8i3ikcpqMKTbkQ_WgyeMx97Y5Pcy0mBtPW8dQVBFplGbBWcOZ4AfshPNS6HgFgzwJkzIDbZipTw',
    synopsis: "Qirollik sulolalari o'rtasidagi hokimiyat va taxt uchun kechadigan shafqatsiz va ayyorona kurashlar haqidagi epik dramatik doston.",
    status: 'Yakunlangan'
  },
  {
    id: 'vaqt-sayyohlari',
    title: 'Vaqt Sayyohlari',
    genre: 'Sci-Fi',
    seasons: 2,
    episodesCount: 16,
    rating: 8.9,
    year: 2024,
    posterUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA4fAlpbuewEsGoZXJQ4CIJx6x9SCUe-J0lY5tJljZ4UR17KMu09HX1OK4YRxYHcKEeLf8YqyTdZvbPD8t7UDop6NBTEdQm2fuqQaz-dWKAoE5dlKBHZnLqscDg38M-T2bW_BDAhcg8YwmbrQkXrwncljHsu4nzYX3aS5j8b1JPlbh7JLJBd_F_SzEbdr1Jc3K0QvDaLi1OU109VeTneetbZ6HTeO0K_nm7Q89pUWbaXA9xnEurAAD6sA',
    backdropUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA4fAlpbuewEsGoZXJQ4CIJx6x9SCUe-J0lY5tJljZ4UR17KMu09HX1OK4YRxYHcKEeLf8YqyTdZvbPD8t7UDop6NBTEdQm2fuqQaz-dWKAoE5dlKBHZnLqscDg38M-T2bW_BDAhcg8YwmbrQkXrwncljHsu4nzYX3aS5j8b1JPlbh7JLJBd_F_SzEbdr1Jc3K0QvDaLi1OU109VeTneetbZ6HTeO0K_nm7Q89pUWbaXA9xnEurAAD6sA',
    synopsis: "Kelajakdan o'tmishga sayohat qilgan maxsus guruh tarixiy xatoliklarni tuzatish va koinot xronologiyasini saqlab qolishga majbur bo'ladi.",
    status: 'Yangi fasl'
  },
  {
    id: 'qora-qutb',
    title: 'Qora Qutb',
    genre: 'Triller',
    seasons: 1,
    episodesCount: 8,
    rating: 8.7,
    year: 2024,
    posterUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDogHlrH0UnXyZKlPy8WEKCBb5xfAsTF8aiTuGgFVgohcMazLbEO99oJMz4ugIhzCJYMGhn4vBDbOL_aRZSjGFe2NQ7y6s0oSsUO2_JOdr9XdnZwbgz0-TVIF3tuFulBFiaiNPnosRpWBc9p10fodr4G9qhv3300e721gwn3c4Sbamat5otZ_tinWYpy597NKYDsrmasqFhZDYZRDHIS7w0-fLXAfrz2PKFAy2GT9wjSnrtJFtQqBBWFg',
    backdropUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDogHlrH0UnXyZKlPy8WEKCBb5xfAsTF8aiTuGgFVgohcMazLbEO99oJMz4ugIhzCJYMGhn4vBDbOL_aRZSjGFe2NQ7y6s0oSsUO2_JOdr9XdnZwbgz0-TVIF3tuFulBFiaiNPnosRpWBc9p10fodr4G9qhv3300e721gwn3c4Sbamat5otZ_tinWYpy597NKYDsrmasqFhZDYZRDHIS7w0-fLXAfrz2PKFAy2GT9wjSnrtJFtQqBBWFg',
    synopsis: "Antarktidadagi ilmiy stantsiyada tunda yuz bergan sirli hodisalar va qor ostida yashiringan dahshatli kashfiyot.",
    status: 'Premyera'
  }
];

export const TVShowsScreen: React.FC<TVShowsScreenProps> = ({ onNavigate, onPlayMovie }) => {
  const [selectedGenre, setSelectedGenre] = useState<string>('Barchasi');
  const [selectedStatus, setSelectedStatus] = useState<string>('Barchasi');
  const [activeSeason, setActiveSeason] = useState<number>(1);

  const filteredShows = tvShowsData.filter((show) => {
    const genreMatch = selectedGenre === 'Barchasi' || show.genre === selectedGenre;
    const statusMatch = selectedStatus === 'Barchasi' || show.status === selectedStatus;
    return genreMatch && statusMatch;
  });

  const featuredShow = tvShowsData[0];

  return (
    <div className="w-full min-h-screen pt-[88px] px-4 sm:px-8 md:px-12 max-w-[1440px] mx-auto pb-16">
      {/* Header Banner Section */}
      <section className="mb-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span className="inline-block px-3 py-1 bg-red-600/20 text-red-500 font-extrabold text-[10px] rounded-md mb-2 tracking-widest uppercase border border-red-600/30">
              Seriallar va TV Shoular
            </span>
            <h1 className="font-['Manrope'] font-black text-3xl sm:text-5xl text-white tracking-tight">
              TV Shows
            </h1>
            <p className="text-sm sm:text-base text-white/60 mt-1">
              Eng ommabop seriallar, ko'p qismli filmlar va premyeralar.
            </p>
          </div>

          {/* Filter Toolbar */}
          <div className="flex flex-wrap items-center gap-3 bg-[#121212] p-4 rounded-[2rem] border border-white/10">
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
                <option value="Jangari">Jangari</option>
                <option value="Drama">Drama</option>
              </select>
              <span className="material-symbols-outlined text-sm text-white/50 absolute right-2.5 top-3 pointer-events-none">
                arrow_drop_down
              </span>
            </div>

            {/* Status Filter */}
            <div className="relative">
              <select
                value={selectedStatus}
                onChange={(e) => setSelectedStatus(e.target.value)}
                className="bg-[#1a1a1a] text-white px-4 py-2.5 rounded-xl font-['JetBrains_Mono'] text-xs border border-white/10 focus:border-red-600 outline-none cursor-pointer appearance-none pr-8"
              >
                <option value="Barchasi">Status: Barchasi</option>
                <option value="Yangi fasl">Yangi fasl</option>
                <option value="Premyera">Premyera</option>
                <option value="Top serial">Top serial</option>
                <option value="Yakunlangan">Yakunlangan</option>
              </select>
              <span className="material-symbols-outlined text-sm text-white/50 absolute right-2.5 top-3 pointer-events-none">
                arrow_drop_down
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Hero Bento Section */}
      <section className="mb-12">
        <div className="group relative rounded-[2rem] overflow-hidden border border-white/10 bg-[#121212] shadow-2xl p-6 sm:p-10 min-h-[420px] flex flex-col justify-end">
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
            style={{ backgroundImage: `url('${featuredShow.backdropUrl}')` }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/60 to-transparent z-10"></div>

          <div className="relative z-20 max-w-2xl">
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <span className="px-3 py-1 bg-red-600 text-white text-[10px] font-black rounded-md uppercase tracking-widest shadow-md">
                {featuredShow.status}
              </span>
              <span className="px-3 py-1 bg-white/10 backdrop-blur-md text-white/80 font-['JetBrains_Mono'] text-[11px] font-bold rounded-md">
                {featuredShow.seasons} Fasl • {featuredShow.episodesCount} Qism
              </span>
              <div className="flex items-center gap-1 bg-white/10 backdrop-blur-md px-2.5 py-1 rounded-md text-red-500 font-bold text-xs">
                <span className="material-symbols-outlined text-sm filled">star</span>
                {featuredShow.rating}
              </div>
            </div>

            <h2 className="font-['Manrope'] font-black text-3xl sm:text-5xl text-white mb-3 tracking-tight">
              {featuredShow.title}
            </h2>

            <p className="text-white/70 text-xs sm:text-sm mb-6 leading-relaxed line-clamp-3">
              {featuredShow.synopsis}
            </p>

            {/* Episode Selector Controls */}
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-4 mb-6 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-red-500">live_tv</span>
                <div>
                  <div className="text-xs font-bold text-white">So'nggi qism:</div>
                  <div className="text-xs text-white/60 font-['JetBrains_Mono']">
                    {featuredShow.currentEpisode}
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                {[1, 2].map((s) => (
                  <button
                    key={s}
                    onClick={() => setActiveSeason(s)}
                    className={`px-3 py-1 rounded-lg text-xs font-bold font-['JetBrains_Mono'] transition-all cursor-pointer ${
                      activeSeason === s
                        ? 'bg-red-600 text-white shadow-md'
                        : 'bg-white/10 text-white/60 hover:text-white'
                    }`}
                  >
                    {s}-Fasl
                  </button>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-4">
              <button
                onClick={() =>
                  onPlayMovie({
                    id: featuredShow.id,
                    title: `${featuredShow.title} (${activeSeason}-Fasl, 1-Qism)`,
                    synopsis: featuredShow.synopsis,
                    backdropUrl: featuredShow.backdropUrl,
                  })
                }
                className="px-8 py-3.5 bg-red-600 hover:bg-red-700 text-white font-bold rounded-2xl transition-transform active:scale-95 flex items-center gap-2 shadow-[0_0_20px_rgba(220,38,38,0.5)] cursor-pointer text-sm sm:text-base"
              >
                <span className="material-symbols-outlined text-2xl filled">play_arrow</span>
                Serialni boshlash
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* TV Shows Grid */}
      <section>
        <div className="flex justify-between items-center mb-6">
          <h3 className="font-['Manrope'] font-black text-2xl text-white tracking-tight">
            Barcha Seriallar ({filteredShows.length})
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredShows.map((show) => (
            <div
              key={show.id}
              onClick={() =>
                onPlayMovie({
                  id: show.id,
                  title: `${show.title} (1-Fasl)`,
                  synopsis: show.synopsis,
                  backdropUrl: show.backdropUrl,
                })
              }
              className="group bg-[#121212] rounded-[2rem] border border-white/10 overflow-hidden hover:border-red-600/50 transition-all cursor-pointer shadow-xl flex flex-col justify-between"
            >
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={show.backdropUrl}
                  alt={show.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-transparent"></div>
                
                <span className="absolute top-4 left-4 px-2.5 py-1 bg-red-600 text-white text-[10px] font-black rounded-md uppercase tracking-wider shadow-md">
                  {show.status}
                </span>

                <div className="absolute bottom-3 left-4 right-4 flex justify-between items-center">
                  <span className="font-['JetBrains_Mono'] text-xs font-bold text-red-500 flex items-center gap-1">
                    <span className="material-symbols-outlined text-sm filled">star</span>
                    {show.rating}
                  </span>
                  <span className="font-['JetBrains_Mono'] text-xs text-white/70 bg-black/60 backdrop-blur-md px-2.5 py-0.5 rounded-md border border-white/10">
                    {show.seasons} Fasl • {show.episodesCount} Qism
                  </span>
                </div>
              </div>

              <div className="p-6 flex-grow flex flex-col justify-between">
                <div>
                  <h4 className="font-bold text-lg text-white mb-2 group-hover:text-red-500 transition-colors">
                    {show.title}
                  </h4>
                  <p className="text-xs text-white/60 line-clamp-2 leading-relaxed mb-4">
                    {show.synopsis}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs text-white/50">
                  <span className="font-['JetBrains_Mono']">{show.genre} • {show.year}</span>
                  <span className="text-red-500 font-bold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    Tomosha qilish <span className="material-symbols-outlined text-sm">arrow_forward</span>
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
