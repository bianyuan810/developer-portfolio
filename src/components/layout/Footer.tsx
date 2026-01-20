import React from 'react';
import { portfolioData } from '@/data/portfolio';
import { Github, Linkedin, Twitter, Code } from 'lucide-react';

/**
 * 网站页脚组件
 * 包含联系信息、社交媒体链接和版权声明
 */
export const Footer: React.FC = () => {
  const { personalInfo } = portfolioData;

  return (
    <footer className="bg-gray-900 text-white py-12 px-4 md:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              张三的作品集
            </h3>
            <p className="text-gray-400 mt-2">专注于创建现代化、响应式的Web应用</p>
          </div>
          
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
              <Github size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
              <Twitter size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
              <Code size={20} />
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-500">
          <p>© {new Date().getFullYear()} {personalInfo.name}. 保留所有权利.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
