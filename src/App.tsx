
import { BrowserRouter } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { Routes } from './router';
import { ArrowUp } from 'lucide-react';
import './index.css';
import './index-natural.css';

/**
 * 应用入口组件
 * 整合路由、头部和底部布局
 */
function App() {
  const backToTopRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    // 回到顶部按钮功能
    const backToTopBtn = backToTopRef.current;
    
    const handleScroll = () => {
      if (backToTopBtn) {
        if (window.pageYOffset > 300) {
          backToTopBtn.classList.remove('opacity-0', 'invisible');
          backToTopBtn.classList.add('opacity-100', 'visible');
        } else {
          backToTopBtn.classList.remove('opacity-100', 'visible');
          backToTopBtn.classList.add('opacity-0', 'invisible');
        }
      }
    };

    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    };

    // 平滑滚动到锚点
    const handleAnchorClick = (e: Event) => {
      const target = e.target as HTMLAnchorElement;
      if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        
        const targetId = target.getAttribute('href');
        if (targetId === '#') {
          window.scrollTo({
            top: 0,
            behavior: 'smooth'
          });
        } else {
          const targetElement = document.querySelector(targetId || '');
          if (targetElement) {
            targetElement.scrollIntoView({
              behavior: 'smooth'
            });
          }
        }
      }
    };

    // 表单提交处理
    const handleFormSubmit = (e: Event) => {
      e.preventDefault();
      alert('感谢您的消息！我会尽快回复您。');
      const form = e.target as HTMLFormElement;
      form.reset();
    };

    window.addEventListener('scroll', handleScroll);
    backToTopBtn?.addEventListener('click', scrollToTop);
    document.addEventListener('click', handleAnchorClick);
    document.addEventListener('submit', handleFormSubmit);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      backToTopBtn?.removeEventListener('click', scrollToTop);
      document.removeEventListener('click', handleAnchorClick);
      document.removeEventListener('submit', handleFormSubmit);
    };
  }, []);

  return (
    <BrowserRouter>
  

  
      <div >
        {/* 头部导航 */}
        <Header />
        
        {/* 主内容区域 */}
        <main>
          <Routes />
        </main>
        
        {/* 底部信息 */}
        <Footer />
        
        {/* 回到顶部按钮 */}
        <button 
          ref={backToTopRef}
          id="back-to-top" 
          className="fixed bottom-8 right-8 w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 opacity-0 invisible back-to-top-btn"
          aria-label="回到顶部"
        >
          <ArrowUp size={20} />
        </button>
      </div>
       
    </BrowserRouter>
  );
}

export default App;
