import React, { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';

/**
 * 网站头部导航组件
 * 包含 logo、导航链接和深色模式切换
 */
export const Header: React.FC = () => {
  // 深色模式状态 - 直接在初始值中计算系统偏好
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // 检查localStorage中的主题设置
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      return savedTheme === 'dark';
    }
    // 没有保存的主题时，检查系统偏好
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  // 导航链接数据
  const navLinks = [
    { name: '首页', path: '#' },
    { name: '项目', path: '#projects' },
    { name: '技能', path: '#skills' },
    { name: '联系', path: '#contact' }
  ];

  // 初始化主题和监听系统偏好变化
  useEffect(() => {
    // 应用主题
    document.documentElement.setAttribute('data-theme', isDarkMode ? 'dark' : 'light');
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  // 监听系统偏好变化
  useEffect(() => {
    const handleChange = (e: MediaQueryListEvent) => {
      setIsDarkMode(e.matches);
    };
    
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    mediaQuery.addEventListener('change', handleChange);
    
    return () => {
      mediaQuery.removeEventListener('change', handleChange);
    };
  }, []);

  // 切换主题
  const toggleDarkMode = () => {
    const newTheme = isDarkMode ? 'light' : 'dark';
    setIsDarkMode(!isDarkMode);
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  };

  return (
    <nav className="px-4 py-4 md:px-6 lg:px-8">
      
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo 或网站名称 */}
        <a 
          href="#" 
          className="text-2xl font-bold" 
          style={{ 
            background: 'linear-gradient(to right, #3b82f6, #8b5cf6)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}
        >
          张三的作品集
        </a>

        {/* 导航链接和深色模式切换 */}
        <div className="flex items-center space-x-6">
          {/* 导航链接 */}
          {navLinks.map((link) => (
            <a
              key={link.path}
              href={link.path}
              className="text-sm font-medium hover:text-blue-500 transition-colors"
            >
              {link.name}
            </a>
          ))}
          
          {/* 深色模式切换按钮 */}
          <button id="theme-toggle" 
            className="theme-toggle" 
            aria-label="切换主题"
            onClick={toggleDarkMode}
          >
            {isDarkMode ? <Moon size={20} /> : <Sun size={20} />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Header;