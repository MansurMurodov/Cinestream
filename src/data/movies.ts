import { Movie, UserProfile } from '../types';

export const userProfile: UserProfile = {
  name: 'Sardor Rahimov',
  status: 'Premium obunachi',
  avatarUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCFKCl9_xzxP0xiQOMS27Tpc_2zD62gYoH4UD3rNqzo9u7Oluay__IeeWDtOlnTVkJoKNGTDH3IwND8htrH-lRXTUumurHNhZS90sWiutEVwmX6SGZNgmlS0M93yvZKP0A7FDb-b4HmNq3rj8lM7CW_M-YLo0Rz-yHS-jepLh53AiAzpSZzGkO0JV9GQIPQ4Q1JpO1S-AkOWBZHfOC0wR34JKqJSPrWjmCX1xlyTEOw3eW6FQV0DqWfZw',
  genres: ['Harakat', 'Ilmiy fantastika', 'Drama'],
};

export const featuredHeroMovie: Movie = {
  id: 'yulduzlar-aro-sukunat',
  title: 'Yulduzlar Aro Sukunat',
  genre: 'Ilmiy-fantastika',
  year: 2024,
  duration: '145 daqiqa',
  rating: 9.2,
  ageRating: '16+',
  posterUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDHdOpRMNMYSyU8gJAehilgPQ1HgGdrgjSNSpSOdGjtb4FT6s9ROrf4u2Bh5wBJi6d-wHPm2wb1g8hWcWp0k7xEuxhScomhcIL8KXZMf6JVpnPrFjuwN2lAh8DVPLAMVf1Xielhk-0zGhHY4njrjK_Ug7QrSFrHqY45ox1Lf2KcF1F8_-qX7GG3l8biXRr13N96zF8MnwRRmUsdUqL2hWgWXq4BQZnDQ7Q1yES7nPON0beEz83hqQ7vSg',
  backdropUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCd0YjowotEWWjrRZDS9kmX5SqEYpinxEYBOyR2OBzwOxOO1rTOdaIdL3PW-0funPgv6fqvY86rPMd-TR5FNiMTcKfjPFd7_Zo-6TZ9s5smJYQHnE33AWM5ewcxROEifu8l0OP4qEK_H4jMNxo3VuM3OXz4ROjtfWxEXF3R5rNZRwRv-5_TBfq21gc4bT10HRF5ZanMP_Ldp8pfAhQMO3rXPsBQQg-53YPKj6RoF8aVGF2d5SgETeiz0g',
  synopsis: "Insoniyatning so'nggi umidi olis galaktika qa'riga yashiringan qadimiy sirlarni ochishda yotadi. O'tmish arvohlari va kelajak tahdidlari bilan yuzma-yuz kelgan guruhning epik sayohati.",
  director: 'Alisher Qodirov',
  cast: ['Sardor To\'rayev', 'Malika Usmonova', 'Jasur Hamroyev'],
  tags: ['Ilmiy-fantastika', '2024', '★ 9.2']
};

export const mainDetailsMovie: Movie = {
  id: 'orzular-shahri',
  title: 'Orzular Shahri',
  genre: 'Ilmiy Fantastika',
  year: 2024,
  duration: '145 daqiqa',
  rating: 8.7,
  ageRating: '16+',
  posterUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDHdOpRMNMYSyU8gJAehilgPQ1HgGdrgjSNSpSOdGjtb4FT6s9ROrf4u2Bh5wBJi6d-wHPm2wb1g8hWcWp0k7xEuxhScomhcIL8KXZMf6JVpnPrFjuwN2lAh8DVPLAMVf1Xielhk-0zGhHY4njrjK_Ug7QrSFrHqY45ox1Lf2KcF1F8_-qX7GG3l8biXRr13N96zF8MnwRRmUsdUqL2hWgWXq4BQZnDQ7Q1yES7nPON0beEz83hqQ7vSg',
  backdropUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuD-HEYAkvsicBCsYURtx-FXKFjxh_STb6NfjdzcVFzuoy6UVe1PyNInZGHhEfOgHNuWfmNmSJNilFqMhWiMCSCeJH_C2w0HtptBILG9HqzYUD6oBDXMeCCObzbvy-Vi1GbNW34bMU6aP6SCKNGtqk7bHce0IWCSfxmfiW-U3sZAFcgQBqQkKrEFZoL3HMvCQ7ntYLfJDp_ERP9DSUo3pNosBh1K--QoqrWNlkVIp-Z2KqUedyM9T_M1lg",
  synopsis: "Kelajakdagi megapolisda yashovchi yosh ixtirochi o'zining sun'iy intellektga ega do'sti bilan shaharning yashirin sirlarini ochishga harakat qiladi. Bu yo'lda ular kutilmagan to'siqlar va hukumatning xavfli fitnalariga duch kelishadi. Haqiqat izlash yo'lidagi xavfli sarguzasht.",
  director: 'Alisher Qodirov',
  cast: ['Sardor To\'rayev', 'Malika Usmonova'],
  tags: ['Ilmiy Fantastika', 'Triller', 'Drama']
};

