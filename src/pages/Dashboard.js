import React from 'react';
import NavMenu from '../components/NavMenu';
import Timeline from '../components/Timeline';
import styled from 'styled-components';
import Utils from './../Utils';
const utils = new Utils();

const Card = styled.div`
  max-width: 300px;
  min-width: 45%;
  margin: 5px;
  display: inline-block;
  text-align: left;
  position: relative;
`;

const CardPosition = styled.div`
  color: #333 !important;
  font-size: 14px;
`;

const CardMoreHolder = styled.ul`
  left: -10px !important;
`;

const More = styled.div`
  position: absolute;
  top: 5px;
  right: 8px;
`;

const CardsHolder = styled.div`
  display: block;
  text-align: center;
`;

const Title = styled.h2`
  margin-left: 25px;
  margin-top: 10px;
`;

const BodyHolder = styled.div`
  padding-top: 10px !important;
`;

const EmptyHolder = styled.div`
  background: #fff !important;
`;

const experienceForm = () => {
  return `<form class="form-horizontal" action="#forms">
                  <div class="form-group">
                    <div class="col-3 col-sm-12">
                      <label class="form-label" for=""pi-1">Business Name</label>
                    </div>
                    <div class="col-9 col-sm-12">
                      <input class="form-input" id="pi-1" type="text" placeholder="Business Name">
                    </div>
                  </div>
                  <div class="form-group">
                    <div class="col-3 col-sm-12">
                      <label class="form-label" for=""pi-2">Job Position</label>
                    </div>
                    <div class="col-9 col-sm-12">
                      <input class="form-input" id="pi-2" type="text" placeholder="Job Position">
                    </div>
                  </div>
                  <div class="form-group">
                    <div class="col-3 col-sm-12">
                      <label class="form-label" for="pi-3">Job Descriotion</label>
                    </div>
                    <div class="col-9 col-sm-12">
                      <textarea class="form-input" id="pi-3" placeholder="Job Descriotion (optional)" rows="2"></textarea>
                    </div>
                  </div>
                </form>`;
};

const getCards = (amount = null) => {
  if (!amount) {
    return (
      <EmptyHolder className='empty'>
        <div className='empty-icon'>
          <i className='icon icon-plus' />
        </div>
        <p className='empty-title h5'>You have no listed work experience</p>
        <p className='empty-subtitle'>
          Click the button to enter work experience.
        </p>
      </EmptyHolder>
    );
  } else {
    const cards = [];
    for (let i = 0; i < amount; i++) {
      cards.push(
        generateCard(
          'Apple',
          <div>
            Software Developer
            <br />
            (Mar 2019 - Dec 2019)
          </div>,
          true,
          'Worked in consultant sector, developing inter-planitary military'
        )
      );
    }
    return cards;
  }
};

const generateCard = (name, title, hasMenu, body, styles = {}) => {
  return (
    <Card className='card' style={styles}>
      {hasMenu ? (
        <More className='dropdown'>
          <a className='btn btn-link dropdown-toggle' tabIndex='0'>
            <i className='icon icon-more-vert' />
          </a>

          <CardMoreHolder className='menu'>
            <li className='menu-item'>
              <a href='#dropdowns'>Edit</a>
            </li>
            <li className='menu-item'>
              <a href='#dropdowns'>Delete</a>
            </li>
          </CardMoreHolder>
        </More>
      ) : (
        ''
      )}
      <div className='card-header'>
        <div className='card-title h5'>{name}</div>
        <CardPosition className='card-subtitle'>{title}</CardPosition>
      </div>
      <BodyHolder className='card-body'>{body}</BodyHolder>
    </Card>
  );
};

class Dashboard extends React.Component {
  render () {
    return (
      <div>
        <NavMenu />
        <Title>Dashboard Overview</Title>
        <div className='container grid-lg'>
          <div className='columns'>
            <div className='column col-8 col-sm-12'>
              <CardsHolder>{getCards(2)}</CardsHolder>
              <button
                className='btn btn-primary'
                style={{ width: '80%', margin: '10px 10%' }}
                onClick={() => {
                  utils.openModal(
                    'Position Add',
                    experienceForm(),
                    'Save',
                    null
                  );
                }}
              >
                Add Position
              </button>
            </div>
            <div className='column col-4 hide-sm'>
              {generateCard('Job History', null, false, <Timeline />, {
                width: '90%'
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
