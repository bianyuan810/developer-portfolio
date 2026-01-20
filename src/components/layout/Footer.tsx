import React from 'react';
import { Github, Linkedin, Twitter } from 'lucide-react';
import { portfolioData } from '@/data/portfolio';

/**
 * 网站页脚组件
 * 包含联系信息、社交媒体链接和版权声明
 */
export const Footer: React.FC = () => {
  const { personalInfo } = portfolioData;

  return (
    <footer className="bg-gray-50 border-t border-gray-100 py-12">
      <div className="container mx-auto px-4">
        {/* 页脚内容区域 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* 个人信息 */}
          <div>
            <h3 className="text-xl font-bold text-gray-800 mb-4">{personalInfo.name}</h3>
            <p className="text-gray-600 mb-4">{personalInfo.title}</p>
            <p className="text-gray-600">{personalInfo.bio}</p>
          </div>

          {/* 联系方式 */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">联系方式</h3>
            <ul className="space-y-2">
              {personalInfo.email && (
                <li className="flex items-center text-gray-600">
                  <span className="mr-2">📧</span>
                  <a href={`mailto:${personalInfo.email}`} className="hover:text-blue-500 transition-colors">
                    {personalInfo.email}
                  </a>
                </li>
              )}
              {personalInfo.location && (
                <li className="flex items-center text-gray-600">
                  <span className="mr-2">📍</span>
                  {personalInfo.location}
                </li>
              )}
            </ul>
          </div>

          {/* 社交媒体链接 */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">社交媒体</h3>
            <div className="flex space-x-4">
              {personalInfo.socialLinks.map((link) => {
                // 根据平台名称返回对应的图标组件
                const IconComponent = {
                  github: Github,
                  linkedin: Linkedin,
                  twitter: Twitter
                }[link.icon] || Github;

                return (
                  <a
                    key={link.platform}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-blue-500 transition-colors"
                    aria-label={link.platform}
                  >
                    <IconComponent size={20} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* 版权声明 */}
        <div className="mt-12 pt-8 border-t border-gray-200 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} {personalInfo.name}. 保留所有权利。</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
