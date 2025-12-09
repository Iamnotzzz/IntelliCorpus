import React from 'react';
// 修改这一行
import type { UserProfile, VideoItem } from '../types';
import { GraduationCap, School, BookOpen, History, Heart, ChevronRight, PlayCircle } from 'lucide-react';

// ... 后面的代码保持不变

interface UserSidebarProps {
  user: UserProfile;
  historyVideos: VideoItem[];
}

const UserSidebar: React.FC<UserSidebarProps> = ({ user, historyVideos }) => {
  return (
    <div className="space-y-6">
      
      {/* User Info Card */}
      <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6">
        <div className="flex flex-col items-center text-center mb-6">
            <div className="w-20 h-20 rounded-full bg-blue-100 p-1 mb-3">
                <img src={user.avatar} alt={user.name} className="w-full h-full rounded-full" />
            </div>
            <h2 className="text-xl font-bold text-slate-900">{user.name}</h2>
            <p className="text-sm text-slate-500">{user.school}</p>
        </div>

        <div className="space-y-4">
            <div className="flex items-center gap-3 text-sm text-slate-700 p-2 bg-slate-50 rounded-lg">
                <div className="p-1.5 bg-blue-100 text-blue-600 rounded">
                    <BookOpen className="w-4 h-4" />
                </div>
                <div className="flex flex-col">
                    <span className="text-xs text-slate-400 font-medium uppercase">Student ID</span>
                    <span className="font-semibold">{user.studentId}</span>
                </div>
            </div>

            <div className="flex items-center gap-3 text-sm text-slate-700 p-2 bg-slate-50 rounded-lg">
                <div className="p-1.5 bg-purple-100 text-purple-600 rounded">
                     <GraduationCap className="w-4 h-4" />
                </div>
                 <div className="flex flex-col">
                    <span className="text-xs text-slate-400 font-medium uppercase">Class</span>
                    <span className="font-semibold">{user.classId}</span>
                </div>
            </div>

            <div className="flex items-center gap-3 text-sm text-slate-700 p-2 bg-slate-50 rounded-lg">
                <div className="p-1.5 bg-emerald-100 text-emerald-600 rounded">
                     <School className="w-4 h-4" />
                </div>
                 <div className="flex flex-col">
                    <span className="text-xs text-slate-400 font-medium uppercase">Major</span>
                    <span className="font-semibold leading-tight">{user.major}</span>
                </div>
            </div>
        </div>
      </div>

      {/* History Section */}
      <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="p-4 border-b border-slate-100 flex items-center justify-between">
            <h3 className="font-bold text-slate-800 flex items-center gap-2">
                <History className="w-4 h-4 text-slate-500" /> History
            </h3>
            <button className="text-xs text-blue-600 hover:text-blue-700 font-medium">View All</button>
        </div>
        <div className="divide-y divide-slate-100">
            {historyVideos.slice(0, 3).map(video => (
                <div key={video.id} className="p-3 flex gap-3 hover:bg-slate-50 cursor-pointer group transition-colors">
                    <div className="relative w-20 aspect-video bg-slate-100 rounded overflow-hidden flex-shrink-0">
                         <img src={video.thumbnail} alt="" className="w-full h-full object-cover" />
                         <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                            <PlayCircle className="w-4 h-4 text-white" />
                         </div>
                    </div>
                    <div className="flex-1 min-w-0">
                        <h4 className="text-xs font-semibold text-slate-800 truncate mb-1">{video.title}</h4>
                        <div className="w-full bg-slate-200 h-1 rounded-full overflow-hidden">
                            <div className="bg-red-500 h-full w-[70%]"></div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
      </div>

      {/* Favorites / Collections */}
       <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="p-4 border-b border-slate-100 flex items-center justify-between">
            <h3 className="font-bold text-slate-800 flex items-center gap-2">
                <Heart className="w-4 h-4 text-slate-500" /> Collections
            </h3>
        </div>
        <div className="p-2 space-y-1">
            {['London Accent Study', 'Computer Science Terms', 'Interview Prep'].map((item, idx) => (
                <div key={idx} className="flex items-center justify-between p-2 hover:bg-slate-50 rounded-lg cursor-pointer text-sm text-slate-700">
                    <span>{item}</span>
                    <ChevronRight className="w-4 h-4 text-slate-400" />
                </div>
            ))}
        </div>
      </div>

    </div>
  );
};

export default UserSidebar;

