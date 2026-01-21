import React from 'react';
import { portfolioData } from '@/data/portfolio';

/**
 * 技能展示区域组件
 * 按照分类展示个人技能
 */
export const SkillsSection: React.FC = () => {
  const { skills } = portfolioData;

  return (
    <section id="skills" className="py-20 px-4 md:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center section-title">
          我的技能
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* 技能分类 */}
          {skills.map((skillCategory, index) => (
            <div key={index}>
              <h3 className="text-2xl font-bold mb-6">{skillCategory.category}</h3>
              <div className="grid grid-cols-2 gap-4">
                {skillCategory.items.map((skill, skillIndex) => (
                  <div className="skill-tag" key={skillIndex}>{skill.name}</div>
                ))}
              </div>
            </div>
          ))}
        </div>
        

      </div>
    </section>
  );
};

export default SkillsSection;
