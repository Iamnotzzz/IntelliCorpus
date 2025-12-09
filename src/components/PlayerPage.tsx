import React, { useState } from 'react';
import VideoShowcase from './VideoShowcase';
import TagSystem from './TagSystem';
import MindMapShowcase from './MindMapShowcase';
import AIChatDemo from './AIChatDemo';
// 修改这一行
import type { VideoItem } from '../types';

// ... 后面的代码保持不变

interface PlayerPageProps {
  video: VideoItem;
  relatedVideos: VideoItem[];
  onVideoSelect: (video: VideoItem) => void;
}

const PlayerPage: React.FC<PlayerPageProps> = ({ video, relatedVideos, onVideoSelect }) => {
  const [termContext, setTermContext] = useState<{word: string, def: string} | null>(null);

  const handleTermClick = (word: string, def: string) => {
    setTermContext({ word, def });
  };

  return (
    <div className="max-w-[1600px] mx-auto p-4 lg:p-6 grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Main Content Area (Video + Details) */}
        <div className="lg:col-span-8 space-y-6">
            <VideoShowcase 
                video={video} 
                onTermClick={handleTermClick}
            />

            <MindMapShowcase mindMapData={video.mindMap} />
            
            <TagSystem 
                tags={video.tags}
                title={video.title}
                views={video.views}
                date={video.uploadDate}
                description={video.description}
            />

            {/* Comments Placeholder */}
            <div className="mt-8 pt-8 border-t border-slate-200">
                <h3 className="font-bold text-lg mb-4">Comments</h3>
                <div className="bg-white p-6 rounded-xl border border-slate-100 text-center text-slate-400">
                    <p>Discussion thread is loading...</p>
                </div>
            </div>
        </div>

        {/* Sidebar (AI Tutor + Up Next) */}
        <div className="lg:col-span-4 flex flex-col gap-6">
            
            {/* AI Tutor Panel (Sticky within column) */}
            <div className="h-[500px]">
                <AIChatDemo contextTerm={termContext} />
            </div>

            {/* Up Next List */}
            <div className="bg-white rounded-xl border border-slate-200 p-4">
                <h3 className="font-bold text-slate-800 mb-4 px-1">Up Next</h3>
                <div className="space-y-4">
                    {relatedVideos.map((item) => (
                        <div 
                            key={item.id} 
                            onClick={() => onVideoSelect(item)}
                            className={`flex gap-3 cursor-pointer group rounded-lg p-2 transition-colors ${video.id === item.id ? 'bg-blue-50 ring-1 ring-blue-100' : 'hover:bg-slate-50'}`}
                        >
                            <div className="relative w-32 aspect-video bg-slate-800 rounded-lg overflow-hidden flex-shrink-0">
                                {video.id === item.id && (
                                    <div className="absolute inset-0 bg-blue-900/40 flex items-center justify-center">
                                        <div className="w-2 h-2 bg-blue-400 rounded-full animate-ping" />
                                    </div>
                                )}
                                <img src={item.thumbnail} alt={item.title} className="w-full h-full object-cover opacity-80" />
                                <span className="absolute bottom-1 right-1 bg-black/80 text-white text-[10px] px-1 rounded">
                                    {item.duration}
                                </span>
                            </div>
                            <div className="flex-1 min-w-0">
                                <h4 className={`text-sm font-semibold leading-tight line-clamp-2 mb-1 ${video.id === item.id ? 'text-blue-700' : 'text-slate-800 group-hover:text-blue-600'}`}>
                                    {item.title}
                                </h4>
                                <p className="text-xs text-slate-500 mb-1">{item.author}</p>
                                <div className="flex items-center gap-2 text-[10px] text-slate-400">
                                    <span>{item.views} views</span>
                                    <span>•</span>
                                    <span>{item.uploadDate}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
  );
};

export default PlayerPage;
