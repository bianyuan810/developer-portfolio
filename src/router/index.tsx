import React from 'react';
import { Routes as ReactRoutes, Route } from 'react-router-dom';
import Home from '@/pages/Home';

/**
 * 路由配置组件
 * 定义所有页面路由
 */
export const Routes: React.FC = () => {
  return (
    <ReactRoutes>
      {/* 首页路由 - 单页应用，所有内容都在首页 */}
      <Route path="/*" element={<Home />} />
    </ReactRoutes>
  );
};
