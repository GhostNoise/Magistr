import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './HeaderNav.module.css';

const HeaderNav = () => (
  <ul className={styles.nav}>
    <li className={styles.nav__item}>
      <NavLink
        to="/"
        activeClassName={styles.active}
        className={styles.link}
        exact
      >
        Головна
      </NavLink>
    </li>
    <li className={styles.nav__item}>
      <NavLink
        to="/sequrity"
        activeClassName={styles.active}
        className={styles.link}
      >
        Захист від інформаційного маніпулювання
      </NavLink>
    </li>
    <li className={styles.nav__item}>
      <NavLink
        to="/literature"
        activeClassName={styles.active}
        className={styles.link}
      >
        Корисна Література
      </NavLink>
    </li>
    <li className={styles.nav__item}>
      <NavLink
        to="/manipulation"
        activeClassName={styles.active}
        className={styles.link}
      >
        Інформаційне маніпулювання
      </NavLink>
    </li>
  </ul>
);

export default HeaderNav;