export const trendingMovies: Movie[] = [
  {
    id: 'qochqin',
    title: 'Qochqin',
    genre: 'Jangarilar',
    year: 2023,
    rating: 8.5,
    posterUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDeaGrbH1oOJjrau6gkYDMo_ZrjFkF0l3_HiGYtF0CpDTfEd6z56OksV5rT3nRXjen3wx-lxLd7UacHGuxpLrMl8JCl8io0DJjEsBT2tkLeYxsNDB2m_e9-DDJsGOtIPsiklzdiw4jR1Qs-5jATkcOMHgj6q--GSTo9pdUT_AULH0KkWEVkw9l69FN8j_q1AWoGXIVupnHnpUDgqPML9z8uuJ42ZuZ9LW5ovWK7eP__pULUoRGGnQWK6Q',
    synopsis: 'Tungi shaharda xavfli jinoyat guvohiga aylangan va tunda quvg\'inda qolgan yigitning shiddatli hayotiy kurashi.'
  },
  {
    id: 'qadimiy-qilich',
    title: 'Qadimiy Qilich',
    genre: 'Fentezi',
    year: 2024,
    rating: 8.9,
    posterUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAtVB84r-M848b3jhTd7z6TZvp5V1E4Eq9X64RpaU3xM2PrpPOQBGqeQrYCTQU6if84uIL2ag6qV6VU_Fk6DleyJbiDoLhUxfAKlRVWHkMB7kBeuD8QsjnJ4nz2Gw5WkWbABGlBQb2p1OwsZstja_lToOdZhsZf5MQLnp3oZ-8WqMwbAfHaZAhBjhKVbidRA3F2tuaqmVNifvJ0I93nNJgIOYFnQbkVKGrnW_tw7pKTO6UrXWV7Xuug4w',
    synopsis: 'Qadimiy afsonaga ko\'ra dunyoni qutqarish qudratiga ega mo\'jizaviy artefaktni izlash yo\'lidagi epik sayohat.'
  },
  {
    id: 'kozgu',
    title: 'Ko\'zgu',
    genre: 'Triller',
    year: 2023,
    rating: 8.1,
    posterUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAIWXy08sjmykiEhUJ-0HfSbVXZpFbMQseQuOgS26CBMyXCl_N-gIHk2lODyMEQLdSD-2n_yWxr41z04tHN16UDKgQSuQxUKQDHfHAwPBibYuJrMz4Poj6LbRtgMbTvF_22MW5BG-uU0v2gGFzZFT0-AqQLax22zczM-WoazJUletHKPhsdSVgL_HYD_Q4jqmdzhyacj5lFhkO-q6klAfc6IUczQ4XYqG3uZJNCIHZXtVU7lzh72cI-yg',
    synopsis: 'Inson ruhiyatining eng qorong\'u burchaklarini tadqiq etuvchi sirli va tarang psixologik triller.'
  },
  {
    id: 'yomgirdagi-uchrashuv',
    title: 'Yomg\'irdagi Uchrashuv',
    genre: 'Drama',
    year: 2024,
    rating: 8.4,
    posterUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDpBNx6pLgBX85-2aqoTa_Javxpnt95ZgslsDsoePjrCsZCutiCj4aatCqHnWaeP8bj3AWA03OhBA9X0TLDtlVRyNF6jt__zzjNxF-m7NzaHJsQfad9BWtLcNCvxBaF-jZyVV1GFib-2xgnGOyDpHPwgbniMBDSQqIm0g6ECr7WBRHK7kQ0qkgGmqNEfKUP5DtA9YdSZbNREdMHn7jgp-WUG0sjg1EqWPHWm2UE_XYoZjOywOiTKznVNA',
    synopsis: 'Parij ko\'chalarida yomg\'irli tunda kutilmagan uchrashuvdan boshlangan romantik va ta\'sirchan sevgi hikoyasi.'
  },
  {
    id: 'qizil-qumlar',
    title: 'Qizil Qumlar',
    genre: 'Ilmiy-fantastika',
    year: 2023,
    rating: 8.7,
    posterUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDhNsFPxti8IRjKZrfPgUh529Io7XGt-8UIEorh9Gri3v2a5DIIOJpgOzhGy_CpSICB5ApKmF375vgwhpeOsy0rkjS7Wfi9iXRP4xTn5A3VE4f_QC-DaBgDKdP_-6lZ3wHlqwLR_R6rZMvJ0GnVh6GR9qx3PqizX9AcGnGQl_-5q8sADzHGRx7BYl4Z0Y5bqsSP-PL_Tm5D9cQGPR20YlF_ULbA44Qr115oK61iBeYnq8QDAI1ooUsAzQ',
    synopsis: 'Olis sayyoradagi qum bo\'ronlari o\'rtasida yo\'qolgan kemani izlayotgan tadqiqotchilarning jasorati.'
  }
];

