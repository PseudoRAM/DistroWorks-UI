import React from 'react';
// import logo from './../img/icon.png';

class Home extends React.Component {
  render () {
    return (
      <div className='timeline'>
        <div className='timeline-item' id='timeline-example-1'>
          <div className='timeline-left'>
            <a className='timeline-icon' href='#timeline-example-1' />
          </div>
          <div className='timeline-content' />
        </div>
        <div className='timeline-item' id='timeline-example-2'>
          <div className='timeline-left'>
            <a className='timeline-icon icon-lg' href='#timeline-example-2'>
              <i className='icon icon-check' />
            </a>
          </div>
          <div className='timeline-content' />
        </div>
        ...
      </div>
    );
  }
}

export default Home;
