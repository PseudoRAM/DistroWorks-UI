import React from 'react';
import axios from 'axios';
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

const BusinessName = styled.div`
  text-transform: capitalize;
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
                  <div class="form-group">
                    <div class="col-3">
                      <label class="form-label" for="pi-4">Job Start Date</label>
                    </div>
                    <div class="col-9">
                      <input class="form-input" id="pi-4" type="date" placeholder="Start Date">
                    </div>
                  </div>
                  <div class="form-group">
                    <div class="col-3">
                      <label class="form-label" for="pi-5">Job End Date</label>
                    </div>
                    <div class="col-9">
                      <input class="form-input" id="pi-5" type="date" placeholder="End Date (optional)">
                    </div>
                  </div>
                </form>`;
};

const generateCard = (
  name,
  title,
  hasMenu,
  body,
  styles = {},
  pos = 0,
  func = null
) => {
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
              <a
                href='#dropdowns'
                onClick={() => {
                  func(pos);
                }}
              >
                Delete
              </a>
            </li>
          </CardMoreHolder>
        </More>
      ) : (
        ''
      )}
      <div className='card-header'>
        <BusinessName className='card-title h5'>{name}</BusinessName>
        <CardPosition className='card-subtitle'>{title}</CardPosition>
      </div>
      <BodyHolder className='card-body'>{body}</BodyHolder>
    </Card>
  );
};

const convertDateToStr = date => {
  if (date === '') return '';
  const d = new Date(date);
  return `${utils.getMonth(d.getMonth())} ${d.getFullYear()}`;
};

class Dashboard extends React.Component {
  constructor (props) {
    super(props);
    this.state = { expCards: null };
    this.getCards = this.getCards.bind(this);
    this.positionAdd = this.positionAdd.bind(this);
    this.fetchExpDetails = this.fetchExpDetails.bind(this);
    this.removeCard = this.removeCard.bind(this);
  }
  componentDidMount () {
    this.fetchExpDetails();
  }
  removeCard (pos) {
    const self = this;
    axios
      .post(
        'http://104.248.214.65:5001/experience/remove',
        { pos_id: pos },
        {
          headers: {
            'Content-Type': 'application/json'
          }
        }
      )
      .then(function (response) {
        if (response.data.status.includes('success')) {
          self.fetchExpDetails();
        }
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }
  fetchExpDetails () {
    const self = this;
    axios
      .post(
        'http://104.248.214.65:5001/experience/list',
        { user_id: utils.getDetails('id') },
        {
          headers: {
            'Content-Type': 'application/json'
          }
        }
      )
      .then(function (response) {
        // handle success
        if (response.data.result !== undefined) {
          self.getCards(response.data.result.length, response.data.result);

          // self.props.history.push('/dashboard');
        } else {
          alert('An issue occured');
        }
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }

  getCards (amount = null, data = null) {
    if (!amount) {
      this.setState({
        expCards: (
          <EmptyHolder className='empty'>
            <div className='empty-icon'>
              <i className='icon icon-plus' />
            </div>
            <p className='empty-title h5'>You have no listed work experience</p>
            <p className='empty-subtitle'>
              Click the button to enter work experience.
            </p>
          </EmptyHolder>
        )
      });
    } else {
      const cards = [];
      for (let i = 0; i < amount; i++) {
        cards.push(
          generateCard(
            data[i][8],
            <div>
              {data[i][3]}
              <br />({data[i][5]} - {data[i][6] === '' ? 'Present' : data[i][6]}
              )
            </div>,
            true,
            data[i][4],
            {},
            data[i][0],
            this.removeCard
          )
        );
      }
      this.setState({ expCards: cards });
    }
  }
  positionAdd () {
    const self = this;
    document.getElementById('modal-f-b1').classList.add('loading');
    const data = JSON.stringify({
      user_id: utils.getDetails('id'),
      bus_name: document.getElementById('pi-1').value,
      pos_title: document.getElementById('pi-2').value,
      pos_desc: document.getElementById('pi-3').value,
      start: convertDateToStr(document.getElementById('pi-4').value),
      end: convertDateToStr(document.getElementById('pi-5').value)
    });
    axios
      .post('http://104.248.214.65:5001/experience/add', data, {
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(function (response) {
        // handle success
        if (response.data.status.includes('success')) {
          document.getElementById('modal-f-b1').classList.remove('loading');
          utils.closeModal();
          self.fetchExpDetails();

          // self.props.history.push('/dashboard');
        } else {
          alert('Account details are invalid');
        }
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }
  render () {
    return (
      <div>
        <NavMenu />
        <Title>Dashboard Overview</Title>
        <div className='container grid-lg'>
          <div className='columns'>
            <div className='column col-8 col-sm-12'>
              <CardsHolder>{this.state.expCards}</CardsHolder>
              <button
                className='btn btn-primary'
                style={{ width: '80%', margin: '10px 10%' }}
                onClick={() => {
                  utils.openModal(
                    'Position Add',
                    experienceForm(),
                    'Save',
                    this.positionAdd
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
