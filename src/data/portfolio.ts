import { PortfolioData } from '@/types/portfolio';

export const portfolioData: PortfolioData = {
  personalInfo: {
    name: "张三",
    title: "全栈开发工程师",
    bio: "热爱技术，专注于构建高性能 Web 应用，拥有丰富的前端和后端开发经验。",
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
      },
      {
        platform: "Twitter",
        url: "https://twitter.com/username",
        icon: "twitter"
      }
    ],
    resumeUrl: "/resume.pdf"
  },
  skills: [
    {
      category: "前端开发",
      icon: "layout",
      items: [
        { name: "React", level: 5, years: 3, highlighted: true },
        { name: "TypeScript", level: 4, years: 2, highlighted: true },
        { name: "Tailwind CSS", level: 4, years: 2 },
        { name: "HTML5", level: 5, years: 4 },
        { name: "CSS3", level: 5, years: 4 },
        { name: "JavaScript", level: 5, years: 4 },
        { name: "Next.js", level: 3, years: 1 }
      ]
    },
    {
      category: "后端开发",
      icon: "server",
      items: [
        { name: "Node.js", level: 4, years: 3 },
        { name: "Express", level: 4, years: 2 },
        { name: "Python", level: 3, years: 1 },
        { name: "PostgreSQL", level: 3, years: 1 },
        { name: "MongoDB", level: 3, years: 2 }
      ]
    },
    {
      category: "工具与其他",
      icon: "tool",
      items: [
        { name: "Git", level: 4, years: 3 },
        { name: "Docker", level: 3, years: 1 },
        { name: "AWS", level: 2, years: 1 },
        { name: "Vite", level: 4, years: 2 },
        { name: "Framer Motion", level: 3, years: 1 }
      ]
    }
  ],
  projects: [
    {
      id: "project-1",
      title: "电商平台前端重构",
      description: "使用 React + TypeScript + Tailwind CSS 重构电商平台前端，提升用户体验和性能。",
      longDescription: "负责电商平台的前端重构工作，使用现代技术栈替代传统的 jQuery 项目。重构后页面加载速度提升 60%，用户留存率增加 30%，移动端适配更加完善。",
      techStack: ["React", "TypeScript", "Tailwind CSS", "Redux", "REST API"],
      image: "/images/project-1.jpg",
      demoUrl: "https://demo.example.com",
      repoUrl: "https://github.com/username/ecommerce-platform"
    },
    {
      id: "project-2",
      title: "任务管理系统",
      description: "全栈开发的任务管理系统，支持团队协作和任务追踪。",
      longDescription: "使用 Node.js + Express + MongoDB 开发后端 API，React + TypeScript 开发前端界面。系统支持任务创建、分配、跟踪、评论等功能，具备完整的用户权限管理。",
      techStack: ["React", "TypeScript", "Node.js", "Express", "MongoDB", "JWT"],
      image: "/images/project-2.jpg",
      demoUrl: "https://task-manager.example.com",
      repoUrl: "https://github.com/username/task-manager"
    },
    {
      id: "project-3",
      title: "个人博客系统",
      description: "基于 Next.js 的静态生成博客系统，支持 Markdown 写作和 SEO 优化。",
      longDescription: "使用 Next.js 构建的静态生成博客系统，支持 Markdown 写作、自动生成文章摘要、代码高亮、SEO 优化等功能。博客使用 GitHub Actions 实现自动部署。",
      techStack: ["Next.js", "TypeScript", "Markdown", "Tailwind CSS", "Vercel"],
      image: "/images/project-3.jpg",
      demoUrl: "https://blog.example.com",
      repoUrl: "https://github.com/username/personal-blog"
    }
  ],
  theme: {
    primaryColor: "blue-500",
    accentColor: "purple-500",
    darkMode: false,
    font: "Inter"
  }
};