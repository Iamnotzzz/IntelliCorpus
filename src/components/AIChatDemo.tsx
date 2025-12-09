import React, { useState, useEffect, useRef } from 'react';
// 修改这一行
import type { ChatMessage } from '../types';
import { INITIAL_CHAT_MESSAGES } from '../constants';
import { Bot, Send, Mic, Sparkles, Volume2 } from 'lucide-react';

// ... 后面的代码保持不变

interface AIChatDemoProps {
  contextTerm?: { word: string; def: string } | null;
}

const AIChatDemo: React.FC<AIChatDemoProps> = ({ contextTerm }) => {
  const [messages, setMessages] = useState<ChatMessage[]>(INITIAL_CHAT_MESSAGES);
  const [inputValue, setInputValue] = useState('');
  const [isRecording, setIsRecording] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  useEffect(scrollToBottom, [messages]);

  // Handle incoming terms from video clicks
  useEffect(() => {
    if (contextTerm) {
        const newMessage: ChatMessage = {
            id: Date.now(),
            role: 'ai',
            type: 'term_card',
            content: contextTerm.def,
            timestamp: 'Just now'
        };
        setMessages(prev => [...prev, newMessage]);
    }
  }, [contextTerm]);

  const handleSend = () => {
    if (!inputValue.trim()) return;
    
    // Add User Message
    const userMsg: ChatMessage = {
        id: Date.now(),
        role: 'user',
        type: 'text',
        content: inputValue,
        timestamp: 'Just now'
    };
    
    setMessages(prev => [...prev, userMsg]);
    setInputValue('');

    // Simulate AI Response
    setTimeout(() => {
        const aiMsg: ChatMessage = {
            id: Date.now() + 1,
            role: 'ai',
            type: 'text',
            content: "That's a great question about the lecture content. Based on the transcript, the professor implies that...",
            timestamp: 'Just now'
        };
        setMessages(prev => [...prev, aiMsg]);
    }, 1000);
  };

  const toggleRecording = () => {
      if (!isRecording) {
          setIsRecording(true);
      } else {
          setIsRecording(false);
          // Simulate audio result
           const audioMsg: ChatMessage = {
            id: Date.now(),
            role: 'user',
            type: 'audio_result',
            content: 'Audio Input',
            score: 88,
            timestamp: 'Just now'
        };
        setMessages(prev => [...prev, audioMsg]);
        setTimeout(() => {
             const aiMsg: ChatMessage = {
                id: Date.now() + 1,
                role: 'ai',
                type: 'text',
                content: "Your pronunciation was clear! Note the stress on the second syllable.",
                timestamp: 'Just now'
            };
            setMessages(prev => [...prev, aiMsg]);
        }, 800);
      }
  }

  return (
    <div className="flex flex-col h-full bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm">
      
      {/* Header */}
      <div className="p-4 border-b border-slate-100 bg-slate-50 flex items-center justify-between">
        <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center text-white shadow-indigo-200 shadow-md">
                <Bot className="w-5 h-5" />
            </div>
            <div>
                <h3 className="font-bold text-slate-800 text-sm">AI Tutor</h3>
                <p className="text-[10px] text-green-600 font-medium flex items-center gap-1">
                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
                    Online
                </p>
            </div>
        </div>
        <button className="text-slate-400 hover:text-slate-600" title="More options">
            <MoreHorizontalIcon />
        </button>
      </div>

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50/30">
        {messages.map((msg) => (
            <div key={msg.id} className={`flex flex-col ${msg.role === 'user' ? 'items-end' : 'items-start'}`}>
                
                {/* Message Bubble */}
                <div className={`max-w-[85%] rounded-2xl p-3 shadow-sm text-sm ${
                    msg.role === 'user' 
                    ? 'bg-blue-600 text-white rounded-br-none' 
                    : 'bg-white border border-slate-100 text-slate-700 rounded-bl-none'
                }`}>
                    
                    {msg.type === 'term_card' && (
                        <div className="mb-2 pb-2 border-b border-slate-100">
                             <div className="flex items-center gap-1 text-indigo-600 font-bold mb-1">
                                <Sparkles className="w-3 h-3" /> Term Insight
                             </div>
                        </div>
                    )}

                    {msg.type === 'audio_result' ? (
                         <div className="flex items-center gap-3 min-w-[160px]">
                            <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                                <Volume2 className="w-4 h-4" />
                            </div>
                            <div className="flex-1">
                                <div className="text-xs opacity-80 mb-1">Pronunciation</div>
                                <div className="font-bold text-green-300">{msg.score}% Match</div>
                            </div>
                        </div>
                    ) : (
                        <p>{msg.content}</p>
                    )}
                </div>
                
                {/* Timestamp */}
                <span className="text-[10px] text-slate-400 mt-1 px-1">
                    {msg.timestamp}
                </span>
            </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <div className="p-3 bg-white border-t border-slate-100">
        <div className="flex items-center gap-2 bg-slate-100 p-1.5 rounded-full border border-slate-200 focus-within:ring-2 focus-within:ring-blue-100 transition-all">
            <button 
                onClick={toggleRecording}
                className={`w-9 h-9 rounded-full flex items-center justify-center transition-all ${isRecording ? 'bg-red-500 text-white animate-pulse' : 'text-slate-500 hover:bg-white'}`}
            >
                <Mic className="w-4 h-4" />
            </button>
            <input 
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask anything..."
                className="flex-1 bg-transparent border-none outline-none text-sm px-2 text-slate-700 placeholder:text-slate-400"
            />
            <button 
                onClick={handleSend}
                className="w-9 h-9 bg-blue-600 hover:bg-blue-700 text-white rounded-full flex items-center justify-center shadow-sm transition-colors"
            >
                <Send className="w-4 h-4" />
            </button>
        </div>
      </div>

    </div>
  );
};

const MoreHorizontalIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/><circle cx="5" cy="12" r="1"/></svg>
)

export default AIChatDemo;
