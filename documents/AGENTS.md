# AI 助手指南 (AGENTS.md)

## 1. 项目概述

### 1.1 项目目标
构建一个简洁现代的个人作品网站，用于：
- 展示开发者的个人形象和专业能力
- 集中展示过往项目和作品，作为在线简历或作品集
- 提供联系方式，促进职业机会或技术交流

### 1.2 技术栈
- **构建工具**: Vite 5+
- **核心框架**: React 18+
- **开发语言**: TypeScript
- **路由**: React Router v6
- **样式库**: Tailwind CSS
- **动画库**: Framer Motion
- **图标库**: Lucide React
- **包管理器**: pnpm / npm

### 1.3 核心功能
1. **个人信息概览** (Hero Section) - 姓名、头像、个人介绍
2. **技能展示** (Skills) - 编程语言、框架、工具等
3. **项目展示** (Projects) - 项目名称、截图、描述、链接
4. **联系方式** (Contact) - 邮箱、社交媒体链接

### 1.4 项目结构
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

### 1.5 数据管理
- **数据存储**: 使用 TypeScript 数组在 `src/data/portfolio.ts` 中管理
- **数据访问**: 通过 `import { portfolioData } from '@/data/portfolio'` 访问
- **数据更新**: 直接编辑 `src/data/portfolio.ts` 文件
- **图片路径**: 相对于 `public/` 目录的相对路径
- **图标名称**: 必须是 Lucide React 支持的图标名称

## 2. 开发规范

### 2.1 组件开发规范
- **组件类型**: 使用函数组件 + Hooks
- **Props 定义**: 使用 TypeScript 接口定义 Props
- **默认值**: 为可选 Props 提供合理的默认值
- **单一职责**: 保持组件单一职责，避免过度复杂
- **性能优化**: 使用 React.memo、useMemo、useCallback 优化性能
- **代码分割**: 使用 React.lazy + Suspense 按需加载组件

### 2.2 数据操作规范
- **数据访问**: 统一从 `src/data/portfolio.ts` 导入数据
- **数据修改**: 直接编辑 `src/data/portfolio.ts` 文件
- **类型安全**: 严格遵守 TypeScript 类型定义
- **数据验证**: 确保数据符合接口定义要求
- **必填字段**: name, title, bio, socialLinks, skills, projects
- **URL 验证**: 所有 URL 字段必须是有效的 HTTP/HTTPS 地址
- **图片路径**: 相对于 public/ 目录的相对路径
- **图标名称**: 必须是 Lucide React 支持的图标名称

### 2.3 路由开发规范
- **路由配置**: 在 `src/router/index.tsx` 中集中管理路由
- **路由命名**: 使用清晰的路由路径和组件名称
- **嵌套路由**: 合理使用嵌套路由结构
- **代码分割**: 使用 React.lazy 按需加载页面组件

### 2.4 样式开发规范
- **样式方案**: 统一使用 Tailwind CSS 工具类
- **设计风格**: 简洁现代 (Minimalist & Modern)
- **主题**: 浅色主题为主，支持深色模式切换
- **响应式**: 完美适配移动端、平板和桌面端
- **动画**: 使用 Framer Motion 实现流畅滚动和交互动画
- **字体**: 使用 Inter / Geist 字体
- **颜色**: 使用 Tailwind CSS 颜色类

### 2.5 文件组织规范
- **组件文件**: PascalCase (e.g., `HeroSection.tsx`)
- **工具函数**: camelCase (e.g., `formatDate.ts`)
- **类型定义**: camelCase (e.g., `portfolio.ts`)
- **常量文件**: UPPER_SNAKE_CASE (e.g., `API_CONSTANTS.ts`)
- **组件分类**: 根据功能分类到对应目录 (ui, sections, layout)

## 3. 测试要求

### 3.1 测试策略
- **单元测试**: 对关键工具函数和自定义 Hooks 进行单元测试
- **组件测试**: 对核心组件进行组件测试
- **集成测试**: 对关键用户流程进行集成测试
- **E2E 测试**: 对主要用户场景进行端到端测试（可选）

