export type ScreenId = 'home' | 'catalog' | 'profile' | 'details' | 'tvshows' | 'originals' | 'categories';

export type TransitionType = 'none' | 'push';

export interface Movie {
  id: string;
  title: string;
  genre: string;
  year: number;
  duration?: string;
  rating: number;
  ageRating?: string;
  posterUrl: string;
  backdropUrl?: string;
  synopsis: string;
  director?: string;
  cast?: string[];
  tags?: string[];
  isTrending?: boolean;
  isTopRated?: boolean;
}

export interface UserProfile {
  name: string;
  status: string;
  avatarUrl: string;
  genres: string[];
}
