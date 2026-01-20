import React from 'react';
import ProjectsSection from '@/components/sections/ProjectsSection';

const Projects: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-12">我的项目</h1>
        <ProjectsSection showAll={true} />
      </div>
    </div>
  );
};

export default Projects;