### 3.2 测试工具
- **测试框架**: Vitest (推荐) 或 Jest
- **组件测试**: React Testing Library
- **E2E 测试**: Playwright 或 Cypress（可选）
- **覆盖率工具**: Vitest Coverage 或 Istanbul

### 3.3 测试覆盖率要求
- **整体覆盖率**: 建议达到 80% 以上
- **核心功能**: 关键业务逻辑覆盖率应达到 90% 以上
- **工具函数**: 工具函数覆盖率应达到 100%

### 3.4 测试文件规范
- **测试文件命名**: 与源文件同名，添加 `.test.ts` 或 `.spec.ts` 后缀
- **测试文件位置**: 与源文件同级目录或 `__tests__` 目录
- **测试用例命名**: 使用 `should` 或 `it` 开头，清晰描述测试意图
- **测试分组**: 使用 `describe` 分组相关测试用例

### 3.5 测试命令
```bash
# 运行所有测试
pnpm test
# 或
npm run test

# 运行测试并生成覆盖率报告
pnpm test:coverage
# 或
npm run test:coverage

# 监听模式运行测试
pnpm test:watch
# 或
npm run test:watch
```

### 3.6 测试最佳实践
- **独立性**: 每个测试用例应该独立运行，不依赖其他测试
- **可读性**: 测试代码应该清晰易懂，描述测试意图
- **可维护性**: 测试代码应该易于维护和更新
- **真实性**: 测试应该模拟真实用户行为
- **避免测试实现细节**: 测试用户行为，而不是组件内部实现

## 4. 代码风格

### 4.1 命名规范
- **变量和函数**: 使用 camelCase (e.g., `userName`, `getUserData`)
- **类和组件**: 使用 PascalCase (e.g., `UserProfile`, `Button`)
- **常量**: 使用 UPPER_SNAKE_CASE (e.g., `MAX_RETRY_COUNT`)
- **私有属性**: 使用下划线前缀 (e.g., `_internalState`)
- **布尔值**: 使用 `is`, `has`, `should` 前缀 (e.g., `isLoading`, `hasPermission`)

### 4.2 代码格式化
- **缩进**: 使用 2 个空格缩进
- **分号**: 使用分号结束语句
- **引号**: 优先使用单引号，JSX 中使用双引号
- **尾随逗号**: 对象和数组中使用尾随逗号
- **行宽**: 建议每行不超过 100 字符
- **空行**: 在逻辑块之间添加空行，提高可读性

### 4.3 TypeScript 规范
- **类型定义**: 为所有变量、函数参数、返回值明确指定类型
- **接口定义**: 优先使用 interface 定义对象类型
- **类型别名**: 使用 type 定义联合类型、交叉类型等
- **避免 any**: 严禁使用 `any` 类型，使用 `unknown` 或具体类型替代
- **严格模式**: 启用 TypeScript 严格模式
- **类型导出**: 导出可复用的类型定义

### 4.4 React 规范
- **函数组件**: 优先使用函数组件
- **Hooks 规则**: 遵循 Hooks 规则，只在顶层调用 Hooks
- **Props 解构**: 在函数参数中解构 Props
- **条件渲染**: 使用 `&&` 或三元运算符进行条件渲染
- **列表渲染**: 使用 `map` 渲染列表，提供唯一的 key
- **事件处理**: 使用箭头函数或 `bind` 绑定事件处理函数

### 4.5 注释规范
- **函数注释**: 为复杂函数添加 JSDoc 注释
- **行内注释**: 为复杂逻辑添加中文行内注释
- **TODO 注释**: 使用 `// TODO:` 标记待办事项
- **FIXME 注释**: 使用 `// FIXME:` 标记需要修复的问题
- **注释语言**: 使用中文编写注释

### 4.6 导入导出规范
- **导入顺序**: 按照以下顺序导入：
  1. React 相关
  2. 第三方库
  3. 内部组件
  4. 工具函数
  5. 类型定义
  6. 样式文件
- **命名导入**: 优先使用命名导入，避免默认导入
- **路径别名**: 使用 `@/` 别名引用 src 目录下的文件
- **导出方式**: 优先使用命名导出，需要时使用默认导出

