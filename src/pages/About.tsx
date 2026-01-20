import React from 'react';
import SkillsSection from '@/components/sections/SkillsSection';

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-12">关于我</h1>
        <div className="max-w-3xl mx-auto">
          <div className="prose prose-lg">
            <p>我是一名全栈开发工程师，专注于构建高性能、用户友好的 Web 应用。</p>
            <p>拥有多年的前端和后端开发经验，熟悉现代 Web 技术栈，包括 React、TypeScript、Node.js 等。</p>
            <p>我热爱技术，不断学习新技术，追求代码的质量和可维护性。</p>
            <p>在工作中，我注重团队合作，善于沟通，能够快速适应新的环境和挑战。</p>
          </div>
        </div>
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-center mb-8">我的技能</h2>
          <SkillsSection />
        </div>
      </div>
    </div>
  );
};

export default About;