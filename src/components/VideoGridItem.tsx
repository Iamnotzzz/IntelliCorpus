import React from 'react';
// 修改这一行：添加 'type' 关键字
import type { VideoItem } from '../types'; 
import { PlayCircle } from 'lucide-react';

interface VideoGridItemProps {
  video: VideoItem;
  onClick: (video: VideoItem) => void;
}
// ... 后面的代码保持不变

const VideoGridItem: React.FC<VideoGridItemProps> = ({ video, onClick }) => {
  return (
    <div 
      onClick={() => onClick(video)}
      className="group cursor-pointer flex flex-col gap-2"
    >
      <div className="relative aspect-video rounded-xl overflow-hidden bg-slate-900">
        <img 
          src={video.thumbnail} 
          alt={video.title} 
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105 opacity-90 group-hover:opacity-100" 
        />
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/30">
          <PlayCircle className="w-12 h-12 text-white drop-shadow-lg" />
        </div>
        <span className="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-1.5 py-0.5 rounded font-medium">
          {video.duration}
        </span>
      </div>
      
      <div className="flex gap-3">
        <div className="w-9 h-9 rounded-full bg-slate-200 flex-shrink-0 overflow-hidden">
             <img src={`https://ui-avatars.com/api/?name=${video.author}&background=random`} alt={video.author} />
        </div>
        <div>
            <h3 className="font-bold text-slate-900 leading-tight line-clamp-2 mb-1 group-hover:text-blue-600 transition-colors">
            {video.title}
            </h3>
            <p className="text-sm text-slate-500 mb-0.5">{video.author}</p>
            <div className="flex items-center gap-1 text-xs text-slate-400">
            <span>{video.views} views</span>
            <span>•</span>
            <span>{video.uploadDate}</span>
            </div>
        </div>
      </div>
    </div>
  );
};

export default VideoGridItem;