export const topRatedMovies: Movie[] = [
  {
    id: 'buyuk-jang',
    title: 'Buyuk Jang',
    genre: 'Tarixiy',
    year: 2024,
    rating: 9.8,
    posterUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDXY8NHHvRETO5WZ6V0QebSy9AQqjaZIhnBb8LbNV9PHHHpRW-xBrKmPQ7h_oqtlSAW1ztu0c7wDEovIcQBFX-woJ5iqNNGCoQ-3dJh6K7lgUNAFgEl2X5DmnGy6pfk00nm0d3jRz3_sbk_4h3mmRDWxMh3pzOzv3Vv7ObsjBN2EAPrMCkBwb7yA9IObMK03EFQJwYQae6YcFjPwkdFZlQ4bgiuYQGtw2gb6foscTPKx6Q6FdWxWbQ8Ag',
    backdropUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDXY8NHHvRETO5WZ6V0QebSy9AQqjaZIhnBb8LbNV9PHHHpRW-xBrKmPQ7h_oqtlSAW1ztu0c7wDEovIcQBFX-woJ5iqNNGCoQ-3dJh6K7lgUNAFgEl2X5DmnGy6pfk00nm0d3jRz3_sbk_4h3mmRDWxMh3pzOzv3Vv7ObsjBN2EAPrMCkBwb7yA9IObMK03EFQJwYQae6YcFjPwkdFZlQ4bgiuYQGtw2gb6foscTPKx6Q6FdWxWbQ8Ag',
    synopsis: 'Tarixiy obidalarni himoya qilish uchun kurashayotgan xalqning qahramonlik dostoni.'
  },
  {
    id: 'mexanika-uchrashuvi',
    title: 'Mexanika Uchrashuvi',
    genre: 'Animatsiya',
    year: 2024,
    rating: 9.1,
    posterUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAY4GPtp3M6QWBzFzejcF2luCRbGoeZsEZMepjxgr3hudT5IvE750j9DDAzcJTCgrskmdoFeALrAEnTJpRcbQTVHSmWTA4-VdWszgtw3W1YsJMKP5O3yMAtufMGitqftWHfBR90w0ib-4dehQ1UAM1x03KreXykPs3atG-LLIPrk-Yxd6w7WDQne2IzrbVcnh3YnRgXDPdIqoxZkfnOhXCCj7fBjx1843x5_H3tzFY6M5JvzF7L-u1_ew',
    synopsis: 'Kelajak shahridagi roboti bilan do\'stlashgan qahramonning samimiy sarguzashti.'
  },
  {
    id: 'adolat-tarozisi',
    title: 'Adolat Tarozisi',
    genre: 'Sud Dramasi',
    year: 2023,
    rating: 9.3,
    posterUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB-Y_Fek8iveWGZ0DfP7WhD6nYdB1v1lnKBuj1Qk824H_2AvXIS5by9BLaUbSja_TTubA9x2745zagO4lLj6pH3AXlZVVQgz43ASx54aI6N_XqdoNwcVEFJRM3fAz3yrUcC5nfmIJfGsvrk30KuyhRQSdzVxYKw0aEi1UjASRWEfhgLf8mug68-UQt9f8rzl2FMT7pcVeyhvz2yhZY-ozWAuXrvyvDQ61P2TFSYNAkgB2hXOchkakqQDg',
    synopsis: 'Haqiqat va adolat yo\'lida barcha xavflarga tik borgan advokatning hayajonli hikoyasi.'
  }
];

