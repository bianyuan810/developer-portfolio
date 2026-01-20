import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { Routes } from './router';
import './index.css';

/**
 * 应用入口组件
 * 整合路由、头部和底部布局
 */
function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-white">
        {/* 头部导航 */}
        <Header />
        
        {/* 主内容区域 */}
        <main className="pt-16">
          <Routes />
        </main>
        
        {/* 底部信息 */}
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
