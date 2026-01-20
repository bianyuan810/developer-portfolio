# 技术设计文档 (Technical Design Document)

## 1. 文档概述
**版本号**: v0.1 (草稿)
**日期**: 2026-01-20
**状态**: 讨论中
**关联文档**: [PRD.md](./PRD.md)

## 2. 架构概览 (Architecture Overview)
本项目将采用 **单页应用 (SPA)** 架构，配合 Vite 的快速构建和热更新，提供流畅的开发体验。
- **前端**: React + TypeScript + Vite
- **样式**: Tailwind CSS
- **部署**: Vercel

## 3. 技术栈选型 (Tech Stack)
*待确认，建议如下：*
- **构建工具**: Vite 5+
- **核心框架**: React 18+
- **开发语言**: TypeScript
- **样式库**: Tailwind CSS
- **路由**: React Router v6
- **动画库**: Framer Motion (实现流畅滚动和交互动画)
- **图标库**: Lucide React / React Icons
- **包管理器**: pnpm / npm

## 4. 目录结构设计 (Project Structure)
建议采用标准的 Vite + React 目录结构：
```
/
├── public/              # 静态资源 (图片, favicon)
├── src/
│   ├── assets/          # 资源文件 (图片, 字体, 样式)
│   ├── components/      # 组件
│   │   ├── ui/          # 通用 UI 组件 (Button, Card)
│   │   ├── sections/    # 页面板块 (Hero, Skills, Projects)
│   │   ├── layout/      # 布局组件 (Header, Footer)
│   │   └── hooks/       # 自定义 Hooks
│   ├── pages/           # 页面组件
│   │   ├── Home.tsx
│   │   ├── Projects.tsx
│   │   └── About.tsx
│   ├── data/            # 静态数据文件
│   │   └── portfolio.ts # 个人信息、项目数据
│   ├── router/          # 路由配置
│   │   └── index.tsx
│   ├── lib/             # 工具函数
│   ├── types/           # TypeScript 类型定义
│   ├── App.tsx          # 应用入口组件
│   ├── main.tsx         # 应用入口文件
│   └── index.css        # 全局样式
├── index.html
├── vite.config.ts
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

## 5. 数据模型设计 (Data Schema)
数据将通过 TypeScript 文件 (`src/data/portfolio.ts`) 进行管理，实现内容与 UI 分离。

### 5.1 核心数据结构 (完整版)

#### 5.1.1 个人信息 (PersonalInfo)
```typescript
interface PersonalInfo {
  name: string;                    // 姓名
  title: string;                   // 职位/头衔
  bio: string;                     // 个人简介
  avatar?: string;                 // 头像图片路径 (相对于 public/ 目录)
  location?: string;               // 所在地区
  email?: string;                  // 邮箱地址
  phone?: string;                  // 联系电话
  socialLinks: SocialLink[];       // 社交媒体链接

}

interface SocialLink {
  platform: string;                // 平台名称 (e.g., "GitHub", "LinkedIn", "Twitter")
  url: string;                     // 链接地址
  icon: string;                    // Lucide 图标名称 (e.g., "github", "linkedin", "twitter")
  display?: boolean;              // 是否在页面显示 (默认 true)
}
```

#### 5.1.2 技能 (Skills)
```typescript
interface SkillCategory {
  category: string;                // 技能分类 (e.g., "Frontend", "Backend", "DevOps")
  icon?: string;                  // 分类图标 (Lucide 图标名称)
  items: SkillItem[];              // 技能列表
}

interface SkillItem {
  name: string;                    // 技能名称
  highlighted?: boolean;           // 是否高亮显示 (默认 false)
}
```

#### 5.1.3 项目 (Projects)
```typescript
interface Project {
  id: string;                      // 项目唯一标识符
  title: string;                   // 项目标题
  description: string;             // 项目描述
  longDescription?: string;        // 详细描述 (可选)
  techStack: string[];             // 技术栈列表
  image?: string;                  // 项目封面图路径
  images?: string[];               // 项目截图列表 (可选)
  demoUrl?: string;                // 在线演示链接
  repoUrl?: string;                // 代码仓库链接
}
```

#### 5.1.4 主数据结构
```typescript
interface PortfolioData {
  personalInfo: PersonalInfo;      // 个人信息
  skills: SkillCategory[];         // 技能分类
  projects: Project[];             // 项目列表
  theme?: ThemeConfig;             // 主题配置 (可选)
}

