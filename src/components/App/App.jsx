import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import HeaderNav from '../HeaderNav/HeaderNav';

import MainPage from '../../pages/MainPage/MainPage';
import ManipulationSecurity from '../../pages/ManipulationSecurity/ManipulationSecurity';
import UsefulLiterature from '../../pages/UsefulLiterature/UsefulLiterature';
// import PetPage from '../../pages/PetPage/PetPage';

import styles from './App.module.css';
import Header from '../../pages/Header/Header';
import Manipulation from '../../pages/Manipulation/Manipulation';

const App = () => {
  return (
    <div className={styles.app}>
      <Header />
      <HeaderNav />
      <Switch>
        <Route path="/" component={MainPage} exact />
        <Route path="/literature" component={UsefulLiterature} />
        <Route path="/sequrity" component={ManipulationSecurity} />
        <Route path="/manipulation" component={Manipulation} />
        <Redirect to="/" component={MainPage} />
      </Switch>
    </div>
  );
};

export default App;
