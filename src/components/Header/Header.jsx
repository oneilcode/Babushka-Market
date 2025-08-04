import { useState } from 'react';
import styles from './Header.module.css';
import { BsCartFill  } from "react-icons/bs";
import { Order } from '../Order/Order';
import { Link } from 'react-router-dom';

export const Header = (props) => {
let [openCart, setOpenCart] = useState(false)

const showOrders = (props) => {
  let total = 0

  let totalSum = props.orders.reduce((acc, res) => {
    return acc + res.price
  }, total)

  return (
    <>
      {props.orders.map((el) => {
        return <Order key={el.name} item={el} onDelete={props.onDelete}/>
      })}
   
      <div className={styles.totalSumWrapper}>Сумма товаров - <span  className={styles.totalSum}>{totalSum}</span> руб. </div>
    </>
  )
}

  return (
    <header className={styles.header}>
      <div>
        <span className={styles.logo}>
          <Link to="/">Babushka Market</Link>
        </span>
        <ul className={styles.nav}>
          <li>
            <Link to="/about">Про нас</Link>
          </li>
          <li>
            <Link to="/contacts">Контакты</Link>
          </li>   
        </ul>

        <BsCartFill  onClick={() => setOpenCart(!openCart)} className={`${styles.shopCart} ${openCart && styles.active}`}/>

          {openCart && (
              <div className={styles.cartInfo}>
                {props.orders.length <= 0 ? <p>Корзина пуста</p> : showOrders(props)}
              </div>
          )}
      </div>
    </header>
  );
};
