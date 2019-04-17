import React from 'react';
import { Rating } from 'semantic-ui-react';
import logo from './../img/icon.png';

class Home extends React.Component {
  render () {
    return (
      <div>
        <img
          alt=''
          src={logo}
          width='92'
          height='auto'
          className='d-inline-block align-middle'
        />
        <Rating icon='star' defaultRating={4} maxRating={5} />
      </div>
    );
  }
}

export default Home;
