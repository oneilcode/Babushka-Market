import type { FC } from 'react';
import styles from './Categories.module.css';

interface ICategoriesProps {
  categories: string[],
  selectedCategory: string,
  setSelectedCategory: (category: string) => void;
}

export const Categories:FC<ICategoriesProps> = ({ categories, setSelectedCategory, selectedCategory }) => {
  return (   
    <ul className={styles.categories}>
      {categories.map((category) => {
         return (
          <li
            onClick={() => setSelectedCategory(category)} 
            className={`${styles.category} ${selectedCategory === category ? styles.active : ""}`} 
            key={category}>
            {category}
          </li>
         )
      })}       
    </ul>
  );
};
