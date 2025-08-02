import { useState } from 'react';
import styles from './Header.module.css';
import { BsCartFill  } from "react-icons/bs";
import { Order } from '../Order/Order';

export const Header = (props) => {
let [openCart, setOpenCart] = useState(false)

  return (
    <header className={styles.header}>
      <div>
        <span className={styles.logo}>MeowShop</span>
        <ul className={styles.nav}>
          <li>Про нас</li>
          <li>Контакты</li>
          <li>Кабинет</li>
        </ul>

        <BsCartFill  onClick={() => setOpenCart(!openCart)} className={`${styles.shopCart} ${openCart && styles.active}`}/>

          {openCart && (
              <div className={styles.cartInfo}>

                {props.orders.length <= 0 && <p>Корзина пуста</p>}

                {props.orders.map((el) => {
                  return <Order key={el.name} item={el} onDelete={props.onDelete}/>
                })}
              </div>
          )}

      </div>
      <div className={styles.presentation}></div>
    </header>
  );
};