export const catalogMovies: Movie[] = [
  {
    id: 'yulduzlararo-sayohat',
    title: 'Yulduzlararo Sayohat',
    genre: 'Sci-Fi',
    year: 2024,
    rating: 8.9,
    posterUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA4fAlpbuewEsGoZXJQ4CIJx6x9SCUe-J0lY5tJljZ4UR17KMu09HX1OK4YRxYHcKEeLf8YqyTdZvbPD8t7UDop6NBTEdQm2fuqQaz-dWKAoE5dlKBHZnLqscDg38M-T2bW_BDAhcg8YwmbrQkXrwncljHsu4nzYX3aS5j8b1JPlbh7JLJBd_F_SzEbdr1Jc3K0QvDaLi1OU109VeTneetbZ6HTeO0K_nm7Q89pUWbaXA9xnEurAAD6sA',
    synopsis: 'Kechilmagan dunyoga sayohat qilgan va yangi sirlarni kashf etgan kosmonavtlar hikoyasi.'
  },
  {
    id: 'neon-shahar-detektivi',
    title: 'Neon Shahar Detektivi',
    genre: 'Triller',
    year: 2023,
    rating: 7.8,
    posterUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDUfFBqIQCUS9xi6e-Rp0HEazqRzXVjycGQiX8w7n_N-vJioeqUe9p00ucQXtpW_06Iuf8zdqWjbRMCOdHRKFgpBNRntVXR5HGzGFwRYhzOD1qevVKez17kBSbrIE77Tl2__HZPEW_P7Qk4m33zlU8Dffy6vPry-8_dmHSEjBYrK_4HVlubIYy1mWkGpEjPkKKGBOtRD3tdhSfVQZ_fqGLHx0FPZu52qRvA4HqPzQjtA1CAQ1bnQLtOIg',
    synopsis: 'Neon chiroqlari ostida yashiringan jinoyat izlaridan borayotgan tajribali detektiv.'
  },
  {
    id: 'ajdaholar-togi',
    title: 'Ajdaholar Tog\'i',
    genre: 'Fantasy',
    year: 2024,
    rating: 8.2,
    posterUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuANpcpenetD4stvoRk6OPniRMBSMx5OVsEnYl_sJ6-OKfz23prrIvI1XD7wJta30MawDKTHiiSNBpEIBokjX0WFgaMliQbfIpIO826u0vdj16G4a8fy2AbfmXN2KAk7YD2WRen2_-yt4y6V3q9YvLVDUmGqmLjztEUaCnFz_x5MLnPd3HX6DnmGQPk7osBx-Q-bmD8Yi2rJ_aogoKdYMmBl8nWiirKBXI_nFaDL4NYj1igg2z6a-N35pQ',
    synopsis: 'Sehrli tog\' va afsonaviy jonzotlar bilan to\'qnashgan qahramonlarning jasorati.'
  },
  {
    id: 'soya-ortidan',
    title: 'Soya Ortidan',
    genre: 'Jangari',
    year: 2022,
    rating: 7.5,
    posterUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBhuDsP6MjbzVqAyfBhyvKwNMkz_v7TYBH5jUcNsykPUwDDPGGdI8-6nrmtSaffS_AKUSHoVSEae45EvrlyqPaw98REF_IeH7CLHvwNMC2RLzUvUpO5GPMWcrvGUqrc8Bh1xJB9n4WloIl0LqOypbnaBm1lr6Gvnbpo62tIUUdpKhO8i3ikcpqMKTbkQ_WgyeMx97Y5Pcy0mBtPW8dQVBFplGbBWcOZ4AfshPNS6HgFgzwJkzIDbZipTw',
    synopsis: 'Tungi ko\'chalarda adolat izlayotgan sirli jangchining xavfli topshirig\'i.'
  },
  {
    id: 'oltin-kuz',
    title: 'Oltin Kuz',
    genre: 'Drama',
    year: 2023,
    rating: 8.6,
    posterUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBRa_W_AjvbhrJZHLFLR3XYakdgsNCiNiJ5R8iaVu9Y6WinrqtrpiWxkifts3pGAdNEUuDp-AXZI_BW0a9CrF9bX3q1K1iNKN_v3KkcWDn85ufDvDDP_PLctWjvqMrrY_AyJq-rhTeysmcztg_De14QR1WDTGOCXTIDV7kxhx767s-saUq1-DcdzDetvvgQHwBKBk2wOnoYleFYeCf3aIJJvOOO8jTbaky9JfTeWnFZa0DB9qQ39Lk4qw',
    synopsis: '19-asrning go\'zal va ta\'sirli tuyg\'ulari haqida hikoya qiluvchi dramatik film.'
  },
  {
    id: 'parchalangan-ong',
    title: 'Parchalangan Ong',
    genre: 'Psixologik',
    year: 2024,
    rating: 7.9,
    posterUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA4w4lUT-BhY3XAsvLdf-fdeY7Y3y9SAOnGrZYrn8y2iom0OcOnFlinA6maqqU_Gc-mvExrlSP2QGmaYLLEuOinmF0dau7n0vNHuUwTvCbsHuh5YVS0udNbJD5eMnCFlytf7aG27csbbOiRVRUv4JnkrRIM4zRfDjoaOQtL8pHWl-n-71bEriDCvTFsBxLWa5_bv94-l4ZjkNJJIMaSJvLAAVN-mMH0UjHDIS4eeTp6esdVoEC1sm8Y7A',
    synopsis: 'Aqlingiz ishona oladigan so\'nggi narsa - o\'zingizning xotiralaringiz.'
  }
];

