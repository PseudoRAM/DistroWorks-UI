import React from 'react';
import NavMenu from '../components/NavMenu';
import styled from 'styled-components';

const KeyForm = styled.div`
  max-width: 700px;
  margin: 0 auto;
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

const InfoHelp = styled.label`
  display: inline-block;
  margin-left: 10px;
`;

const Panel = styled.div`
  margin-top: 40px;
`;

const createReviewerCard = (
  firstName,
  lastName,
  profile,
  postion,
  business,
  connectedOn
) => {
  return (
    <Card className='tile tile-centered'>
      <div className='tile-icon'>
        <div className='example-tile-icon'>
          <figure className='avatar avatar-lg'>
            <img
              src='https://content-static.upwork.com/uploads/2014/10/01073427/profilephoto1.jpg'
              alt='Avatar'
            />
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
      </div>
      <More className='dropdown'>
        <a className='btn btn-link dropdown-toggle' tabIndex='0'>
          <i className='icon icon-more-vert' />
        </a>

        <CardMoreHolder className='menu'>
          <li className='menu-item'>
            <a href='#dropdowns'>Revoke</a>
          </li>
        </CardMoreHolder>
      </More>
    </Card>
  );
};

const createReviewerHash = (hash, connectedOn) => {
  return (
    <Card className='tile tile-centered'>
      <div className='tile-content'>
        <div className='tile-title'>{hash}</div>

        <ConnectedDate className='tile-subtitle text-gray'>
          {connectedOn}
        </ConnectedDate>
      </div>
      <More className='dropdown'>
        <a className='btn btn-link dropdown-toggle' tabIndex='0'>
          <i className='icon icon-more-vert' />
        </a>

        <CardMoreHolder className='menu'>
          <li className='menu-item'>
            <a href='#dropdowns'>Delete</a>
          </li>
        </CardMoreHolder>
      </More>
    </Card>
  );
};

class KeysManage extends React.Component {
  constructor (props) {
    super(props);
    this.state = { showPrivate: false };
  }
  render () {
    return (
      <div>
        <NavMenu />
        <KeyForm className='form-horizontal' action='#forms'>
          <div className='form-group'>
            <div className='col-3 col-sm-12'>
              <div className='popover popover-right'>
                <i className='icon icon-flag' />
                <div className='popover-container'>
                  <div className='card'>
                    <div className='card-header'>Public Key</div>
                    <div className='card-body'>
                      Copy and share it to your potential employer to show them
                      your work history and recommendations.
                    </div>
                  </div>
                </div>
                <InfoHelp className='form-label' htmlFor='pub-key'>
                  Public Key
                </InfoHelp>
              </div>
            </div>
            <div className='col-9 col-sm-12'>
              <input
                className='form-input'
                id='pub-key'
                type='text'
                value='AMSDHFG52771KJASD82'
                disabled
              />
            </div>
          </div>
          <div className='form-group'>
            <div className='col-3 col-sm-12'>
              <div className='popover popover-right'>
                <i className='icon icon-flag' />
                <div className='popover-container'>
                  <div className='card'>
                    <div className='card-header'>Private Key</div>
                    <div className='card-body'>Your Ethereum identifier.</div>
                  </div>
                </div>
              </div>
              <InfoHelp className='form-label' htmlFor='priv-key'>
                Private Key
              </InfoHelp>
            </div>
            <div className='col-9 col-sm-12'>
              <div className='input-group'>
                <label className='form-switch'>
                  <input
                    type='checkbox'
                    onChange={() =>
                      this.setState({ showPrivate: !this.state.showPrivate })
                    }
                  />
                  <i className='form-icon' />
                </label>
                <input
                  className='form-input'
                  id='priv-key'
                  type='text'
                  value={
                    this.state.showPrivate
                      ? 'FCGFFGDFHGHGHJH432'
                      : '******************'
                  }
                  disabled
                />
              </div>
            </div>
          </div>
          <Panel className='panel'>
            <div className='panel-header'>
              <div className='panel-title h6'>
                <div className='popover popover-right'>
                  <i className='icon icon-flag' />
                  <div className='popover-container'>
                    <div className='card'>
                      <div className='card-header'>Reviewers</div>
                      <div className='card-body'>
                        Users who appear in the review list have been connected
                        to your account as a reviewer using your Employee Code.
                        The Employee Code is generated by you as many times as
                        you want, can be used only once to link a reviewer and
                        can be revoked at any time.
                      </div>
                    </div>
                  </div>
                  <InfoHelp className='form-label' htmlFor='pub-key'>
                    Reviewers
                  </InfoHelp>
                </div>
              </div>
            </div>
            <div className='panel-body'>
              'Elin',
              {createReviewerCard(
                'Elin',
                'Wicks',
                'https://content-static.upwork.com/uploads/2014/10/01073427/profilephoto1.jpg',
                'UI Developer',
                'Telstra',
                '25 June 2019'
              )}
              {createReviewerHash('SDHJGF527KADFH72', '3 Jan 2019')}
            </div>
            <div className='panel-footer'>
              <button className='btn btn-primary btn-block'>
                Generate Employee Code
              </button>
            </div>
          </Panel>
        </KeyForm>
      </div>
    );
  }
}

export default KeysManage;
