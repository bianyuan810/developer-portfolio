import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Github, Linkedin, Twitter } from 'lucide-react';
import { portfolioData } from '@/data/portfolio';

/**
 * 联系方式区域组件
 * 展示邮箱、位置和社交媒体链接
 */
export const ContactSection: React.FC = () => {
  const { personalInfo } = portfolioData;

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* 标题区域 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">联系我</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            如果您对我的工作感兴趣，或者有任何合作机会，欢迎随时联系我
          </p>
        </motion.div>

        {/* 联系方式卡片 */}
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-gray-50 rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow duration-300"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* 联系信息项 */}
              {personalInfo.email && (
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                    <Mail size={24} className="text-blue-500" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">邮箱</h3>
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="text-gray-600 hover:text-blue-500 transition-colors"
                  >
                    {personalInfo.email}
                  </a>
                </div>
              )}

              {personalInfo.location && (
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                    <MapPin size={24} className="text-blue-500" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">位置</h3>
                  <p className="text-gray-600">{personalInfo.location}</p>
                </div>
              )}

              {/* 社交媒体链接 */}
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <Twitter size={24} className="text-blue-500" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">社交媒体</h3>
                <div className="flex space-x-4 mt-2">
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
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
