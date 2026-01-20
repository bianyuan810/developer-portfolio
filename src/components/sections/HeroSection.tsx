import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '@/data/portfolio';

/**
 * 首页英雄区域组件
 * 展示个人姓名、职位、简介和社交媒体链接
 */
export const HeroSection: React.FC = () => {
  const { personalInfo } = portfolioData;

  return (
    <section className="pt-32 pb-24 md:pt-40 md:pb-32 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* 个人头像 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative w-48 h-48 md:w-64 md:h-64"
          >
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 blur-xl opacity-30 animate-pulse"></div>
            <div className="relative rounded-full overflow-hidden border-4 border-white shadow-lg">
              <img
                src={personalInfo.avatar || '/images/avatar-placeholder.jpg'}
                alt={personalInfo.name}
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* 个人信息 */}
          <div className="flex-1 text-center md:text-left">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-4"
            >
              你好，我是 <span className="text-blue-500">{personalInfo.name}</span>
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl md:text-2xl text-gray-600 mb-6"
            >
              {personalInfo.title}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-gray-600 text-lg mb-8 max-w-2xl"
            >
              {personalInfo.bio}
            </motion.p>

            {/* 社交媒体链接 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex justify-center md:justify-start space-x-6 mb-8"
            >
              {personalInfo.socialLinks.map((link) => (
                <a
                  key={link.platform}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-blue-500 transition-colors duration-200"
                  aria-label={link.platform}
                >
                  {/* 使用 Lucide React 图标 */}
                  <div className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-200 hover:border-blue-300 transition-all duration-200 hover:shadow-md">
                    <img
                      src={`https://lucide.dev/icons/${link.icon}`}
                      alt={link.platform}
                      className="w-5 h-5"
                    />
                  </div>
                </a>
              ))}
            </motion.div>

            {/* 下载简历按钮 */}
            {personalInfo.resumeUrl && (
              <motion.a
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                href={personalInfo.resumeUrl}
                download
                className="inline-block px-8 py-3 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-lg transition-all duration-200 shadow-md hover:shadow-lg"
              >
                下载简历
              </motion.a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
