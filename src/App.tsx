import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ScreenId, TransitionType, Movie } from './types';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomeScreen } from './components/HomeScreen';
import { CatalogScreen } from './components/CatalogScreen';
import { ProfileScreen } from './components/ProfileScreen';
import { MovieDetailsScreen } from './components/MovieDetailsScreen';
import { TVShowsScreen } from './components/TVShowsScreen';
import { OriginalsScreen } from './components/OriginalsScreen';
import { CategoriesScreen } from './components/CategoriesScreen';
import { VideoPlayerModal } from './components/VideoPlayerModal';

export default function App() {
  const [activeScreen, setActiveScreen] = useState<ScreenId>('home');
  const [transitionType, setTransitionType] = useState<TransitionType>('none');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [playingMovie, setPlayingMovie] = useState<Partial<Movie> | null>(null);

  // Scroll to top on navigation
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: transitionType === 'push' ? 'smooth' : 'instant' });
  }, [activeScreen, transitionType]);

  const handleNavigate = (screen: ScreenId, transition: TransitionType = 'none') => {
    setTransitionType(transition);
    setActiveScreen(screen);
  };

  const renderScreen = () => {
    switch (activeScreen) {
      case 'home':
        return (
          <HomeScreen
            onNavigate={handleNavigate}
            onPlayMovie={(movie) => setPlayingMovie(movie)}
          />
        );
      case 'catalog':
        return (
          <CatalogScreen
            onNavigate={handleNavigate}
            searchQuery={searchQuery}
          />
        );
      case 'profile':
        return (
          <ProfileScreen
            onNavigate={handleNavigate}
            onPlayMovie={(movie) => setPlayingMovie(movie)}
          />
        );
      case 'details':
        return (
          <MovieDetailsScreen
            onNavigate={handleNavigate}
            onPlayMovie={(movie) => setPlayingMovie(movie)}
          />
        );
      case 'tvshows':
        return (
          <TVShowsScreen
            onNavigate={handleNavigate}
            onPlayMovie={(movie) => setPlayingMovie(movie)}
          />
        );
      case 'originals':
        return (
          <OriginalsScreen
            onNavigate={handleNavigate}
            onPlayMovie={(movie) => setPlayingMovie(movie)}
          />
        );
      case 'categories':
        return (
          <CategoriesScreen
            onNavigate={handleNavigate}
            onPlayMovie={(movie) => setPlayingMovie(movie)}
          />
        );
      default:
        return (
          <HomeScreen
            onNavigate={handleNavigate}
            onPlayMovie={(movie) => setPlayingMovie(movie)}
          />
        );
    }
  };

  return (
    <div className="min-h-screen bg-[#050505] text-[#ffffff] flex flex-col font-['Manrope',sans-serif] selection:bg-red-600/30 selection:text-red-500">
      {/* Header Bar */}
      <Header
        activeScreen={activeScreen}
        onNavigate={handleNavigate}
        searchQuery={searchQuery}
        setSearchQuery={(q) => {
          setSearchQuery(q);
          if (q.trim() && activeScreen !== 'catalog') {
            handleNavigate('catalog', 'none');
          }
        }}
      />

      {/* Main Content View with optional motion transitions */}
      <div className="flex-grow w-full">
        {transitionType === 'push' ? (
          <AnimatePresence mode="wait">
            <motion.div
              key={activeScreen}
              initial={{ x: 40, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -40, opacity: 0 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="w-full"
            >
              {renderScreen()}
            </motion.div>
          </AnimatePresence>
        ) : (
          <div key={activeScreen} className="w-full">
            {renderScreen()}
          </div>
        )}
      </div>

      {/* Video Player Modal */}
      {playingMovie && (
        <VideoPlayerModal
          movie={playingMovie}
          onClose={() => setPlayingMovie(null)}
        />
      )}

      {/* Footer Bar */}
      <Footer />
    </div>
  );
}
