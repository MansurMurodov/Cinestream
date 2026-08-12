import React, { useState } from 'react';
import { ScreenId, TransitionType, Movie } from '../types';

interface OriginalsScreenProps {
  onNavigate: (screen: ScreenId, transition?: TransitionType) => void;
  onPlayMovie: (movie: Partial<Movie>) => void;
}

export interface OriginalItem {
  id: string;
  title: string;
  type: 'Film' | 'Serial' | 'Hujjatli';
  year: number;
  rating: number;
  budget: string;
  posterUrl: string;
  backdropUrl: string;
  synopsis: string;
  cast: string[];
  director: string;
  releaseDate?: string;
}

const originalsData: OriginalItem[] = [
  {
    id: 'yulduzlar-aro-sukunat-original',
    title: 'Yulduzlar Aro Sukunat',
    type: 'Film',
    year: 2024,
    rating: 9.8,
    budget: '$150M',
    posterUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDHdOpRMNMYSyU8gJAehilgPQ1HgGdrgjSNSpSOdGjtb4FT6s9ROrf4u2Bh5wBJi6d-wHPm2wb1g8hWcWp0k7xEuxhScomhcIL8KXZMf6JVpnPrFjuwN2lAh8DVPLAMVf1Xielhk-0zGhHY4njrjK_Ug7QrSFrHqY45ox1Lf2KcF1F8_-qX7GG3l8biXRr13N96zF8MnwRRmUsdUqL2hWgWXq4BQZnDQ7Q1yES7nPON0beEz83hqQ7vSg',
    backdropUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCd0YjowotEWWjrRZDS9kmX5SqEYpinxEYBOyR2OBzwOxOO1rTOdaIdL3PW-0funPgv6fqvY86rPMd-TR5FNiMTcKfjPFd7_Zo-6TZ9s5smJYQHnE33AWM5ewcxROEifu8l0OP4qEK_H4jMNxo3VuM3OXz4ROjtfWxEXF3R5rNZRwRv-5_TBfq21gc4bT10HRF5ZanMP_Ldp8pfAhQMO3rXPsBQQg-53YPKj6RoF8aVGF2d5SgETeiz0g',
    synopsis: "CineStream Studios tomonidan suratga olingan 4K HDR formatidagi epik ilmiy-fantastik blokbaster. Insoniyatning so'nggi kosmik ekspeditsiyasi va koinot sirini ochish.",
    cast: ['Sardor To\'rayev', 'Malika Usmonova', 'Jasur Hamroyev'],
    director: 'Alisher Qodirov'
  },
  {
    id: 'kiberpunk-xronikalari',
    title: 'Kiberpunk Xronikalari',
    type: 'Serial',
    year: 2024,
    rating: 9.4,
    budget: '$85M',
    posterUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBWxVJnHSe8XQo6erEIhdk0hpejTrkhg_6QGMfu9mzFXhpitDEtBUYICcjM3k4SBF0VfPZmc7xUNbnipxcH5aiAYjUVXx7tIu0cveXxU03CIGGwdju0JS55rO7jQbemcC_EgH-diggx4ayCR8J9cJi60MP4fEi-l4VstCEcJyvGakfg9TUBnQNNohtAlBwCDa5rmbLXfU0UyOggNPA4hfdQwc1BTHpAxtIRUM1279Yz_4mqRoP-pKRlrA',
    backdropUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBWxVJnHSe8XQo6erEIhdk0hpejTrkhg_6QGMfu9mzFXhpitDEtBUYICcjM3k4SBF0VfPZmc7xUNbnipxcH5aiAYjUVXx7tIu0cveXxU03CIGGwdju0JS55rO7jQbemcC_EgH-diggx4ayCR8J9cJi60MP4fEi-l4VstCEcJyvGakfg9TUBnQNNohtAlBwCDa5rmbLXfU0UyOggNPA4hfdQwc1BTHpAxtIRUM1279Yz_4mqRoP-pKRlrA',
    synopsis: "Sun'iy intellekt imperiyasi va insoniyat ozodligi o'rtasidagi so'nggi to'qnashuv. CineStream eksklyuziv seriali.",
    cast: ['Jahongir Poziljonov', 'Dilnoza Kubayeva'],
    director: 'Nodir Rustamov'
  },
  {
    id: 'buyuk-ipak-yoli-sirlari',
    title: 'Buyuk Ipak Yo\'li Sirlari',
    type: 'Hujjatli',
    year: 2023,
    rating: 9.6,
    budget: '$30M',
    posterUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDXY8NHHvRETO5WZ6V0QebSy9AQqjaZIhnBb8LbNV9PHHHpRW-xBrKmPQ7h_oqtlSAW1ztu0c7wDEovIcQBFX-woJ5iqNNGCoQ-3dJh6K7lgUNAFgEl2X5DmnGy6pfk00nm0d3jRz3_sbk_4h3mmRDWxMh3pzOzv3Vv7ObsjBN2EAPrMCkBwb7yA9IObMK03EFQJwYQae6YcFjPwkdFZlQ4bgiuYQGtw2gb6foscTPKx6Q6FdWxWbQ8Ag',
    backdropUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDXY8NHHvRETO5WZ6V0QebSy9AQqjaZIhnBb8LbNV9PHHHpRW-xBrKmPQ7h_oqtlSAW1ztu0c7wDEovIcQBFX-woJ5iqNNGCoQ-3dJh6K7lgUNAFgEl2X5DmnGy6pfk00nm0d3jRz3_sbk_4h3mmRDWxMh3pzOzv3Vv7ObsjBN2EAPrMCkBwb7yA9IObMK03EFQJwYQae6YcFjPwkdFZlQ4bgiuYQGtw2gb6foscTPKx6Q6FdWxWbQ8Ag',
    synopsis: "Qadimiy karvonsaroylar, yo'qolgan xazinalar va Markaziy Osiyo tarixining eng noyob lavhalarini aks ettiruvchi maxsus hujjatli serial.",
    cast: ['Ahmad Yassaviy jamiyati'],
    director: 'Temur Mirzo'
  },
  {
    id: 'qadimiy-qilich-original',
    title: 'Qadimiy Qilich: Ibdtido',
    type: 'Film',
    year: 2024,
    rating: 9.1,
    budget: '$110M',
    posterUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAtVB84r-M848b3jhTd7z6TZvp5V1E4Eq9X64RpaU3xM2PrpPOQBGqeQrYCTQU6if84uIL2ag6qV6VU_Fk6DleyJbiDoLhUxfAKlRVWHkMB7kBeuD8QsjnJ4nz2Gw5WkWbABGlBQb2p1OwsZstja_lToOdZhsZf5MQLnp3oZ-8WqMwbAfHaZAhBjhKVbidRA3F2tuaqmVNifvJ0I93nNJgIOYFnQbkVKGrnW_tw7pKTO6UrXWV7Xuug4w',
    backdropUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAtVB84r-M848b3jhTd7z6TZvp5V1E4Eq9X64RpaU3xM2PrpPOQBGqeQrYCTQU6if84uIL2ag6qV6VU_Fk6DleyJbiDoLhUxfAKlRVWHkMB7kBeuD8QsjnJ4nz2Gw5WkWbABGlBQb2p1OwsZstja_lToOdZhsZf5MQLnp3oZ-8WqMwbAfHaZAhBjhKVbidRA3F2tuaqmVNifvJ0I93nNJgIOYFnQbkVKGrnW_tw7pKTO6UrXWV7Xuug4w',
    synopsis: "Ajdaholar va qilichbozlar dunyosining kelib chiqishi haqida CineStream eksklyuziv premyerasi.",
    cast: ['Bobur Mansurov', 'Sevara Nazarxon'],
    director: 'Sherzod Yuldashev'
  }
];

