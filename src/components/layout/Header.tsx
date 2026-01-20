import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

/**
 * 网站头部导航组件
 * 包含 logo、导航链接和移动端菜单
 */
export const Header: React.FC = () => {
  // 移动端菜单开关状态
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // 导航链接数据
  const navLinks = [
    { name: '首页', path: '/' },
    { name: '项目', path: '/projects' },
    { name: '关于', path: '/about' }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-sm shadow-sm z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo 或网站名称 */}
        <Link to="/" className="text-xl font-bold text-blue-500">
          张三的作品集
        </Link>

        {/* 桌面端导航链接 */}
        <nav className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className="text-gray-600 hover:text-blue-500 transition-colors duration-200 font-medium"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* 移动端菜单按钮 */}
        <button
          className="md:hidden text-gray-600 hover:text-blue-500 transition-colors duration-200"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? '关闭菜单' : '打开菜单'}
        >
          {isMenuOpen ? <X size