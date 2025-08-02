import styles from './Order.module.css';

export const Order = ({ item }) => {

  return (
    <div className={styles.item}>
      <img src={item.img} alt={item.name} />
      <div className={styles.info}>
        <h4>{item.name}</h4>
        <p>10000 руб</p>
      </div>
    </div>
  )     
};
