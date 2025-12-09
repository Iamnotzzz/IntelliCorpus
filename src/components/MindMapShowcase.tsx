import React from 'react';
import type { MindMapNode } from '../types';
import { Network, CircleDot, ChevronRight } from 'lucide-react';

interface MindMapShowcaseProps {
  mindMapData?: MindMapNode;
}

// 辅助组件：递归渲染思维导图节点
const MindMapNodeComponent: React.FC<{ node: MindMapNode; depth: number }> = ({ node, depth }) => {
  const isRoot = depth === 0;
  const hasChildren = node.children && node.children.length > 0;
  
  const baseClasses = "rounded-lg p-3 flex items-center gap-2 transition-all cursor-pointer";

  const getClasses = () => {
    if (isRoot) {
        return "bg-blue-600 text-white font-bold text-lg shadow-lg border border-blue-700";
    }
    // 嵌套节点的颜色变化
    const colors = ['bg-indigo-50 border-indigo-200 text-indigo-700 hover:bg-indigo-100', 'bg-purple-50 border-purple-200 text-purple-700 hover:bg-purple-100'];
    return `${colors[(depth - 1) % colors.length]} text-sm border font-medium`;
  };

  return (
    <div className={`flex flex-col ${isRoot ? 'items-start' : 'items-start'}`}>
      <div className={getClasses()}>
        {isRoot ? <Network className="w-5 h-5" /> : <CircleDot className="w-4 h-4" />}
        <span>{node.label}</span>
      </div>
      
      {hasChildren && (
        <div className={`mt-3 ${isRoot ? 'pl-8' : 'pl-4'} space-y-2 border-l border-slate-200`}>
          {node.children!.map((child, index) => (
            <MindMapNodeComponent key={index} node={child} depth={depth + 1} />
          ))}
        </div>
      )}
    </div>
  );
};


const MindMapShowcase: React.FC<MindMapShowcaseProps> = ({ mindMapData }) => {
  return (
    <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
      <div className="flex items-center justify-between px-4 py-3 border-b border-slate-100 bg-slate-50">
          <div className="flex items-center gap-2">
              <Network className="w-4 h-4 text-slate-500" />
              <h3 className="font-semibold text-slate-700 text-sm uppercase tracking-wide">Video Mind Map</h3>
          </div>
          <button 
              className="text-xs font-medium text-slate-600 hover:text-slate-800 flex items-center gap-1"
          >
              Expand View <ChevronRight className="w-3 h-3" />
          </button>
      </div>

      <div className="p-6">
        {mindMapData ? (
          <MindMapNodeComponent node={mindMapData} depth={0} />
        ) : (
            <p className="text-sm text-slate-500 text-center py-4">
                No generated mind map available for this video.
            </p>
        )}
      </div>
    </div>
  );
};

export default MindMapShowcase;