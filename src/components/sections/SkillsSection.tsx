import React from 'react';
import { motion } from 'framer-motion';
import { Layout, Server, Settings } from 'lucide-react';
import { portfolioData } from '@/data/portfolio';
import type { SkillCategory as SkillCategoryType, SkillItem } from '@/types/portfolio';

/**
 * 技能展示区域组件
 * 按照分类展示个人技能
 */
export const SkillsSection: React.FC = () => {
  const { skills } = portfolioData;

  // 技能分类图标映射
  const categoryIcons = {
    layout: <Layout size={20} className="text-blue-500" />,
    server: <Server size={20} className="text-blue-500" />,
    tool: <Settings size={20} className="text-blue-500" />
  };

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
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">我的技能</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            多年的开发经验积累了丰富的技术栈，涵盖前端、后端和各种开发工具
          </p>
        </motion.div>

        {/* 技能分类网格 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skillCategory: SkillCategoryType, index: number) => (
            <motion.div
              key={skillCategory.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              {/* 分类标题和图标 */}
              <div className="flex items-center gap-3 mb-6">
                {skillCategory.icon && categoryIcons[skillCategory.icon as keyof typeof categoryIcons]}
                <h3 className="text-xl font-semibold text-gray-800">{skillCategory.category}</h3>
              </div>

              {/* 技能列表 */}
              <ul className="space-y-4">
                {skillCategory.items.map((skill: SkillItem) => (
                  <li key={skill.name}>
                    <div className="flex justify-between items-center mb-1">
                      <div className="flex items-center">
                        <span
                          className={`font-medium ${skill.highlighted ? 'text-blue-500' : 'text-gray-800'}`}
                        >
                          {skill.name}
                        </span>
                        {skill.years && (
                          <span className="ml-2 text-xs text-gray-500">({skill.years} 年)</span>
                        )}
                      </div>
                      {skill.level && (
                        <span className="text-sm text-gray-500">{skill.level}/5</span>
                      )}
                    </div>
                    
                    {/* 熟练度进度条 */}
                    {skill.level && (
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${(skill.level / 5) * 100}%` }}
                          transition={{ duration: 1, delay: 0.2 }}
                          viewport={{ once: true }}
                          className={`h-full rounded-full ${skill.highlighted ? 'bg-blue-500' : 'bg-gray-400'}`}
                        />
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
