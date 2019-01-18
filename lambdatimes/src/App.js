import React, { Component } from 'react';
import TopBar from './components/TopBar';
import Header from './components/Header';
import Content from './components/Content/Content';
import authenticate from './components/Authentication/authenticate'
import Login from './components/Login'

class App extends Component {
  logout() {
    localStorage.removeItem('user');
    window.location.reload();
  }

  render() {
    return (
      <div className="App">
        <TopBar logout={this.logout}/>
        <Header />
        <Content />
      </div>
    );
  } 
}

export default authenticate(App)(Login);
