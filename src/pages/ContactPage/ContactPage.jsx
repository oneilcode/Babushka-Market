import styles from './ContactPage.module.css';

export const ContactPage = () => {

  return (
    <div className={styles.contacts}>
        <div className={styles.presentation}></div>    
        <h4 className={styles.title}>📞 Контакты Babushka Market</h4>
        <span>Мы всегда рады гостям, вопросам и тёплым воспоминаниям!</span>
        <div>📍 Адрес <span>г. Москва, ул. Старая Басманная, 15 (2-й этаж, дверь с витражом) </span></div>
        <div>🕒 Часы работы <span>Пн-Вс: 11:00 – 20:00</span></div>
    </div>
  );
};
