import styles from './Item.module.css';

export const Item = ({ item, addToOrder, onClickShowModal }) => {

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
