import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { portfolioData } from '@/data/portfolio';

/**
 * 项目展示区域组件
 * 以卡片形式展示个人项目
 */
export const ProjectsSection: React.FC<{ showAll?: boolean }> = ({ showAll = false }) => {
  const { projects } = portfolioData;
  
  // 根据 showAll 属性决定是否显示所有项目
  const displayProjects = showAll ? projects : projects;

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* 标题区域 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">我的项目</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            这里展示了我参与开发的部分项目，涵盖了前端、后端和全栈开发
          </p>
        </motion.div>

        {/* 项目卡片网格 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              {/* 项目卡片 */}
              <Card
                title={project.title}
                image={project.image || '/images/project-placeholder.jpg'}
                footer={(
                  <div className="flex flex-wrap gap-2">
                    {/* 项目演示链接 */}
                    {project.demoUrl && (
                      <Button
                        variant="primary"
                        size="sm"
                        icon={<ExternalLink size={16} />}
                        as="a"
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        演示
                      </Button>
                    )}
                    
                    {/* 项目代码链接 */}
                    {project.repoUrl && (
                      <Button
                        variant="secondary"
                        size="sm"
                        icon={<Github size={16} />}
                        as="a"
                        href={project.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        代码
                      </Button>
                    )}
                  </div>
                )}
              >
                {/* 项目描述 */}
                <p className="text-gray-600 mb-4">{project.description}</p>
                
                {/* 项目技术栈 */}
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
