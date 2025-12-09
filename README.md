# IntelliCorpus

IntelliCorpus 是一个面向国际多模态英语听说语料库与智能训练平台项目的展示平台，基于 React + TypeScript + Vite 构建。

## 项目简介
IntelliCorpus 旨在为用户提供高质量的英语听说训练资源，结合多模态视频、智能标签系统、AI 聊天助手等功能，提升学习体验。

## 主要功能
- 视频展示与播放：支持多学科教学视频，含思维导图、标签系统、字幕。
- 用户侧边栏：展示用户信息与推荐内容。
- 智能标签系统：自动识别视频中的关键术语与内容标签。
- AI 聊天助手：支持与 AI 互动，答疑解惑。
- 思维导图展示：可视化课程知识结构。

## 技术栈
- React 19
- TypeScript 5
- Vite 7
- Lucide React 图标库
- Tailwind CSS（假定用于样式）

## 目录结构
```
IntelliCorpus/
├── public/                # 静态资源
├── src/                   # 源码目录
│   ├── assets/            # 图片、视频等资源
│   ├── components/        # 主要功能组件
│   ├── types/             # 类型定义
│   ├── constants.tsx      # 常量与模拟数据
│   ├── App.tsx            # 应用主入口
│   └── main.tsx           # React 挂载入口
├── video/                 # 视频文件
├── index.html             # 入口 HTML
├── package.json           # 项目依赖
├── vite.config.ts         # Vite 配置
├── tsconfig*.json         # TypeScript 配置
└── README.md              # 项目说明
```

## 快速开始
1. 安装依赖：
   ```bash
   npm install
   ```
2. 启动开发环境：
   ```bash
   npm run dev
   ```
3. 构建生产版本：
   ```bash
   npm run build
   ```

## 贡献指南
欢迎提交 Issue 或 Pull Request 改进本项目。

## License
本项目仅供学术展示与交流，版权归项目作者所有。
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
