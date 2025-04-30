// src/components/shared/Card/Card.jsx
import React from 'react';
import styles from './Card.module.css';

const Card = ({
  children,
  variant = 'default',
  className = '',
  onClick,
  hover = true,
  ...props
}) => {
  const cardClasses = [
    styles.card,
    styles[variant],
    hover ? styles.hover : '',
    className
  ].filter(Boolean).join(' ');

  return (
    <div
      className={cardClasses}
      onClick={onClick}
      {...props}
    >
      {children}
    </div>
  );
};

// Card Header component
export const CardHeader = ({ children, className = '', ...props }) => {
  const headerClasses = [styles.header, className].filter(Boolean).join(' ');
  
  return (
    <div className={headerClasses} {...props}>
      {children}
    </div>
  );
};

// Card Content component
export const CardContent = ({ children, className = '', ...props }) => {
  const contentClasses = [styles.content, className].filter(Boolean).join(' ');
  
  return (
    <div className={contentClasses} {...props}>
      {children}
    </div>
  );
};

// Card Footer component
export const CardFooter = ({ children, className = '', ...props }) => {
  const footerClasses = [styles.footer, className].filter(Boolean).join(' ');
  
  return (
    <div className={footerClasses} {...props}>
      {children}
    </div>
  );
};

export default Card;