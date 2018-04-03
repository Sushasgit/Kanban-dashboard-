import React from 'react';
import { Router, Route } from 'react-router-dom';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { history } from './history';
import { store } from './store';
import HomePageContainer from './containers/HomePageContainer/HomePageContainer';
import SignUpPage from './components/SignUpPage/SignUpPage';
import SignInPage from './components/SignInPage/SignInPage';
import DashboardPageContainer from './containers/DashboardPageContainer/DashboardPageContainer';
import RequireAuth from './containers/RequireAuth/RequireAuth';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import * as constants from '../src/constants/constants';

const token = window.localStorage.getItem('id');

if (token) {
  store.dispatch({ type: constants.LOGIN_USER_SUCCESS });
  history.push(`/dashboard/${token}`);
}

render(
  <Provider store={store}>
    <Router history={history} onUpdate={() => window.scrollTo(0, 0)}>
      <div>
        <Header/>
        <Route exact path="/" component={HomePageContainer} />
        <Route exact path="/signup" component={SignUpPage} />
        <Route exact path="/signin" component={SignInPage} />
        <Route path="/dashboard/:userID" component={RequireAuth(DashboardPageContainer)} />
        <Footer/>
      </div>
  </Router>
  </Provider>,
  document.getElementById('root'),
);

