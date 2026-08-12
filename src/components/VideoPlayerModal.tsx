import React, { useState, useRef, useEffect } from 'react';
import { Movie } from '../types';

interface VideoPlayerModalProps {
  movie: Partial<Movie> | null;
  onClose: () => void;
}

const sampleVideos = [
  'https://uzmovi.net/tarjima-kinolarri/8867-yomon-talim-benuqson-ozbek-tilida-uzbek.html',
  'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4',
  'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
  'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
];

export const VideoPlayerModal: React.FC<VideoPlayerModalProps> = ({ movie, onClose }) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const [isPlaying, setIsPlaying] = useState(true);
  const [volume, setVolume] = useState(80);
  const [isMuted, setIsMuted] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [quality, setQuality] = useState('4K (2160p)');
  const [audioTrack, setAudioTrack] = useState("O'zbekcha (Professional dublyaj)");
  const [subtitles, setSubtitles] = useState('O\'zbekcha');
  const [showSettings, setShowSettings] = useState(false);
  const [selectedEpisode, setSelectedEpisode] = useState(1);

  // Choose sample video based on movie id hash or fallback
  const videoSource = sampleVideos[
    movie?.id ? Math.abs(movie.id.split('').reduce((acc, c) => acc + c.charCodeAt(0), 0)) % sampleVideos.length : 0
  ];

  useEffect(() => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.play().catch(() => setIsPlaying(false));
      } else {
        videoRef.current.pause();
      }
    }
  }, [isPlaying]);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.volume = isMuted ? 0 : volume / 100;
    }
  }, [volume, isMuted]);

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      setCurrentTime(videoRef.current.currentTime);
      setDuration(videoRef.current.duration || 0);
    }
  };

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const newRatio = clickX / rect.width;
    if (videoRef.current && duration > 0) {
      const newTime = newRatio * duration;
      videoRef.current.currentTime = newTime;
      setCurrentTime(newTime);
    }
  };

  const toggleFullscreen = () => {
    if (containerRef.current) {
      if (!document.fullscreenElement) {
        containerRef.current.requestFullscreen().catch((err) => console.log(err));
      } else {
        document.exitFullscreen().catch((err) => console.log(err));
      }
    }
  };

  const formatTime = (timeInSeconds: number) => {
    if (isNaN(timeInSeconds) || timeInSeconds === 0) return '00:00';
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = Math.floor(timeInSeconds % 60);
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  if (!movie) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-2xl flex items-center justify-center p-2 sm:p-6 animate-fade-in">
      <div
        ref={containerRef}
        className="relative w-full max-w-6xl bg-[#121212] rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl flex flex-col"
      >
        {/* Top Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#0a0a0a] border-b border-white/10 z-20">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-red-600 animate-pulse"></span>
            <div>
              <h3 className="font-bold text-sm sm:text-base text-white truncate max-w-md">
                {movie.title || 'CineStream Player'}
              </h3>
              <p className="text-[10px] text-white/50 font-['JetBrains_Mono']">
                {quality} • {audioTrack}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setShowSettings(!showSettings)}
              className="text-white/70 hover:text-white transition-colors p-2 rounded-xl hover:bg-white/10 flex items-center gap-1 text-xs font-['JetBrains_Mono']"
            >
              <span className="material-symbols-outlined text-xl">settings</span>
              <span className="hidden sm:inline">Sozlamalar</span>
            </button>
            <button
              onClick={onClose}
              className="text-white/60 hover:text-white transition-colors p-2 rounded-full hover:bg-white/10 cursor-pointer"
            >
              <span className="material-symbols-outlined text-2xl">close</span>
            </button>
          </div>
        </div>

        {/* Settings Popup Menu */}
        {showSettings && (
          <div className="absolute top-16 right-6 z-40 bg-[#181818] border border-white/10 rounded-2xl p-4 shadow-2xl w-72 text-xs space-y-3 animate-fade-in">
            <div>
              <label className="text-white/40 uppercase font-['JetBrains_Mono'] text-[10px] block mb-1">
                Sifat (Quality)
              </label>
              <select
                value={quality}
                onChange={(e) => setQuality(e.target.value)}
                className="w-full bg-black/50 text-white p-2 rounded-xl border border-white/10 outline-none"
              >
                <option value="4K (2160p)">4K Ultra HD (2160p)</option>
                <option value="Full HD (1080p)">Full HD (1080p)</option>
                <option value="HD (720p)">HD (720p)</option>
              </select>
            </div>

            <div>
              <label className="text-white/40 uppercase font-['JetBrains_Mono'] text-[10px] block mb-1">
                Ovoz (Audio)
              </label>
              <select
                value={audioTrack}
                onChange={(e) => setAudioTrack(e.target.value)}
                className="w-full bg-black/50 text-white p-2 rounded-xl border border-white/10 outline-none"
              >
                <option value="O'zbekcha (Professional dublyaj)">O'zbekcha (Dublyaj)</option>
                <option value="Inglizcha (Original)">Inglizcha (Original)</option>
                <option value="Ruscha">Ruscha</option>
              </select>
            </div>

            <div>
              <label className="text-white/40 uppercase font-['JetBrains_Mono'] text-[10px] block mb-1">
                Subtitrlar
              </label>
              <select
                value={subtitles}
                onChange={(e) => setSubtitles(e.target.value)}
                className="w-full bg-black/50 text-white p-2 rounded-xl border border-white/10 outline-none"
              >
                <option value="O'zbekcha">O'zbekcha</option>
                <option value="Inglizcha">Inglizcha</option>
                <option value="O'chirilgan">O'chirilgan</option>
              </select>
            </div>
          </div>
        )}

        {/* Video Canvas Element */}
        <div className="relative aspect-video w-full bg-black flex items-center justify-center overflow-hidden group">
          <video
            ref={videoRef}
            src={videoSource}
            poster={movie.backdropUrl || movie.posterUrl}
            onTimeUpdate={handleTimeUpdate}
            onEnded={() => setIsPlaying(false)}
            onClick={() => setIsPlaying(!isPlaying)}
            className="w-full h-full object-contain cursor-pointer"
            autoPlay
            playsInline
          />

          {/* Subtitle Display Overlay */}
          {subtitles !== "O'chirilgan" && isPlaying && (
            <div className="absolute bottom-16 left-1/2 -translate-x-1/2 bg-black/70 backdrop-blur-sm text-yellow-300 font-bold text-sm sm:text-base px-4 py-1.5 rounded-lg border border-yellow-500/20 shadow-lg text-center max-w-xl pointer-events-none">
              "[Subtitr] - CineStream HD sifati va uzluksiz formatda namoyish etilmoqda"
            </div>
          )}

          {/* Controls Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-between p-6 pointer-events-none group-hover:pointer-events-auto">
            <div className="flex justify-between items-center">
              <span className="bg-red-600 text-white text-[10px] font-extrabold px-3 py-1 rounded-md font-['JetBrains_Mono'] tracking-widest uppercase shadow-md">
                {quality}
              </span>
              <span className="text-xs font-['JetBrains_Mono'] text-white/80 bg-black/60 px-3 py-1 rounded-lg border border-white/10">
                {audioTrack}
              </span>
            </div>

            {/* Play/Pause Center Button */}
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="self-center w-16 h-16 rounded-full bg-red-600 text-white flex items-center justify-center hover:scale-110 transition-transform shadow-[0_0_30px_rgba(220,38,38,0.7)] cursor-pointer"
            >
              <span className="material-symbols-outlined text-3xl filled">
                {isPlaying ? 'pause' : 'play_arrow'}
              </span>
            </button>

            {/* Bottom Controls Bar */}
            <div className="space-y-2">
              {/* Timeline Scrubber */}
              <div
                onClick={handleSeek}
                className="w-full h-2 bg-white/20 rounded-full cursor-pointer overflow-hidden group/bar hover:h-3 transition-all relative"
              >
                <div
                  className="h-full bg-red-600 rounded-full transition-all shadow-[0_0_10px_rgba(220,38,38,0.8)]"
                  style={{
                    width: `${duration ? (currentTime / duration) * 100 : 0}%`,
                  }}
                ></div>
              </div>

              {/* Time & Volume Controls */}
              <div className="flex items-center justify-between text-xs font-['JetBrains_Mono'] text-white">
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="hover:text-red-500 cursor-pointer"
                  >
                    <span className="material-symbols-outlined text-xl filled">
                      {isPlaying ? 'pause' : 'play_arrow'}
                    </span>
                  </button>
                  <span>
                    {formatTime(currentTime)} / {formatTime(duration || 145)}
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setIsMuted(!isMuted)}
                    className="hover:text-red-500 cursor-pointer"
                  >
                    <span className="material-symbols-outlined text-lg">
                      {isMuted || volume === 0 ? 'volume_off' : 'volume_up'}
                    </span>
                  </button>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={isMuted ? 0 : volume}
                    onChange={(e) => {
                      setVolume(Number(e.target.value));
                      setIsMuted(false);
                    }}
                    className="w-20 accent-red-600 cursor-pointer"
                  />
                  <button
                    onClick={toggleFullscreen}
                    className="hover:text-red-500 cursor-pointer"
                  >
                    <span className="material-symbols-outlined text-lg">fullscreen</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Modal Info & Episode Selector Footer */}
        <div className="p-6 bg-[#0a0a0a] text-xs text-white/60 flex flex-col gap-4">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-white/10 pb-4">
            <div>
              <h4 className="font-bold text-white text-base mb-1">{movie.title}</h4>
              <p className="line-clamp-2 max-w-3xl leading-relaxed">{movie.synopsis}</p>
            </div>
            <button
              onClick={onClose}
              className="px-6 py-2.5 bg-white/10 hover:bg-white/20 text-white rounded-xl transition-colors font-bold cursor-pointer whitespace-nowrap self-end sm:self-auto"
            >
              Yopish
            </button>
          </div>

          {/* Episode Buttons (For TV Shows & Originals) */}
          <div className="flex items-center justify-between gap-2 overflow-x-auto no-scrollbar pt-1">
            <span className="font-['JetBrains_Mono'] text-white/40 uppercase text-[10px] font-bold whitespace-nowrap">
              Qismlar (Episodes):
            </span>
            <div className="flex gap-2">
              {[1, 2, 3, 4, 5, 6].map((ep) => (
                <button
                  key={ep}
                  onClick={() => {
                    setSelectedEpisode(ep);
                    if (videoRef.current) {
                      videoRef.current.currentTime = 0;
                      setIsPlaying(true);
                    }
                  }}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold font-['JetBrains_Mono'] transition-all cursor-pointer ${
                    selectedEpisode === ep
                      ? 'bg-red-600 text-white shadow-md'
                      : 'bg-white/5 text-white/60 hover:bg-white/10'
                  }`}
                >
                  {ep}-Qism
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

