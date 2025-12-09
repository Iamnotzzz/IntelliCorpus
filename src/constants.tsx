
import type { VideoItem, ChatMessage, UserProfile, MindMapNode } from './types'; // 导入 MindMapNode 类型



export const CURRENT_USER: UserProfile = {
  name: "Zhao Zhenzhan",
  studentId: "2023213699",
  classId: "2023215124",
  major: "Intelligent Science and Technology",
  school: "International School",
  avatar: "https://ui-avatars.com/api/?name=Zhao+Zhenzhan&background=0D8ABC&color=fff"
};

export const VIDEO_LIST: VideoItem[] = [
  {
    id: 'v1',
    title: 'CS101: Introduction to Data Structures & Algorithms',
    author: 'Prof. Alan Smithee (London)',
    views: '12.5k',
    uploadDate: '2 days ago',
    duration: '12:45',
    description: 'An in-depth look at linear data structures, specifically focusing on Polymorphism in Java and its memory implications.',
    // 更改 src 字段以指向新的 video/IMG_0763.mov
    src: '/video/IMG_0763.mov',
    // 更改 thumbnail 字段，使用一个通用的占位符，以反映视频内容可能已更改
    thumbnail: 'https://placehold.co/600x400/1e293b/ffffff?text=New+Video',
    tags: [
      { label: 'London Accent', category: 'acoustic' },
    ],
    // 新增 mindMap 数据
    mindMap: {
      label: 'Linear Data Structures',
      children: [
        { label: 'Overview (0:05)' },
        {
          label: 'Polymorphism in Java',
          children: [
            { label: 'Definition (0:12)' },
            { label: 'Subclass Overrides Method (0:20)' },
            { label: 'Dynamic Binding (0:28)' }
          ]
        },
        { label: 'Code Example (0:35)' }
      ]
    },
    // Add transcript property to satisfy VideoItem interface
    transcript: []
  },
  {
    id: 'v2',
    title: 'EE204: Advanced Circuit Analysis Techniques',
    author: 'Dr. Sarah Jones (Edinburgh)',
    views: '8.2k',
    uploadDate: '5 days ago',
    duration: '15:20',
    description: 'Understanding Kirchhoff\'s Voltage Law in complex AC circuits with a focus on impedance matching.',
    src: '/resource/ee_circuit.mp4',
    thumbnail: 'https://placehold.co/600x400/3b82f6/ffffff?text=EE204',
    tags: [
      { label: 'Scottish Accent', category: 'acoustic' },
      { label: 'Math Heavy', category: 'content' },
      { label: 'Slide Reference', category: 'interaction' }
    ],
    transcript: [
      { id: 't1', time: "00:00", text: "Let's analyze this Kirchhoff's Voltage Law problem." },
      { id: 't2', time: "00:15", text: "The Impedance here is purely resistive.", isKeyTerm: true, termDefinition: "Impedance: The effective resistance of an electric circuit or component to alternating current." },
      { id: 't3', time: "00:30", text: "Watch out for the phase shift in the capacitor." },
    ]
  },
  {
    id: 'v3',
    title: 'Academic Interview: Handling Lecture Speed',
    author: 'IntelliCorpus Team',
    views: '25k',
    uploadDate: '1 week ago',
    duration: '05:30',
    description: 'Faculty members discuss strategies for international students to cope with fast-paced English lectures.',
    src: '/resource/interview_01.mp4',
    thumbnail: 'https://placehold.co/600x400/059669/ffffff?text=Interview',
    tags: [
      { label: 'Fast Paced', category: 'acoustic' },
      { label: 'Study Skills', category: 'content' },
      { label: 'Interview', category: 'interaction' }
    ],
    transcript: [
      { id: 't1', time: "00:10", text: "Students often struggle with the pace of lectures." },
      { id: 't2', time: "00:25", text: "We expect critical thinking, not just rote memorization." },
      { id: 't3', time: "00:40", text: "If you don't understand a Term, ask immediately.", isKeyTerm: true, termDefinition: "Term: A word or phrase used to describe a thing or to express a concept." },
    ]
  },
  {
    id: 'v4',
    title: 'PHY101: Quantum Mechanics Basics',
    author: 'Prof. Richard Feynman (Archive)',
    views: '1.2M',
    uploadDate: '3 years ago',
    duration: '45:00',
    description: 'The double slit experiment explained simply.',
    src: '/resource/phy_quantum.mp4',
    thumbnail: 'https://placehold.co/600x400/7c3aed/ffffff?text=PHY101',
    tags: [
      { label: 'American Accent', category: 'acoustic' },
      { label: 'Physics', category: 'content' },
      { label: 'Lecture', category: 'interaction' }
    ],
    transcript: []
  },
  {
    id: 'v5',
    title: 'MATH300: Linear Algebra Review',
    author: 'Dr. Gilbert Strang',
    views: '500k',
    uploadDate: '2 years ago',
    duration: '30:15',
    description: 'Review of matrix multiplication and eigenvalues.',
    src: '/resource/math_linear.mp4',
    thumbnail: 'https://placehold.co/600x400/db2777/ffffff?text=MATH300',
    tags: [
      { label: 'Slow Pace', category: 'acoustic' },
      { label: 'Math', category: 'content' },
      { label: 'Board Writing', category: 'interaction' }
    ],
    transcript: []
  },
  {
    id: 'v6',
    title: 'ENG202: Shakespearean Sonnets',
    author: 'Dr. Emily Blunt',
    views: '12k',
    uploadDate: '1 month ago',
    duration: '18:45',
    description: 'Analyzing the rhythm and meter of Sonnet 18.',
    src: '/resource/eng_lit.mp4',
    thumbnail: 'https://placehold.co/600x400/9333ea/ffffff?text=ENG202',
    tags: [
      { label: 'RP Accent', category: 'acoustic' },
      { label: 'Literature', category: 'content' },
      { label: 'Reading', category: 'interaction' }
    ],
    transcript: []
  }
];

export const INITIAL_CHAT_MESSAGES: ChatMessage[] = [
  { id: 1, role: 'ai', type: 'text', content: "Hello! I'm your AI Tutor. I'm listening along with you. Feel free to ask about any terms or pronunciation!", timestamp: 'Now' },
];