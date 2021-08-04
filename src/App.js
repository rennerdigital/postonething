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
          <Route exact path='/' render={({ history }) =>
          <HomePage
            history={history}
            handleSignupOrLogin={this.handleSignupOrLogin} />
          }/>
          <Route exact path='/user' render={({ history }) =>
          <UserPage
            history={history}
            handleSignupOrLogin={this.handleSignupOrLogin} />
          }/>
          <Route exact path='/about' render={({ history }) =>
            <AboutPage
            history={history}
            handleSignupOrLogin={this.handleSignupOrLogin} />
          }/>
          <Route exact path='/signup' render={({ history }) =>
            <SignupPage
            history={history}
            handleSignupOrLogin={this.handleSignupOrLogin} />
          }/>
          <Route exact path='/login' render={({ history }) =>
            <LoginPage
              history={history}
              handleSignupOrLogin={this.handleSignupOrLogin} />
          }/>
            <Route exact path='/all' render={({ history }) =>
            <ThingsPage
              history={history}
              handleSignupOrLogin={this.handleSignupOrLogin} />
          }/>
        </Switch>
      </div>
    );
  }
}

export default App;
