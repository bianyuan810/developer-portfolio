import React from 'react';
import { portfolioData } from '@/data/portfolio';
import type { Project } from '@/types/portfolio';

/**
 * 项目展示区域组件
 * 以卡片形式展示个人项目
 */
export const ProjectsSection: React.FC = () => {
  const { projects } = portfolioData;

  return (
    <section id="projects" className="py-20 px-4 md:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center section-title">
          我的项目
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* 项目卡片 1 */}
          {projects.map((project: Project) => (
            <div className="project-card rounded-xl overflow-hidden" key={project.id}>
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image || 'https://picsum.photos/id/1/600/400'} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.map((tech: string) => (
                    <span className="skill-tag" key={tech}>{tech}</span>
                  ))}
                </div>
                <div className="flex justify-between items-center">
                  <a href="#" className="project-detail-link">查看详情</a>
                  <a href={project.repoUrl || '#'} className="btn btn-sm px-4 py-2">GitHub</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
