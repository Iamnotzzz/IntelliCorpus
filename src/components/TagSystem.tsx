import React from 'react';
// 修改这一行
import type { Tag } from '../types';
import { Mic2, BookOpen, MessageCircle, Share2, ThumbsUp, MoreHorizontal } from 'lucide-react';

// ... 后面的代码保持不变

// ... 后面的代码保持不变
interface TagSystemProps {
  tags: Tag[];
  title: string;
  views: string;
  date: string;
  description: string;
}

const TagSystem: React.FC<TagSystemProps> = ({ tags, title, views, date, description }) => {
  
  const getCategoryColor = (cat: string) => {
    switch(cat) {
        case 'acoustic': return 'bg-rose-50 text-rose-700 border-rose-200';
        case 'content': return 'bg-sky-50 text-sky-700 border-sky-200';
        case 'interaction': return 'bg-emerald-50 text-emerald-700 border-emerald-200';
        default: return 'bg-slate-100 text-slate-600 border-slate-200';
    }
  };

  const getIcon = (cat: string) => {
    switch(cat) {
        case 'acoustic': return <Mic2 className="w-3 h-3" />;
        case 'content': return <BookOpen className="w-3 h-3" />;
        case 'interaction': return <MessageCircle className="w-3 h-3" />;
        default: return null;
    }
  };

  return (
    <div className="bg-white rounded-xl p-0 mt-4">
      <h1 className="text-2xl font-bold text-slate-900 mb-2">{title}</h1>
      
      <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-slate-100">
        <div className="flex items-center gap-2 text-sm text-slate-500">
            <span>{views} views</span>
            <span>•</span>
            <span>{date}</span>
        </div>
        
        <div className="flex items-center gap-2">
            <button className="flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium text-sm transition-colors">
                <ThumbsUp className="w-4 h-4" /> Like
            </button>
            <button className="flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium text-sm transition-colors">
                <Share2 className="w-4 h-4" /> Share
            </button>
            <button className="p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors">
                <MoreHorizontal className="w-4 h-4" />
            </button>
        </div>
      </div>

      <div className="py-4">
        {/* Description */}
        <p className="text-slate-700 mb-6 leading-relaxed bg-slate-50 p-4 rounded-lg text-sm">
            {description}
        </p>

        {/* Tags Display */}
        <div className="space-y-3">
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Analysis Tags</h3>
            <div className="flex flex-wrap gap-2">
                {tags.map((tag, idx) => (
                    <span 
                        key={idx} 
                        className={`px-3 py-1.5 rounded-full text-xs font-semibold border flex items-center gap-1.5 ${getCategoryColor(tag.category)}`}
                    >
                        {getIcon(tag.category)}
                        {tag.label}
                    </span>
                ))}
            </div>
        </div>
      </div>
    </div>
  );
};

export default TagSystem;
