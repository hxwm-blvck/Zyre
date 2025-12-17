import React, { useState } from 'react';
import CategoryItem from '../atoms/CategoryItem';

function CategoryNav({ categories, onCategorySelect }) {
  
  const [activeCategory, setActiveCategory] = useState(categories[0]);

  const handleClick = (categoryName) => {
    setActiveCategory(categoryName);
    
    if (onCategorySelect) {
      onCategorySelect(categoryName);
    }
  };

  return (
    <ul className="nav nav-pills mb-3 justify-content-center">
      {categories.map((category) => (
        <CategoryItem
          key={category}
          label={category}
          isActive={category === activeCategory}
          onClick={() => handleClick(category)}
        />
      ))}
    </ul>
  );
}

export default CategoryNav;