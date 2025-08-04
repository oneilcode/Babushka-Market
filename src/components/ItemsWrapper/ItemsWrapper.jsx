import { Item } from '../Item/Item';
import styles from './ItemsWrapper.module.css';

export const ItemsWrapper = ({ items, addToOrder }) => {
  return (
    <main className={styles.main}>
      {items.map(item => {
         return <Item key={item.id} item={item} addToOrder={addToOrder} />
      })}
        
    </main>
  );
};
