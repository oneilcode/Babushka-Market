import styles from './Item.module.css';

export const Item = ({ item, addToOrder }) => {

  return (
    <div className={styles.item}>
      <img src={item.img} alt={item.name} />
      <div className={styles.info}>
        <h4>{item.name}</h4>
        <p>{item.price} руб</p>
        <div className={styles.addBtn}  onClick={() => addToOrder(item)}>+</div>  
      </div>
    </div>
  )     
};
