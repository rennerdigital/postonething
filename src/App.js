import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import { Link } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import SignupPage from './pages/SignupPage/SignupPage';
import LoginPage from './pages/LoginPage/LoginPage';
import UserPage from './pages/UserPage/UserPage';
import AboutPage from './pages/AboutPage/AboutPage';
import ThingsPage from './pages/ThingsPage/ThingsPage';
import userService from './utils/userService';

class App extends Component {
  constructor () {
    super();
    this.state = {
      
      user: userService.getUser()
    };
  }

  handleLogout = () => {
    userService.logout();
    this.setState({ user: null });
  }

  handleSignupOrLogin = () => {
    this.setState({user: userService.getUser()});
  }

  render() {
    return (
      <div className="App">
        <header className='header-footer'>
          {/* <Link to='/'>RetroChat.exe</Link> */}
        </header>
        <Switch>
          <Route exact path='/' render={() =>
          <HomePage />
          }/>
          <Route exact path='/user' render={() =>
          <UserPage />
          }/>
          <Route exact path='/about' render={() =>
            <AboutPage />
          }/>
          <Route exact path='/signup' render={() =>
            <SignupPage />
          }/>
          <Route exact path='/login' render={() =>
            <LoginPage />
          }/>
            <Route exact path='/all' render={() =>
            <ThingsPage />
          }/>
        </Switch>
      </div>
    );
  }
}

export default App;