### 4.7 代码质量工具
- **ESLint**: 使用 ESLint 进行代码检查
- **Prettier**: 使用 Prettier 进行代码格式化
- **Husky**: 使用 Git Hooks 在提交前自动检查代码
- **lint-staged**: 只检查暂存区的文件

## 5. 注意事项

### 5.1 重要提醒
- **数据管理**: 所有内容数据都通过 `src/data/portfolio.ts` 管理，不要硬编码在组件中
- **类型安全**: 严格遵守 TypeScript 类型定义，确保类型安全
- **响应式设计**: 所有组件必须支持响应式布局
- **性能优化**: 使用代码分割和懒加载优化首屏性能
- **可访问性**: 确保网站符合 WCAG 可访问性标准
- **图片优化**: 使用适当的图片格式和尺寸，优化加载性能

### 5.2 禁止事项
- ❌ 不要在组件中直接修改 `portfolioData`
- ❌ 不要使用 `any` 类型，始终使用明确的类型定义
- ❌ 不要忽略 TypeScript 类型错误
- ❌ 不要在组件中硬编码数据，统一使用 `portfolioData`
- ❌ 不要使用不兼容的图标库，统一使用 Lucide React
- ❌ 不要在生产环境中使用 `console.log`
- ❌ 不要提交敏感信息（API 密钥、密码等）
- ❌ 不要忽略 ESLint 和 Prettier 的警告和错误

### 5.3 最佳实践
- ✅ 使用 TypeScript 接口定义所有 Props
- ✅ 为可选 Props 提供默认值
- ✅ 使用 Tailwind CSS 工具类而不是自定义 CSS
- ✅ 使用 React.memo 优化性能
- ✅ 使用 Framer Motion 实现流畅动画
- ✅ 保持组件单一职责
- ✅ 编写清晰的中文注释
- ✅ 遵循文件命名规范
- ✅ 使用 Git 分支管理开发流程
- ✅ 定期提交代码，保持提交信息清晰
- ✅ 编写单元测试覆盖关键逻辑
- ✅ 使用代码审查确保代码质量

### 5.4 性能优化
- **代码分割**: 使用 React.lazy + Suspense 按需加载组件
- **图片优化**: 使用 WebP 格式，提供多种尺寸
- **懒加载**: 对图片和非首屏组件使用懒加载
- **缓存策略**: 合理使用浏览器缓存
- **打包优化**: 分析打包体积，优化依赖
- **减少重渲染**: 使用 React.memo、useMemo、useCallback

### 5.5 安全注意事项
- **XSS 防护**: React 默认提供 XSS 防护，避免使用 `dangerouslySetInnerHTML`
- **CORS 配置**: 正确配置跨域资源共享
- **依赖安全**: 定期更新依赖，修复安全漏洞
- **敏感信息**: 不要在代码中硬编码敏感信息
- **输入验证**: 对用户输入进行验证和清理

### 5.6 部署注意事项
- **环境变量**: 正确配置生产环境变量
- **构建优化**: 使用生产构建命令，启用代码压缩
- **资源优化**: 确保 CSS、JS、图片等资源已优化
- **HTTPS**: 生产环境必须使用 HTTPS
- **CDN**: 考虑使用 CDN 加速静态资源加载
- **监控**: 部署后监控网站性能和错误

### 5.7 版本控制
- **Git 规范**: 遵循 Git 提交信息规范
- **分支管理**: 使用 feature 分支开发新功能
- **代码审查**: 提交前进行代码审查
- **版本标签**: 为重要版本打标签
- **Changelog**: 维护变更日志

### 5.8 文档维护
- **代码注释**: 保持代码注释与代码同步更新
- **README**: 更新 README.md 文档
- **技术文档**: 及时更新技术设计文档
- **API 文档**: 如有 API，维护 API 文档
- **变更记录**: 记录重要变更和决策

---

**最后更新**: 2026-01-20
**维护者**: 项目团队
**反馈**: 如有问题或建议，请及时更新本文档
