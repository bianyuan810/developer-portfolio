import React from 'react';
import { portfolioData } from '@/data/portfolio';

/**
 * 网站页脚组件
 * 包含联系信息、社交媒体链接和版权声明
 */
export const Footer: React.FC = () => {
  const { personalInfo } = portfolioData;

  return (
    <footer className="py-12 px-4 md:px-6 lg:px-8 text-center">
      <div className="max-w-7xl mx-auto">
        
        <div className="text-secondary">
          <p>© {new Date().getFullYear()} {personalInfo.name}. 保留所有权利.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