export const OriginalsScreen: React.FC<OriginalsScreenProps> = ({ onNavigate, onPlayMovie }) => {
  const [filterType, setFilterType] = useState<string>('Barchasi');

  const filteredOriginals = originalsData.filter((item) => {
    return filterType === 'Barchasi' || item.type === filterType;
  });

  const featured = originalsData[0];

  return (
    <div className="w-full min-h-screen pt-[88px] px-4 sm:px-8 md:px-12 max-w-[1440px] mx-auto pb-16">
      {/* Page Title & Intro */}
      <section className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="px-3 py-1 bg-red-600 text-white font-black text-[10px] rounded-md tracking-widest uppercase shadow-md">
              CINESTREAM EXCLUSIVE
            </span>
            <span className="text-xs text-white/50 font-['JetBrains_Mono']">
              Faqat bizning platformada
            </span>
          </div>
          <h1 className="font-['Manrope'] font-black text-3xl sm:text-5xl text-white tracking-tight">
            CineStream Originals
          </h1>
          <p className="text-sm sm:text-base text-white/60 mt-1">
            Yuqori sifatli eksklyuziv filmlar, seriallar va hujjatli loyihalar.
          </p>
        </div>

        {/* Type Tabs */}
        <div className="flex items-center gap-2 bg-[#121212] p-2 rounded-2xl border border-white/10">
          {['Barchasi', 'Film', 'Serial', 'Hujjatli'].map((type) => (
            <button
              key={type}
              onClick={() => setFilterType(type)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                filterType === type
                  ? 'bg-red-600 text-white shadow-lg'
                  : 'text-white/60 hover:text-white hover:bg-white/5'
              }`}
            >
              {type}
            </button>
          ))}
        </div>
      </section>

      {/* Featured Big Original Banner */}
      <section className="mb-12">
        <div className="group relative rounded-[2.5rem] overflow-hidden border border-red-600/30 bg-[#121212] shadow-[0_0_50px_rgba(220,38,38,0.15)] p-8 sm:p-12 min-h-[460px] flex flex-col justify-end">
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
            style={{ backgroundImage: `url('${featured.backdropUrl}')` }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/50 to-transparent z-10"></div>

          {/* Top Badge */}
          <div className="absolute top-6 right-6 sm:top-8 sm:right-8 z-20 flex items-center gap-3">
            <span className="px-4 py-1.5 bg-red-600 text-white text-xs font-extrabold rounded-full tracking-widest uppercase shadow-xl border border-red-400/30">
              ORIGINAL MOVIE
            </span>
          </div>

          <div className="relative z-20 max-w-2xl">
            <div className="flex items-center gap-3 mb-3">
              <span className="px-3 py-1 bg-white/10 backdrop-blur-md text-white/80 font-['JetBrains_Mono'] text-xs font-bold rounded-lg border border-white/10">
                {featured.year}
              </span>
              <span className="px-3 py-1 bg-white/10 backdrop-blur-md text-white/80 font-['JetBrains_Mono'] text-xs font-bold rounded-lg border border-white/10">
                Budjet: {featured.budget}
              </span>
              <div className="flex items-center gap-1 bg-red-600/20 backdrop-blur-md px-3 py-1 rounded-lg text-red-500 font-bold text-xs border border-red-600/30">
                <span className="material-symbols-outlined text-sm filled">star</span>
                {featured.rating} IMDB
              </div>
            </div>

            <h2 className="font-['Manrope'] font-black text-3xl sm:text-5xl text-white mb-4 tracking-tight">
              {featured.title}
            </h2>

            <p className="text-white/80 text-xs sm:text-sm mb-6 leading-relaxed line-clamp-3">
              {featured.synopsis}
            </p>

            <div className="flex items-center gap-4">
              <button
                onClick={() =>
                  onPlayMovie({
                    id: featured.id,
                    title: featured.title,
                    synopsis: featured.synopsis,
                    backdropUrl: featured.backdropUrl,
                  })
                }
                className="px-8 py-3.5 bg-red-600 hover:bg-red-700 text-white font-bold rounded-2xl transition-transform active:scale-95 flex items-center gap-2 shadow-[0_0_25px_rgba(220,38,38,0.6)] cursor-pointer text-sm sm:text-base"
              >
                <span className="material-symbols-outlined text-2xl filled">play_arrow</span>
                Eksklyuziv ko'rish
              </button>

              <button
                onClick={() => onNavigate('details', 'push')}
                className="px-6 py-3.5 bg-white/10 backdrop-blur-md hover:bg-white/20 text-white font-bold rounded-2xl border border-white/20 transition-transform active:scale-95 flex items-center gap-2 cursor-pointer text-sm"
              >
                <span className="material-symbols-outlined text-xl">info</span>
                Treyler & Ma'lumot
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Originals Grid */}
      <section>
        <h3 className="font-['Manrope'] font-black text-2xl text-white tracking-tight mb-6">
          Barcha Original Loyihalar
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredOriginals.map((item) => (
            <div
              key={item.id}
              onClick={() =>
                onPlayMovie({
                  id: item.id,
                  title: item.title,
                  synopsis: item.synopsis,
                  backdropUrl: item.backdropUrl,
                })
              }
              className="group relative bg-[#121212] rounded-[2rem] border border-white/10 overflow-hidden hover:border-red-600/50 transition-all cursor-pointer shadow-xl flex flex-col sm:flex-row h-full min-h-[220px]"
            >
              <div className="sm:w-2/5 relative overflow-hidden aspect-[3/4] sm:aspect-auto">
                <img
                  src={item.posterUrl}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute top-3 left-3 px-2.5 py-0.5 bg-red-600 text-white text-[10px] font-black rounded uppercase tracking-wider">
                  {item.type}
                </span>
              </div>

              <div className="p-6 sm:w-3/5 flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-['JetBrains_Mono'] text-xs font-bold text-red-500 flex items-center gap-1">
                      <span className="material-symbols-outlined text-sm filled">star</span>
                      {item.rating}
                    </span>
                    <span className="font-['JetBrains_Mono'] text-xs text-white/40">
                      {item.year}
                    </span>
                  </div>

                  <h4 className="font-bold text-xl text-white mb-2 group-hover:text-red-500 transition-colors">
                    {item.title}
                  </h4>

                  <p className="text-xs text-white/60 line-clamp-3 leading-relaxed mb-4">
                    {item.synopsis}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs">
                  <span className="text-white/40 font-['JetBrains_Mono']">Rejissyor: {item.director}</span>
                  <span className="text-red-500 font-bold flex items-center gap-1">
                    Ko'rish <span className="material-symbols-outlined text-sm">arrow_forward</span>
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
