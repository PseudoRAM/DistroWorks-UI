import React from 'react';
import NavMenu from '../components/NavMenu';
import ProfileCard from '../components/ProfileCard';
import Timeline from '../components/Timeline';
import Utils from './../Utils';
import styled from 'styled-components';
const utils = new Utils();

const Card = styled.div`
  max-width: 300px;
  min-width: 45%;
  margin: 5px;
  display: inline-block;
  text-align: left;
  position: relative;
`;

const BusinessName = styled.div`
  text-transform: capitalize;
`;

const BodyHolder = styled.div`
  padding-top: 10px !important;
`;

class Search extends React.Component {
  render () {
    return (
      <div>
        <NavMenu />
        <div className='container grid-lg'>
          <div className='columns'>
            <div className='column col-5 col-sm-12'>
              <ProfileCard
                fn={utils.getDetails('fn')}
                ln={utils.getDetails('ln')}
                email={utils.getDetails('email')}
              />
            </div>

            <div className='column col-5 col-sm-12'>
              <Card
                className='card'
                style={{
                  width: '90%',
                  marginTop: 20
                }}
              >
                <div className='card-header'>
                  <BusinessName className='card-title h5'>
                    Job History
                  </BusinessName>
                </div>
                <BodyHolder className='card-body'>
                  <Timeline />
                </BodyHolder>
              </Card>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Search;
