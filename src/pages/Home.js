import React from 'react';
import NavMenu from '../components/NavMenu';
import MainHero from '../components/MainHero';

class Home extends React.Component {
  render () {
    return (
      <div>
        <NavMenu />
        <MainHero />
      </div>
    );
  }
}

export default Home;
