import type { FC } from 'react';
import { Item, type IItem } from '../Item/Item';
import styles from './ItemsWrapper.module.css';

interface IItemsWrapper {
  items: IItem[],
  addToOrder: (item: IItem) => void,
  onClickShowModal: (item: IItem) => void,
}

export const ItemsWrapper:FC<IItemsWrapper> = ({ items, addToOrder, onClickShowModal }) => {
  return (
    <main className={styles.main}>
      {items.map(item => {
         return <Item key={item.id} item={item} addToOrder={addToOrder} onClickShowModal={onClickShowModal} />
      })}
        
    </main>
  );
};
