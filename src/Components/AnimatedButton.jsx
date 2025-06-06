import React from 'react'
import '../Css/AnimatedButton.css'

function AnimatedButton({ text = "Click Me", onClick, backgroundColor = "default", width, shadowColor = "black" }) {
  const colorMap = {
    primary: '#007bff',
    danger: '#dc3545',
    success: '#28a745',
    warning: '#ffc107',
    info: '#17a2b8',
    default: '#04AA6D',
  };

  const btnClass = `button text-center text-wrap fs-6 ${!width ? 'w-100' : ''}`;
  return (
    <>
      <button 
        className={btnClass}
        onClick={onClick}
        style={{ backgroundColor: colorMap[backgroundColor], width: width || 'auto' }}
        onMouseEnter={(e) => {
        e.target.style.boxShadow = `0 7px 0 ${colorMap[shadowColor] || shadowColor}`;
        e.target.style.transform = 'translateY(-9px)';
        e.target.style.border = 'none';
      }}
      onMouseLeave={(e) => {
        e.target.style.boxShadow = 'none';
        e.target.style.transform = 'translateY(0)';
      }}>
       {text} 
      </button>
    </>
  )
}

export default AnimatedButton
