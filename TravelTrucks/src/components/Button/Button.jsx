import React from 'react';

const Button = ({ 
  children, 
  onClick, 
  type = 'button', 
  variant = 'primary', 
  customStyle, 
  disabled 
}) => {
  // Temel stiller (Tasarım şablonuna uygun)
  const baseStyle = {
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '16px 40px',
    borderRadius: '200px',
    fontWeight: '600',
    fontSize: '16px',
    lineHeight: '1.5',
    cursor: 'pointer', // Kritik Kriter: Butonlar cursor: pointer özelliğine sahip olmalı
    border: 'none',
    transition: 'all 0.3s ease',
    ...customStyle
  };

  // Varyant stilleri
  const variants = {
    primary: {
      backgroundColor: '#E44848', // Şablondaki ana kırmızı tonu
      color: '#FFFFFF',
    },
    outline: {
      backgroundColor: 'transparent',
      border: '1px solid rgba(71, 84, 103, 0.2)',
      color: '#101828',
    }
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      style={{ 
        ...baseStyle, 
        ...variants[variant],
        opacity: disabled ? 0.6 : 1,
        pointerEvents: disabled ? 'none' : 'auto'
      }}
      // Hover efekti için basit inline stil yönetimi
      onMouseOver={(e) => {
        if (!disabled) {
          e.currentTarget.style.backgroundColor = variant === 'primary' ? '#D84343' : '#F7F7F7';
        }
      }}
      onMouseOut={(e) => {
        if (!disabled) {
          e.currentTarget.style.backgroundColor = variants[variant].backgroundColor;
        }
      }}
    >
      {children}
    </button>
  );
};

export default Button;