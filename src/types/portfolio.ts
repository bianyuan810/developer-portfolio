// 个人信息接口
export interface PersonalInfo {
  name: string;                    // 姓名
  title: string;                   // 职位/头衔
  bio: string;                     // 个人简介
  avatar?: string;                 // 头像图片路径 (相对于 public/ 目录)
  location?: string;               // 所在地区
  email?: string;                  // 邮箱地址
  phone?: string;                  // 联系电话
  socialLinks: SocialLink[];       // 社交媒体链接
  resumeUrl?: string;              // 简历下载链接
}

// 社交媒体链接接口
export interface SocialLink {
  platform: string;                // 平台名称 (e.g., "GitHub", "LinkedIn", "Twitter")
  url: string;                     // 链接地址
  icon: string;                    // Lucide 图标名称 (e.g., "github", "linkedin", "twitter")
  display?: boolean;              // 是否在页面显示 (默认 true)
}

// 技能分类接口
export interface SkillCategory {
  category: string;                // 技能分类 (e.g., "Frontend", "Backend", "DevOps")
  icon?: string;                  // 分类图标 (Lucide 图标名称)
  items: SkillItem[];              // 技能列表
}

// 技能项接口
export interface SkillItem {
  name: string;                    // 技能名称
  level?: number;                  // 熟练度 (1-5, 可选)
  years?: number;                  // 使用年限 (可选)
  highlighted?: boolean;           // 是否高亮显示 (默认 false)
}

// 项目接口
export interface Project {
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

// 主题配置接口
export interface ThemeConfig {
  primaryColor?: string;           // 主色调 (Tailwind 颜色类)
  accentColor?: string;            // 强调色 (Tailwind 颜色类)
  darkMode?: boolean;              // 是否启用深色模式
  font?: string;                   // 字体选择
}

// 主数据结构接口
export interface PortfolioData {
  personalInfo: PersonalInfo;      // 个人信息
  skills: SkillCategory[];         // 技能分类
  projects: Project[];             // 项目列表
  theme?: ThemeConfig;             // 主题配置 (可选)
}