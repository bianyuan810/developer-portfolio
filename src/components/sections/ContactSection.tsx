import React from 'react';
import { portfolioData } from '@/data/portfolio';
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Code } from 'lucide-react';

/**
 * 联系方式区域组件
 * 展示邮箱、位置和社交媒体链接
 */
export const ContactSection: React.FC = () => {
  const { personalInfo } = portfolioData;

  return (
    <section id="contact" className="py-20 px-4 md:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          <span className="neon-text text-blue-500">联系我</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* 联系信息 */}
          <div>
            <h3 className="text-2xl font-bold mb-6">让我们开始合作</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              如果你有项目想法或合作机会，欢迎联系我。我会尽快回复你的消息。
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mr-4">
                  <Mail className="text-blue-500" size={20} />
                </div>
                <div>
                  <h4 className="font-medium">邮箱</h4>
                  <a href={`mailto:${personalInfo.email || 'zhangsan@example.com'}`} className="text-gray-600 dark:text-gray-300 hover:text-blue-500">
                    {personalInfo.email || 'zhangsan@example.com'}
                  </a>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mr-4">
                  <Phone className="text-blue-500" size={20} />
                </div>
                <div>
                  <h4 className="font-medium">电话</h4>
                  <a href={`tel:${personalInfo.phone || '+861234567890'}`} className="text-gray-600 dark:text-gray-300 hover:text-blue-500">
                    {personalInfo.phone || '+86 123 4567 890'}
                  </a>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mr-4">
                  <MapPin className="text-blue-500" size={20} />
                </div>
                <div>
                  <h4 className="font-medium">位置</h4>
                  <p className="text-gray-600 dark:text-gray-300">{personalInfo.location || '北京市朝阳区'}</p>
                </div>
              </div>
            </div>
            
            {/* 社交媒体链接 */}
            <div className="mt-12">
              <h4 className="font-medium mb-4">社交媒体</h4>
              <div className="flex space-x-4">
                <a href="#" className="w-12 h-12 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-300 hover:bg-blue-500 hover:text-white transition-all duration-300">
                  <Github size={20} />
                </a>
                <a href="#" className="w-12 h-12 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-300 hover:bg-blue-500 hover:text-white transition-all duration-300">
                  <Linkedin size={20} />
                </a>
                <a href="#" className="w-12 h-12 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-300 hover:bg-blue-500 hover:text-white transition-all duration-300">
                  <Twitter size={20} />
                </a>
                <a href="#" className="w-12 h-12 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-300 hover:bg-blue-500 hover:text-white transition-all duration-300">
                  <Code size={20} />
                </a>
              </div>
            </div>
          </div>
          
          {/* 联系表单 */}
          <div>
            <div className="project-card rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-6">发送消息</h3>
              <form>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-sm font-medium mb-2">姓名</label>
                  <input type="text" id="name" name="name" className="w-full px-4 py-3 rounded-lg bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300" placeholder="请输入您的姓名" />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="email" className="block text-sm font-medium mb-2">邮箱</label>
                  <input type="email" id="email" name="email" className="w-full px-4 py-3 rounded-lg bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300" placeholder="请输入您的邮箱" />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">主题</label>
                  <input type="text" id="subject" name="subject" className="w-full px-4 py-3 rounded-lg bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300" placeholder="请输入消息主题" />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium mb-2">消息</label>
                  <textarea id="message" name="message" rows={5} className="w-full px-4 py-3 rounded-lg bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300" placeholder="请输入您的消息"></textarea>
                </div>
                
                <button type="submit" className="btn w-full">发送消息</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
