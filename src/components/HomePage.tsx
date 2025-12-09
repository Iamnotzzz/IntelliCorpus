import React from 'react';
import VideoGridItem from './VideoGridItem';
import UserSidebar from './UserSidebar';
// 修改这一行
import type { VideoItem, UserProfile } from '../types';
import { Filter, SlidersHorizontal } from 'lucide-react';

// ... 后面的代码保持不变

interface HomePageProps {
  videos: VideoItem[];
  user: UserProfile;
  onVideoSelect: (video: VideoItem) => void;
}

const HomePage: React.FC<HomePageProps> = ({ videos, user, onVideoSelect }) => {
  // Categories for filter chips
  const categories = ["All", "Computer Science", "Electrical Engineering", "Literature", "Physics", "Interviews", "Academic English"];

  return (
    <div className="max-w-[1600px] mx-auto p-4 lg:p-6 grid grid-cols-1 lg:grid-cols-12 gap-8">
      
      {/* Left Column: Content */}
      <div className="lg:col-span-9 space-y-6">
        
        {/* Banner / Welcome (Optional) */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-8 text-white shadow-lg relative overflow-hidden">
            <div className="relative z-10">
                <h1 className="text-3xl font-bold mb-2">Welcome back, {user.name.split(' ')[0]}!</h1>
                <p className="text-blue-100 max-w-xl">
                    Continue your training on the <span className="font-semibold text-white">IntelliCorpus</span> platform. 
                    You have 3 recommended sessions pending for this week.
                </p>
            </div>
            <div className="absolute right-0 top-0 h-full w-1/3 bg-white/5 skew-x-12 transform translate-x-12"></div>
        </div>

        {/* Filters */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 custom-scrollbar">
            <button className="p-2 bg-slate-200 hover:bg-slate-300 rounded-lg transition-colors">
                <SlidersHorizontal className="w-5 h-5 text-slate-700" />
            </button>
            {categories.map((cat, idx) => (
                <button 
                    key={idx}
                    className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-colors ${idx === 0 ? 'bg-slate-900 text-white' : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-50'}`}
                >
                    {cat}
                </button>
            ))}
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-y-8 gap-x-6">
            {videos.map(video => (
                <VideoGridItem 
                    key={video.id} 
                    video={video} 
                    onClick={onVideoSelect} 
                />
            ))}
            {/* Duplicate for demo density */}
             {videos.map(video => (
                <VideoGridItem 
                    key={`${video.id}-dup`} 
                    video={{...video, id: `${video.id}-dup`}} 
                    onClick={() => onVideoSelect(video)} 
                />
            ))}
        </div>
      </div>

      {/* Right Column: User Sidebar */}
      <div className="lg:col-span-3">
        <div className="sticky top-24">
            <UserSidebar user={user} historyVideos={videos} />
        </div>
      </div>

    </div>
  );
};

export default HomePage;
