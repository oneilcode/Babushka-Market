import { useRef, useEffect, type FC } from 'react';
import styles from './ShowFullItem.module.css';
import type { IItem } from '../Item/Item';

interface IShowFullItemProps {
  item: IItem,
  addToOrder: (item: IItem) => void,
  onClickShowModal: () => void,
}

export const ShowFullItem:FC<IShowFullItemProps> = ({ item, addToOrder, onClickShowModal }) => {
  const modalRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleClickOutside = (event:MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        onClickShowModal();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClickShowModal]);

  return (
  <div className={styles.itemFullOverlay}>
    <div className={styles.itemFullModal} ref={modalRef}>
      <img src={item.img} alt={item.name} />
        <div className={styles.info}>
          <h4>{item.name}</h4>
          <div className={styles.description}>{item.description}</div>
          <div className={styles.priceWrapper}>
            <p>{item.price} руб</p>
            <div className={styles.addBtn}  onClick={() => addToOrder(item)}>+</div>  
          </div>          
        </div>
    </div>    
  </div>
  )     
};
