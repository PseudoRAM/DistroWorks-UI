import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HeroHolder = styled.div`
  height: calc(100vh - 62px);
  /*background: #a6a1ec !important; */
  background: url(http://104.248.214.65/e52f68e1c87ce1e4009b17b8d1c0d622.jpg) !important;
  text-align: center;
  background-size: cover !important; /* <------ */
  background-repeat: no-repeat !important;
  background-position: center center !important;
`;

const SearchGroup = styled.div`
  max-width: 500px;
  margin: 0 auto;
  border-color: #333;
`;

const HeroBody = styled.div`
  z-index: 2;
`;

const Layer = styled.div`
  background-color: rgba(36, 36, 36, 0.2);
  position: absolute;
  top: 62px;
  left: 0;
  width: 100%;
  height: calc(100vh - 62px);
`;

const SerchButton = styled.button`
  background: #252525;
  color: #fff;
  border-color: #333;

  :hover {
    background: #555;
    color: #fff;
    border-color: #333;
  }
`;

class MainHero extends React.Component {
  render () {
    return (
      <HeroHolder className='hero hero-lg bg-primary'>
        <Layer />
        <HeroBody className='hero-body'>
          <h1>Share Your Experience</h1>
          <p>Discover your employees.</p>
          <SearchGroup className='input-group'>
            <input
              className='form-input input-lg'
              type='text'
              placeholder='Search key'
            />{' '}
            <Link to='/search'>
              <SerchButton className='btn input-group-btn btn-lg'>
                <i className='icon icon-search' />
              </SerchButton>
            </Link>
          </SearchGroup>
        </HeroBody>
      </HeroHolder>
    );
  }
}

export default MainHero;
