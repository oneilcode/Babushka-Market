import { useRef, useEffect } from 'react';
import styles from './ShowFullItem.module.css';

export const ShowFullItem = ({ item, addToOrder, onClickShowModal }) => {
  const modalRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
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
