import React from 'react';

function CategoryItem({ label, isActive, onClick }) {
  
  const BStrapClasses = `nav-link ${isActive ? 'active' : ''}`;

  return (
    <li className="nav-item">
      <button 
        className={BStrapClasses} 
        onClick={onClick}
        type="button"
        aria-pressed={isActive} 
      >
        {label}
      </button>
    </li>
  );
}

export default CategoryItem;