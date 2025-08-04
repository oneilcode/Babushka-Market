import styles from './Order.module.css';
import { MdDelete } from "react-icons/md";

export const Order = ({ item, onDelete }) => {

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
