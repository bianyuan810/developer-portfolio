import type { PortfolioData } from '@/types/portfolio';

export const portfolioData: PortfolioData = {
  personalInfo: {
    name: "张三",
    title: "前端开发者",
    bio: "专注于创建现代化、响应式的Web应用，热爱前端技术和用户体验设计。",
    avatar: "/images/avatar.jpg",
    location: "北京市朝阳区",
    email: "zhangsan@example.com",
    phone: "+86 123 4567 890",
    socialLinks: [
      {
        platform: "GitHub",
        url: "#",
        icon: "github"
      },
      {
        platform: "LinkedIn",
        url: "#",
        icon: "linkedin"
      },
      {
        platform: "Twitter",
        url: "#",
        icon: "twitter"
      },
      {
        platform: "CodePen",
        url: "#",
        icon: "codepen"
      }
    ]
  },
  skills: [
    {
      category: "技术技能",
      icon: "code",
      items: [
        { name: "HTML5" },
        { name: "CSS3" },
        { name: "JavaScript" },
        { name: "TypeScript" },
        { name: "React" },
        { name: "Vue.js" },
        { name: "Next.js" },
        { name: "Tailwind CSS" },
        { name: "Sass" },
        { name: "Git" },
        { name: "Webpack" },
        { name: "Vite" }
      ]
    },
    {
      category: "软技能",
      icon: "user",
      items: [
        { name: "用户体验设计" },
        { name: "响应式设计" },
        { name: "团队协作" },
        { name: "问题解决" },
        { name: "代码审查" },
        { name: "技术文档" },
        { name: "敏捷开发" },
        { name: "持续学习" }
      ]
    }
  ],
  projects: [
    {
      id: "project-1",
      title: "电商网站",
      description: "一个现代化的电商网站，包含商品展示、购物车、订单管理等功能。",
      longDescription: "一个现代化的电商网站，包含商品展示、购物车、订单管理等功能。使用React、Tailwind CSS和Node.js开发。",
      techStack: ["React", "Tailwind CSS", "Node.js"],
      image: "/images/project1.jpg",
      demoUrl: "#",
      repoUrl: "#"
    },
    {
      id: "project-2",
      title: "待办事项应用",
      description: "一个功能完整的待办事项应用，支持任务创建、编辑、删除和筛选。",
      longDescription: "一个功能完整的待办事项应用，支持任务创建、编辑、删除和筛选。使用Vue.js、TypeScript和Firebase开发。",
      techStack: ["Vue.js", "TypeScript", "Firebase"],
      image: "/images/project2.jpg",
      demoUrl: "#",
      repoUrl: "#"
    },
    {
      id: "project-3",
      title: "博客系统",
      description: "一个基于Next.js的博客系统，支持Markdown写作、评论和分类管理。",
      longDescription: "一个基于Next.js的博客系统，支持Markdown写作、评论和分类管理。使用Next.js、Markdown和MongoDB开发。",
      techStack: ["Next.js", "Markdown", "MongoDB"],
      image: "/images/project3.jpg",
      demoUrl: "#",
      repoUrl: "#"
    },
    {
      id: "project-4",
      title: "聊天应用",
      description: "一个实时聊天应用，支持私聊和群聊，包含消息推送和文件上传功能。",
      longDescription: "一个实时聊天应用，支持私聊和群聊，包含消息推送和文件上传功能。使用React、Socket.io和Express开发。",
      techStack: ["React", "Socket.io", "Express"],
      image: "/images/project4.jpg",
      demoUrl: "#",
      repoUrl: "#"
    },
    {
      id: "project-5",
      title: "数据分析仪表板",
      description: "一个数据可视化仪表板，展示关键业务指标和趋势分析。",
      longDescription: "一个数据可视化仪表板，展示关键业务指标和趋势分析。使用React、D3.js和Redux开发。",
      techStack: ["React", "D3.js", "Redux"],
      image: "/images/project5.jpg",
      demoUrl: "#",
      repoUrl: "#"
    },
    {
      id: "project-6",
      title: "个人博客",
      description: "我的个人技术博客，分享前端开发经验和学习笔记。",
      longDescription: "我的个人技术博客，分享前端开发经验和学习笔记。使用Gatsby、GraphQL和Netlify开发。",
      techStack: ["Gatsby", "GraphQL", "Netlify"],
      image: "/images/project6.jpg",
      demoUrl: "#",
      repoUrl: "#"
    }
  ],
  theme: {
    primaryColor: "blue-500",
    accentColor: "purple-500",
    darkMode: false,
    font: "Archivo",
    websiteTitle: "张三的作品集"
  }
};