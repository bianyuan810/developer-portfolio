import React from 'react';
import { portfolioData } from '@/data/portfolio';

/**
 * 首页英雄区域组件
 * 展示个人姓名、职位、简介和社交媒体链接
 */
export const HeroSection: React.FC = () => {
  const { personalInfo } = portfolioData;

  return (
    <section className="hero relative py-20 px-4 md:px-6 lg:px-8 overflow-hidden">
      {/* 背景装饰 */}
      <div className="bg-decoration circle top-10 left-10"></div>
      <div className="bg-decoration square bottom-10 right-10"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex items-center" style={{ flexDirection: 'row' }}>
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              <span className="developer-name">{personalInfo.name}</span>
              <span className="section-title"> · {personalInfo.title}</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              {personalInfo.bio}
            </p>
            <div className="flex space-x-4">
              <a href="#projects" className="btn">查看项目</a>
              <a href="#contact" className="btn bg-transparent border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white">
                联系我
              </a>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-blue-500 neon-border">
              <img 
                src={personalInfo.avatar || 'https://picsum.photos/id/1005/400/400'} 
                alt="个人头像" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* 扫描线效果 */}
      <div className="scanlines"></div>
    </section>
  );
};

export default HeroSection;