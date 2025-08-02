import { useState } from 'react';
import styles from './Header.module.css';
import { BsCartFill  } from "react-icons/bs";

export const Header = () => {
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
              <div className={styles.cartInfo}>123</div>
          )}

      </div>
      <div className={styles.presentation}></div>
    </header>
  );
};
