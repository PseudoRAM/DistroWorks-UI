import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Profile from './pages/Profile';
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
              <Route exact path='/messages' component={Messages} />
              <Route path='/' component={Home} />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

const Messages = () => <Main current={'messages'} />;

export default App;
