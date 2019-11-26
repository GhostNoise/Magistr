import React from 'react';
import styles from './Header.module.css';

const Header = () => {
  return (
    <div className={styles.container}>
      <p>Магістерська дисертація курсанта Ігоря Дзюбка</p>
      <h1>
        ІНФОРМАЦІЙНО-АНАЛІТИЧНА СИСТЕМА З ВПЛИВУ ПОЛІТИЧНИХ ПАРТІЙ ТА
        ГРОМАДСЬКИХ ОРГАНІЗАЦІЙ НА ЗАБЕЗПЕЧЕННЯ ІНФОРМАЦІЙНОЇ БЕЗПЕКИ
      </h1>
    </div>
  );
};

export default Header;
