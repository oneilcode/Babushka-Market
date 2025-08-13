import type { FC } from 'react';
import styles from './Item.module.css';

export interface IItem {
  id:  string | number,
  img: string,
  name: string,
  price: number,
  description?: string,
}

interface IItemProps {
  item: IItem,
  addToOrder: (item: IItem) => void,
  onClickShowModal: (item: IItem) => void,
}

export const Item:FC<IItemProps> = ({ item, addToOrder, onClickShowModal }) => {

  return (
    <div className={styles.item}>
      <img src={item.img} alt={item.name}  onClick={() => onClickShowModal(item)}/>
      <div className={styles.info}>
        <h4>{item.name}</h4>
        <p>{item.price} руб</p>
        <div className={styles.addBtn}  onClick={() => addToOrder(item)}>+</div>  
      </div>
    </div>
  )     
};
