import { useState, type FC } from 'react';
import styles from './Header.module.css';
import { BsCartFill  } from "react-icons/bs";
import { Order, type IOrderProps } from '../Order/Order';
import { Link } from 'react-router-dom';
import type { IItem } from '../Item/Item';

interface IHeaderProps {
  onDelete: (item: IItem) => void;
  orders: IItem[];

}

export const Header:FC<IHeaderProps> = (props) => {
let [openCart, setOpenCart] = useState<boolean>(false)

const showOrders = (props: IHeaderProps) => {
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
