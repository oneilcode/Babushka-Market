import styles from './Item.module.css';

export const Item = ({ item }) => {
  return (
    <div className={styles.item}>
      <img src={item.img} alt={item.name} />
      <div className={styles.info}>
        <h4>{item.name}</h4>
        <p>10000 руб</p>
        <div className={styles.addBtn}>+</div>  
      </div>
    </div>
  )     
};