interface ThemeConfig {
  primaryColor?: string;           // 主色调 (Tailwind 颜色类)
  accentColor?: string;            // 强调色 (Tailwind 颜色类)
  darkMode?: boolean;              // 是否启用深色模式
  font?: string;                   // 字体选择
}
```

### 5.2 数据文件结构

#### 5.2.1 主数据文件 (`src/data/portfolio.ts`)
```typescript
import { PortfolioData } from '@/types/portfolio';

export const portfolioData: PortfolioData = {
  personalInfo: {
    name: "张三",
    title: "全栈开发工程师",
    bio: "热爱技术，专注于构建高性能 Web 应用",
    avatar: "/images/avatar.jpg",
    location: "北京",
    email: "example@email.com",
    socialLinks: [
      {
        platform: "GitHub",
        url: "https://github.com/username",
        icon: "github"
      },
      {
        platform: "LinkedIn",
        url: "https://linkedin.com/in/username",
        icon: "linkedin"
      }
    ]
  },
  skills: [
    {
      category: "Frontend",
      icon: "layout",
      items: [
        { name: "React", highlighted: true },
        { name: "TypeScript" },
        { name: "Tailwind CSS" }
      ]
    }
  ],
  projects: [
    {
      id: "project-1",
      title: "示例项目",
      description: "项目简短描述",
      longDescription: "项目详细描述...",
      techStack: ["React", "TypeScript", "Node.js"],
      image: "/images/project-1.jpg",
      demoUrl: "https://demo.example.com",
      repoUrl: "https://github.com/username/repo"
    }
  ]
};
```

#### 5.2.2 类型定义文件 (`src/types/portfolio.ts`)
```typescript
// 所有接口定义放在此处
export interface PersonalInfo { /* ... */ }
export interface SocialLink { /* ... */ }
export interface SkillCategory { /* ... */ }
export interface SkillItem { /* ... */ }
export interface Project { /* ... */ }
export interface PortfolioData { /* ... */ }
export interface ThemeConfig { /* ... */ }
```

### 5.3 数据使用规范

#### 5.3.1 数据访问模式
```typescript
// 在组件中使用数据
import { portfolioData } from '@/data/portfolio';

export default function HeroSection() {
  const { personalInfo } = portfolioData;
  return (
    <div>
      <h1>{personalInfo.name}</h1>
      <p>{personalInfo.title}</p>
    </div>
  );
}
```

#### 5.3.2 数据验证规则
- **必填字段**: name, title, bio, socialLinks, skills, projects
- **URL 验证**: 所有 URL 字段必须是有效的 HTTP/HTTPS 地址
- **日期格式**: 使用 ISO 8601 格式 (YYYY-MM-DD)
- **图片路径**: 相对于 public/ 目录的相对路径
- **图标名称**: 必须是 Lucide React 支持的图标名称

#### 5.3.3 数据更新流程
1. 直接编辑 `src/data/portfolio.ts` 文件
2. 确保类型符合 TypeScript 接口定义
3. 图片资源放置在 `public/images/` 目录
4. 重新构建项目以应用更改

### 5.4 数据扩展性考虑

#### 5.4.1 未来可能的扩展
- **多语言支持**: 添加 `locale` 字段，支持 i18n
- **博客文章**: 添加 `blogPosts` 数组，集成 Markdown 文件
- **证书认证**: 添加 `certifications` 数组
- **推荐信**: 添加 `testimonials` 数组

#### 5.4.2 数据迁移策略
- 如果需要从静态数据迁移到 CMS，接口设计保持兼容
- 使用 TypeScript 接口作为数据契约，确保类型安全
- 考虑添加数据版本号，便于后续迁移

## 6. 技术细节决策 (已确认)
- **构建工具**: **Vite 5+** - 基于 ESBuild 的快速构建工具，提供极速的开发体验和优化的生产构建。
- **路由模式**: **React Router v6** - 声明式路由，支持动态路由、嵌套路由和代码分割。
- **样式方案**: **Tailwind CSS** - 快速构建响应式现代 UI，使用 PostCSS 进行样式处理。
- **图标方案**: **Lucide React** - 简洁统一的图标库，轻量且易于定制。
- **字体**: **Inter / Geist** - 最佳阅读体验的现代无衬线字体。
- **数据存储**: **TypeScript 数组** (`src/data/`) - 结构化存储个人信息、技能和项目数据，方便后续直接编辑代码进行增删改查。
- **状态管理**: **React Context + Hooks** - 轻量级状态管理，适合中小型应用。
- **代码分割**: **React.lazy + Suspense** - 按需加载组件，优化首屏加载性能。
