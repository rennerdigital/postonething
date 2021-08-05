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
      page: "post",
      post: null,
      user: userService.getUser()
    };
  }

  handleLogout = () => {
    userService.logout();
    this.setState({ user: null });
  }

  handleSignupOrLogin = () => {
    //updates user state to userService.getUser
    this.setState({user: userService.getUser()});
  }

  handlePostUpdateOrCreate = (newPost) => {
    this.setState({ post: newPost, page: "post" });
  };

  handleUpdate = () => {
    this.setState({ page: "update" });
  };
  handleCreate = () => {
    this.setState({ page: "create" });
  };
  handleDelete = () => {};

  render() {
    return (
      <div className="App">
        <header className='header-footer'>
          {/* <Link to='/'>RetroChat.exe</Link> */}
        </header>
        <Switch>
          <Route exact path='/' render={({ history }) =>
          <HomePage
            user={this.state.user}
            handleLogout={this.handleLogout}
            history={history}
            handleSignupOrLogin={this.handleSignupOrLogin} />
          }/>
          <Route exact path='/user' render={({ history }) =>
          <UserPage
            user={this.state.user}
            handleLogout={this.handleLogout}
            history={history}
            handleSignupOrLogin={this.handleSignupOrLogin} 
            handlePostUpdateOrCreate={this.handlePostUpdateOrCreate}
            handleCreate={this.handleCreate}
            handleUpdate={this.handleUpdate}
            handleDelete={this.handleDelete} />
          }/>
          <Route exact path='/about' render={({ history }) =>
            <AboutPage
            user={this.state.user}
            handleLogout={this.handleLogout}
            history={history}
            handleSignupOrLogin={this.handleSignupOrLogin} />
          }/>
          <Route exact path='/signup' render={({ history }) =>
            <SignupPage
            user={this.state.user}
            handleLogout={this.handleLogout}
            history={history}
            handleSignupOrLogin={this.handleSignupOrLogin} />
          }/>
          <Route exact path='/login' render={({ history }) =>
            <LoginPage
              user={this.state.user}
              handleLogout={this.handleLogout}
              history={history}
              handleSignupOrLogin={this.handleSignupOrLogin} />
          }/>
            <Route exact path='/all' render={({ history }) =>
            <ThingsPage
              user={this.state.user}
              handleLogout={this.handleLogout}
              history={history}
              handleSignupOrLogin={this.handleSignupOrLogin} />
          }/>
        </Switch>
      </div>
    );
  }
}

export default App;