export const userFavoriteMovies: Movie[] = [
  {
    id: 'qonli-oy',
    title: 'Qonli oy',
    genre: 'Fantastika',
    year: 2024,
    rating: 8.8,
    posterUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBmEGyafZ5-sPNwLB818sBZ_9cEbvY4rSiCTROZrOC0jz_n9iWdo6oSzZGFA2i2UFYhNkaNJB7etuDP4QZ2adxCNu-RxB5AxZDc0afwQUsUHx8-8-2zaVft-GAr4ks35_ati4hcmWolmkfiYjsSQ4IObKvRm9iWsfh9Wl1jan8-HsM_Ey-xuak6irosMkkJct7woNfsKPnh9hSrJuJ3wGiVZJqQPZM7Bbye2MD2TfV3n1PrrG8wpswJYQ',
    synopsis: 'Qizil oy tutilishi vaqtidagi sirli hodisalar va jasur qahramonning kurashi.'
  },
  {
    id: 'yashirin-sir',
    title: 'Yashirin sir',
    genre: 'Triller',
    year: 2022,
    rating: 8.3,
    posterUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBxjMIsHmyUmjMgL_znu4hO1j0-5yKnzMic8EadgaSFcnA2LDB-uTP6Sydbe735Lzsm5CpSy8G2bsfXBfsr_adbd_8ms697aT7rzmhMZEEEBrVT2Jh0NjKVsZSMtQD7R5ljAbUxCOCzEmK-KDrQZmNHBtE8qcIbK8Ld6VKUXHt6DfRZKYX-z8YrGg9QVx52Re0iaeORpc59BIt3xIg4LLKyc1FzA51yOIA5vJPF1G-JKpzN6gSD6YWLDQ',
    synopsis: 'O\'tmish arvohlari ta\'qib qilayotgan detektivning xavfli tergov jarayoni.'
  },
  {
    id: 'kelgindilar',
    title: 'Kelgindilar',
    genre: 'Ilmiy',
    year: 2023,
    rating: 8.6,
    posterUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBA4ixnoVbV2r4SabRr_7UV2fbwvUqSm1mG2Z5QeqllD9oj6NPg0pTIIQgc2qtJewDrgdiTvQCjY59509B2k2uAeqBgf53cA2Jnx_wkCpjxkV9Qw6RdDgtW7bpFlh-PTr7HV3MGiqwk8rtovQ4Buw4ClSx6wdCt_KZQrHZtiO4x5O_jgGSQFNcOSTeDmO01nG5LW9bYrerByUg21CwgupvY2YcwfWB2_16vKnRVa2VyW94zcxtQutvV2g',
    synopsis: 'Koinotdan kelgan kutilmagan mehmonlar bilan muloqot o\'rnatish tajribasi.'
  },
  {
    id: 'tezlik',
    title: 'Tezlik',
    genre: 'Harakat',
    year: 2021,
    rating: 8.0,
    posterUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB2-hWvRAW-kstLIbxWtbOu6P7HkHZr3RTSU3jBbG72PEvfzEKha8F5FLQ2mTf9yjLNbiuMK9gZHrgVUPj4OTbMRfvsm7accaKFimnGDRMV25u7Z7MDFJuHljumbRkSwe8unJGSK-HCJ-AV8pR5yIJut6ZuxN4FedhX3L4pVV0aWZjfQhFDaK0mGZixJxKtrqYIKTRJt2ruSNp0fZau63bJC2iHJWa18nIXxYc-jqhkI50_0kY4KDCeoA',
    synopsis: 'Sahro yo\'llaridagi xavfli quvlashmalar va adolat uchun kurash.'
  },
  {
    id: 'songgi-raqs',
    title: 'So\'nggi raqs',
    genre: 'Drama',
    year: 2024,
    rating: 8.7,
    posterUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBjOVSKHDA3lLTTfJbjtgc8GJpIQMlFgaP_fQ5pKWiNnFMHV2XVkUYnv9KEtjhURyXsTLzUGOpH9kNbE1iv_9RLV6_RuM-0PLq0Mtc_eB6-v5nPdHnXYKMwtdC0aIMGXDDZVMdWPR40Z-Hmpmws5akwl6-2PYCUXSoClYai-X7pgGRSzCfqU0cpGCRkyznHiA7UZHPEMMA35W8nCXV-jPsKVKFbohvcZ0NE4gotBDqo7FsDiB4vddHeDg',
    synopsis: 'Sahnadagi so\'nggi chiqish oldidan kechgan ta\'sirchan dramatik kechinmalar.'
  },
  {
    id: 'qorongu-ormon',
    title: 'Qorong\'u o\'rmon',
    genre: 'Qorqinchli',
    year: 2020,
    rating: 7.6,
    posterUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDogHlrH0UnXyZKlPy8WEKCBb5xfAsTF8aiTuGgFVgohcMazLbEO99oJMz4ugIhzCJYMGhn4vBDbOL_aRZSjGFe2NQ7y6s0oSsUO2_JOdr9XdnZwbgz0-TVIF3tuFulBFiaiNPnosRpWBc9p10fodr4G9qhv3300e721gwn3c4Sbamat5otZ_tinWYpy597NKYDsrmasqFhZDYZRDHIS7w0-fLXAfrz2PKFAy2GT9wjSnrtJFtQqBBWFg',
    synopsis: 'Tumanli o\'rmonda joylashgan qadimiy qasr va undagi vahimali sirlar.'
  }
];

