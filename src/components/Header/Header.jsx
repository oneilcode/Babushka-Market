import styles from './Header.module.css';

export const Header = () => {
  return (
    <header className={styles.header}>
      <div>
        <span className={styles.logo}>MeowShop</span>
        <ul className={styles.nav}>
          <li>Про нас</li>
          <li>Контакты</li>
          <li>Кабинет</li>
        </ul>
      </div>
      <div className={styles.presentation}></div>
    </header>
  );
};
