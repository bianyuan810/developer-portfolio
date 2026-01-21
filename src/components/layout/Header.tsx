import React, { useState, useEffect } from 'react';
import { Sun, Moon, Palette } from 'lucide-react';
import { portfolioData } from '@/data/portfolio';

/**
 * 网站头部导航组件
 * 包含 logo、导航链接、深色模式切换和网站风格切换
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
  
  // 网站风格状态 - 从localStorage读取保存的风格
  const [currentStyle, setCurrentStyle] = useState(() => {
    const savedStyle = localStorage.getItem('websiteStyle');
    return savedStyle || 'default';
  });
  
  // 风格列表数据
  const styles = [
    { name: '默认风格', value: 'default' },
    { name: '自然有机', value: 'natural' },

  ];
  
  // 下拉菜单显示状态
  const [isStyleMenuOpen, setIsStyleMenuOpen] = useState(false);

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

  // 应用网站风格
  useEffect(() => {
    // 应用风格到文档根元素
    document.documentElement.setAttribute('data-style', currentStyle);
    localStorage.setItem('websiteStyle', currentStyle);
  }, [currentStyle]);

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
  
  // 切换风格
  const handleStyleChange = (style: string) => {
    setCurrentStyle(style);
    setIsStyleMenuOpen(false);
  };
  
  // 切换风格菜单显示状态
  const toggleStyleMenu = () => {
    setIsStyleMenuOpen(!isStyleMenuOpen);
  };

  return (
    <nav className="px-4 py-4 md:px-6 lg:px-8">
      
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo 或网站名称 */}
        <a 
          href="#" 
          className="text-2xl font-bold website-title"
        >
          {portfolioData.theme?.websiteTitle || '张三的作品集'}
        </a>

        {/* 导航链接、深色模式切换和风格切换 */}
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
          
          {/* 风格切换按钮和下拉菜单 */}
          <div className="relative">
            <button 
              id="style-toggle" 
              className="style-toggle"
              aria-label="切换网站风格"
              onClick={toggleStyleMenu}
            >
              <Palette size={20} />
            </button>
            
            {/* 风格下拉菜单 */}
            {isStyleMenuOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-md shadow-lg py-1 z-50">
                {styles.map((style) => (
                  <button
                    key={style.value}
                    className={`block w-full text-left px-4 py-2 text-sm ${currentStyle === style.value 
                      ? 'text-blue-600 dark:text-blue-400 font-medium' 
                      : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'}`}
                    onClick={() => handleStyleChange(style.value)}
                  >
                    {style.name}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;