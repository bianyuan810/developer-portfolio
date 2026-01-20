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
    <div className={`rounded-lg shadow-md overflow-hidden bg-white border border-gray-100 ${className}`} {...props}>
      {/* 卡片图片 */}
      {image && (
        <div className="relative h-48 w-full">
          <img
            src={image}
            alt={imageAlt}
            className="object-cover w-full h-full"
          />
        </div>
      )}
      
      {/* 卡片内容 */}
      <div className="p-5">
        {/* 卡片标题 */}
        {title && <h3 className="text-xl font-semibold mb-3 text-gray-800">{title}</h3>}
        
        {/* 卡片主体内容 */}
        <div className="text-gray-600">{children}</div>
      </div>
      
      {/* 卡片页脚 */}
      {footer && (
        <div className="px-5 py-4 bg-gray-50 border-t border-gray-100">
          {footer}
        </div>
      )}
    </div>
  );
};

export default Card;
