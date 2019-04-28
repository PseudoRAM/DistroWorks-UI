import React from 'react';
import NavMenu from '../components/NavMenu';
import styled from 'styled-components';
import Utils from './../Utils';
const utils = new Utils();

const Title = styled.h2`
  margin-left: 25px;
  margin-top: 10px;
`;

const EmptyHolder = styled.div`
  background: #fff !important;
`;

const Card = styled.div`
  border: 0;
  border-radius: 0.1rem;
  box-shadow: 0 0.05rem 0.2rem rgba(48, 55, 66, 0.3);
  padding: 0.8rem;
  margin-bottom: 10px;
  position: relative;
`;

const ConnectedDate = styled.small`
  padding-left: 10px;
`;

const CardMoreHolder = styled.ul`
  left: -140px !important;
`;

const More = styled.div`
  position: absolute;
  top: 5px;
  right: 8px;
`;

const PreviousReview = styled.p`
  font-style: italic;
  color: #777;
  padding-top: 15px;

  & span {
    font-style: normal;
    font-size: 12px;
  }
`;

const getAvail = (amount = null) => {
  if (amount !== null) {
    const list = [];
    list.push(
      createRevieweeCard(
        'Elin',
        'Wicks',
        'https://content-static.upwork.com/uploads/2014/10/01073427/profilephoto1.jpg',
        'UI Developer',
        'Telstra',
        '23 June 2019',
        'Elin is an amazing colleague to work with. She has the right mantality and did a great job developing p2p technology in the telco.',
        '24 June 2019'
      )
    );
    list.push(
      createRevieweeCard(
        'Charis',
        'Coles',
        'https://ionenewsone.files.wordpress.com/2016/02/1455821428328.png',
        'Solution Designer',
        'Telstra',
        '27 April 2019',
        'Charis has been an amazing asset to the Accenture team in Sydney. He has worked amazingly in the 360 automation team.',
        '29 April 2019'
      )
    );
    list.push(
      createRevieweeCard(
        'Evelyn',
        'Thomas',
        'http://events-ecsel.eu/images/a4d352e56bfab79d60c482f07f9198d6.jpg',
        'Solution Designer',
        'Westpac'
      )
    );
    return list;
  } else {
    return (
      <EmptyHolder className='empty'>
        <div className='empty-icon'>
          <i className='icon icon-message' />
        </div>
        <p className='empty-title h5'>You have no connections to review</p>
        <p className='empty-subtitle'>
          Add employees via the key management page.
        </p>
      </EmptyHolder>
    );
  }
};

const recommendForm = () => {
  return `<form class="form-horizontal" action="#forms">

    <div class="form-group">
       <div class="col-3 col-sm-12">
         <label class="form-label" for="reco">Recommendation</label>
       </div>
       <div class="col-9 col-sm-12">
         <textarea class="form-input" id="reco" placeholder="Recommendation message" rows="4"></textarea>
       </div>
     </div>
                </form>`;
};

const createRevieweeCard = (
  firstName,
  lastName,
  profile,
  postion,
  business,
  connectedOn,
  review = null,
  reviewedDate = null
) => {
  return (
    <Card className='tile tile-centered'>
      <div className='tile-icon'>
        <div className='example-tile-icon'>
          <figure className='avatar avatar-lg'>
            <img src={profile} alt='Avatar' />
          </figure>
        </div>
      </div>
      <div className='tile-content'>
        <div className='tile-title'>
          {firstName} {lastName}
        </div>
        <small className='tile-subtitle'>
          {postion} at {business}
        </small>
        <ConnectedDate className='tile-subtitle text-gray'>
          {connectedOn}
        </ConnectedDate>
        {review === null ? null : (
          <PreviousReview>
            &#8220;{review}&#8220;
            <span> [{reviewedDate}]</span>
          </PreviousReview>
        )}
      </div>
      <More className='dropdown'>
        <a className='btn btn-link dropdown-toggle' tabIndex='0'>
          <i className='icon icon-more-vert' />
        </a>

        <CardMoreHolder className='menu'>
          <li
            className='menu-item'
            style={{ display: `${review === null ? 'none' : 'block'}` }}
          >
            <a
              href='#dropdowns'
              onClick={() => {
                utils.openModal(
                  'Update Recommendation',
                  recommendForm(),
                  'Submit',
                  null
                );
              }}
            >
              Update Recommendation
            </a>
          </li>
          <li
            className='menu-item'
            style={{ display: `${review === null ? 'block' : 'none'}` }}
          >
            <a
              href='#dropdowns'
              onClick={() => {
                utils.openModal(
                  'Create Recommendation',
                  recommendForm(),
                  'Submit',
                  null
                );
              }}
            >
              Create Recommendation
            </a>
          </li>
        </CardMoreHolder>
      </More>
    </Card>
  );
};

class ReviewManage extends React.Component {
  /* constructor (props) {
    super(props);
} */

  render () {
    return (
      <div>
        <NavMenu />
        <Title>Recommendation Manager</Title>
        <div className='container grid-lg'>
          <div className='columns'>
            <div className='column col-3 hide-sm'>
              <ul className='menu'>
                <h5>Filters</h5>
                <li className='menu-item'>
                  <label className='form-checkbox'>
                    <input type='checkbox' defaultChecked />
                    <i className='form-icon' /> Already Reviewed
                  </label>
                </li>
              </ul>
            </div>

            <div className='column col-9 col-sm-12'>
              <div className='input-group' style={{ paddingBottom: 20 }}>
                <span className='input-group-addon'>Add Employee</span>
                <input
                  className='form-input'
                  type='text'
                  placeholder='Employee Code'
                />
                <button className='btn btn-primary input-group-btn'>
                  Submit
                </button>
              </div>
              {getAvail(3)}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ReviewManage;
