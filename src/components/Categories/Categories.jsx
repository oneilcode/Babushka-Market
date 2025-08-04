import styles from './Categories.module.css';

export const Categories = ({ categories, setSelectedCategory, selectedCategory }) => {
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
