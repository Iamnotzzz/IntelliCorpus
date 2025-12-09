export interface TranscriptLine {
  id: string;
  time: string; // Format "MM:SS"
  text: string;
  isKeyTerm?: boolean; // For highlighting
  termDefinition?: string; // For the popup
}

export interface Tag {
  label: string;
  category: 'acoustic' | 'content' | 'interaction';
}

export interface VideoItem {
  id: string;
  title: string;
  author: string;
  views: string;
  uploadDate: string;
  duration: string;
  description: string;
  src: string;
  thumbnail: string;
  tags: Tag[];
  transcript: TranscriptLine[];
}

export interface ChatMessage {
  id: number;
  role: 'user' | 'ai';
  content: string;
  type: 'text' | 'audio_result' | 'term_card';
  audioUrl?: string;
  score?: number;
  timestamp?: string;
}

export interface UserProfile {
  name: string;
  studentId: string;
  classId: string;
  major: string;
  school: string;
  avatar: string;
}
// iamnotzzz/intellicorpus/IntelliCorpus-946208041ab553e7ae2862c5f254a8ad46183b66/src/types.ts



// 新增 MindMapNode 接口
export interface MindMapNode {
  label: string;
  children?: MindMapNode[];
}

export interface VideoItem {
  id: string;
// ... (其他字段不变)
  tags: Tag[];
  transcript: TranscriptLine[];
  mindMap?: MindMapNode; // 新增：思维导图数据
}