export const continueWatchingList = [
  {
    id: 'kosmos-chegarasi',
    title: 'Kosmos chegarasi',
    subtitle: 'S2: Q3 • Qora tuynuk',
    remaining: '45 daqiqa qoldi',
    progress: 65,
    backdropUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDVQOnCT5_2YuWm0TxLQxBdU_3A7CNsSvREinuT8BJfxLe2bNlF1DM8U_oRepmmDKokeCERg56iwIlk4javTl9wl4nXTNyaAEzULEjbLiPXCBNUMkydP0ClacNrE5V6du8DBTflEolx02241gNTtkt3o8bXPF5NU_tNBrn_Cp5DM9zudNjQoqh061lUO-TcZmmEVIOohuKJok-qoGW5JB-B_9oUblsXUxKrohgxTtBuYQAEsV88tVXMNg'
  },
  {
    id: 'tungi-shahar',
    title: 'Tungi shahar',
    subtitle: 'Film • 2023',
    remaining: '1 soat 30 daqiqa qoldi',
    progress: 20,
    backdropUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBj2ZY7FTxv3uyFjRqP_n1EKnlpRuuQCXHINTIUQuqQQD6W0Y6DfFWd7PZK-J7TjLLOKFpJ4IHU1qSMseBk4V4WW713-WrbhIGGMIJu5RNOH13s9FLahNI3H5fiXa_BqU4QPeXe_F2aMcaX4Lyr1sW9KfT3u9ZTlb7hMFH2sPxmOMyyelzd9niInoCU6uWjY2M6GyNL-krRNCL1YUICHUf7MG-bDdopFEdj233Fs2wRRYuPbOAyqYk4SQ'
  }
];

