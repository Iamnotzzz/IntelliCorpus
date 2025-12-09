import React, { useState } from 'react';
// 修改这一行
import type { VideoItem } from '../types';
import { Play, Pause, Volume2, Maximize, MoreVertical, FileText } from 'lucide-react';

// ... 后面的代码保持不变

// ... 后面的代码保持不变

interface VideoShowcaseProps {
  video: VideoItem;
  onTermClick: (term: string, definition: string) => void;
}

const VideoShowcase: React.FC<VideoShowcaseProps> = ({ video, onTermClick }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showTranscript, setShowTranscript] = useState(true);

  // Simulated toggle play (would control actual video ref in production)
  const togglePlay = () => setIsPlaying(!isPlaying);

  return (
    <div className="flex flex-col gap-4">
      
      {/* Video Player Container */}
      <div className="relative aspect-video bg-black rounded-xl overflow-hidden shadow-lg group">
        <video 
            className="w-full h-full object-contain"
            src={video.src}
            poster={video.thumbnail}
            controls
        />
        {/* Overlay for demo feel (optional, if using custom controls) */}
        {/* <div className="absolute inset-0 bg-black/20 pointer-events-none group-hover:bg-transparent transition-all" /> */}
      </div>

      {/* Transcript / Interaction Area */}
      <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="flex items-center justify-between px-4 py-3 border-b border-slate-100 bg-slate-50">
            <div className="flex items-center gap-2">
                <FileText className="w-4 h-4 text-slate-500" />
                <h3 className="font-semibold text-slate-700 text-sm uppercase tracking-wide">Smart Transcript</h3>
            </div>
            <button 
                onClick={() => setShowTranscript(!showTranscript)}
                className="text-xs font-medium text-blue-600 hover:text-blue-700"
            >
                {showTranscript ? 'Hide' : 'Show'}
            </button>
        </div>
        
        {showTranscript && (
            <div className="max-h-[300px] overflow-y-auto p-4 space-y-2 bg-white custom-scrollbar">
                {video.transcript.map((line) => (
                    <div key={line.id} className="flex gap-4 p-2 hover:bg-blue-50 rounded-lg transition-colors group cursor-pointer">
                        <span className="text-xs font-mono text-slate-400 mt-1 w-10 flex-shrink-0 group-hover:text-blue-500">
                            {line.time}
                        </span>
                        <p className="text-sm text-slate-700 leading-relaxed">
                            {line.text.split(' ').map((word, i) => {
                                // Basic check to see if word matches the highlighted term logic
                                // In a real app, this would be more robust text parsing
                                const isTerm = line.isKeyTerm && line.termDefinition && line.text.includes(word.replace(/[^a-zA-Z]/g, ""));
                                
                                if (isTerm) {
                                    return (
                                        <span 
                                            key={i} 
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                onTermClick(word, line.termDefinition || "");
                                            }}
                                            className="text-blue-700 bg-blue-100 px-1 rounded cursor-help font-medium border-b border-blue-300 hover:bg-blue-200 transition-colors"
                                        >
                                            {word}{' '}
                                        </span>
                                    );
                                }
                                return <span key={i}>{word} </span>;
                            })}
                        </p>
                    </div>
                ))}
            </div>
        )}
      </div>
    </div>
  );
};

export default VideoShowcase;
