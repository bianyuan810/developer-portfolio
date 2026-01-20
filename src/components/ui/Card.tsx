import React from 'react';

// Card 组件属性接口
export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  image?: string;
  imageAlt?: string;
  footer?: React.ReactNode;
}

/**
 * 通用卡片组件
 * 支持图片、标题和页脚
 */
export const Card: React.FC<CardProps> = ({
  children,
  title,
  image,
  imageAlt = 'Card image',
  footer,
  className = '',
  ...props
}) => {
  return (
    <div className={`rounded-lg overflow-hidden ${className}`} {...props}>
      {/* 卡片图片 */}
      {image && (
        <div className="relative h-48 w-full overflow-hidden">
          <img
            src={image}
            alt={imageAlt}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>
      )}
      
      {/* 卡片内容 */}
      <div className="p-6">
        {/* 卡片标题 */}
        {title && <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">{title}</h3>}
        
        {/* 卡片主体内容 */}
        <div className="text-gray-600 dark:text-gray-300">{children}</div>
      </div>
      
      {/* 卡片页脚 */}
      {footer && (
        <div className="px-6 py-4 bg-gray-50 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
          {footer}
        </div>
      )}
    </div>
  );
};

export default Card;
