import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import PlayerPage from './components/PlayerPage';
import { VIDEO_LIST, CURRENT_USER } from './constants';
// 修改这一行
import type { VideoItem } from './types';

// ... 后面的代码保持不变

type PageView = 'home' | 'player';

function App() {
  const [view, setView] = useState<PageView>('home');
  const [currentVideo, setCurrentVideo] = useState<VideoItem>(VIDEO_LIST[0]);

  const handleVideoSelect = (video: VideoItem) => {
    setCurrentVideo(video);
    setView('player');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleGoHome = () => {
    setView('home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      <Navbar onLogoClick={handleGoHome} />
      
      {view === 'home' ? (
        <HomePage 
          videos={VIDEO_LIST} 
          user={CURRENT_USER}
          onVideoSelect={handleVideoSelect} 
        />
      ) : (
        <PlayerPage 
          video={currentVideo} 
          relatedVideos={VIDEO_LIST} 
          onVideoSelect={handleVideoSelect} 
        />
      )}
    </div>
  );
}

export default App;
