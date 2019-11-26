/* eslint-disable react/prefer-stateless-function */
import React, { PureComponent } from 'react';
import style from './Manipulation.module.css';
import news from '../../assets/news.json';

export default class Manipulation extends PureComponent {
  state = { posts: [] };

  render() {
    return (
      <div className={style.container}>
        <button className={style.button} type="button">
          All Posts
        </button>
        <button className={style.button} type="button">
          Manipulation
        </button>
        <button className={style.button} type="button">
          SIO
        </button>
      </div>
    );
  }
}
