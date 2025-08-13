import type { FC } from 'react';
import styles from './Order.module.css';
import { MdDelete } from "react-icons/md";
import type { IItem } from '../Item/Item';

export interface IOrderProps {
  item: IItem,
  onDelete: (item: IItem) => void,
}

export const Order:FC<IOrderProps> = ({ item, onDelete }) => {

  return (
    <div className={styles.item}>
      <img src={item.img} alt={item.name} />
      <div className={styles.info}>
        <h4>{item.name}</h4>
        <p>{item.price} руб</p>
      </div>
      <MdDelete  className={styles.closeBtn} onClick={() => onDelete(item)}/>
    </div>
  )     
};
