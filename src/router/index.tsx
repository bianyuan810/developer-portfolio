import React from 'react';
import { Routes as ReactRoutes, Route } from 'react-router-dom';
import Home from '@/pages/Home';
import Projects from '@/pages/Projects';
import About from '@/pages/About';

/**
 * 路由配置组件
 * 定义所有页面路由
 */
export const Routes: React.FC = () => {
  return (
    <ReactRoutes>
      {/* 首页路由 */}
      <Route path="/" element={<Home />} />
      
      {/* 项目页面路由 */}
      <Route path="/projects" element={<Projects />} />
      
      {/* 关于页面路由 */}
      <Route path="/about" element={<About />} />
    </ReactRoutes>
  );
};
