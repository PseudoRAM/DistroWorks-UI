import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Profile from './pages/Profile';
import Dashboard from './pages/Dashboard';
import ReviewManage from './pages/ReviewManage';
import KeysManage from './pages/KeysManage';
import Search from './pages/Search';
import Main from './pages/Main';

class App extends Component {
  render () {
    document.write('<base href="' + document.location + '" />');

    return (
      <div className='App'>
        <BrowserRouter>
          <div>
            <Switch>
              <Route exact path='/about' component={About} />
              <Route exact path='/profile' component={Profile} />
              <Route exact path='/dashboard' component={Dashboard} />
              <Route exact path='/manage-reviews' component={ReviewManage} />
              <Route exact path='/manage-keys' component={KeysManage} />
              <Route exact path='/search' component={Search} />
              <Route path='/' render={props => <Home {...props} />} />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

const Messages = () => <Main current={'messages'} />;

export default App;