export const relatedMovies: Movie[] = [
  {
    id: 'yulduzlar-aro',
    title: 'Yulduzlar Aro',
    genre: 'Ilmiy Fantastika',
    year: 2023,
    rating: 9.0,
    posterUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDHdOpRMNMYSyU8gJAehilgPQ1HgGdrgjSNSpSOdGjtb4FT6s9ROrf4u2Bh5wBJi6d-wHPm2wb1g8hWcWp0k7xEuxhScomhcIL8KXZMf6JVpnPrFjuwN2lAh8DVPLAMVf1Xielhk-0zGhHY4njrjK_Ug7QrSFrHqY45ox1Lf2KcF1F8_-qX7GG3l8biXRr13N96zF8MnwRRmUsdUqL2hWgWXq4BQZnDQ7Q1yES7nPON0beEz83hqQ7vSg',
    synopsis: 'Mo\'jizaviy koinot qa\'riga tushib qolgan astronavtning ta\'sirchan hikoyasi.'
  },
  {
    id: 'zulmat-sirlari',
    title: 'Zulmat Sirlari',
    genre: 'Triller',
    year: 2023,
    rating: 8.2,
    posterUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuChHTQL1kXJH50tZGTBRiJ2qhaNYXsPCe0VmRWuZS6CaGwBLsC2LfGTP60UG-qUfdujUZ47TW49Ah6YwoMWKSzIciGEe4l4BLckl1_dZJZSXgDy6svaZZ4f9AFD3bTSMr37XxkhGvg6-EXiOwqNKEZF_GBGqgHXcPhyknhGLZ5pLPmBUT3D2FX7ha0lI1r-wqseZACDnDsPWVQWnJSJyEEg4b6FmvC6piNXL6RJfULmjBZfpKAueHfNtA',
    synopsis: 'Tungi ko\'chada qolgan detektivning kutilmagan sirlar bilan to\'qnashuvi.'
  },
  {
    id: 'nazar',
    title: 'Nazar',
    genre: 'Kiberpunk',
    year: 2024,
    rating: 8.5,
    posterUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBWxVJnHSe8XQo6erEIhdk0hpejTrkhg_6QGMfu9mzFXhpitDEtBUYICcjM3k4SBF0VfPZmc7xUNbnipxcH5aiAYjUVXx7tIu0cveXxU03CIGGwdju0JS55rO7jQbemcC_EgH-diggx4ayCR8J9cJi60MP4fEi-l4VstCEcJyvGakfg9TUBnQNNohtAlBwCDa5rmbLXfU0UyOggNPA4hfdQwc1BTHpAxtIRUM1279Yz_4mqRoP-pKRlrA',
    synopsis: 'Sun\'iy intellekt nazorati ostidagi kiberpunk shahardagi isyon.'
  },
  {
    id: 'nomalum-zarracha',
    title: 'Noma\'lum Zarracha',
    genre: 'Drama',
    year: 2023,
    rating: 8.1,
    posterUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCuNHg6Uhv42HQyGKk1jljDVHfWBdiy4RiAH2_qkNdGKHGqLMLtENfoARfkQBSXjDZumj2b_AyayKnHIRZJIEh_MG1uE89YCDi_yvLUaGlSVW8GTgTCyJsCgsNscpYt-OWSttkpbHZ5ldnVIir-pOWxDLBLtHItcLG_Opba2xuAIOYsCBCGXLAEqy8LSRusIBZDtluFhJOhq8NpRDHZxYWA-C72W1YbvCo4IFbDzM6J9-rOdDG7r_B4zg',
    synopsis: 'Fazo va vaqt haqidagi kutilmagan kashfiyot atrofidagi ziddiyatlar.'
  },
  {
    id: 'poyga-2099',
    title: 'Poyga: 2099',
    genre: 'Jangari',
    year: 2024,
    rating: 8.6,
    posterUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD-rgUiLXZcEIhRItN6IkLjlRGfq8XYjEhxa7uyNh4_EWjUx28phEaMGlv17uut7Ru-iTFItk0-WS8xgL93xUoXAa58TeVfv-mACfnphxoU4mfwouEgzcm87s57oKjnxNO08XGyGB8RrVtsxNM5n08C0Hpo_jEAlh_RRRWX3JkyTivZxw2sh4atpDRXY419l93J1uAkxMdy7KZQOKcJadyqXjEEWrvRY8K1lN-SnwvRzFNDgvu7uCRH6g',
    synopsis: 'Kelajak kanyonlarida kechadigan shiddatli va xavfli uchar mashinalar poygasi.'
  }
];
